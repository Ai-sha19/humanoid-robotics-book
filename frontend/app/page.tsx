import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import { MainLayout } from '@/src/components/layout/main-layout';
import { H1, H2, Muted } from '@/src/components/ui/typography';
import { mockModules } from '@/src/lib/content';

export default function HomePage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <H1 className="mb-6 gradient-text">Physical AI & Humanoid Robotics</H1>
          <p className="text-xl text-muted-foreground mb-8">
            A comprehensive textbook for students and professionals applying their AI knowledge
            to control Humanoid Robots in simulated and real-world environments.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/chapters">Start Learning</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/modules">Browse Modules</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {mockModules.map((module) => (
            <div key={module.id} className="glass-card p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
              <div className="text-sm">
                <span className="font-medium">{module.totalChapters}</span> chapters
              </div>
              <Button variant="outline" size="sm" className="mt-4" asChild>
                <Link href={`/modules/${module.id}`}>Explore</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <H2 className="mb-6 text-center">About This Textbook</H2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-2xl font-bold mb-2">AI-Powered</div>
              <p className="text-muted-foreground">
                Integrated RAG chatbot to answer questions based on the entire book content
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-2xl font-bold mb-2">Personalized</div>
              <p className="text-muted-foreground">
                Content adapts to your background (software/hardware focus)
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-2xl font-bold mb-2">Multilingual</div>
              <p className="text-muted-foreground">
                Available in English and Urdu for broader accessibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}