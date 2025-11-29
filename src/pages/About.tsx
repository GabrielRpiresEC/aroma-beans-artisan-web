import { Card } from "@/components/ui/card";
import { Coffee, Users, Heart, Award } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";

const About = () => {
  const values = [
    {
      icon: Coffee,
      title: "Qualidade",
      description:
        "Selecionamos apenas os melhores grãos de café especial, priorizando qualidade em cada etapa.",
    },
    {
      icon: Heart,
      title: "Paixão",
      description:
        "Amamos o que fazemos e isso se reflete em cada xícara que servimos aos nossos clientes.",
    },
    {
      icon: Users,
      title: "Comunidade",
      description:
        "Criamos um espaço acolhedor onde pessoas se conectam através do amor pelo café.",
    },
    {
      icon: Award,
      title: "Excelência",
      description:
        "Buscamos constantemente aprimorar nossos métodos e oferecer experiências memoráveis.",
    },
  ];

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-center text-primary mb-6 animate-fade-in">
            Nossa História
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Uma jornada dedicada à cultura do café especial
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={cafeInterior}
                alt="Interior da Aroma Beans Coffee"
                className="rounded-2xl shadow-warm w-full h-auto"
              />
            </div>
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-4xl font-display font-bold text-primary">
                Como Tudo Começou
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Aroma Beans Coffee nasceu em 2018 do sonho de três amigos apaixonados
                por café. Após viagens pelo Brasil conhecendo produtores e cafezais,
                decidimos criar um espaço onde pudéssemos compartilhar nossa paixão pelos
                cafés especiais.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Começamos com uma pequena cafeteria no coração de São Paulo, focando em
                qualidade, preparo artesanal e atendimento acolhedor. Hoje, somos
                reconhecidos como referência em cafés especiais na região.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa missão é proporcionar experiências únicas através do café,
                conectando pessoas e valorizando o trabalho de produtores dedicados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <Card className="p-8 shadow-soft">
              <h2 className="text-3xl font-display font-bold text-primary mb-4">
                Nossa Missão
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Democratizar o acesso a cafés especiais de alta qualidade, oferecendo uma
                experiência sensorial completa em um ambiente acolhedor, enquanto
                valorizamos produtores locais e práticas sustentáveis.
              </p>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-3xl font-display font-bold text-primary mb-4">
                Nossa Visão
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser reconhecida como a cafeteria de especialidade mais querida de São
                Paulo, expandindo nossa presença e impacto positivo na cultura do café
                brasileiro.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-primary mb-12">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-lift shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-coffee text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Nossa Equipe
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90 mb-12">
            Contamos com uma equipe apaixonada de baristas certificados e especialistas
            em café, dedicados a proporcionar a melhor experiência para você.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-32 w-32 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">
                Baristas Certificados
              </h3>
              <p className="opacity-90">
                Treinamento constante e paixão pelo café especial
              </p>
            </div>
            <div className="text-center">
              <div className="h-32 w-32 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                <Coffee className="h-16 w-16 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">
                Q-Graders
              </h3>
              <p className="opacity-90">
                Especialistas em classificação e avaliação de cafés
              </p>
            </div>
            <div className="text-center">
              <div className="h-32 w-32 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-16 w-16 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">
                Atendimento
              </h3>
              <p className="opacity-90">
                Equipe acolhedora pronta para criar momentos especiais
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
