import { InstagramPortfolio } from "./instagram-portfolio";
import { Youtube } from "./youtube";

export function BeyondPortfolio() {
  return (
    <div className="container mx-auto">
      <InstagramPortfolio />
      <Youtube />
    </div>
  );
}
