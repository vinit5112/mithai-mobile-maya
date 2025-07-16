import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp business number
    const message = encodeURIComponent("Hi! I'm interested in ordering sweets from Mithai Maya.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="whatsapp"
      size="icon"
      className="fixed bottom-6 right-6 w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};