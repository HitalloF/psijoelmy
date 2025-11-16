"use client";

import { useState } from "react";

type Chapter = {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
};

const chapters: Chapter[] = [
  {
    id: 1,
    title: "A violência neuronal",
    description:
      "Como a autocobrança e o desempenho ilimitado transformam o cansaço em sofrimento psíquico.",
  },
  {
    id: 2,
    title: "Além da sociedade disciplinar",
    description:
      "Da obediência externa à autoexploração interna — quando o sujeito vira seu próprio opressor.",
  },
  {
    id: 3,
    title: "O tédio profundo",
    description:
      "O silêncio, a pausa e a capacidade perdida de simplesmente 'estar', sem produzir nada.",
  },
  {
    id: 4,
    title: "Vita activa",
    description:
      "A ação humana como produção infinita — e os efeitos disso na nossa forma de viver e adoecer.",
  },
  {
    id: 5,
    title: "Pedagogia do ver",
    description:
      "Aprender a olhar o mundo sem filtrá-lo apenas pela produtividade e pelo desempenho.",
  },
  {
    id: 6,
    title: "O Caso Bartleby",
    description:
      "A frase 'preferiria não o fazer' como gesto radical contra a lógica da performance.",
  },
  {
    id: 7,
    title: "Sociedade do cansaço",
    description:
      "Um fechamento poderoso sobre a era do esgotamento e a urgência de outras formas de existir.",
  },
];

export function SummaryCarousel() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    if (index < 0) index = chapters.length - 1;
    if (index >= chapters.length) index = 0;
    setCurrent(index);
  };

  const slide = chapters[current];

  return (
    <section className="bg-[#1c0f30] border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Por dentro da Sociedade do Cansaço
        </h2>

        <p className="text-zinc-200 text-sm leading-relaxed mb-8">
          Cada capítulo abre uma fresta diferente sobre o esgotamento
          contemporâneo. Navegue pelo sumário e tenha um gostinho do que vamos
          estudar em aula.
        </p>

        {/* Card do carrossel */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 px-6 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200 mb-2">
            Capítulo {slide.id} de {chapters.length}
          </p>

          <h3 className="text-2xl md:text-[26px] font-semibold text-white mb-3">
            {slide.title}
          </h3>

          <p className="text-sm text-zinc-100 leading-relaxed mb-6">
            {slide.description}
          </p>

          {/* Controles */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goTo(current - 1)}
                className="h-9 rounded-full border border-white/20 px-4 text-xs font-medium text-zinc-100 hover:bg-white/10"
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={() => goTo(current + 1)}
                className="h-9 rounded-full bg-amber-300 px-4 text-xs font-semibold text-[#301e4b] hover:bg-amber-200 shadow-md shadow-amber-300/30"
              >
                Próximo
              </button>
            </div>

            {/* bolinhas de progresso */}
            <div className="flex items-center gap-2">
              {chapters.map((chapter, index) => (
                <button
                  key={chapter.id}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === current
                      ? "w-6 bg-amber-300"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Ir para capítulo ${chapter.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
