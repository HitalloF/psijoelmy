// componentes/EnrollModal.tsx
"use client";

import { useState } from "react";

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Coloca aqui o número do WhatsApp que vai receber as mensagens
// Formato: 55 + DDD + número (sem espaços ou traços)


export function EnrollModal({ isOpen, onClose }: EnrollModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const baseText = `Olá, gostaria de participar das aulas "Do Burnout à esperança".`;
    const namePart = name ? `\n\nMeu nome é: ${name}` : "";
    const phonePart = phone ? `\nMeu número para contato é: ${phone}` : "";

    const fullText = encodeURIComponent(baseText + namePart + phonePart);

    const url = `https://wa.me/${558171122999}?text=${fullText}`;
    window.open(url, "_blank");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#1c0f30] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
        {/* Cabeçalho */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            Quero participar das aulas
          </h2>
          <button
            onClick={onClose}
            className="rounded-full px-2 py-1 text-sm text-zinc-300 hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        <p className="mb-4 text-xs text-zinc-300">
          Preencha seus dados e vamos abrir uma conversa no WhatsApp com a
          mensagem pronta. É só revisar e enviar. 💬
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="name"
              className="text-xs font-medium text-zinc-100"
            >
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-amber-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="phone"
              className="text-xs font-medium text-zinc-100"
            >
              WhatsApp
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="(81) 99999-9999"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-amber-300"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-amber-300 px-4 py-2.5 text-sm font-semibold text-[#301e4b] shadow-lg shadow-amber-300/30 transition hover:-translate-y-0.5 hover:bg-amber-200"
          >
            Enviar pelo WhatsApp
          </button>

          <p className="text-[10px] text-zinc-400 text-center">
            Ao clicar em enviar, você será redirecionado para o WhatsApp com uma
            mensagem pronta. Nenhum dado é armazenado no site.
          </p>
        </form>
      </div>
    </div>
  );
}
