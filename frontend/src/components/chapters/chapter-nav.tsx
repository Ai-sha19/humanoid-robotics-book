import Link from 'next/link';
import { Button } from '@/components/ui/button';

type ChapterNavProps = {
  currentChapterId: number;
  totalChapters: number;
  nextChapterId?: number;
  prevChapterId?: number;
};

export function ChapterNav({
  currentChapterId,
  totalChapters,
  nextChapterId,
  prevChapterId
}: ChapterNavProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6 border-t border-glass">
      <div className="text-sm text-muted-foreground">
        Chapter {currentChapterId} of {totalChapters}
      </div>

      <div className="flex gap-2">
        {prevChapterId && (
          <Button variant="outline" asChild>
            <Link href={`/chapters/${prevChapterId}`}>
              ← Previous
            </Link>
          </Button>
        )}

        {nextChapterId && (
          <Button asChild>
            <Link href={`/chapters/${nextChapterId}`}>
              Next →
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}