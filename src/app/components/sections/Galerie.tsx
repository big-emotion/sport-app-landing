'use client';

import {useTranslations} from "next-intl";

export default function Galerie() {
    const t = useTranslations('gallery');
    return (
        <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-black">{t('title')}</h2>
            <div className="p-10 flex flex-col lg:flex-row items-start gap-8 min-h-screen bg-white justify-center">
                {/* Bloc de gauche : téléphones */}
                <div className="flex items-end relative justify-center w-full lg:w-auto">
                    <div className="h-[300px] w-[140px] sm:h-[400px] sm:w-[200px] bg-yellow-400 z-10 rounded-2xl flex justify-center items-center">
                        tel 1
                    </div>
                    <div className="h-[320px] w-[140px] sm:h-[500px] sm:w-[200px] bg-red-500 -translate-x-6 sm:-translate-x-10 z-20 rounded-2xl flex justify-center items-center">
                        tel 2
                    </div>
                </div>

                {/* Bloc de droite : ordi + téléphone */}
                <div className="flex items-end relative justify-center w-full lg:w-auto">
                    <div className="h-[350px] w-full sm:h-[550px] sm:w-[550px] bg-purple-600 rounded-2xl flex justify-center items-center z-10">
                        ordi
                    </div>
                    <div className="h-[300px] w-[140px] sm:h-[400px] sm:w-[200px] bg-blue-400 rounded-2xl flex justify-center items-center z-20 -translate-x-10 translate-y-5 sm:-translate-x-30 sm:translate-y-20">
                        téléphone
                    </div>
                </div>
            </div>
        </div>
    );

}
