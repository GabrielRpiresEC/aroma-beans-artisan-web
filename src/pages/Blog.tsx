import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import pourOver from "@/assets/pour-over.jpg";
import espressoMaking from "@/assets/espresso-making.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "A Arte do Pour Over: Guia Completo",
      excerpt:
        "Descubra como preparar o café perfeito usando o método pour over. Aprenda sobre temperatura, moagem e técnica de derramamento.",
      image: pourOver,
      category: "Métodos",
      date: "15 de Março, 2024",
      readTime: "5 min",
    },
    {
      title: "Como Escolher Grãos de Café Especial",
      excerpt:
        "Entenda as diferenças entre origens, processamentos e perfis de sabor para escolher o café ideal para seu paladar.",
      image: coffeeBeans,
      category: "Guias",
      date: "10 de Março, 2024",
      readTime: "7 min",
    },
    {
      title: "A História do Café no Brasil",
      excerpt:
        "Uma jornada pela rica história do café brasileiro, desde sua chegada até se tornar o maior produtor mundial.",
      image: espressoMaking,
      category: "Cultura",
      date: "5 de Março, 2024",
      readTime: "6 min",
    },
    {
      title: "5 Erros Comuns ao Fazer Espresso em Casa",
      excerpt:
        "Evite os erros mais frequentes e aprenda a extrair o espresso perfeito na sua máquina doméstica.",
      image: espressoMaking,
      category: "Dicas",
      date: "28 de Fevereiro, 2024",
      readTime: "4 min",
    },
    {
      title: "Café Cold Brew: Refrescante e Versátil",
      excerpt:
        "Aprenda a fazer cold brew em casa e descubra variações criativas desta bebida refrescante.",
      image: coffeeBeans,
      category: "Receitas",
      date: "20 de Fevereiro, 2024",
      readTime: "5 min",
    },
    {
      title: "O que é Café de Micro-lote?",
      excerpt:
        "Entenda o conceito de micro-lotes e por que esses cafés são tão especiais e valorizados.",
      image: pourOver,
      category: "Educação",
      date: "15 de Fevereiro, 2024",
      readTime: "6 min",
    },
  ];

  const categories = [
    "Todos",
    "Métodos",
    "Guias",
    "Cultura",
    "Dicas",
    "Receitas",
    "Educação",
  ];

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-center text-primary mb-6 animate-fade-in">
            Blog & Dicas
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Aprenda mais sobre café especial, métodos de preparo e cultura cafeeira
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`px-4 py-2 text-sm cursor-pointer transition-smooth ${
                  index === 0
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-lift shadow-soft cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-smooth hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <Badge
                    variant="secondary"
                    className="mb-3 bg-accent/10 text-accent"
                  >
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-display font-semibold text-primary mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-coffee text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-4">
              Receba Nossas Novidades
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Inscreva-se em nossa newsletter e receba dicas exclusivas, novidades e
              promoções especiais sobre cafés.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="px-6 py-3 rounded-lg bg-primary-foreground text-primary flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-8 py-3 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-smooth">
                Inscrever
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
