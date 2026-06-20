import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur bg-white/80 dark:bg-slate-950/80 text-slate-900 dark:text-white">

      <div className="container-custom h-20 flex items-center justify-between">

        <div>
            <img
            src="/logo.svg"
            alt="Labar Informática"
            className="mb-10 h-24 w-auto"
          />

          <h1 className="font-bold text-xl text-slate-900 dark:text-white">
            LABAR INFORMÁTICA 
          </h1>

          <p className="text-xs text-blue-600">
            Sucesso em Soluções
          </p>
        </div>

        <nav className="hidden md:flex gap-8 text-slate-900 dark:text-white">
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <ThemeToggle />

      </div>

    </header>
  );
}