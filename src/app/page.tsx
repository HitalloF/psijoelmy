// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "558171122999"; // +55 81 7112-2999 sem sinais

export default function Home() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá, gostaria de saber mais sobre o atendimento psicológico com você.'
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#24163a] text-white">
      {/* HERO */}
      <section className="flex-1">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center">
          {/* Texto ESQUERDA */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-sm tracking-[0.18em] uppercase text-amber-200">
              Psicólogo clínico <strong>CRP: 02/27419</strong>
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Joelmy Lins
            </h1>

            <p className="text-base md:text-lg text-zinc-100 max-w-xl">
              Atendimento psicológico com base na{" "}
              <span className="font-semibold">Gestalt-terapia</span>, voltado
              para pessoas que vivem{" "}
              <span className="font-semibold">esgotamento, burnout, ansiedade</span>{" "}
              e excesso de autocobrança em um mundo que não para.
            </p>

            {/* Badges de temas */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="rounded-full border border-amber-200/60 px-3 py-1 text-xs md:text-sm text-amber-100">
                Gestalt-terapia
              </span>
              <span className="rounded-full border border-amber-200/40 px-3 py-1 text-xs md:text-sm text-amber-50">
                Burnout e esgotamento
              </span>
              <span className="rounded-full border border-amber-200/40 px-3 py-1 text-xs md:text-sm text-amber-50">
                Luto
              </span>
              <span className="rounded-full border border-amber-200/40 px-3 py-1 text-xs md:text-sm text-amber-50">
                Ansiedade e autocobrança
              </span>
              <span className="rounded-full border border-amber-200/40 px-3 py-1 text-xs md:text-sm text-amber-50">
                Relação com trabalho e desempenho
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-[#301e4b] shadow-lg shadow-amber-300/30 transition hover:-translate-y-0.5 hover:bg-amber-200"
                onClick={handleWhatsApp}
              >
                Agendar uma conversa
              </button>

              <Link
                href="/burnout-a-esperanca"
                className="rounded-full border border-amber-200/60 px-6 py-3 text-sm font-medium text-amber-100 hover:bg-amber-50/5"
              >
                Ver aulas “Do Burnout à esperança”
              </Link>
            </div>

            <p className="text-xs text-zinc-300/80">
              Atendimentos para adultos. Online e, em alguns casos, presencial
              a combinar.
            </p>
          </div>

          {/* Foto DIREITA */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-amber-300/40 to-transparent blur-lg opacity-60" />
              <div className="relative rounded-3xl bg-[#1b102f] border border-white/10 p-2 shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
                <Image
                  src="/jojo.jpg"
                  alt="Foto do psicólogo Joelmy Lins"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section className="bg-[#1c0f30] border-t border-white/5">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Sobre meu trabalho em psicoterapia
          </h2>
          <p className="text-sm md:text-base text-zinc-100 leading-relaxed">
            Minha prática clínica é orientada pela{" "}
            <span className="font-semibold">Gestalt-terapia</span>, uma abordagem
            que olha para a pessoa como um ser inteiro — corpo, mente, história,
            relações e contexto. Mais do que tratar “sintomas”, buscamos juntos
            compreender{" "}
            <span className="font-semibold">
              como você foi construindo jeitos de sentir, pensar e se colocar no mundo
            </span>
            , especialmente em um cenário atravessado por produtividade, pressão
            e autocobrança.
          </p>
          <p className="text-sm md:text-base text-zinc-100 leading-relaxed">
            A partir de uma escuta cuidadosa, vamos explorando seus modos de
            estar nas relações, no trabalho, na família e consigo mesmo.
            Falamos sobre cansaço, limites, desejo, culpa, medo de decepcionar
            e tantas outras experiências que, muitas vezes, você tem carregado
            sozinho.
          </p>
        </div>
      </section>

      {/* COMO POSSO TE AJUDAR */}
      <section className="bg-[#24163a] border-t border-white/5">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Em que posso te acompanhar
          </h2>

         <div className="mt-6 overflow-x-auto">
  <div className="flex gap-4 md:gap-6 snap-x snap-mandatory">
    {/* 1 */}
    <div className="snap-start w-[80%] sm:w-[55%] md:w-1/3 rounded-2xl border border-white/10 bg-white/5 p-5 flex-shrink-0">
      <h3 className="text-sm font-semibold mb-2">
        Burnout e esgotamento
      </h3>
      <p className="text-xs md:text-sm text-zinc-100 leading-relaxed">
        Quando o trabalho ocupa tudo, o corpo pede pausa e a mente não
        consegue desligar. Vamos compreender o que está por trás desse
        cansaço e construir outras formas de se relacionar com o
        desempenho.
      </p>
    </div>

    {/* 2 */}
    <div className="snap-start w-[80%] sm:w-[55%] md:w-1/3 rounded-2xl border border-white/10 bg-white/5 p-5 flex-shrink-0">
      <h3 className="text-sm font-semibold mb-2">
        Luto e perdas significativas
      </h3>
      <p className="text-xs md:text-sm text-zinc-100 leading-relaxed">
        Processar a dor de uma perda não é sobre “superar” rapidamente, mas sobre
        construir um espaço seguro para sentir, elaborar e encontrar novos modos
        de continuar. A terapia pode ajudar você a atravessar esse momento com
        acolhimento, respeito e presença.
      </p>
    </div>

    {/* 3 */}
    <div className="snap-start w-[80%] sm:w-[55%] md:w-1/3 rounded-2xl border border-white/10 bg-white/5 p-5 flex-shrink-0">
      <h3 className="text-sm font-semibold mb-2">
        Ansiedade e autocobrança
      </h3>
      <p className="text-xs md:text-sm text-zinc-100 leading-relaxed">
        A sensação de que nunca é suficiente, o medo de falhar, a
        comparação constante. A terapia pode ser um espaço para você
        respirar e revisitar essas exigências tão duras.
      </p>
    </div>

    {/* 4 */}
    <div className="snap-start w-[80%] sm:w-[55%] md:w-1/3 rounded-2xl border border-white/10 bg-white/5 p-5 flex-shrink-0">
      <h3 className="text-sm font-semibold mb-2">
        Relações, escolhas e sentido
      </h3>
      <p className="text-xs md:text-sm text-zinc-100 leading-relaxed">
        Questões com relacionamentos, mudanças de ciclo, decisões
        difíceis e crises de sentido. Olhamos juntos para o que está
        vivendo hoje e para o que você deseja construir daqui pra
        frente.
      </p>
    </div>
  </div>
</div>


          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-zinc-200">
              Atendimentos online por vídeo chamada. Agenda em horários
              combinados individualmente.
            </p>
            <button
              onClick={handleWhatsApp}
              className="rounded-full bg-amber-300 px-6 py-2.5 text-xs md:text-sm font-semibold text-[#301e4b] shadow-md shadow-amber-300/30 hover:bg-amber-200 hover:-translate-y-0.5 transition"
            >
              Falar comigo no WhatsApp
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
