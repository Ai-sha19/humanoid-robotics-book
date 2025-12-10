import { MainLayout } from '@/src/components/layout/main-layout';

export default function ModulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-8">
        {children}
      </div>
    </MainLayout>
  );
}