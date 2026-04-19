"use client";

type Slot = {
  time: string;
  name: string;
};

type DaySchedule = {
  day: string;
  slots: Slot[];
};

export default function ScheduleSection() {
  const schedule: DaySchedule[] = [
    {
      day: "Lunes",
      slots: [
        { time: "19:00 — 20:00", name: "Ashtanga Vinhasa Yoga" },
        { time: "20:30 — 21:30", name: "Yoga Ayurveda" },
      ],
    },
    {
      day: "Martes",
      slots: [
        { time: "14:00 — 15:00", name: "Yoga Ayurveda" },
        { time: "20:30 — 21:30", name: "Yoga Ayurveda" },
      ],
    },
    {
      day: "Miércoles",
      slots: [
        { time: "19:00 — 20:00", name: "Ashtanga Vinhasa Yoga" },
      ],
    },
    {
      day: "Jueves",
      slots: [
        { time: "14:00 — 15:00", name: "Ashtanga Vinhasa Yoga" },
        { time: "19:00 — 20:00", name: "Yoga para embarazadas" },
        { time: "20:30 — 21:30", name: "Yoga Ayurveda" },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-24 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light italic">
            Horarios Semanales
          </h2>
        </div>

        {/* Grid estilo calendario */}
        <div className="w-full flex max-md:flex-col md:gap-4 gap-y-12 justify-center">
          {schedule.map((day, index) => (
            <div
              key={day.day}
              className={`px-4 ${
                index !== schedule.length - 1
                  ? "md:border-r md:border-stone-200/50 "
                  : ""
              }`}
            >
              {/* Día */}
              <h4 className="font-serif text-xl italic border-b border-primary/20 pb-3 mb-6">
                {day.day}
              </h4>

              {/* Slots */}
              <div className="space-y-8">
                {day.slots.map((slot, i) => (
                  <div
                    key={i}
                    className="group transition-all"
                  >
                    <p className="text-[11px] uppercase tracking-widest text-primary/70">
                      {slot.time}
                    </p>

                    <p className="text-sm mt-1 font-medium">
                      {slot.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA fijo */}
        <div className="mt-20 text-center">
          <a
            href="https://wa.me/5492346566187"
            className="inline-block px-10 py-3 border border-primary text-primary text-[11px] uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all"
          >
            Consultar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}