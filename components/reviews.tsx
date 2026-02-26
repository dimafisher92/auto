import { Star } from "lucide-react"

const reviews = [
  {
    name: "Олександр К.",
    rating: 5,
    text: "Відмінний сервіс! Привіз машину на діагностику, все зробили швидко та якісно. Ціни адекватні, майстри знають свою справу. Рекомендую!",
  },
  {
    name: "Марина С.",
    rating: 5,
    text: "Дуже задоволена обслуговуванням. Зробили ТО за регламентом, замінили все що потрібно. Все чесно, без нав'язування зайвих послуг.",
  },
  {
    name: "Дмитро П.",
    rating: 5,
    text: "Вже не перший раз звертаюся до 4GEAR. Завжди якісно, вчасно і за розумною ціною. Хлопці — професіонали своєї справи!",
  },
  {
    name: "Ірина В.",
    rating: 5,
    text: "Порекомендували друзі, і я не пошкодувала. Швидко знайшли проблему з електрикою, яку інші сервіси не могли визначити. Дякую!",
  },
  {
    name: "Андрій Л.",
    rating: 5,
    text: "Ремонт ходової зробили за один день. Все детально пояснили, показали що міняли. Приємно мати справу з чесними людьми.",
  },
  {
    name: "Тетяна М.",
    rating: 5,
    text: "Обслуговую тут свій автомобіль вже два роки. Завжди все на вищому рівні. Рекомендую всім, хто шукає надійний автосервіс в Одесі.",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-[#111111] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-4xl lg:text-5xl">
            Відгуки наших{" "}
            <span className="text-[#f0e060]">клієнтів</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#c0c0c0]">
            Нам довіряють сотні автовласників Одеси. Ось що кажуть наші клієнти про роботу 4GEAR.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-lg border border-[#3c3c3c] bg-[#1c1c1c] p-6 transition-all hover:border-[#f0e060]/30"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0e060]/10 font-heading text-lg font-bold text-[#f0e060]">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#f0f0f0]">{review.name}</p>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-[#f0e060] text-[#f0e060]"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#c0c0c0]">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
