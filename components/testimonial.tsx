import { Marquee } from "./ui/magicui/Marique";
import { Card } from "../src/components/ui/Card";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ananya Agrawal",
    role: "Reputation Manager, The Mavericks",
    avatar: "/images/linkedin-1.png",
    content: `I am happy to work with Anusha. She is a very patient designer, who takes all the feedback and suggestions with a good spirit. A sincere and dedicated professional who has a "never stop learning and exploring" mindset. I am sure she'll not miss an opportunity to amaze whoever works with her next. All the very best for your future endeavors Anusha!`,
    rating: 5,
    accentColor: "#34D399",
  },
  {
    name: "Devendra Singh Rana",
    role: "Lead Product Designer, Games 24x7",
    avatar: "/images/linkedin-2.png",
    content:
      "In short period of time at Games 24x7, Anusha has shown a positive attitude towards work, great zeal for learning and proven to be a great team player. Kudos to all the good work.",
    rating: 5,
    accentColor: "#F472B6",
  },
  {
    name: "Aman K Tripathi",
    role: "Sr. Product Designer, Games 24x7",
    avatar: "/images/linkedin-3.png",
    content:
      "Had the pleasure of working with Anusha, and she truly stands out for her creativity and positive attitude. She approaches challenges with fresh ideas and innovative thinking, often finding solutions that add real value to the team. Beyond her skills, she is collaborative, supportive, and always brings great energy to the workplace. With her talent and mindset, I’m confident she has great potential to grow and excel in any role she takes on.",
    rating: 5,
    accentColor: "#FFBB74",
  },
  {
    name: "Vikesh Nagar",
    role: "Co-founder, Eventoo",
    avatar: "/images/linkedin-4.png",
    content:
      "Anusha helped us with the design work for Eventoo and did a great job. She quickly understood what we were looking for and translated our ideas into clean and easy to use designs. Working with her was smooth and she was always open to feedback and quick with iterations. Really happy with the outcome and would definitely recommend her for any UI/UX work.",
    rating: 5,
    accentColor: "#60A5FA",
  },
  {
    name: "Sagar Pednekar",
    role: "Lead UX Designer, Games 24x7",
    avatar: "/images/linkedin-5.png",
    content:
      "Anusha is always a calm and composed colleague to work with. She is creative, detail-oriented, and consistently delivers thoughtful design solutions. I had the chance to work with her on a few projects, and she always took feedback positively and acted on it. She’s also very collaborative and brings a positive energy that makes teamwork easy and enjoyable. I highly recommend her.",
    rating: 5,
    accentColor: "#D1AEFF",
  },
  {
    name: "Saloni Pal",
    role: "UX Designer, TCS",
    avatar: "/images/linkedin-6.png",
    content:
      "Anusha possesses a unique talent for creating intuitive and visually appealing user experiences. Having collaborated closely with her, I can attest to her ability to craft user-centric solutions that exceed expectations. Anusha is a true team player, open to feedback, and always willing to collaborate with others to achieve the best outcomes. I highly recommend her to anyone seeking a versatile and skilled designer who can elevate both the user experience and visual appeal of their projects.",
    rating: 5,
    accentColor: "#9BDBFF",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/testimonial.png')",
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16 font-['FONTSPRING_DEMO_-_Recoleta_Alt_Bold']">
          Here’s some gossip about me
        </h2>

        <div className="relative overflow-hidden">
          <Marquee className="[--duration:30s]" pauseOnHover>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="w-80 h-[360px] mx-4 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white/80"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Quote icon */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: testimonial.accentColor }}
                  >
                    <Quote className="w-4 h-4 text-white" />
                  </div>

                  {/* Testimonial content */}
                  <div className="flex-1">
                    <p className="text-slate-700 text-sm font-['Geist'] leading-relaxed mb-6 line-clamp-6 overflow-hidden">
                      {testimonial.content}
                    </p>
                  </div>

                  {/* Author info */}
                  <div className="mt-auto flex items-center gap-3">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-600 text-xs">
                        {testimonial.role}
                      </div>
                    </div>
                    {/* LinkedIn icon */}
                    <div className="ml-auto">
                      <div className="w-6 h-6 bg-blue-700 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
