const bookings = [
    {
      time: "Monday, 08:30 AM",
      title: "Grounding Hatha",
    },
    {
      time: "Tuesday, 06:00 PM",
      title: "Evening Vinyasa",
    },
    {
      time: "Friday, 07:30 PM",
      title: "Sunset Restore",
    },
  ];
  
  export default function BookingSection() {
    return (
      <section
        id="booking"
        className="bg-surface-container px-8 py-32 md:px-24"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-headline mb-6 text-5xl text-on-surface">
              Reservá tu <span className="italic">Mat</span>
            </h2>
  
            <p className="mb-12 text-lg text-on-surface-variant">
              Disponibilidad limitada para garantizar una experiencia íntima y personalizada
              para cada profesional.
            </p>
  
            <div className="mb-4 flex items-center gap-4 text-sm uppercase tracking-widest text-on-surface-variant">
              <span className="text-primary">📍</span>
              Carrer de Mallorca, 234. Barcelona
            </div>
  
            <div className="flex items-center gap-4 text-sm uppercase tracking-widest text-on-surface-variant">
              <span className="text-primary">✉️</span>
              hello@gmail.com
            </div>
          </div>
  
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-lg bg-surface-container-lowest shadow-editorial">
              <div className="divide-y divide-outline-variant/10">
                {bookings.map((booking) => (
                  <div
                    key={booking.title}
                    className="group flex flex-col items-start justify-between gap-6 p-8 transition-colors hover:bg-surface-container-low sm:flex-row sm:items-center"
                  >
                    <div>
                      <span className="mb-1 block text-[10px] uppercase tracking-widest text-tertiary">
                        {booking.time}
                      </span>
                      <h4 className="font-headline text-2xl transition-all group-hover:italic">
                        {booking.title}
                      </h4>
                    </div>
  
                    <button className="bg-primary px-8 py-3 text-xs uppercase tracking-[0.2em] text-on-primary transition-all hover:opacity-90">
                      Select
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }