import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Menu = () => {
  const menuCategories = [
    {
      name: "Cafés Especiais",
      items: [
        {
          name: "Espresso",
          description: "Shot puro e intenso de café especial",
          price: "R$ 8,00",
          badge: "Clássico",
        },
        {
          name: "Espresso Duplo",
          description: "Dose dupla de intensidade",
          price: "R$ 12,00",
        },
        {
          name: "Cappuccino",
          description: "Espresso, leite vaporizado e espuma cremosa",
          price: "R$ 14,00",
          badge: "Popular",
        },
        {
          name: "Latte",
          description: "Espresso suave com generosa quantidade de leite",
          price: "R$ 14,00",
        },
        {
          name: "Flat White",
          description: "Espresso duplo com microespuma aveludada",
          price: "R$ 16,00",
          badge: "Especial",
        },
        {
          name: "Macchiato",
          description: "Espresso 'manchado' com espuma de leite",
          price: "R$ 10,00",
        },
      ],
    },
    {
      name: "Métodos Especiais",
      items: [
        {
          name: "Pour Over",
          description: "Coado na hora, realça notas delicadas (V60 ou Chemex)",
          price: "R$ 18,00",
          badge: "Filtrado",
        },
        {
          name: "Prensa Francesa",
          description: "Corpo robusto e óleos naturais preservados",
          price: "R$ 16,00",
        },
        {
          name: "Aeropress",
          description: "Método versátil, limpo e saboroso",
          price: "R$ 16,00",
        },
      ],
    },
    {
      name: "Bebidas Frias",
      items: [
        {
          name: "Cold Brew",
          description: "Extração a frio por 12h, suave e refrescante",
          price: "R$ 16,00",
          badge: "Popular",
        },
        {
          name: "Iced Latte",
          description: "Espresso gelado com leite e gelo",
          price: "R$ 15,00",
        },
        {
          name: "Iced Cappuccino",
          description: "Cappuccino gelado e cremoso",
          price: "R$ 15,00",
        },
        {
          name: "Affogato",
          description: "Espresso quente sobre sorvete de creme",
          price: "R$ 18,00",
          badge: "Especial",
        },
      ],
    },
    {
      name: "Doces",
      items: [
        {
          name: "Brownie de Chocolate",
          description: "Denso e intenso, com notas de café",
          price: "R$ 12,00",
        },
        {
          name: "Cheesecake do Dia",
          description: "Cremoso e suave, sabor rotativo",
          price: "R$ 14,00",
        },
        {
          name: "Cookie Artesanal",
          description: "Crocante por fora, macio por dentro",
          price: "R$ 8,00",
        },
        {
          name: "Torta de Limão",
          description: "Equilíbrio perfeito entre doce e azedo",
          price: "R$ 14,00",
        },
      ],
    },
    {
      name: "Salgados",
      items: [
        {
          name: "Croissant de Presunto e Queijo",
          description: "Massa folhada artesanal",
          price: "R$ 12,00",
        },
        {
          name: "Pão de Queijo Mineiro",
          description: "Tradicional e quentinho",
          price: "R$ 8,00",
        },
        {
          name: "Sanduíche Natural",
          description: "Pão integral com peito de peru, queijo e vegetais",
          price: "R$ 16,00",
        },
        {
          name: "Tostado Integral",
          description: "Queijo, tomate e manjericão",
          price: "R$ 14,00",
        },
      ],
    },
  ];

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-center text-primary mb-6 animate-fade-in">
            Nosso Cardápio
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Cafés especiais e delícias preparadas com carinho
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in">
                <h2 className="text-4xl font-display font-bold text-primary mb-8 text-center md:text-left">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="p-6 hover-lift shadow-soft"
                      style={{ animationDelay: `${itemIndex * 0.05}s` }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-display font-semibold text-primary">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <Badge
                            variant="secondary"
                            className="bg-accent/10 text-accent"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {item.description}
                      </p>
                      <p className="text-2xl font-display font-bold text-accent">
                        {item.price}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gradient-coffee text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Informações Adicionais
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="opacity-90">
              Todos os nossos cafés são preparados com grãos especiais 100% arábica,
              torrados artesanalmente.
            </p>
            <p className="opacity-90">
              Oferecemos opções com leite vegetal (soja, amêndoa, aveia) sem custo
              adicional.
            </p>
            <p className="opacity-90">
              Consulte nosso cardápio de cafés sazonais e edições limitadas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
