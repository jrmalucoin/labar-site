"use client";

import { useState } from "react";

export default function LeadForm() {

const [form, setForm] = useState({
name: "",
company: "",
phone: "",
message: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

async function handleSubmit(e: React.FormEvent) {
e.preventDefault();

setLoading(true);

try {

  await fetch(
    "https://n8n.labarinformatica.com.br/webhook/lead-labar",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }
  );

  setSuccess(true);

  setForm({
    name: "",
    company: "",
    phone: "",
    message: "",
  });

} catch (error) {
  console.error(error);
  alert("Erro ao enviar solicitação.");
}

setLoading(false);

}

return ( <section className="section">

  <div className="container-custom max-w-3xl">

    <div className="text-center mb-12">

      <h2 className="text-4xl font-bold">
        Solicite uma Demonstração
      </h2>

      <p className="mt-4 text-slate-500">
        Conte um pouco sobre seu projeto.
      </p>

    </div>

    {success && (
      <div className="mb-6 rounded-xl bg-green-100 p-4 text-green-700">
        Solicitação enviada com sucesso.
      </div>
    )}

    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      <input
        type="text"
        placeholder="Nome"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
        className="w-full border rounded-xl p-4"
        required
      />

      <input
        type="text"
        placeholder="Empresa"
        value={form.company}
        onChange={(e) =>
          setForm({
            ...form,
            company: e.target.value,
          })
        }
        className="w-full border rounded-xl p-4"
      />

      <input
        type="text"
        placeholder="WhatsApp"
        value={form.phone}
        onChange={(e) =>
          setForm({
            ...form,
            phone: e.target.value,
          })
        }
        className="w-full border rounded-xl p-4"
        required
      />

      <textarea
        rows={5}
        placeholder="Descreva sua necessidade"
        value={form.message}
        onChange={(e) =>
          setForm({
            ...form,
            message: e.target.value,
          })
        }
        className="w-full border rounded-xl p-4"
      />

      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          bg-blue-600
          text-white
          py-4
          rounded-xl
          font-semibold
        "
      >
        {loading
          ? "Enviando..."
          : "Enviar Solicitação"}
      </button>

    </form>

  </div>

</section>
);
}
