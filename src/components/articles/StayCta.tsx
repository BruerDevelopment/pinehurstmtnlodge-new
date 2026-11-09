import Link from "next/link";

// Call to action at the end of each article, linking back to the lodge.
export default function StayCta() {
  return (
    <aside className="mt-16 rounded-2xl bg-accent p-8 text-surface md:p-10">
      <h2 className="text-2xl font-semibold tracking-tight">Interested in staying in Rollinsville?</h2>
      <p className="mt-2 max-w-xl leading-7 text-surface/90">
        Stay at Pinehurst Mtn Lodge and use this guide as your local plan.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-surface px-6 py-3 font-semibold text-accent hover:opacity-90"
      >
        Learn about the lodge
      </Link>
    </aside>
  );
}
