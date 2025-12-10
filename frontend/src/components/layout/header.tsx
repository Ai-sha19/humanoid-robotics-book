'use client';

import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

type HeaderProps = {
  setSidebarOpen: (open: boolean) => void;
};

export function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <header className="glass-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="md:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </Button>
          <Link href="/" className="text-xl font-bold gradient-text">
            Physical AI & Humanoid Robotics
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link href="/chapters" className="text-sm font-medium hover:text-primary transition-colors">
            Chapters
          </Link>
          <Link href="/modules" className="text-sm font-medium hover:text-primary transition-colors">
            Modules
          </Link>
          <Link href="/chat" className="text-sm font-medium hover:text-primary transition-colors">
            AI Chat
          </Link>
          <Link href="/account" className="text-sm font-medium hover:text-primary transition-colors">
            Account
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
}