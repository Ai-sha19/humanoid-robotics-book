'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <nav className="flex flex-col space-y-4">
          <Link href="/" className="text-lg font-medium">
            Home
          </Link>
          <Link href="/chapters" className="text-lg font-medium">
            Chapters
          </Link>
          <Link href="/modules" className="text-lg font-medium">
            Modules
          </Link>
          <Link href="/chat" className="text-lg font-medium">
            AI Chat
          </Link>
          <Link href="/account" className="text-lg font-medium">
            Account
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}