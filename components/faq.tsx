"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "Що входить у хімчистку салону автомобіля?",
    answer:
      "Це послуга для тих, хто цінує свій автомобіль, час і комфорт. Ми не «освіжаємо» салон — ми повністю відновлюємо його стан. Попередня мийка кузова — чистота без компромісів. Акуратний збір усіх особистих речей. Глибоке очищення сидінь професійним обладнанням. Опрацювання кожного елемента: підлокітники, ніші, двері, багажник. Делікатна волога чистка центральної консолі — жодного ризику для електроніки. Підлога та боковини з професійною хімією. Кондиціонер для шкіри та догляд за всіма пластиковими панелями. Повна сушка перед віддачею авто. Ви отримуєте ідеально чистий, доглянутий салон, у який приємно сідати — як у новий автомобіль.",
  },
  {
    question: "Скільки часу займає хімчистка салону?",
    answer:
      "Повна хімчистка салону зазвичай займає від 1 до 2 днів залежно від ступеня забруднення та розміру автомобіля. Рекомендуємо залишати авто на 2 дні для найкращого результату та повного висихання.",
  },
  {
    question: "Які види полірування кузова ви пропонуєте?",
    answer:
      "Ми виконуємо відновлювальне полірування (видалення подряпин, голограм та потертостей) та захисне полірування (нанесення захисного складу для блиску та захисту від зовнішніх впливів). Також пропонуємо комплексне полірування, що поєднує обидва етапи.",
  },
  {
    question: "Скільки тримається ефект полірування?",
    answer:
      "Ефект захисного полірування зберігається від 3 до 6 місяців залежно від умов експлуатації. Якщо додатково нанести керамічне покриття після полірування — захист тримається до 1 року.",
  },
  {
    question: "Що таке антихром і для чого він потрібен?",
    answer:
      "Антихром — це коли авто з «дядьківського» миттєво стає злим і стильним. Прибираємо весь зайвий блиск і робимо акуратний чорний акцент. Нічого не пошкоджуємо — навпаки, захищаємо елементи від сонця, подряпин і сколів. У результаті машина виглядає так, ніби виїхала з салону топової комплектації. Вартість залежить від кількості елементів.",
  },
  {
    question: "Чи можна повернути хром після антихрому?",
    answer:
      "Так, якщо антихром виконано за допомогою вінілової плівки — його можна повністю зняти без пошкодження оригінального хрому. При фарбуванні повернення до заводського стану складніше, тому ми рекомендуємо плівковий метод.",
  },
  {
    question: "Як записатися на детейлінг?",
    answer:
      "Записатися можна через Instagram (@4gear.odesa) у дірект або зателефонувавши за номером +380 99 313 69 92. Ми підберемо зручний для вас час та узгодимо обсяг робіт.",
  },
  {
    question: "Чи надаєте ви гарантію на свої послуги?",
    answer:
      "Так, ми надаємо гарантію на всі наші послуги. На керамічне покриття — до 2 років, на бронеплівку — до 5 років, на полірування та хімчистку — 30 днів. Деталі гарантії обговорюються індивідуально.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-[#3c3c3c]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[#f0e060]"
      >
        <span className="pr-4 font-heading text-sm font-semibold text-[#f0f0f0] sm:text-base">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#f0e060] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-[#c0c0c0]">{answer}</p>
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section className="bg-[#111111] py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-4xl lg:text-5xl">
            Часті <span className="text-[#f0e060]">питання</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#c0c0c0]">
            Відповіді на найпопулярніші запитання про наші послуги детейлінгу в Одесі.
          </p>
        </div>

        <div className="mt-12">
          {faqItems.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
