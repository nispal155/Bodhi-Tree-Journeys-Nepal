import { TourPackage } from "./packages";
import { pilgrimagePackages } from "./pilgrimagePackages";
import { trekkingPackages } from "./trekkingPackages";
import { educationalPackages } from "./educationalPackages";
import { wildlifePackages } from "./wildlifePackages";
import { luxuryPackages } from "./luxuryPackages";
import { culturalPackages } from "./culturalPackages";

export const morePackages: TourPackage[] = [
  ...pilgrimagePackages,
  ...trekkingPackages,
  ...educationalPackages,
  ...wildlifePackages,
  ...luxuryPackages,
  ...culturalPackages
];
