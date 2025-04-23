'use client';

import {useTranslations} from "next-intl";

export default function Newsletter() {
    const t = useTranslations('newsletter')
    return (
        <div>
            <h2>{t('title')}</h2>
        </div>
    )
}