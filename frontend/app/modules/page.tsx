import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import { H1, H2 } from '@/src/components/ui/typography';
import { mockModules, mockChapters } from '@/src/lib/content';

export default function ModulesPage() {
  return (
    <div className="container mx-auto py-8">
      <H1 className="mb-8 text-center">Course Modules</H1>

      <div className="grid gap-8">
        {mockModules.map((module) => {
          const moduleChapters = mockChapters.filter(ch => ch.moduleId === module.id);

          return (
            <div key={module.id} className="glass-card p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <H2 className="mb-2">{module.title}</H2>
                  <p className="text-muted-foreground">{module.description}</p>
                </div>
                <Button asChild>
                  <Link href={`/modules/${module.id}`}>View Module</Link>
                </Button>
              </div>

              <div className="mt-4">
                <h3 className="font-medium mb-3">Chapters in this module:</h3>
                <ul className="space-y-2">
                  {moduleChapters.map(chapter => (
                    <li key={chapter.id} className="flex justify-between items-center p-2 hover:bg-glass rounded-md">
                      <Link
                        href={`/chapters/${chapter.id}`}
                        className="hover:underline flex-1"
                      >
                        {chapter.title}
                      </Link>
                      <span className="text-sm text-muted-foreground ml-2">
                        ({chapter.difficulty})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}