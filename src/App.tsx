import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/HomePage";

const ServicesIndexPage = lazy(() => import("@/pages/ServicesIndexPage").then((m) => ({ default: m.ServicesIndexPage })));
const ServicePage = lazy(() => import("@/pages/ServicePage").then((m) => ({ default: m.ServicePage })));
const IndustriesIndexPage = lazy(() => import("@/pages/IndustriesIndexPage").then((m) => ({ default: m.IndustriesIndexPage })));
const IndustryPage = lazy(() => import("@/pages/IndustryPage").then((m) => ({ default: m.IndustryPage })));
const PortfolioPage = lazy(() => import("@/pages/PortfolioPage").then((m) => ({ default: m.PortfolioPage })));
const CaseStudyPage = lazy(() => import("@/pages/CaseStudyPage").then((m) => ({ default: m.CaseStudyPage })));
const BlogIndexPage = lazy(() => import("@/pages/BlogIndexPage").then((m) => ({ default: m.BlogIndexPage })));
const BlogPostPage = lazy(() => import("@/pages/BlogPostPage").then((m) => ({ default: m.BlogPostPage })));
const AboutPage = lazy(() => import("@/pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const CareersPage = lazy(() => import("@/pages/CareersPage").then((m) => ({ default: m.CareersPage })));
const ContactPage = lazy(() => import("@/pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-signal border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="services"
            element={
              <Suspense fallback={<PageLoader />}>
                <ServicesIndexPage />
              </Suspense>
            }
          />
          <Route
            path="services/:slug"
            element={
              <Suspense fallback={<PageLoader />}>
                <ServicePage />
              </Suspense>
            }
          />
          <Route
            path="industries"
            element={
              <Suspense fallback={<PageLoader />}>
                <IndustriesIndexPage />
              </Suspense>
            }
          />
          <Route
            path="industries/:slug"
            element={
              <Suspense fallback={<PageLoader />}>
                <IndustryPage />
              </Suspense>
            }
          />
          <Route
            path="portfolio"
            element={
              <Suspense fallback={<PageLoader />}>
                <PortfolioPage />
              </Suspense>
            }
          />
          <Route
            path="portfolio/:slug"
            element={
              <Suspense fallback={<PageLoader />}>
                <CaseStudyPage />
              </Suspense>
            }
          />
          <Route
            path="blog"
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogIndexPage />
              </Suspense>
            }
          />
          <Route
            path="blog/:slug"
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogPostPage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<PageLoader />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="careers"
            element={
              <Suspense fallback={<PageLoader />}>
                <CareersPage />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
