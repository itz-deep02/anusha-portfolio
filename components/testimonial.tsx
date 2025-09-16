import Image from "next/image";
import { Marquee } from "./ui/magicui/Marique";
import { Card } from "./ui/Card";

const testimonials = [
  {
    name: "Sahil Rana",
    role: "Graphic Designer, Games 24*7",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    content:
      "I worked with Games 24*7 Anusha attitude towards work is great and she has proven to be a great team player with good work.",
    rating: 5,
  },
  {
    name: "Anusha",
    role: "UX Designer, TCS",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    content:
      "Anusha possesses a unique talent for creating intuitive and visually appealing designs. Having collaborated closely with her, I can attest to her ability to craft user-centric solutions that exceed expectations. Anusha is a versatile and skilled designer who can elevate both the user experience and visual appeal of any project.",
    rating: 5,
  },
  {
    name: "Ananya Agrawal",
    role: "Reputation Manager, The Mavericks",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    content:
      "I am happy to work with Anusha. She is a very patient designer, who takes a lot of time to understand the requirements and is a very dedicated professional who has a 'never stop learning and exploring' mindset. I am sure she'll not miss an opportunity to amaze whoever works with her next. All the very best for your future endeavours Anusha!",
    rating: 5,
  },
  {
    name: "Devendra Singh Rana",
    role: "Sr. Product Designer, Games 24*7",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    content:
      "In short period of time at Games 24*7 Anusha has shown a positive attitude towards work, great zeal for learning and proven to be a great team player with good work.",
    rating: 5,
  },
  {
    name: "Anusha",
    role: "UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
    content:
      "Anusha possesses a unique talent for creating intuitive and visually appealing designs. Having collaborated closely with her, I can attest to her ability to craft user-centric solutions that exceed expectations.",
    rating: 5,
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
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          Testimonials
        </h2>

        <div className="relative overflow-hidden">
          <Marquee className="[--duration:30s]" pauseOnHover>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="w-80 h-[360px] mx-4 bg-white/90 backdrop-blur-sm border-0 shadow-lg"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-600 text-lg font-bold">
                      &quot;
                    </span>
                  </div>

                  {/* Testimonial content */}
                  <div className="flex-1">
                    <p className="text-slate-700 text-sm leading-relaxed mb-6 line-clamp-6 overflow-hidden">
                      {testimonial.content}
                    </p>
                  </div>

                  {/* Author info */}
                  <div className="mt-auto flex items-center gap-3">
                    {/* <Image
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
          width={40}
          height={40}
        /> */}
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
