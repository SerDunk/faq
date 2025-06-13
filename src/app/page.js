import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const faqData = [
  {
    id: "faq-1",
    question: "How is my personal data protected when using the calculators?",
    answer:
      "We take data security seriously and implement multiple layers of protection. All data is encrypted both during transmission (using SSL connections) and when stored on our servers. Access to your information is strictly limited to authorized personnel only, and we conduct regular security audits to ensure our systems remain secure. Additionally, we have comprehensive incident management procedures in place to quickly address any potential security issues.",
  },
  {
    id: "faq-2",
    question: "What information do you collect when I use the calculators?",
    answer:
      "We collect information through three main methods: directly from your input when using our calculators, automatically through cookies and analytics to improve your experience, and occasionally from third parties such as business partners or service providers. We only collect data that is necessary to provide our services effectively and enhance your user experience.",
  },
  {
    id: "faq-3",
    question: "Why do you need my data and how is it used?",
    answer:
      "We use your data for several important purposes: to provide our calculator services, fulfill any contractual obligations from purchases or subscriptions, enable essential site features like user accounts and personalized analysis, communicate important updates or support information, and process any payments securely. All data usage is directly related to improving and delivering our services to you.",
  },
  {
    id: "faq-4",
    question: "What is the legal basis for processing my personal information?",
    answer:
      "We process your personal data based on four main legal grounds: your explicit consent for specific uses, contractual necessity to provide our services, legal obligations we must comply with as a business, and legitimate interests in improving our services while respecting your privacy rights. We always ensure we have a valid legal basis before processing any personal information.",
  },
  {
    id: "faq-5",
    question: "Can I control what data you collect and how it's used?",
    answer:
      "Absolutely! You have full control over your data. You can review, update, or delete your personal information at any time. You can also opt out of non-essential data collection like analytics cookies through your browser settings. If you have any questions about your data or want to exercise your privacy rights, please contact our support team who will be happy to assist you.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#EFEDF4] px-3 font-lexend">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header Card */}
        <div
          className="rounded-xl px-6 py-5 text-white relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 113px 357px at center, #8362D1 -60%, #192226 130%)",
          }}
        >
          {/* Top-right FAQ Icon */}
          <div className="absolute top-15 xs:top-10 sm:top-6 sm:right-12 right-4  ">
            <Image
              src="/faq.png"
              alt="FAQ Icon"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          <h1 className="text-sm w-30 xs:w-40 sm:w-70 font-lexend font-semibold mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-xs text-white w-30 xs:w-40 sm:w-70">
            Get answers to common questions about data security, privacy, and
            how we protect your information.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-2xl mb-4 overflow-hidden border-none shadow-xl"
                style={{
                  background: "linear-gradient(to right, #E3E3E3, #FFFFFF)",
                }}
              >
                <AccordionTrigger className="px-4 py-4 text-left hover:no-underline text-sm font-semibold text-[#323233] pr-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
