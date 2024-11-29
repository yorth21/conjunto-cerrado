import { AvatarLayout } from '@/components/layout/avatar-layout';
import { BreadcrumbLayout } from '@/components/layout/breadcrumb-layout';
import SideNav from '@/components/layout/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SideNav />
      <div className="flex flex-col sm:ml-14 sm:gap-4 sm:p-4">
        <div className="container">
          <div className="flex items-center justify-between pb-6">
            <BreadcrumbLayout />
            <AvatarLayout />
          </div>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
