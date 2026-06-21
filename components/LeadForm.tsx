"use client";

import { useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);

async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  const formElement = e.currentTarget;

  setLoading(true);

  const form = new FormData(formElement);

  const data = {
   name: form.get("nome"),
   company: form.get("empresa"),
   phone: form.get("whatsapp"),
   email: form.get("email"),
   service: form.get("servico"),
   message: form.get("mensagem"),
  };

  try {
    const response = await fetch(
      "https://n8n.labarinformatica.com.br/webhook/lead-labar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Falha no envio");
    }

    alert("Mensagem enviada com sucesso!");

    formElement.reset();

  } catch (error) {
    console.error(error);

    alert("Erro ao enviar formulário.");
  } finally {
    setLoading(false);
  }
}

return ( 
    <section
      id="contato"
      className="py-24 bg-slate-950"
    >
      <div className="container mx-auto max-w-4xl px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Solicite um Orçamento
        </h2>

        <p className="text-center text-slate-400 mb-12">
          Conte-nos sobre seu projeto.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4"
        >
          <input
            name="nome"
            placeholder="Nome do Cliente"
            required
            className="p-4 rounded bg-slate-900 border border-slate-700"
          />

          <input
            name="empresa"
            placeholder="Empresa"
            className="p-4 rounded bg-slate-900 border border-slate-700"
          />

          <input
            name="whatsapp"
            placeholder="WhatsApp"
            required
            className="p-4 rounded bg-slate-900 border border-slate-700"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="p-4 rounded bg-slate-900 border border-slate-700"
          />

          <select
            name="servico"
            className="p-4 rounded bg-slate-900 border border-slate-700"
          >
            <option>Automação com IA</option>
            <option>Chatbot WhatsApp</option>
            <option>Site Institucional</option>
            <option>Integração Sistemas</option>
            <option>Outro</option>
          </select>

          <textarea
            name="mensagem"
            placeholder="Descreva seu projeto"
            rows={6}
            className="p-4 rounded bg-slate-900 border border-slate-700"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded font-semibold"
          >
            {loading ? "Enviando..." : "Solicitar Contato"}
          </button>
        </form>
      </div>
    </section>
  );
}