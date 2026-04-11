"use client";

import { useState } from "react";

type Slot = {
  time: string;
  name: string;
  disabled?: boolean;
};

type DaySchedule = {
  day: string;
  slots: Slot[];
};

export default function ScheduleSection() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSlot = (value: string, disabled?: boolean) => {
    if (disabled) return;

    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

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
        { time: "20:30 — 21:30", name: "Yoga Ayurveda", disabled: true },
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
        { time: "20:30 — 21:30", name: "Yoga Ayurveda", disabled: true },
      ],
    },
  ];

  const message = encodeURIComponent(
    `Hola! Me gustaría reservar las siguientes clases:\n\n${selected.join("\n")}`
  );

  return (
    <section id="schedule" className="py-16 bg-surface-container-low">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light">
            Horarios semanales
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {schedule.map((day) => (
            <div key={day.day} className="space-y-4">

              <h4 className="text-sm uppercase tracking-wide text-stone-400">
                {day.day}
              </h4>

              <div className="space-y-3">
                {day.slots.map((slot, i) => {
                  const value = `${day.day} ${slot.time} - ${slot.name}`;
                  const isActive = selected.includes(value);

                  return (
                    <button
                      key={i}
                      onClick={() => !slot.disabled && toggleSlot(value)}
                      className={`w-full text-left p-3 rounded-lg border transition-all duration-200

                        ${
                          slot.disabled
                            ? "bg-earth-soft border-transparent text-text-muted cursor-default"
                            : isActive
                            ? "border-primary bg-primary/10"
                            : "border-stone-200 hover:border-primary/40 hover:bg-earth-soft/40"
                        }
                      `}
                    >
                      <p className="text-[11px] uppercase">
                        {slot.time}
                      </p>

                      <p className="text-sm mt-1">
                        {slot.name}
                      </p>

                      {slot.disabled && (
                        <span className="text-[10px] uppercase text-stone-400 mt-1 block">
                          Completo
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={`https://wa.me/5492346566187?text=${message}`}
            className={`inline-block px-8 py-2.5 border text-[11px] uppercase tracking-[0.15em] transition
              ${
                selected.length
                  ? "border-primary text-primary hover:bg-primary hover:text-white"
                  : "border-stone-300 text-stone-400 pointer-events-none"
              }
            `}
          >
            {selected.length
              ? `Reservar (${selected.length})`
              : "Seleccioná un horario"}
          </a>
        </div>

      </div>
    </section>
  );
}