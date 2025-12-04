import { SidebarProvider } from "@/components/ui/sidebar";
import { Navbar, AppSidebar } from "./components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider >
      <AppSidebar />
      <main>
        <Navbar />
        {children}
      </main>
    </SidebarProvider>
  );
}
