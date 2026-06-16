export default function FinalCTA() {
  return (
    <section className="section">

      <div className="container-custom">

        <div
          className="
            rounded-3xl
            bg-blue-600
            p-12
            text-center
            text-white
          "
        >

          <h2 className="text-4xl font-bold">
            Pronto para automatizar sua empresa?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100">
            Descubra como Inteligência Artificial,
            WhatsApp e automações podem reduzir custos,
            aumentar produtividade e melhorar seus resultados.
          </p>

          <div className="mt-10 flex flex-col gap-4 justify-center md:flex-row">

            <a
              href="https://wa.me/5521974692923"
              target="_blank"
              className="
                rounded-xl
                bg-white
                px-8
                py-4
                font-semibold
                text-blue-700
              "
            >
              Falar no WhatsApp
            </a>

            <a
              href="mailto:adminlabarinformatica@gmail.com"
              className="
                rounded-xl
                border
                border-white
                px-8
                py-4
                font-semibold
              "
            >
              Solicitar Demonstração
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}