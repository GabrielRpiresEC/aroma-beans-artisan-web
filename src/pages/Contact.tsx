import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Responderemos em breve.");
  };

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-center text-primary mb-6 animate-fade-in">
            Entre em Contato
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Estamos aqui para responder suas dúvidas e ouvir suas sugestões
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 shadow-soft animate-fade-in">
              <h2 className="text-3xl font-display font-bold text-primary mb-6">
                Envie uma Mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Telefone (opcional)
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Escreva sua mensagem aqui..."
                    required
                    rows={6}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up">
              <Card className="p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-2">
                      Endereço
                    </h3>
                    <p className="text-muted-foreground">
                      Rua dos Cafés, 123
                      <br />
                      Vila Madalena - São Paulo, SP
                      <br />
                      CEP: 05436-000
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-2">
                      Telefone
                    </h3>
                    <p className="text-muted-foreground mb-2">(11) 3456-7890</p>
                    <a
                      href="https://wa.me/5511987654321"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      WhatsApp: (11) 98765-4321
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-2">
                      E-mail
                    </h3>
                    <a
                      href="mailto:contato@aromabeans.com.br"
                      className="text-muted-foreground hover:text-accent transition-smooth"
                    >
                      contato@aromabeans.com.br
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-2">
                      Horário de Funcionamento
                    </h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda a Sexta: 7h às 20h</p>
                      <p>Sábado e Domingo: 8h às 18h</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-primary mb-12">
            Como Chegar
          </h2>
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-soft">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Mapa interativo será carregado aqui
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Integração com Google Maps
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
