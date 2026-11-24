import { BlogProps } from "@/types";

export const blogsData: BlogProps[] = [
  {
    id: 1,
    title: "10 Hidden Features in React 19 You Probably Missed",
    slug: "react-19-hidden-features",
    excerpt:
      "React 19 shipped with more than just the `use` hook. Here are ten under-the-radar features that can simplify your daily workflow.",
    qa: [
      {
        question: "What is the `use` hook and why was it added?",
        answer:
          "`use` lets you read a resource like a Promise or Context inside a component. Unlike other hooks, it can be called conditionally, which makes it useful inside `if` blocks and loops. It was added to simplify data fetching and context consumption without wrapping components in HOCs or extra hooks.",
      },
      {
        question: "What changed with refs as props?",
        answer:
          "In React 19, `ref` is now a regular prop for function components. You no longer need `forwardRef` — you can accept `ref` directly in the component signature. This removes a whole layer of boilerplate.",
      },
      {
        question: "What are Actions and how do they work?",
        answer:
          "Actions are functions that handle form submissions and async transitions. React tracks pending, error, and optimistic states automatically through the `useActionState` and `useOptimistic` hooks, so you no longer need to manually toggle loading flags.",
      },
      {
        question: "How does the new document metadata support work?",
        answer:
          "React 19 renders `<title>`, `<meta>`, and `<link>` tags anywhere in your component tree and automatically hoists them to `<head>`. This means no more need for libraries like `react-helmet` in most cases.",
      },
      {
        question: "What is `useOptimistic` and when should I use it?",
        answer:
          "`useOptimistic` lets you show an immediate UI update while a server request is in flight, then reconcile when the real response arrives. Use it for likes, comments, or any action where instant feedback matters.",
      },
      {
        question: "Can I still use `forwardRef` in React 19?",
        answer:
          "Yes, `forwardRef` still works for backward compatibility, but it is no longer required for new code. For function components, passing `ref` as a prop is the recommended pattern going forward.",
      },
    ],
    author: "Aarav Mehta",
    authorAvatar: "https://i.pravatar.cc/150?img=12",
    category: "Development",
    tags: ["React", "JavaScript", "Frontend"],
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    readTime: 8,
    publishedAt: "2026-03-14T09:30:00Z",
    featured: true,
  },
  {
    id: 2,
    title: "The Quiet Power of Doing One Thing at a Time",
    slug: "quiet-power-single-tasking",
    excerpt:
      "Multitasking is a myth sold to us by productivity gurus. Here's what happens when you deliberately slow down.",
    qa: [
      {
        question: "Why is multitasking considered a myth?",
        answer:
          "Neuroscience shows the brain doesn't truly parallel-process complex tasks — it rapidly switches attention. Each switch carries a 'context reload' cost, which drains energy and reduces accuracy. What feels like multitasking is actually fast task-switching.",
      },
      {
        question: "What is the cost of context switching?",
        answer:
          "Studies suggest it can take up to 23 minutes to fully refocus after an interruption. Repeated switching over a day fragments attention and can leave you feeling busy but unproductive.",
      },
      {
        question: "How do I start single-tasking in a busy environment?",
        answer:
          "Start with one 25-minute block of a single task, with notifications off. Use a visible queue (a paper list) for anything that comes up so you can capture it without acting on it immediately.",
      },
      {
        question: "Does single-tasking mean I should never do two things at once?",
        answer:
          "No — pairing a low-focus task (walking, cleaning) with passive input (music, a podcast) is fine. The rule is about two demanding cognitive tasks competing for the same attention.",
      },
      {
        question: "How long does it take to notice a difference?",
        answer:
          "Most people report improved focus within 1–2 weeks of daily deliberate single-tasking. The benefits compound: fewer errors, better memory of what you did, and less end-of-day fatigue.",
      },
      {
        question: "What should I do when my mind wanders during a block?",
        answer:
          "Note the distraction briefly on your capture list and return. The goal is not to have a blank mind — it's to notice wandering without feeding it. Each return strengthens attention.",
      },
    ],
    author: "Priya Nair",
    authorAvatar: "https://i.pravatar.cc/150?img=32",
    category: "Productivity",
    tags: ["Focus", "Mindfulness", "Habits"],
    coverImage:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    readTime: 5,
    publishedAt: "2026-02-28T07:15:00Z",
    featured: false,
  },
  {
    id: 3,
    title: "A Beginner's Guide to Building with Tailwind CSS v4",
    slug: "tailwind-css-v4-guide",
    excerpt:
      "Tailwind v4 rewrote the engine in Rust and dropped the config file. Here's how to migrate without breaking your styles.",
    qa: [
      {
        question: "Why did Tailwind v4 drop tailwind.config.js?",
        answer:
          "The config moved into CSS using the `@theme` block and `@import \"tailwindcss\"`. This keeps all styling in one file, uses native CSS variables, and removes the need for a JS config in most projects. A compat layer is available if you still need the old file.",
      },
      {
        question: "How do I define custom colors in v4?",
        answer:
          "Inside `@theme`, declare CSS variables like `--color-brand-500: oklch(0.7 0.15 250);`. Tailwind automatically generates utility classes such as `bg-brand-500` and `text-brand-500`.",
      },
      {
        question: "What is the new `@theme` directive?",
        answer:
          "`@theme` is a top-level CSS rule where design tokens (colors, spacing, breakpoints, fonts) are declared as CSS variables. Tailwind reads these to generate utilities. It replaces most of the old `theme.extend` config.",
      },
      {
        question: "Are custom breakpoints defined differently now?",
        answer:
          "Yes — use `--breakpoint-*` variables inside `@theme`, e.g. `--breakpoint-902: 56.375rem;`. Use `rem` units for consistency and predictable ordering. Then use classes like `902:grid-cols-3`.",
      },
      {
        question: "How do I migrate an existing project to v4?",
        answer:
          "Run the official upgrade tool (`npx @tailwindcss/upgrade`), then move your `theme.extend` values into a `@theme` block, replace removed utilities, and update any `@layer` usage. Test dark mode and plugin behavior carefully.",
      },
      {
        question: "Do I still need PostCSS with Tailwind v4?",
        answer:
          "No, PostCSS is no longer required for the default setup. Tailwind v4 uses its own build integration (e.g. the Vite plugin), which is faster and simpler than the old PostCSS pipeline.",
      },
    ],
    author: "Rohan Kapoor",
    authorAvatar: "https://i.pravatar.cc/150?img=15",
    category: "Development",
    tags: ["Tailwind", "CSS", "Frontend"],
    coverImage:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=1200&q=80",
    readTime: 10,
    publishedAt: "2026-01-19T12:00:00Z",
    featured: true,
  },
  {
    id: 4,
    title: "Why Your Morning Routine Is Probably Too Complicated",
    slug: "simplify-morning-routine",
    excerpt:
      "Ice baths, journaling, 5 AM runs, and 20 minutes of meditation — or maybe just a glass of water and a walk?",
    qa: [
      {
        question: "Why do complicated morning routines fail?",
        answer:
          "They demand willpower before you're fully awake. Each extra step is a point of friction, and one missed step can trigger an all-or-nothing spiral. Simple routines survive bad sleep; elaborate ones collapse.",
      },
      {
        question: "What is the minimum effective morning routine?",
        answer:
          "Hydration, light exposure, and movement. Ten minutes of daylight and a short walk or stretch is enough to anchor your circadian rhythm and kick-start alertness. Everything else is optional.",
      },
      {
        question: "Is 5 AM really necessary?",
        answer:
          "No. What matters is consistency with your chronotype and sleep needs. Forcing early rising without matching sleep leads to chronic deprivation, which outweighs any habit benefits.",
      },
      {
        question: "How do I know if my routine is too much?",
        answer:
          "If you skip it on busy days, dread it, or feel guilt when you miss it, it's too much. A good routine feels restorative and flexible, not like a second job.",
      },
      {
        question: "What about journaling and meditation?",
        answer:
          "Both are valuable, but not mandatory. If they work for you, keep them small — 3–5 minutes. The best practice is the one you'll actually do daily.",
      },
      {
        question: "How do I build a routine that sticks?",
        answer:
          "Start with one habit for two weeks. Attach it to something you already do (wake up → drink water). Only add a second habit once the first feels automatic.",
      },
    ],
    author: "Sneha Iyer",
    authorAvatar: "https://i.pravatar.cc/150?img=45",
    category: "Lifestyle",
    tags: ["Wellness", "Habits", "Health"],
    coverImage:
      "https://images.unsplash.com/photo-1495197359483-d092478c170a?auto=format&fit=crop&w=1200&q=80",
    readTime: 4,
    publishedAt: "2026-04-02T06:45:00Z",
    featured: false,
  },
  {
    id: 5,
    title: "Understanding TypeScript Generics Through Real Examples",
    slug: "typescript-generics-examples",
    excerpt:
      "Generics aren't scary once you see them solving actual problems. We'll walk through five practical patterns.",
    qa: [
      {
        question: "What is a generic in TypeScript, in one sentence?",
        answer:
          "A generic is a type parameter that lets a function, class, or interface work with many types while preserving the specific type information at the call site.",
      },
      {
        question: "Why not just use `any`?",
        answer:
          "`any` throws away type safety. Generics keep the relationship between inputs and outputs — e.g. `function identity<T>(x: T): T` guarantees you get the same type back, which `any` does not.",
      },
      {
        question: "How do constraints work with `extends`?",
        answer:
          "`<T extends { id: number }>` limits T to types that have an `id` field. Inside the function you can safely access `T.id`. Constraints let generics stay useful instead of overly broad.",
      },
      {
        question: "When should I use a generic vs a union type?",
        answer:
          "Use a union when the set of types is small and fixed (`string | number`). Use a generic when the type should be inferred from the caller and flow through the return type.",
      },
      {
        question: "What is `keyof` and how does it pair with generics?",
        answer:
          "`keyof T` produces a union of T's keys. Combined with generics, you can write type-safe property accessors: `function get<T, K extends keyof T>(obj: T, key: K): T[K]`.",
      },
      {
        question: "How do I debug a generic type error?",
        answer:
          "Hover the value in your editor to see the inferred type. If it's `unknown` or the constraint fails, temporarily replace the generic with the concrete type to see the underlying error, then reintroduce the generic.",
      },
    ],
    author: "Vikram Desai",
    authorAvatar: "https://i.pravatar.cc/150?img=8",
    category: "Development",
    tags: ["TypeScript", "JavaScript", "Programming"],
    coverImage:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80",
    readTime: 12,
    publishedAt: "2026-03-30T10:20:00Z",
    featured: false,
  },
  {
    id: 6,
    title: "The Art of Saying No Without Guilt",
    slug: "art-of-saying-no",
    excerpt:
      "Every yes is a no to something else. Here's a framework for protecting your time and energy.",
    qa: [
      {
        question: "Why is saying no so hard?",
        answer:
          "We're wired to avoid social friction, and we overestimate how much people will be upset by a refusal. Saying no feels like rejecting the person, not just the request.",
      },
      {
        question: "What is a simple framework for saying no?",
        answer:
          "Acknowledge, decline, offer an alternative. Example: 'Thanks for thinking of me — I can't take this on right now, but [X] might be able to help.' It respects the person without committing you.",
      },
      {
        question: "How do I say no to my boss?",
        answer:
          "Use priorities, not preferences. 'I can do this, but it means pushing A and B. Which should I deprioritize?' This shifts the conversation to trade-offs rather than refusal.",
      },
      {
        question: "What is the 'no' tax?",
        answer:
          "The hidden cost of every yes: the time, energy, and focus it steals from what actually matters. Framing it as a tax makes the opportunity cost concrete.",
      },
      {
        question: "How do I stop feeling guilty after saying no?",
        answer:
          "Reframe it as protecting your commitments to the people and work you've already said yes to. Guilt fades when you see no as a form of integrity, not rejection.",
      },
      {
        question: "Should I always give a reason when declining?",
        answer:
          "No. For most low-stakes requests, a simple 'I can't right now' is enough. Over-explaining invites negotiation and implies you need permission.",
      },
    ],
    author: "Ananya Bose",
    authorAvatar: "https://i.pravatar.cc/150?img=20",
    category: "Personal Growth",
    tags: ["Boundaries", "Psychology", "Work"],
    coverImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    readTime: 6,
    publishedAt: "2026-02-11T15:00:00Z",
    featured: false,
  },
  {
    id: 7,
    title: "How to Debug a Node.js App in Production Without Panicking",
    slug: "debug-nodejs-production",
    excerpt:
      "Your app is down, users are tweeting, and your logs are useless. Here's a calm, repeatable playbook.",
    qa: [
      {
        question: "What should I do first when production breaks?",
        answer:
          "Stabilize, then investigate. Check if a rollback or restart restores service. Communicate status to stakeholders. Only then dig into root cause — with users no longer actively affected.",
      },
      {
        question: "How do I get useful logs in production?",
        answer:
          "Use structured JSON logging (e.g. `pino`), include request IDs, and log at key boundaries. Avoid `console.log` — it's unstructured and often stripped. Send logs to a central store you can query.",
      },
      {
        question: "What tools help debug live Node.js apps?",
        answer:
          "Heap snapshots (`--inspect` + Chrome DevTools), `clinic.js` for profiling, and APM tools like Datadog or New Relic. For memory leaks, `node --heapsnapshot` saved and diffed over time is powerful.",
      },
      {
        question: "How do I reproduce an issue I can't see locally?",
        answer:
          "Match the environment as closely as possible (Node version, env vars, data shape). Use feature flags to replay the exact request path. If needed, add temporary logging and deploy behind a flag.",
      },
      {
        question: "What's the best way to prevent future incidents?",
        answer:
          "Post-mortems without blame, plus concrete action items. Add tests for the specific failure, add alerts for the symptom, and document the fix. Prevention comes from learning, not from avoiding blame.",
      },
      {
        question: "How do I stay calm during an outage?",
        answer:
          "Have a checklist ready before you need it. Assign roles (comms, investigator, fixer). Timebox hypotheses. Remember that most outages are recoverable — panic makes debugging slower.",
      },
    ],
    author: "Karthik Reddy",
    authorAvatar: "https://i.pravatar.cc/150?img=51",
    category: "Engineering",
    tags: ["Node.js", "DevOps", "Debugging"],
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    readTime: 9,
    publishedAt: "2026-04-18T11:10:00Z",
    featured: true,
  },
  {
    id: 8,
    title: "Designing a Kitchen You'll Actually Cook In",
    slug: "kitchen-design-that-works",
    excerpt:
      "Pinterest-worthy kitchens are often terrible to cook in. Design yours around movement, not aesthetics.",
    qa: [
      {
        question: "What is the kitchen work triangle?",
        answer:
          "The classic layout principle: the sink, stove, and fridge should form a triangle with legs between 4 and 9 feet each. It minimizes walking and keeps the cook efficient.",
      },
      {
        question: "Why do beautiful kitchens often fail functionally?",
        answer:
          "They optimize for photos: open shelving instead of drawers, cramped counters, poor lighting. Cooking needs durable surfaces, easy cleaning, and accessible storage — not just visual style.",
      },
      {
        question: "How much counter space do I actually need?",
        answer:
          "At least 36 inches of uninterrupted prep space next to the sink, and 15 inches on the other side. More is better if you cook often, but usable layout matters more than total area.",
      },
      {
        question: "What lighting works best in a kitchen?",
        answer:
          "Layer it: ambient (ceiling), task (under-cabinet over counters), and accent. Avoid a single overhead light — it casts shadows exactly where you chop and cook.",
      },
      {
        question: "Is an island always a good idea?",
        answer:
          "Only if the kitchen has enough clearance — at least 36 inches (42 for walkways) around it. In small kitchens, an island can become an obstacle. A peninsula is often better.",
      },
      {
        question: "What's the most common kitchen design mistake?",
        answer:
          "Underestimating storage. Drawers cost more than shelves but are far more usable. Plan for more storage than you think you need, especially near the prep zone.",
      },
    ],
    author: "Meera Joshi",
    authorAvatar: "https://i.pravatar.cc/150?img=27",
    category: "Home & Design",
    tags: ["Interior Design", "Home", "Architecture"],
    coverImage:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
    readTime: 7,
    publishedAt: "2026-01-05T09:00:00Z",
    featured: false,
  },
  {
    id: 9,
    title: "The Unexpected Joy of Reading Physical Books Again",
    slug: "physical-books-again",
    excerpt:
      "After a decade of screens, I picked up a paperback. Here's what changed in my attention span.",
    qa: [
      {
        question: "Does reading on paper really differ from reading on screen?",
        answer:
          "Yes — studies show paper readers comprehend and retain more, especially for long-form text. Screens invite skimming; paper supports deep, linear reading. The difference is strongest for complex material.",
      },
      {
        question: "Why is my attention span worse on a phone?",
        answer:
          "Notifications and infinite scroll train the brain to expect novelty every few seconds. A physical book removes that cue and forces sustained attention — which feels uncomfortable at first.",
      },
      {
        question: "How do I get back into reading physical books?",
        answer:
          "Start with 10 pages a day, at a fixed time, with your phone in another room. Choose a book you're genuinely curious about, not one you 'should' read. Momentum builds fast.",
      },
      {
        question: "Is it worth buying physical books if I already own ebooks?",
        answer:
          "If you want deep reading, often yes. Many readers keep ebooks for convenience and paper for focus. The goal is to match the format to the kind of reading you're doing.",
      },
      {
        question: "What about audiobooks?",
        answer:
          "Audiobooks are great for commuting and chores, but they don't exercise the same sustained visual attention. They're complementary, not a substitute for deep reading.",
      },
      {
        question: "How long until my attention span improves?",
        answer:
          "Most readers notice a difference within 2–3 weeks of daily reading. The first week is the hardest — the brain is recalibrating to slower input.",
      },
    ],
    author: "Ritika Sen",
    authorAvatar: "https://i.pravatar.cc/150?img=41",
    category: "Culture",
    tags: ["Books", "Reading", "Technology"],
    coverImage:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
    readTime: 5,
    publishedAt: "2026-03-08T18:30:00Z",
    featured: false,
  },
  {
    id: 10,
    title: "A Practical Introduction to Web Accessibility",
    slug: "practical-web-accessibility",
    excerpt:
      "Accessibility isn't an afterthought or a checklist — it's a design constraint that makes everything better.",
    qa: [
      {
        question: "What is web accessibility in simple terms?",
        answer:
          "Building websites that people with disabilities can use effectively — including screen reader users, keyboard-only users, people with low vision, and those with motor impairments.",
      },
      {
        question: "What is the single most important accessibility fix?",
        answer:
          "Semantic HTML. Using the right element (`<button>`, `<a>`, `<nav>`, `<main>`) gives you keyboard support, screen reader semantics, and focus behavior for free. Most accessibility bugs are caused by `<div>` soup.",
      },
      {
        question: "How do I make images accessible?",
        answer:
          "Add meaningful `alt` text that describes the image's purpose in context. If the image is purely decorative, use `alt=\"\"`. Never omit `alt` — that makes screen readers read the filename.",
      },
      {
        question: "What is color contrast and what's the minimum?",
        answer:
          "Text must have enough contrast against its background. WCAG AA requires 4.5:1 for normal text and 3:1 for large text. Tools like the WebAIM Contrast Checker make this easy to verify.",
      },
      {
        question: "How do I test accessibility without special tools?",
        answer:
          "Unplug your mouse and navigate with the keyboard. If you can't reach or operate everything, neither can many users. Also try zooming to 200% and enabling high-contrast mode.",
      },
      {
        question: "Does accessibility hurt design or performance?",
        answer:
          "No — it usually improves both. Semantic HTML is lighter than JS-driven widgets, and accessible designs are clearer for all users. Accessibility is a quality bar, not a trade-off.",
      },
    ],
    author: "Nikhil Verma",
    authorAvatar: "https://i.pravatar.cc/150?img=59",
    category: "Design",
    tags: ["Accessibility", "UX", "Frontend"],
    coverImage:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=80",
    readTime: 11,
    publishedAt: "2026-04-25T08:00:00Z",
    featured: false,
  },
];