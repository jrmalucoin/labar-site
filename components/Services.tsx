export default function Services() {
  const services = [
    "Automações WhatsApp",
    "Atendentes IA",
    "N8N",
    "Evolution API",
    "Desenvolvimento Web",
    "Integrações"
  ];

  return (
    <section
      id="servicos"
      className="section"
    >
      <div className="container-custom">

        <h2 className="text-4xl font-bold text-center mb-12">
          Serviços
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service}
              className="
                border
                rounded-2xl
                p-8
                hover:shadow-xl
                transition
              "
            >
              <h3 className="font-semibold text-xl text-slate-900 dark:text-white">
                {service}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}