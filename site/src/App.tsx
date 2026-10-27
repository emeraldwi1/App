import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import LegalLayout from "@/components/LegalLayout";
import CookieBanner from "@/components/CookieBanner";
import Toaster from "@/components/Toaster";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Blog from "@/pages/Blog";
import BlogTopics from "@/pages/BlogTopics";
import BlogTopic from "@/pages/BlogTopic";
import BlogPost from "@/pages/BlogPost";
import AppNotIncluded from "@/pages/AppNotIncluded";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<AppNotIncluded />} />
          <Route path="/register" element={<AppNotIncluded />} />
          <Route path="/trail" element={<AppNotIncluded />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<LegalLayout />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
        {/* Blog pages use their own header, as on the live site. */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/topics" element={<BlogTopics />} />
        <Route path="/blog/topics/:tag" element={<BlogTopic />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <CookieBanner />
      <Toaster />
    </BrowserRouter>
  );
}
