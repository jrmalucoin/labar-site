export default function Manutencao() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent_35%)]" />

      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 container-custom">

        <div className="flex min-h-screen flex-col items-center justify-center text-center">

          <img
            src="/logo.svg"
            alt="Labar Informática"
            className="mb-10 h-24 w-auto"
          />

          <span className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Nova Plataforma em Desenvolvimento - AMBIENTE DEV
          </span>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">

            Transformamos
            <span className="text-blue-400"> processos manuais </span>
            em operações inteligentes

          </h1>

          <p className="mt-8 max-w-3xl text-xl text-slate-300">

            Soluções em Inteligência Artificial,
            automações para WhatsApp,
            N8N, Evolution API,
            desenvolvimento de sistemas e
            infraestrutura cloud.

          </p>

          <div className="mt-10 flex flex-col gap-4 md:flex-row">

            <a
              href="https://wa.me/5521974692923"
              target="_blank"
              className="
                rounded-xl
                bg-blue-600
                px-8
                py-4
                font-semibold
                hover:bg-blue-700
                transition
              "
            >
              Solicitar Demonstração
            </a>

            <a
              href="mailto:adminlabarinformatica@gmail.com"
              className="
                rounded-xl
                border
                border-slate-700
                px-8
                py-4
                font-semibold
                hover:bg-slate-900
                transition
              "
            >
              Entrar em Contato
            </a>

          </div>

          <div className="mt-24 grid w-full max-w-5xl gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
              <h3 className="mb-3 text-xl font-semibold">
                Inteligência Artificial
              </h3>

              <p className="text-slate-400">
                Assistentes inteligentes e automação de atendimento.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
              <h3 className="mb-3 text-xl font-semibold">
                Automação WhatsApp
              </h3>

              <p className="text-slate-400">
                Fluxos automáticos com N8N e Evolution API.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
              <h3 className="mb-3 text-xl font-semibold">
                Desenvolvimento
              </h3>

              <p className="text-slate-400">
                Sistemas web modernos e integrações corporativas.
              </p>
            </div>

          </div>

          <div className="mt-24 text-center">

            <p className="text-slate-500">
              Estamos preparando uma experiência digital totalmente nova.
            </p>

            <p className="mt-4 text-slate-400">
              adminlabarinformatica@gmail.com
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}