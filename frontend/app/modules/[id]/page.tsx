import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import { H1, H2 } from '@/src/components/ui/typography';
import { mockModules, mockChapters } from '@/src/lib/content';

export default function ModulePage({ params }: { params: { id: string } }) {
  const moduleId = parseInt(params.id);
  const module = mockModules.find(m => m.id === moduleId);

  if (!module) {
    notFound();
  }

  const moduleChapters = mockChapters.filter(ch => ch.moduleId === moduleId);

  return (
    <div className="container mx-auto py-8">
      <H1 className="mb-6">{module.title}</H1>
      <p className="text-muted-foreground mb-8">{module.description}</p>

      <div className="mb-8">
        <Button asChild>
          <Link href={`/chapters/${moduleChapters[0]?.id || '#'}`}>
            Start Module
          </Link>
        </Button>
      </div>

      <H2 className="mb-6">Chapters in this Module</H2>
      <div className="space-y-4">
        {moduleChapters.map((chapter) => (
          <div key={chapter.id} className="glass-card p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium">{chapter.title}</h3>
              <p className="text-sm text-muted-foreground">
                Difficulty: {chapter.difficulty} | Reading time: ~{chapter.estimatedReadingTime} min
              </p>
            </div>
            <Button asChild>
              <Link href={`/chapters/${chapter.id}`}>Read Chapter</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}