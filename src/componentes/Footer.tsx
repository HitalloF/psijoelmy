// components/Footer.tsx
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#140a24]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-zinc-300 md:flex-row md:items-center md:justify-between">
        <p className="leading-relaxed">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>

        <p className="text-zinc-400">
          Site desenvolvido por{" "}
          <a
            href="https://www.instagram.com/ollatihf/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-amber-300 hover:text-amber-200 hover:underline"
          >
            ApertureTech
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
