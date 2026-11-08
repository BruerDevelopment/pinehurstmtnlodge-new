import Section from "@/components/ui/Section";
import LodgifyBookingBox from "@/components/sections/LodgifyBookingBox";
import { site } from "@/configs/site";

export default function BookingSection() {
  return (
    <Section id="book" eyebrow="Reserve" title="Book Your Stay">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-surface p-6">
          <h3 className="font-semibold text-ink">Check availability</h3>
          <div className="mt-4">
            <LodgifyBookingBox />
          </div>
        </div>

        <div className="rounded-2xl bg-surface p-6">
          <h3 className="font-semibold text-ink">Other ways to book</h3>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={site.directBooking.href}
              className="rounded-full bg-accent px-5 py-3 text-center font-semibold text-surface hover:opacity-90"
            >
              {site.directBooking.label}
            </a>
            {site.bookingLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-line px-5 py-3 text-center font-medium text-ink hover:bg-page"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
