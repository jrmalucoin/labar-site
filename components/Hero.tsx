export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_35%)]" />

      <div className="container-custom relative z-10">

        <div className="flex min-h-[85vh] flex-col items-center justify-center text-center">

          <span
            className="
            mb-6
            rounded-full
            border
            border-blue-500/30
            bg-blue-500/10
            px-4
            py-2
            text-sm
            text-blue-400
          "
          >
            Inteligência Artificial • WhatsApp • Automação
          </span>

          <h1
            className="
             max-w-6xl
             text-5xl
             font-bold
             leading-tight             
             md:text-7xl
          "
          >
            Transformamos processos manuais em operações inteligentes
          </h1>

          <p
            className="
            mt-8
            max-w-3xl
            text-xl
            text-slate-600 
            dark:text-slate-300
          "
          >
            Desenvolvemos soluções com Inteligência Artificial,
            WhatsApp, N8N, Evolution API e sistemas web
            para empresas que desejam crescer,
            automatizar processos e aumentar resultados.
          </p>

          <div
            className="
            mt-12
            flex
            flex-col
            gap-4
            md:flex-row
          "
          >
            <a
              href="https://wa.me/5521974692923"
              target="_blank"
              className="
                rounded-xl
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              Solicitar Demonstração
            </a>

            <a
              href="#servicos"
              className="
                rounded-xl
                border
                px-8
                py-4
                font-semibold
                text-slate-900
                dark:text-white
                border-slate-300
                dark:border-slate-700
              "
            >
              Conhecer Serviços
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}