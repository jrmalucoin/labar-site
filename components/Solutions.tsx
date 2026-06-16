export default function Solutions() {
  const segmentos = [
    {
      titulo: "Clínicas",
      descricao:
        "Agendamentos automáticos, confirmação de consultas e atendimento inteligente."
    },
    {
      titulo: "Escritórios",
      descricao:
        "Captação de clientes, automação de processos e gestão de atendimento."
    },
    {
      titulo: "Imobiliárias",
      descricao:
        "Qualificação de leads, respostas automáticas e integração com CRM."
    },
    {
      titulo: "Comércio",
      descricao:
        "Vendas pelo WhatsApp, recuperação de clientes e automações comerciais."
    },
    {
      titulo: "Prestadores de Serviços",
      descricao:
        "Orçamentos automáticos, agendamentos e acompanhamento de clientes."
    },
    {
      titulo: "Indústria",
      descricao:
        "Integrações, processos internos e monitoramento operacional."
    }
  ];

  return (
    <section className="section bg-slate-50 dark:bg-slate-900">
      <div className="container-custom">

        <div className="text-center mb-14">

          <span className="text-blue-600 font-semibold">
            SOLUÇÕES
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Tecnologia aplicada ao seu segmento
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Desenvolvemos soluções personalizadas para empresas
            que desejam automatizar processos e aumentar resultados.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {segmentos.map((item) => (
            <div
              key={item.titulo}
              className="
                rounded-2xl
                border
                bg-white
                dark:bg-slate-950
                p-8
                transition
                hover:-translate-y-1
                hover:shadow-xl
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