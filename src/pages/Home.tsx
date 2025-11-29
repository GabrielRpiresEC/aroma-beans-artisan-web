import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Coffee, Heart, Leaf, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-coffee.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import espressoMaking from "@/assets/espresso-making.jpg";

const Home = () => {
  const featuredCoffees = [
    {
      name: "Espresso Tradicional",
      description: "Intenso e encorpado, com notas de chocolate e caramelo",
      image: espressoMaking,
    },
    {
      name: "Pour Over",
      description: "Delicado e aromático, realça as notas frutadas do café",
      image: cafeInterior,
    },
    {
      name: "Cold Brew",
      description: "Refrescante e suave, perfeito para dias quentes",
      image: heroImage,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 text-balance">
            Bem-vindo à Aroma Beans Coffee
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Descubra a arte do café especial. Cada xícara é uma experiência única.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              <Link to="/cardapio">
                Ver Cardápio <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-card/90 backdrop-blur-sm hover:bg-card text-lg px-8"
            >
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Paixão em Cada Xícara
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na Aroma Beans Coffee, acreditamos que café é mais do que uma bebida – é
              uma experiência sensorial completa. Trabalhamos com grãos especiais
              cuidadosamente selecionados e métodos de preparo artesanais para
              proporcionar momentos inesquecíveis.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover-lift bg-card shadow-soft">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                Cafés Especiais
              </h3>
              <p className="text-muted-foreground">
                Grãos selecionados das melhores regiões produtoras do Brasil e do
                mundo
              </p>
            </Card>

            <Card className="p-8 text-center hover-lift bg-card shadow-soft">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                Preparo Artesanal
              </h3>
              <p className="text-muted-foreground">
                Baristas treinados que dominam diversos métodos de extração
              </p>
            </Card>

            <Card className="p-8 text-center hover-lift bg-card shadow-soft">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                Sustentabilidade
              </h3>
              <p className="text-muted-foreground">
                Compromisso com práticas sustentáveis e comércio justo
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Coffees */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-primary mb-12">
            Nossos Destaques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCoffees.map((coffee, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-lift bg-card shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-full h-full object-cover transition-smooth hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {coffee.name}
                  </h3>
                  <p className="text-muted-foreground">{coffee.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/cafes">
                Explorar Todos os Cafés <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-coffee text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Visite Nossa Cafeteria
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experimente nossos cafés especiais em um ambiente aconchegante e
            convidativo. Venha nos fazer uma visita!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link to="/contato">Entre em Contato</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 border-primary-foreground/20 text-primary-foreground"
            >
              <Link to="/blog">Leia Nosso Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
