// components/BurnoutPoster.tsx
"use client";

import Image from "next/image";

export function BurnoutPoster() {
    return (
        <div className="relative w-[320px] sm:w-[360px] md:w-[420px] aspect-[3/4] rounded-lg overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
            {/* fundo roxo texturizado */}
            <Image
                src="/landing/background.png"
                alt="Fundo roxo"
                fill
                className="object-cover"
                priority
            />

            {/* texto topo: psicólogo */}
            <p className="absolute top-5 left-6 text-[12px] text-amber-200">
                psicólogo Joelmy Lins
            </p>

            {/* lâmpada (fio + luminária) */}
            <div className="absolute  left-1/2 -translate-x-1/2 flex flex-col items-center">
                {/* fio mais curto */}

                <Image
                    src="/landing/lampada.png"
                    alt="Lâmpada pendente"
                    width={80}
                    height={120}
                />
            </div>

            {/* Título central (um pouco mais baixo que antes) */}
            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 text-center px-6">
                <h1 className="text-4xl md:text-[42px] leading-tight font-semibold">
                    <span className="whitespace-nowrap">Do Burnout</span>
                    <br />
                    <span className="inline-block mt-1">à esperança</span>
                </h1>

            </div>

            {/* mesa + cadeira mais embaixo */}
            <div className="absolute left-1/2 top-3/5 -translate-x-1/2 -translate-y-1/2 w-[92%] relative">
                {/* mesa centralizada */}
                <div className="mx-auto w-[40%]">
                    <Image
                        src="/landing/mesa.png"
                        alt="Mesa com vaso"
                        width={250}
                        height={195}

                    />
                </div>

                {/* cadeira à direita da mesa */}
                <div className="absolute right-5 bottom-0 w-[20%]">
                    <Image
                        src="/landing/cadeira.png"
                        alt="Cadeira"
                        width={260}
                        height={260}

                    />
                </div>
            </div>



            {/* texto embaixo */}
            {/* texto embaixo – canto inferior esquerdo */}
            <div className="absolute left-6 bottom-10 w-[62%] text-[12px] leading-relaxed text-zinc-50">
                <p>
                    Um estudo sobre a{" "}<strong>sociedade</strong><br/>
                    <span className="font-semibold"> do cansaço</span>. Para entender
                    <br />
                     como o excesso de
                    <br />
                    produtividade e<br/> autoexploração geram o
                    <br />
                    <span className="font-semibold">esgotamento mental</span>.
                </p>
            </div>


            {/* capa do livro – canto inferior direito */}
            <div className="absolute bottom-5 right-5 w-[18%]">
                <Image
                    src="/landing/livro.png"
                    alt="Capa do livro A Sociedade do Cansaço"
                    width={90}
                    height={140}
                    className="w-full h-auto drop-shadow-[10px_0_18px_rgba(0,0,0,0.8)]"
                />
            </div>


        </div>
    );
}
