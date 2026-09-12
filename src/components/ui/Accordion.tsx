"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-outline-variant/30">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-6 text-left text-on-surface hover:text-primary transition-colors duration-200 cursor-pointer bg-surface-container-high/30 hover:bg-surface-container-high/50 rounded-[var(--radius-lg)] mb-2"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-on-surface-variant" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-on-surface-variant leading-[var(--line-height-relaxed)]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  question?: string;
  answer?: string;
  items?: { id: string; question: string; answer: string }[];
  className?: string;
}

export default function Accordion({
  question,
  answer,
  items,
  className = "",
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [isOpenSingle, setIsOpenSingle] = useState(false);

  if (question && answer) {
    return (
      <div className={className}>
        <AccordionItem
          question={question}
          answer={answer}
          isOpen={isOpenSingle}
          onToggle={() => setIsOpenSingle(!isOpenSingle)}
        />
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {items?.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}
