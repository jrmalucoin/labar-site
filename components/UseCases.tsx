export default function UseCases() {
  const cases = [
    {
      titulo: "Clínicas e Consultórios",
      descricao:
        "Confirmação automática de consultas, lembretes e atendimento inicial por IA."
    },
    {
      titulo: "Imobiliárias",
      descricao:
        "Captação e qualificação automática de leads pelo WhatsApp."
    },
    {
      titulo: "Escritórios",
      descricao:
        "Automação de atendimento, triagem e organização de solicitações."
    },
    {
      titulo: "Comércio e Varejo",
      descricao:
        "Recuperação de clientes, campanhas e vendas automatizadas."
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">

        <div className="text-center mb-12">

          <span className="text-blue-600 font-semibold">
            CASES DE USO
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Como a automação gera resultados
          </h2>

          <p className="mt-4 text-slate-500 max-w-3xl mx-auto">
            Aplicamos Inteligência Artificial e automações em diferentes segmentos.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {cases.map((item) => (
            <div
              key={item.titulo}
              className="
                rounded-2xl
                border
                p-8
                hover:shadow-xl
                transition
              "
            >
              <h3 className="text-xl font-bold mb-4">
                {item.titulo}
              </h3>

              <p className="text-slate-500">
                {item.descricao}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}