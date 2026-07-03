import { useParams, Navigate } from "react-router-dom";
import { getCaseStudy } from "@/content/case-studies";
import { CaseStudyTemplate } from "@/components/templates/CaseStudyTemplate";

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCaseStudy(slug) : undefined;

  if (!caseStudy) return <Navigate to="/portfolio" replace />;

  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
