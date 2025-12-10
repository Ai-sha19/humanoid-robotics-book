// This is a placeholder for the dynamic chapter page
// In a real implementation, this would fetch and render MDX content

import { notFound } from 'next/navigation';
import { mockChapters } from '@/src/lib/content';
import { MainLayout } from '@/src/components/layout/main-layout';
import { ChapterNav } from '@/src/components/chapters/chapter-nav';
import { Breadcrumbs } from '@/src/components/ui/breadcrumbs';

// This would normally be an MDX component, but we're using a TSX placeholder for now
export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapterId = parseInt(params.id);
  const chapter = mockChapters.find(c => c.id === chapterId);

  if (!chapter) {
    notFound();
  }

  // Find next and previous chapters
  const currentChapterIndex = mockChapters.findIndex(c => c.id === chapterId);
  const prevChapter = currentChapterIndex > 0 ? mockChapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < mockChapters.length - 1 ? mockChapters[currentChapterIndex + 1] : null;

  // Breadcrumb items
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: chapter.moduleTitle, href: `/modules/${chapter.moduleId}` },
    { label: chapter.title }
  ];

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={breadcrumbs} />

        <article className="prose prose-lg prose-blue dark:prose-invert max-w-none py-8">
          <h1>{chapter.title}</h1>
          <p className="text-lg text-muted-foreground">
            Estimated reading time: {chapter.estimatedReadingTime} minutes
          </p>

          <div className="mt-8">
            <p>
              This is the content for Chapter {chapter.id}: {chapter.title}.
              This chapter is part of the <strong>{chapter.moduleTitle}</strong> module
              and is rated as <strong>{chapter.difficulty}</strong> difficulty.
            </p>

            <p>
              In this chapter, we explore the fundamental concepts of Physical AI and
              humanoid robotics. This includes theoretical foundations, practical
              implementations, and real-world applications.
            </p>

            <h2>Learning Objectives</h2>
            <ul>
              <li>Understand the core principles of {chapter.title}</li>
              <li>Apply concepts to practical robotics scenarios</li>
              <li>Analyze real-world implementations</li>
            </ul>

            <h2>Key Concepts</h2>
            <p>
              Throughout this chapter, we will cover the essential concepts that form
              the foundation of Physical AI and humanoid robotics. These concepts are
              critical for understanding more advanced topics in subsequent chapters.
            </p>

            <h2>Practical Applications</h2>
            <p>
              We will also explore how these concepts apply to real-world scenarios,
              including implementation challenges and solutions that have been
              successfully deployed in actual humanoid robotics systems.
            </p>
          </div>
        </article>

        <ChapterNav
          currentChapterId={chapter.id}
          totalChapters={6}
          prevChapterId={prevChapter?.id}
          nextChapterId={nextChapter?.id}
        />
      </div>
    </MainLayout>
  );
}