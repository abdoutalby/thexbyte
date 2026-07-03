import { useParams, Navigate } from "react-router-dom";
import { getIndustry } from "@/content/industries";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";

export function IndustryPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustry(slug) : undefined;

  if (!industry) return <Navigate to="/industries" replace />;

  return <IndustryPageTemplate industry={industry} />;
}
