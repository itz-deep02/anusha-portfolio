import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "My design process involves understanding user needs, creating wireframes, prototyping, testing, and iterating based on feedback to deliver user-centered solutions.",
  },
  {
    question:
      "How do you balance business goals with user needs in your designs?",
    answer:
      "I balance business goals with user needs by conducting thorough research, creating user personas, and ensuring that business objectives align with user experience through data-driven design decisions.",
  },
  {
    question: "How do you handle feedback on your designs?",
    answer:
      "I see feedback as perspective, not criticism. I listen carefully, ask clarifying questions, and balance feedback with user insights and product goals before iterating.",
  },
];

export default function FAQ() {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/testimonial.png')",
      }}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/90 backdrop-blur-sm rounded-lg border-0 shadow-sm px-6 py-2"
            >
              <AccordionTrigger className="text-slate-900 font-semibold text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
