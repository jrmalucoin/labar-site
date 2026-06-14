export default function Contact() {
  return (
    <section
      id="contato"
      className="section"
    >
      <div className="container-custom">

        <div className="text-center">

          <h2 className="text-4xl font-bold mb-8">
            Entre em Contato
          </h2>

          <p className="mb-4">
            Rio de Janeiro - RJ
          </p>

          <p className="mb-4">
            adminlabarinformatica@gmail.com
          </p>

          <p className="mb-8">
            +55 21 97469-2923
          </p>

          <a
            href="https://wa.me/5521974692923"
            target="_blank"
            className="
              bg-green-600
              text-white
              px-8
              py-4
              rounded-xl
              inline-block
            "
          >
            Chamar no WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}