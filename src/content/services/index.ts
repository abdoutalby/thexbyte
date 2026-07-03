import { mobileAppDevelopment, webDevelopment } from "./mobile-web";
import { customSoftwareDevelopment, flutterDevelopment, javaSpringDevelopment } from "./custom-flutter-java";
import { aiDevelopment, iotDevelopment, cloudDevops } from "./ai-iot-cloud";
import { mvpDevelopment, dedicatedDevelopmentTeam, softwareMaintenance } from "./mvp-team-maintenance";
import type { ServiceContent } from "../types";

export const allServices: ServiceContent[] = [
  mobileAppDevelopment,
  webDevelopment,
  customSoftwareDevelopment,
  flutterDevelopment,
  javaSpringDevelopment,
  aiDevelopment,
  iotDevelopment,
  cloudDevops,
  mvpDevelopment,
  dedicatedDevelopmentTeam,
  softwareMaintenance,
];

export const servicesBySlug = Object.fromEntries(
  allServices.map((s) => [s.slug, s])
) as Record<string, ServiceContent>;

export function getService(slug: string): ServiceContent | undefined {
  return servicesBySlug[slug];
}

export {
  mobileAppDevelopment,
  webDevelopment,
  customSoftwareDevelopment,
  flutterDevelopment,
  javaSpringDevelopment,
  aiDevelopment,
  iotDevelopment,
  cloudDevops,
  mvpDevelopment,
  dedicatedDevelopmentTeam,
  softwareMaintenance,
};
