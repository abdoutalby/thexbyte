import { Outlet } from "react-router-dom";
import { Header, ScrollToTop } from "./Header";
import { Footer } from "./Footer";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/seo/StructuredData";

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <OrganizationSchema />
      <LocalBusinessSchema />
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
