"use client";

import { useTranslations } from "next-intl";
import { AccessItem } from "@/src/app/components/ui/AccessItem";

export default function Advantages() {
    const t = useTranslations('advantage');

    return (
        <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-black mt-16">
                {t("title")}
            </h2>

            <div className="flex flex-col gap-10 items-center">
                {/* Ligne 1 */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <AccessItem title={t("access_title")} subtitle={t("access_subtitle")} />
                    <AccessItem title={t("commu_title")} subtitle={t("commu_subtitle")} />
                </div>

                {/* Ligne 2 */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <AccessItem title={t("discovery_title")} subtitle={t("discovery_subtitle")} />
                    <AccessItem title={t("multisport_title")} subtitle={t("multisport_subtitle")} />
                </div>
            </div>
        </div>
    );
}
