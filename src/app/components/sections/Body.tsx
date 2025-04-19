import {useTranslations} from "next-intl";
import {FeatureCard} from "@/src/app/components/ui/FeatureCard";

export function Body() {
    const t = useTranslations('features');

    return (
        <div className="flex flex-col bg-amber-50 h-[10000px] m-8 sm:m-10 lg:m-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-black">{t('title')}</h2>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-16 gap-8">
                    <FeatureCard titleKey="localisation" subtitleKey="subtitle_localisation" />
                    <FeatureCard titleKey="sport" subtitleKey="subtitle_sport" />
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-16 gap-8">
                    <FeatureCard titleKey="share" subtitleKey="subtitle_share" />
                    <FeatureCard titleKey="social" subtitleKey="subtitle_social" />
                </div>
            </div>
        </div>
    );
}
