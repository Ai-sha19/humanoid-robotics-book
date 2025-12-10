'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { XIcon } from 'lucide-react';

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const chapters = [
    { id: 1, title: 'Introduction to Physical AI', module: 'Module 1' },
    { id: 2, title: 'Robotics Fundamentals', module: 'Module 1' },
    { id: 3, title: 'Humanoid Control Systems', module: 'Module 2' },
    { id: 4, title: 'Machine Learning for Robotics', module: 'Module 2' },
    { id: 5, title: 'Advanced Humanoid Locomotion', module: 'Module 3' },
    { id: 6, title: 'Real-world Applications', module: 'Module 4' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out
                   ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-64`}
      >
        <div className="glass-card h-full flex flex-col min-h-screen">
          <div className="p-4 border-b border-glass">
            <h2 className="text-lg font-semibold">Course Content</h2>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {chapters.map((chapter) => (
                <li key={chapter.id}>
                  <Link
                    href={`/chapters/${chapter.id}`}
                    className="block p-2 rounded-md hover:bg-glass transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="font-medium">{chapter.title}</div>
                    <div className="text-xs text-muted-foreground">{chapter.module}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-glass">
            <Button
              variant="outline"
              className="w-full md:hidden"
              onClick={() => setIsOpen(false)}
            >
              Close Menu
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}