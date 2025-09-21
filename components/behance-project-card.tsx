import Link from "next/link";
import { InteractiveHoverButton } from "./ui/magicui/InteractiveHoverButton";

export function BehanceProject() {
  return (
    <div className="pb-20 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Travellogo Travel Portal */}
          <ProjectCard
            title="Travellogo Travel Portal"
            tags={["Travel Portal Concept", "Website Design"]}
            mockupImage="/images/behance-project-2.png"
            backgroundType="purple"
            href="https://www.behance.net/gallery/155999101/Travellogo-Website-Design"
          />

          {/* Ovi Mobile App */}
          <ProjectCard
            title="Ovi Mobile App"
            tags={["UI UX App", "Design Concept"]}
            mockupImage="/images/behance-project-1.png"
            backgroundType="beige"
            href="https://www.behance.net/gallery/124598595/Ovi-Mobile-App-Design-Concept"
          />

          {/* Payflow Money Transfer */}
          <ProjectCard
            title="Payflow- Money Transfer"
            tags={["Fintech App", "Fund Transferring App"]}
            mockupImage="/images/behance-project-3.png"
            backgroundType="purple"
            href="https://www.behance.net/gallery/177690757/Payflow-Money-Transferring-App-Design"
          />
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  tags: string[];
  mockupImage: string;
  backgroundType: "purple" | "beige";
  className?: string;
  href: string;
}

export function ProjectCard({
  title,
  tags,
  mockupImage,
  backgroundType,
  className = "",
  href,
}: ProjectCardProps) {
  const backgroundImage =
    backgroundType === "purple"
      ? "/images/purple-gradient.png"
      : "/images/beige-gradient.png";

  const textColor =
    backgroundType === "purple" ? "text-white" : "text-gray-800";

  return (
    <div
      className={`relative rounded-3xl p-8 flex flex-col ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Mockup Image Container */}
      <div className="mb-4 relative min-h-0">
        <div className="w-full h-fit bg-white rounded-3xl shadow-lg overflow-hidden">
          <img
            src={mockupImage}
            alt={title}
            className="w-full h-full object-contain rounded-3xl"
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h2
          className={`text-2xl font-bold ${textColor} text-balance leading-tight`}
        >
          {title}
        </h2>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-[0px_1.340000033378601px_4.336996555328369px_0px_rgba(0,0,0,0.25)] ${
                backgroundType === "purple" && " text-orange-50"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-3">
          <Link href={href}>
            <InteractiveHoverButton className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 w-fit">
              View case study
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
