import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/jm";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Olá, JM Motors! Vim pelo site e gostaria de mais informações.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a JM Motors"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-4 font-semibold text-black shadow-[0_10px_30px_-8px_rgba(0,0,0,0.8)] transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
