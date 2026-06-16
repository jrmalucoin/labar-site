export default function Faq() {
  const perguntas = [
    {
      pergunta: "O que é possível automatizar com IA?",
      resposta:
        "Atendimento, vendas, suporte, agendamentos, qualificação de leads e diversos processos internos."
    },
    {
      pergunta: "Posso integrar com WhatsApp?",
      resposta:
        "Sim. Trabalhamos com WhatsApp Business, Evolution API e integrações personalizadas."
    },
    {
      pergunta: "Vocês desenvolvem sistemas sob medida?",
      resposta:
        "Sim. Criamos soluções personalizadas para cada empresa e necessidade."
    },
    {
      pergunta: "Preciso contratar uma VPS?",
      resposta:
        "Depende do projeto. Podemos orientar e configurar toda a infraestrutura necessária."
    },
    {
      pergunta: "Quanto custa um projeto?",
      resposta:
        "O valor depende da complexidade, integrações e objetivos do cliente."
    }
  ];

  return (
    <section className="section bg-slate-50">
      <div className="container-custom">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Perguntas Frequentes
          </h2>

          <p className="mt-4 text-slate-500">
            Tire suas dúvidas sobre automação e inteligência artificial.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">

          {perguntas.map((item) => (
            <div
              key={item.pergunta}
              className="rounded-2xl border bg-white p-6"
            >
              <h3 className="font-bold text-lg mb-2">
                {item.pergunta}
              </h3>

              <p className="text-slate-500">
                {item.resposta}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}