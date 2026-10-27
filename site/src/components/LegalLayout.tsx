import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LegalNav from "./LegalNav";
import LegalFooter from "./LegalFooter";

// Contact, Privacy and Terms use a simpler header and footer on the live site.
export default function LegalLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <LegalNav />
      <Outlet />
      <LegalFooter />
    </div>
  );
}
