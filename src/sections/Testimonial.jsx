import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";

const placeholderBlogs = [
  {
    id: 1,
    title: "Coming Soon: A Riveting Post About Semicolons",
    tag: "Draft #1",
    body: "Currently 0% written, 100% procrastinated. Deadline: yesterday.",
  },
  {
    id: 2,
    title: "Why I Haven't Blogged Yet (A Deep Dive)",
    tag: "Draft #2",
    body: "In-depth analysis of why 'I'll write it this weekend' is a lie I keep telling myself.",
  },
  {
    id: 3,
    title: "10 Reasons My Blog Is Still Empty",
    tag: "Draft #3",
    body: "Spoiler: reasons 1 through 10 are all 'shipping production code instead.'",
  },
  {
    id: 4,
    title: "Tech Blogging: A Retrospective (Of Nothing)",
    tag: "Draft #4",
    body: "Stay tuned. Or don't. This section will update itself out of guilt eventually.",
  },
  {
    id: 5,
    title: "How I Debugged Production Instead of Writing This",
    tag: "Draft #5",
    body: "True story. Also the reason drafts #1 through #4 still don't exist.",
  },
  {
    id: 6,
    title: "Placeholder Text Pretending to Be Content",
    tag: "Draft #6",
    body: "If you're reading this, the real blogs still aren't here. Check back soon(ish).",
  },
];

const firstRow = placeholderBlogs.slice(0, placeholderBlogs.length / 2);
const secondRow = placeholderBlogs.slice(placeholderBlogs.length / 2);

const BlogCard = ({ title, tag, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-80 cursor-default overflow-hidden rounded-[24px] border border-dashed border-card-border p-6 sm:p-8 bg-card-bg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 mx-4"
      )}
    >
      <span className="inline-block mb-4 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full bg-accent/10 text-accent">
        {tag}
      </span>
      <figcaption className="mb-2 text-base font-extrabold text-page-text leading-snug">
        {title}
      </figcaption>
      <blockquote className="text-sm leading-relaxed text-neutral">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space overflow-hidden">
      <h2 className="text-heading text-center mb-4">Featured Blogs</h2>
      <p className="text-center text-neutral mb-16 sm:mb-24 max-w-lg mx-auto">
        Currently starring in: &quot;Tech Blogging, Coming Soon&quot; — a series that&apos;s been in pre-production for a while now.
      </p>
      <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s] py-4">
          {firstRow.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s] py-4">
          {secondRow.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </Marquee>
        {/* Gradient fades utilizing CSS variable fallback */}
        <div className="absolute inset-y-0 left-0 w-[15%] pointer-events-none bg-gradient-to-r from-[var(--color-bg)] to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-[15%] pointer-events-none bg-gradient-to-l from-[var(--color-bg)] to-transparent"></div>
      </div>
    </div>
  );
}
