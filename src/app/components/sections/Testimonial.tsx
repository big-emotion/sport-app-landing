import { useTranslations } from "next-intl";

export function Testimonial() {
    const t = useTranslations("testimonials");

    return (
        <div className="px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-black mt-16">
                {t("title")}
            </h2>

            <div className="flex flex-col justify-center items-center">
                <div className="relative max-w-xl w-full text-center text-gray-700 px-4 sm:px-6 lg:px-8">
                    {/* Guillemets ouvrants */}
                    <span className="absolute left-[-20px] top-[-30px] sm:left-[-35px] sm:top-[-40px] text-[100px] sm:text-[150px] lg:text-[200px] text-gray-200 select-none leading-none">
            “
          </span>

                    <p className="text-lg sm:text-xl leading-relaxed">
                        {t("subtitle")}
                    </p>

                    {/* Guillemets fermants */}
                    <span className="absolute right-[-10px] bottom-[-80px] sm:right-[10px] sm:bottom-[-110px] lg:bottom-[-150px] text-[100px] sm:text-[150px] lg:text-[200px] text-gray-200 select-none leading-none">
            ”
          </span>
                </div>

                <div className="w-[120px] h-[120px] bg-yellow-400 mt-12 sm:mt-16 rounded-full flex items-center justify-center">
                    img
                </div>
                <p className="text-black font-bold text-lg mt-5">{t("name")}</p>
            </div>
        </div>
    );
}
