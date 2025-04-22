'use client';
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";


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


export function Testimonial() {
    const t = useTranslations("testimonials");


    return (
        <div className="px-4">
            <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-black mt-16"
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                {t("title")}
            </motion.h2>


            <div className="flex flex-col justify-center items-center">
                <motion.div
                    className="relative max-w-xl w-full text-center text-gray-700 px-4 sm:px-6 lg:px-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Guillemets ouvrants */}
                    <motion.span
                        className="absolute left-[-20px] top-[-30px] sm:left-[-35px] sm:top-[-40px] text-[100px] sm:text-[150px] lg:text-[200px] text-gray-200 select-none leading-none"
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        “
                    </motion.span>


                    <motion.p
                        className="text-lg sm:text-xl leading-relaxed"
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {t("subtitle")}
                    </motion.p>


                    {/* Guillemets fermants */}
                    <motion.span
                        className="absolute right-[-10px] bottom-[-80px] sm:right-[10px] sm:bottom-[-110px] lg:bottom-[-150px] text-[100px] sm:text-[150px] lg:text-[200px] text-gray-200 select-none leading-none"
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        ”
                    </motion.span>
                </motion.div>


                <motion.div
                    className="w-[120px] h-[120px] bg-yellow-400 mt-12 sm:mt-16 rounded-full flex items-center justify-center"
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    img
                </motion.div>


                <motion.p
                    className="text-black font-bold text-lg mt-5"
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    {t("name")}
                </motion.p>
            </div>
        </div>
    );
}



