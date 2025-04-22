import { useTranslations } from "next-intl";

interface FeatureCardProps {
    titleKey: string;
    subtitleKey: string;
}

export function FeatureCard({ titleKey, subtitleKey }: FeatureCardProps) {
    const t = useTranslations('features');

    return (
        <div className="w-[288px] sm:w-[250px] md:w-[300px] bg-white rounded-3xl text-center flex items-center flex-col
        justify-center gap-3 py-12">
            <div className="bg-yellow-400 w-20 h-20">img</div>
            <h3 className="font-bold text-2xl text-black">{t(titleKey)}</h3>
            <p className="text-base text-gray-700">{t(subtitleKey)}</p>
        </div>
    );
}
