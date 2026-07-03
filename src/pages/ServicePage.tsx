import { useParams, Navigate } from "react-router-dom";
import { getService } from "@/content/services";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <Navigate to="/services" replace />;

  return <ServicePageTemplate service={service} />;
}
