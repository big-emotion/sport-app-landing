import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextRequest, NextResponse } from 'next/server';
import process from 'node:process';
import { z } from 'zod';

import { ERROR_CODES } from '../../../utils/constants';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const EmailSchema = z.string().email();

const isMailchimpError = (
  error: unknown
): error is { response?: { body?: { title?: string }; status?: number } } => {
  return typeof error === 'object' && error !== null && 'response' in error;
};

const getStatusCodeFromError = (mailchimpError: {
  response?: { status?: number };
}): number => {
  if (typeof mailchimpError.response?.status !== 'number') {
    return 500;
  }

  const responseStatus = mailchimpError.response.status;

  return responseStatus >= 400 ? responseStatus : 500;
};

const handleMailchimpError = (
  error: unknown
): {
  errorCode: string;
  status: number;
} => {
  let errorCode = ERROR_CODES.SUBSCRIPTION_FAILED;
  let status = 500;

  if (isMailchimpError(error)) {
    const errorBody = error.response?.body ?? {};
    // eslint-disable-next-line no-undef
    console.error('Mailchimp API Error:', errorBody);

    if (errorBody.title === 'Member Exists') {
      errorCode = ERROR_CODES.EMAIL_ALREADY_SUBSCRIBED;
      status = 400;
    } else {
      status = getStatusCodeFromError(error);
    }
  } else {
    // eslint-disable-next-line no-undef
    console.error('Non-Mailchimp Error during subscription:', error);
  }

  return { errorCode, status };
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { email } = await request.json();

    const validationResult = EmailSchema.safeParse(email);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: ERROR_CODES.INVALID_EMAIL },
        { status: 400 }
      );
    }

    const listId = process.env.MAILCHIMP_AUDIENCE_ID;
    if (typeof listId !== 'string' || listId.length === 0) {
      // eslint-disable-next-line no-undef
      console.error('MAILCHIMP_AUDIENCE_ID is not set or is invalid.');

      return NextResponse.json(
        { error: ERROR_CODES.SERVER_CONFIG_ERROR },
        { status: 500 }
      );
    }

    await mailchimp.lists.addListMember(listId, {
      email_address: validationResult.data,
      status: 'pending',
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error: unknown) {
    const { errorCode, status } = handleMailchimpError(error);

    return NextResponse.json({ error: errorCode }, { status });
  }
}
