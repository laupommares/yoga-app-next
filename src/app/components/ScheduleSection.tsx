"use client";

type Slot = {
    time: string;
    name: string;
};

type DaySchedule = {
    day: string;
    slots: Slot[];
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

export default function ScheduleSection() {
    return (
        <section className="py-24 bg-surface-container-low" id="horarios">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center space-y-3 mb-16">
                    <span className="uppercase text-[11px] tracking-[0.15em] text-primary/60">
                        El ritmo de la práctica
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light italic">
                        Horarios semanales
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 md:gap-y-0">
                    {schedule.map((day, index) => (
                        <div
                            key={day.day}
                            className={`px-4 space-y-8 ${index !== schedule.length - 1
                                    ? "border-r border-stone-200/40"
                                    : ""
                                }`}
                        >
                            {/* Day */}
                            <h4 className="text-lg italic border-b border-primary/20 pb-3">
                                {day.day}
                            </h4>

                            {/* Slots */}
                            <div className="space-y-8">
                                {day.slots.map((slot, i) => (
                                    <button
                                        key={i}
                                        className="group w-full text-left transition-all"
                                    >
                                        <p className="text-[11px] tracking-widest text-primary/70 uppercase">
                                            {slot.time}
                                        </p>

                                        <p className="text-sm mt-1">
                                            {slot.name}
                                        </p>

                                        <span className="block mt-2 text-[10px] uppercase tracking-tight text-primary opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                                            Seleccionar
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <a href="#"
                        className="inline-flex items-center gap-3 px-8 py-3 border border-primary text-primary text-[11px] uppercase tracking-[0.15em] hover:bg-primary hover:text-on-primary transition-all duration-300">
                        Solicitar por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}