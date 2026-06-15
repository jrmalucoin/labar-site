export default function Manutencao() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <div className="max-w-4xl text-center px-6">

        <div className="mb-8">
          <h1 className="text-6xl font-bold">
            LABAR
          </h1>

          <p className="text-blue-400 text-xl">
            Sucesso em Soluções
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Estamos construindo algo incrível
        </h2>

        <p className="text-xl text-slate-300 mb-10">
          Transformamos processos manuais em operações inteligentes.
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">

          <div>✓ Inteligência Artificial</div>
          <div>✓ Automações WhatsApp</div>
          <div>✓ N8N</div>
          <div>✓ Evolution API</div>
          <div>✓ Desenvolvimento Web</div>
          <div>✓ Infraestrutura Cloud</div>

        </div>

        <p className="text-slate-400 mb-10">
          Estamos preparando uma nova experiência para nossos clientes.
        </p>

        <a
          href="https://wa.me/5521974692923"
          target="_blank"
          className="
            inline-block
            bg-blue-600
            hover:bg-blue-700
            px-8
            py-4
            rounded-xl
            font-semibold
            transition
          "
        >
          Falar no WhatsApp
        </a>

        <div className="mt-12 text-slate-500">
          adminlabarinformatica@gmail.com
        </div>

      </div>

    </main>
  );
}