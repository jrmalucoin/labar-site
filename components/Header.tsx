import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b bg-white/80 dark:bg-slate-950/80">

      <div className="container-custom h-20 flex items-center justify-between">

        <div>
          <h1 className="font-bold text-xl">
            LABAR INFORMÁTICA
          </h1>

          <p className="text-xs text-blue-600">
            Sucesso em Soluções
          </p>
        </div>

        <nav className="hidden md:flex gap-8">
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <ThemeToggle />

      </div>

    </header>
  );
}