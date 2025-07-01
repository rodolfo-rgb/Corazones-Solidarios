import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";

interface ParticipationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ParticipationForm = ({ open, onOpenChange }: ParticipationFormProps) => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentDateTime = new Date().toLocaleString('es-MX', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const templateParams = {
      name: formData.nombre,
      email: formData.correo,
      time: currentDateTime
    };

    // Llaves puestas directamente
    emailjs.send(
      'service_hbgjggh',   
      'template_8rgqtus',  
      templateParams,
      'P-x9o59hmqphPO8ET'      
    )
    .then(() => {
      alert('¡Gracias por querer participar! Te contactaremos pronto.');
      setFormData({ nombre: '', correo: '' });
      onOpenChange(false);
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
      alert('Ocurrió un error. Intenta más tarde.');
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
            Ingresa tus datos para formar parte de nuestra causa y recibir información sobre cómo participar.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre completo</Label>
            <Input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Tu nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="correo">Correo electrónico</Label>
            <Input
              id="correo"
              name="correo"
              type="email"
              placeholder="tu@correo.com"
              value={formData.correo}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-red-500 hover:bg-red-600"
            >
              Enviar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ParticipationForm;
