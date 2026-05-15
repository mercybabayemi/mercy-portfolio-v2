// ─────────────────────────────────────────────
//  BLOG POSTS  —  add a new object to publish
// ─────────────────────────────────────────────
//
//  Fields:
//    id          unique slug (used as key)
//    title       post title
//    date        'YYYY-MM-DD'
//    tags        array of strings
//    coverImage  optional — drop image in public/blog/, reference as '/blog/filename.jpg'
//    excerpt     short preview shown on the card (1-2 sentences)
//    content     full article in markdown — images, code blocks, headings, all work

export const POSTS = [
  {
    id: 'from-ogun-to-ai-engineer',
    title: 'From Ogun State to AI Engineer: What Nobody Told Me',
    date: '2026-05-15',
    tags: ['Journey', 'AI', 'Career'],
    coverImage: null,
    excerpt:
      'I was sitting in a room in Ogun State with no roadmap, no mentor, and a phone that could barely load YouTube. This is the story of how I got here — and what I wish someone had told me.',
    content: `
I was sitting in a room in Ogun State with no roadmap, no mentor, and a phone that could barely load YouTube.

Nobody handed me a plan. No one sat me down and said *"here is the exact path from English graduate to AI engineer."* There was no template. There was just me, a browser, and an overwhelming amount of things I didn't know yet.

This is that story.

## Where it started

My degree is in English Language from the University of Lagos. I studied literature, linguistics, rhetoric. I taught secondary school students how to construct arguments, how to read carefully, how to communicate with precision.

I was not supposed to end up building AI pipelines.

But somewhere between teaching and trying to figure out what came next, I started noticing something: the best engineers I was reading about weren't just technical — they were *communicators*. They could explain a system. Write a doc that made sense. Tell a story about what they built.

That was a door. And I walked through it.

## The unglamorous part

Let me be honest about what the transition actually looked like.

It looked like free courses at 11pm. It looked like reading documentation I barely understood and running the same line of code seventeen times hoping something would change. It looked like imposter syndrome so loud I almost turned back three times.

It did not look like a LinkedIn post with a neat 90-day summary.

What kept me going was not motivation — motivation is unreliable. What kept me going was *stubbornness* and a very specific kind of curiosity: I genuinely needed to know how the thing worked.

## What I learned that surprised me

The skill that transferred most from teaching to engineering was **requirements thinking**.

When you teach, you are constantly asking: *What does this person actually need to understand? What is the gap? What is the sequence?*

That is the same question you ask when you are building a system. What does this pipeline need? What is missing? In what order should things happen?

My BA was not background noise. It was infrastructure.

## For that person in Ogun State right now

If you are reading this from a small room somewhere in Nigeria, wondering if this is even possible for someone like you — it is.

Not because it is easy. It is not easy. But because the only real requirement is that you keep going slightly longer than the point where it feels impossible.

You do not need the perfect laptop. You do not need to be in Lagos. You do not need to have started at 18.

You need to be curious enough, stubborn enough, and willing to be a complete beginner for longer than is comfortable.

That is the whole secret. I am still using it.

---

*More of these coming. I am writing this for the version of me that needed it — and for everyone else in that room.*
    `.trim(),
  },
]
