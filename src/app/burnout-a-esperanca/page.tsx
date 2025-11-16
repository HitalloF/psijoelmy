// app/page.tsx
"use client";

import { Footer } from "@/componentes/Footer";
import { SummaryCarousel } from "@/componentes/SummaryCarousel";
import { EnrollModal } from "@/componentes/EnrollModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  const handleScrollToContent = () => {
    const section = document.getElementById("conteudo-livro");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#24163a]">
      {/* Modal de inscrição */}
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
      />

      {/* SETA VOLTAR PRO HOME */}
      <header className="w-full px-4 pt-4">
        {/* Botão flutuante para voltar ao início */}
        <Link
          href="/"
          className="fixed top-4 left-4 md:left-8 lg:left-16 z-40 group"
        >
          <div
            className="flex items-center gap-2 rounded-full bg-black/40 border border-white/12 px-3 py-1.5 
               backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition
               group-hover:bg-black/65 group-hover:border-amber-300/70"
          >
            <span className="text-lg leading-none text-amber-200 group-hover:text-amber-300">
              ←
            </span>
            <span className="text-xs md:text-sm text-zinc-100 group-hover:text-amber-100">
              Início
            </span>
          </div>
        </Link>


      </header>

      {/* HERO */}
      <section className="flex-1 flex items-center">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8 md:py-12 md:flex-row md:items-center">
          {/* Texto ESQUERDA */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-sm tracking-[0.2em] uppercase text-amber-200">
              psicólogo Joelmy Lins
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Do Burnout <br />
              <span className="inline-block mt-1">à esperança</span>
            </h1>

            {/* Preço com cupom atrás */}
            <div className="relative w-fit mt-2 ml-1">
              {/* Cupom atrás */}
              <div className="absolute inset-0 rounded-full bg-amber-300/20 blur-sm scale-110"></div>

              {/* Selo de preço */}
              <span className="relative inline-block bg-amber-300 text-[#301e4b] text-sm md:text-base font-bold px-4 py-1.5 rounded-full shadow-[0_4px_20px_rgba(253,230,138,0.35)] border border-amber-200/60">
                R$ 40
              </span>

              {/* detalhe de ticket (recorte) */}
             
            </div>

            <p className="text-base md:text-lg text-zinc-100 max-w-xl">
              Um estudo sobre a{" "}
              <span className="font-semibold">sociedade do cansaço</span>. Para
              entender como o excesso de produtividade e autoexploração geram o{" "}
              <span className="font-semibold">esgotamento mental</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-[#301e4b] shadow-lg shadow-amber-300/30 transition hover:-translate-y-0.5 hover:bg-amber-200"
                onClick={() => setIsEnrollOpen(true)}
              >
                Quero participar das aulas
              </button>

              <button
                className="rounded-full border border-amber-200/60 px-6 py-3 text-sm font-medium text-amber-100 hover:bg-amber-50/5"
                onClick={handleScrollToContent}
              >
                Ver conteúdos do livro
              </button>
            </div>

            <p className="text-xs text-zinc-300/80">
              Inspirado em “A Sociedade do Cansaço”, de Byung-Chul Han.
            </p>
          </div>

          {/* Cartaz DIREITA */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/landing/poste.png"
                alt="Cartaz Do Burnout à Esperança"
                width={600}
                height={800}
                className="w-full h-auto rounded-lg shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção “sobre o curso/livro” */}
      <section
        id="conteudo-livro"
        className="bg-[#1c0f30] border-t border-white/5"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Do esgotamento à possibilidade de esperança
          </h2>
          <p className="text-sm md:text-base text-zinc-100 leading-relaxed">
            O burnout, o esgotamento e o excesso de autocobrança tornaram-se
            marcas profundas do nosso tempo. Esses fenômenos atravessam a vida
            de milhões de pessoas e produzem um vasto conjunto de sofrimentos
            físicos, emocionais e sociais. Compreender essas vivências é
            essencial para acolher e manejar as formas de adoecimento
            contemporâneo.
          </p>
          <p className="text-sm md:text-base text-zinc-100 leading-relaxed">
            Nas nossas aulas, vamos explorar esses temas a partir de um dos
            textos mais influentes sobre a temática na atualidade:{" "}
            <span className="italic">“A Sociedade do Cansaço”</span>, de
            Byung-Chul Han. A partir dessa obra, analisaremos como a lógica do
            desempenho, da produtividade e da hiperexigência molda nosso modo de
            viver e, muitas vezes, nossa forma de sofrer.
          </p>
        </div>
      </section>

      {/* Carrossel do sumário */}
      <section>
        <SummaryCarousel />
      </section>

      <Footer />
    </main>
  );
}
