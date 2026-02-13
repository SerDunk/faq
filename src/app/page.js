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
    question: "Can I use GoalSeek without linking my bank accounts?",
    answer:
      "Yes, you can still track your spending manually, access health checks, and use coaching features without linking your bank accounts. However, linking your accounts unlocks richer insights and provides a smoother, more personalized experience.",
  },
  {
    id: "faq-2",
    question: "How secure is my financial data?",
    answer:
      "We use bank-grade encryption and follow strict data privacy standards to ensure your financial information remains protected. Your data stays secure and fully under your control at all times.",
  },
  {
    id: "faq-3",
    question: "What is Account Aggregator (AA), and is it safe?",
    answer:
      "Account Aggregator (AA) is an RBI-regulated framework that allows you to securely connect your financial accounts with your explicit consent. GoalSeek uses this system to safely fetch your financial data. You remain in complete control, and your consent is required every time data is accessed.",
  },
  {
    id: "faq-4",
    question: "Does GoalSeek sell or share my data with third parties?",
    answer:
      "No, we never sell, rent, or share your personal data for marketing, advertising, or any third-party commercial purposes.",
  },
  {
    id: "faq-5",
    question: "Can I switch between free and premium anytime?",
    answer:
      "Yes, you can upgrade or downgrade your subscription at any time through the app settings.",
  },
  {
    id: "faq-6",
    question: "What happens to my data if my premium subscription expires?",
    answer:
      "If your premium subscription expires, you will continue to have access to your data and all free features. Premium insights and coaching sessions will pause until you renew your subscription.",
  },
  {
    id: "faq-7",
    question:
      "Does GoalSeek share my personal data with my employer if I use a company-provided subscription?",
    answer:
      "No, your employer will never have access to your individual financial data. If your subscription is company-sponsored, employers only receive aggregated and anonymised reports, such as overall participation metrics. Individual user data is never shared.",
  },
  {
    id: "faq-8",
    question: "What happens if I stop using the app?",
    answer:
      "Your data remains securely stored and can be permanently deleted upon request. GoalSeek does not store or retain your data without your consent.",
  },
  {
    id: "faq-9",
    question: "What kind of financial guidance does GoalSeek provide?",
    answer:
      "You receive access to 1:1 coaching sessions with SEBI-registered financial advisors. Our advisors provide unbiased guidance and do not promote third-party products. They help you plan finances, reduce debt, improve savings, and build better financial habits based on your personal financial data and goals.",
  },
  {
    id: "faq-10",
    question: "Is GoalSeek a SEBI-registered investment advisor?",
    answer:
      "Yes, GoalSeek operates under SEBI RIA guidelines for financial advice. This ensures that all financial guidance provided is regulated, compliant, and unbiased.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#EFEDF4] px-3 xs:px-0 font-lexend">
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
          <p className="text-xs text-white w-40 xs:w-50 sm:w-70">
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
