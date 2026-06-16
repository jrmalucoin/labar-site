export default function Stats() {
  const stats = [
    {
      number: "24h",
      label: "Automações Ativas"
    },
    {
      number: "100%",
      label: "Projetos Personalizados"
    },
    {
      number: "IA",
      label: "Atendimento Inteligente"
    },
    {
      number: "Cloud",
      label: "Infraestrutura Moderna"
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">

        <div className="grid gap-6 md:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
                rounded-2xl
                border
                p-8
                text-center
              "
            >
              <div className="text-4xl font-bold text-blue-600">
                {item.number}
              </div>

              <div className="mt-2 text-slate-500">
                {item.label}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}