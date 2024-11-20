import { AppSidebar } from "@/components/app-sidebar";
import LanguageSwitcher from "@/components/language-switcher";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
            </div>
            <div className="ml-auto p-2">
              <LanguageSwitcher />
            </div>
          </header>
          {children}
          <Toaster />
        </SidebarInset>
      </SidebarProvider>
    </SessionProvider>
  );
}
