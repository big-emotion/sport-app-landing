'use client'

import { useTranslations } from "next-intl";
import { FeatureCard } from "@/src/app/components/ui/FeatureCard";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function Body() {
    const t = useTranslations('features');

    return (
        <div className="flex flex-col bg-amber-50 h-auto m-8 sm:m-10 lg:m-20 h-[10000px]" >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-black">
                {t('title')}
            </h2>

            <div className="flex flex-col sm:gap-16 gap-8">
                {/* Première ligne de cartes */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-center items-center sm:gap-16 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={item} >
                        <FeatureCard titleKey="localisation" subtitleKey="subtitle_localisation" />
                    </motion.div>
                    <motion.div variants={item} >
                        <FeatureCard titleKey="sport" subtitleKey="subtitle_sport" />
                    </motion.div>
                </motion.div>

                {/* Deuxième ligne de cartes */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-center items-center sm:gap-16 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={item} >
                        <FeatureCard titleKey="share" subtitleKey="subtitle_share" />
                    </motion.div>
                    <motion.div variants={item} >
                        <FeatureCard titleKey="social" subtitleKey="subtitle_social" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
