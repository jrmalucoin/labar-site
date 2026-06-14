export default function Hero() {
  return (
    <section className="hero-bg">

      <div className="container-custom py-28 text-center">

        <div className="inline-flex px-4 py-2 rounded-full border text-sm mb-8">
          🚀 Automações • IA • WhatsApp
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">

          Transforme sua empresa
          <br />

          com Inteligência Artificial

        </h1>

        <p className="mt-8 text-xl text-slate-500 max-w-3xl mx-auto">

          Desenvolvemos soluções modernas
          utilizando IA, N8N, Evolution API,
          WhatsApp Business e sistemas web.

        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/5521974692923"
            target="_blank"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl"
          >
            Falar no WhatsApp
          </a>

          <a
            href="#servicos"
            className="border px-8 py-4 rounded-xl"
          >
            Ver Serviços
          </a>

        </div>

      </div>

    </section>
  );
}