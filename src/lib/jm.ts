export const WHATSAPP_NUMBER = "5513976007271";
export const PHONE_DISPLAY = "(13) 97600-7271";
export const INSTAGRAM = "https://instagram.com/jm.motors_";
export const ADDRESS = "Av. Senador Feijó, 455 - Centro, Santos - SP";
export const MAPS_LINK =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Av. Senador Feijó, 455, Santos, SP");

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
