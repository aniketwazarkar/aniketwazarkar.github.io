import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-[24px] border border-card-border p-6 sm:p-8 bg-card-bg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 mx-4"
      )}
    >
      <blockquote className="mb-6 text-page-text text-base leading-relaxed">"{body}"</blockquote>
      <div className="flex flex-row items-center gap-4">
        <img
          className="rounded-full bg-black/5 dark:bg-white/5 object-cover"
          width="48"
          height="48"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-extrabold uppercase tracking-widest text-page-text">
            {name}
          </figcaption>
          <p className="text-xs font-mono font-medium text-neutral">{username}</p>
        </div>
      </div>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space overflow-hidden">
      <h2 className="text-heading text-center mb-16 sm:mb-24">Hear From Clients</h2>
      <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s] py-4">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s] py-4">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        {/* Gradient fades utilizing CSS variable fallback */}
        <div className="absolute inset-y-0 left-0 w-[15%] pointer-events-none bg-gradient-to-r from-[var(--color-bg)] to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-[15%] pointer-events-none bg-gradient-to-l from-[var(--color-bg)] to-transparent"></div>
      </div>
    </div>
  );
}
