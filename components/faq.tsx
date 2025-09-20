import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../src/components/ui/Accordion";

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "I start with understanding the problem, gather user and business insights, brainstorm ideas, create prototypes, test with users, and refine until the solution feels both impactful and intuitive.",
  },
  {
    question: "How do you handle feedback on your designs?",
    answer:
      "I balance business goals with user needs by aligning both early on, mapping objectives against user insights, and designing solutions that drive impact without breaking trust.",
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
      id="FAQ"
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
