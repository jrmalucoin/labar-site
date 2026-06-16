export default function WhyChoose() {
  const items = [
    {
      titulo: "Automação Inteligente",
      texto: "Reduza tarefas manuais e aumente a produtividade."
    },
    {
      titulo: "Especialistas em IA",
      texto: "Implementamos agentes inteligentes para atendimento e operações."
    },
    {
      titulo: "Integrações Personalizadas",
      texto: "Conectamos sistemas, APIs e plataformas empresariais."
    },
    {
      titulo: "Infraestrutura Cloud",
      texto: "Projetos escaláveis, seguros e preparados para crescimento."
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Por que escolher a Labar?
          </h2>

          <p className="mt-4 text-slate-500">
            Tecnologia aplicada para gerar resultados reais.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {items.map((item) => (
            <div
              key={item.titulo}
              className="rounded-2xl border p-8"
            >
              <h3 className="text-xl font-bold mb-3">
                {item.titulo}
              </h3>

              <p>
                {item.texto}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}