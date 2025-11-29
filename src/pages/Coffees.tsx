import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import espressoMaking from "@/assets/espresso-making.jpg";
import pourOver from "@/assets/pour-over.jpg";
import frenchPress from "@/assets/french-press.jpg";

const Coffees = () => {
  const coffeeOrigins = [
    {
      name: "Brasil",
      description:
        "Cafés brasileiros são conhecidos por seu corpo encorpado, notas de chocolate e caramelo, com acidez suave.",
      characteristics: "Doce, achocolatado, corpo médio a alto",
    },
    {
      name: "Colômbia",
      description:
        "Cafés colombianos apresentam equilíbrio perfeito entre doçura e acidez, com notas frutadas.",
      characteristics: "Frutado, cítrico, acidez média",
    },
    {
      name: "Etiópia",
      description:
        "Berço do café, oferece grãos com perfil floral e frutado complexo, acidez vibrante.",
      characteristics: "Floral, frutado, acidez alta",
    },
  ];

  const roastLevels = [
    {
      name: "Torra Clara",
      description:
        "Preserva as características naturais do grão, realçando acidez e notas frutadas.",
    },
    {
      name: "Torra Média",
      description:
        "Equilíbrio entre acidez e corpo, com doçura natural e notas de caramelo.",
    },
    {
      name: "Torra Escura",
      description:
        "Corpo intenso, baixa acidez, notas de chocolate amargo e caramelo torrado.",
    },
  ];

  const brewMethods = [
    {
      name: "Espresso",
      image: espressoMaking,
      description:
        "Método sob pressão que resulta em bebida concentrada e intensa, base para capuccinos e lattes.",
      time: "25-30 segundos",
    },
    {
      name: "Coado / Pour Over",
      image: pourOver,
      description:
        "Método manual que realça clareza e complexidade de sabores, ideal para cafés especiais.",
      time: "3-4 minutos",
    },
    {
      name: "Prensa Francesa",
      image: frenchPress,
      description:
        "Imersão total que resulta em bebida encorpada com óleos naturais preservados.",
      time: "4 minutos",
    },
    {
      name: "Aeropress",
      image: coffeeBeans,
      description:
        "Versátil e rápido, permite experimentação e produz café limpo e saboroso.",
      time: "1-2 minutos",
    },
  ];

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-center text-primary mb-6 animate-fade-in">
            Cafés & Tipos
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Descubra o fascinante mundo dos cafés especiais
          </p>
        </div>
      </section>

      {/* Coffee Education */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="origins" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="origins">Origens</TabsTrigger>
              <TabsTrigger value="roast">Torras</TabsTrigger>
              <TabsTrigger value="methods">Métodos</TabsTrigger>
            </TabsList>

            <TabsContent value="origins" className="space-y-8 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-primary mb-4">
                  Origens dos Grãos
                </h2>
                <p className="text-lg text-muted-foreground">
                  Cada região produtora confere características únicas ao café
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {coffeeOrigins.map((origin, index) => (
                  <Card
                    key={index}
                    className="p-6 hover-lift shadow-soft"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-48 bg-muted rounded-lg mb-4 overflow-hidden">
                      <img
                        src={coffeeBeans}
                        alt={origin.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                      {origin.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {origin.description}
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-semibold text-accent">
                        Características:
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {origin.characteristics}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="roast" className="space-y-8 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-primary mb-4">
                  Níveis de Torra
                </h2>
                <p className="text-lg text-muted-foreground">
                  A torra define intensidade, corpo e perfil de sabor
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {roastLevels.map((roast, index) => (
                  <Card
                    key={index}
                    className="p-6 hover-lift shadow-soft"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`h-24 rounded-lg mb-4 ${
                        index === 0
                          ? "bg-gradient-to-br from-amber-200 to-amber-400"
                          : index === 1
                          ? "bg-gradient-to-br from-amber-600 to-amber-800"
                          : "bg-gradient-to-br from-stone-800 to-stone-950"
                      }`}
                    />
                    <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                      {roast.name}
                    </h3>
                    <p className="text-muted-foreground">{roast.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="methods" className="space-y-8 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-primary mb-4">
                  Métodos de Preparo
                </h2>
                <p className="text-lg text-muted-foreground">
                  Cada método revela diferentes aspectos do café
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {brewMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover-lift shadow-soft"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={method.image}
                        alt={method.name}
                        className="w-full h-full object-cover transition-smooth hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-display font-semibold text-primary mb-2">
                        {method.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {method.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-accent">
                          Tempo de preparo:
                        </span>
                        <span className="text-muted-foreground">{method.time}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Flavor Profile */}
      <section className="py-20 bg-gradient-coffee text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Entendendo Perfis de Sabor
            </h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              O sabor do café é resultado de diversos fatores: origem dos grãos, altitude
              de cultivo, processamento, torra e método de preparo. Ao degustar,
              observe: aroma, acidez, corpo, doçura e finalização.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">Acidez</h3>
                <p className="text-sm opacity-90">
                  Vivacidade e brilho no paladar
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">Corpo</h3>
                <p className="text-sm opacity-90">Peso e textura na boca</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">Doçura</h3>
                <p className="text-sm opacity-90">Notas naturalmente adocicadas</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">
                  Finalização
                </h3>
                <p className="text-sm opacity-90">Sabor que permanece após beber</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Coffees;
