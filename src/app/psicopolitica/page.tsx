// app/psicopolitica/page.tsx
"use client";

import { Footer } from "@/componentes/Footer";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "558171122999"; // +55 81 7112-2999 sem sinais

export default function Psicopolitica() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá, gostaria de reservar minha vaga no workshop "Psicopolítica: as novas artimanhas do poder".'
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank");
  };

  const handleScrollToContent = () => {
    const section = document.getElementById("sobre-workshop");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#24163a]">
      {/* SETA VOLTAR PRO HOME */}
      <header className="w-full px-4 pt-4">
        {/* Botão flutuante para voltar ao início */}
        <Link
          href="/"
          className="fixed top-4 left-4 md:left-8 lg:left-16 z-40 group"
        >
          <div className="flex items-center gap-2 rounded-full bg-black/40 border border-white/12 px-3 py-1.5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition group-hover:bg-black/65 group-hover:border-amber-300/70">
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
              Workshop ao vivo online
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Psicopolítica
              <br />
              <span className="inline-block mt-2 text-2xl md:text-3xl font-medium text-amber-100">
                As novas artimanhas do poder
              </span>
            </h1>

            {/* Preço com cupom atrás */}
            <div className="relative w-fit mt-2 ml-1">
              {/* Cupom atrás */}
              <div className="absolute inset-0 rounded-full bg-amber-300/20 blur-sm scale-110"></div>

              {/* Selo de preço */}
              <span className="relative inline-block bg-amber-300 text-[#301e4b] text-sm md:text-base font-bold px-4 py-1.5 rounded-full shadow-[0_4px_20px_rgba(253,230,138,0.35)] border border-amber-200/60">
                R$ 49,99
              </span>
            </div>

            <p className="text-base md:text-lg text-zinc-100 max-w-xl">
              Um estudo sobre a{" "}
              <span className="font-semibold">sociedade atual</span>. Para
              entender as novas formas de{" "}
              <span className="font-semibold">sofrimento</span>{" "}
              contemporâneas.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-[#301e4b] shadow-lg shadow-amber-300/30 transition hover:-translate-y-0.5 hover:bg-amber-200"
                onClick={handleWhatsApp}
              >
                Reservar minha vaga
              </button>

              <button
                className="rounded-full border border-amber-200/60 px-6 py-3 text-sm font-medium text-amber-100 hover:bg-amber-50/5"
                onClick={handleScrollToContent}
              >
                Saber mais sobre o workshop
              </button>
            </div>

            <p className="text-xs text-zinc-300/80">
              Aula ao vivo em 10/10/2026, com acesso à gravação. Baseado em
              “Psicopolítica”, de Byung-Chul Han.
            </p>
          </div>

          {/* Cartaz DIREITA */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/novo/ps3.jpg"
                alt="Cartaz do workshop Psicopolítica: as novas artimanhas do poder"
                width={1279}
                height={1600}
                className="w-full h-auto rounded-lg shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção “sobre o workshop” */}
      <section
        id="sobre-workshop"
        className="bg-[#1c0f30] border-t border-white/5"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:py-16 md:flex-row md:items-center">
          <div className="md:w-3/5 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Workshop ao vivo sobre o livro Psicopolítica
            </h2>
            <p className="text-sm md:text-base text-zinc-100 leading-relaxed">
              A <span className="font-semibold">psicopolítica</span> é uma das
              muitas dinâmicas de poder contemporâneas. Estudar sobre ela é
              fundamental para entender os tipos de sofrimento gerados por ela!
            </p>
            <p className="text-sm md:text-base text-zinc-100 leading-relaxed">
              Em nossa aula vamos trabalhar esse conceito usando o livro do
              renomado filósofo{" "}
              <span className="font-semibold">Byung-Chul Han</span>. Vamos
              expandir os conceitos mostrados no livro, além de explicá-los de
              forma detalhada.
            </p>
            <p className="text-sm md:text-base text-zinc-100 leading-relaxed">
              Esse workshop é fundamental para todos aqueles que{" "}
              <span className="font-semibold">
                trabalham com questões humanas
              </span>{" "}
              ou se interessam por estudar os modos de opressão e sofrimento
              contemporâneos.
            </p>
          </div>

          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <Image
                src="/novo/ps2.jpg"
                alt="Byung-Chul Han e a capa do livro Psicopolítica"
                width={1279}
                height={1600}
                className="w-full h-auto rounded-lg shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Informações + reserva */}
      <section className="bg-[#24163a] border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:py-16 md:flex-row-reverse md:items-center">
          <div className="md:w-3/5 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Reserve a sua vaga
            </h2>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-200 mb-2">
                  Aula ao vivo
                </p>
                <p className="text-lg font-semibold">10/10/2026</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-200 mb-2">
                  Gravação
                </p>
                <p className="text-lg font-semibold">Acesso incluso</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-200 mb-2">
                  Investimento
                </p>
                <p className="text-lg font-semibold">R$ 49,99</p>
              </div>
            </div>

            <p className="text-sm md:text-base text-zinc-100 leading-relaxed">
              As vagas para a aula ao vivo são{" "}
              <span className="font-semibold">limitadas</span>. Fale comigo no
              WhatsApp que eu te envio todos os detalhes. 😉
            </p>

            <button
              onClick={handleWhatsApp}
              className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-[#301e4b] shadow-lg shadow-amber-300/30 transition hover:-translate-y-0.5 hover:bg-amber-200"
            >
              Reservar minha vaga
            </button>
          </div>

          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <Image
                src="/novo/ps1.jpg"
                alt="Workshop Psicopolítica: investimento, data da aula ao vivo e acesso à gravação"
                width={1279}
                height={1600}
                className="w-full h-auto rounded-lg shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
