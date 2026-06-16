export default function Technologies() {
  const tecnologias = [
    "OpenAI",
    "N8N",
    "Evolution API",
    "WhatsApp Business",
    "Next.js",
    "Node.js",
    "Docker",
    "PostgreSQL",
    "Cloud VPS",
    "GitHub",
    "APIs REST",
    "Webhooks"
  ];

  return (
    <section className="section bg-slate-50">
      <div className="container-custom">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">
            Tecnologias Utilizadas
          </h2>

          <p className="mt-4 text-slate-500">
            Trabalhamos com ferramentas modernas e escaláveis.
          </p>

        </div>

        <div className="grid gap-4 md:grid-cols-4">

          {tecnologias.map((tech) => (
            <div
              key={tech}
              className="
                rounded-xl
                border
                bg-white
                p-5
                text-center
                font-semibold
              "
            >
              {tech}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}