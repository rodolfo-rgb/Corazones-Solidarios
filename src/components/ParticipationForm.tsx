import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";

interface ParticipationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ParticipationForm = ({ open, onOpenChange }: ParticipationFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_hbgjggh", // Reemplaza con tu Service ID
        "template_8rgqtus", // Reemplaza con tu Template ID
        formRef.current,
        "P-x9o59hmqphPO8ET" // Reemplaza con tu Public Key
      )
      .then(() => {
        alert("¡Gracias por querer participar! Te contactaremos pronto.");
        formRef.current?.reset();
        onOpenChange(false);
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
        alert(
          `Ocurrió un error al enviar el formulario: ${
            error.text || error.message || error
          }`
        );
      });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <Heart className="h-5 w-5" />
            Únete a Corazones Solidarios
          </DialogTitle>
          <DialogDescription>
            Ingresa tus datos para formar parte de nuestra causa y recibir
            información sobre cómo participar.
          </DialogDescription>
        </DialogHeader>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre completo"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@correo.com"
              required
              className="w-full"
            />
          </div>

          {/* Campo oculto para la fecha y hora */}
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString("es-MX")}
          />

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button type="submit" className="flex-1 bg-red-500 hover:bg-red-600">
              Enviar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ParticipationForm;
