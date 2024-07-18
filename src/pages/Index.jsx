
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI",
    description: "Exploring the potential impact of artificial intelligence on society and technology.",
    date: "2023-05-15",
    image: "https://source.unsplash.com/random/800x600?ai",
  },
  {
    title: "Building Ethical AI Systems",
    description: "Discussing the importance of ethics in AI development and implementation.",
    date: "2023-06-02",
    image: "https://source.unsplash.com/random/800x600?ethics",
  },
  {
    title: "AI in Healthcare",
    description: "Examining how AI is revolutionizing medical diagnosis and treatment.",
    date: "2023-06-20",
    image: "https://source.unsplash.com/random/800x600?healthcare",
  },
];

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Anton Osika's Blog</h1>
        <p className="text-xl text-gray-600">Exploring the frontiers of AI and technology</p>
      </header>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle className="text-2xl">{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{post.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Read More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
