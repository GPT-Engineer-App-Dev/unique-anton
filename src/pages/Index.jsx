
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI",
    description: "Exploring the potential impact of artificial intelligence on society and technology.",
    date: "2023-05-15",
  },
  {
    title: "Building Ethical AI Systems",
    description: "Discussing the importance of ethics in AI development and implementation.",
    date: "2023-06-02",
  },
  {
    title: "AI in Healthcare",
    description: "Examining how AI is revolutionizing medical diagnosis and treatment.",
    date: "2023-06-20",
  },
];

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Anton Osika's Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">
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
