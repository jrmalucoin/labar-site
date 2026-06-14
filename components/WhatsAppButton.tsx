export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5521974692923?text=Olá! Gostaria de conhecer as soluções da Labar Informática."
      target="_blank"
      className="
        fixed
        bottom-6
        right-6
        bg-green-500
        text-white
        px-5
        py-4
        rounded-full
        shadow-lg
        hover:scale-105
        transition
        z-50
      "
    >
      WhatsApp
    </a>
  );
}