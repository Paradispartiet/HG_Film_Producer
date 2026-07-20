import { FilmCraftLibraryOverlay } from "./FilmCraftLibraryOverlay";
import { FilmResearchControlRoom } from "./FilmResearchControlRoom";
import { FilmverketPlatform } from "./FilmverketPlatform";

interface LandingScreenProps {
  readonly onStart: () => void;
  readonly onContinue: () => void;
  readonly onProductionCases: () => void;
  readonly hasSave: boolean;
}

export function LandingScreen(props: LandingScreenProps) {
  return (
    <>
      <FilmverketPlatform {...props} />
      <FilmCraftLibraryOverlay />
      <FilmResearchControlRoom />
    </>
  );
}
