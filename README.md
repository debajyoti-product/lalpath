# welup

-welUp- Proactive Health Intelligence Platform | Prototype Only | No Backend

---

**Design Language**

Noom's warm emotional coaching tone + Airbnb's clean spatial generosity. Think: cream/warm white base, terracotta/coral accent, deep forest green as a secondary anchor. Rounded cards, soft shadows, generous whitespace. Feels like a calm, trusted health companion — not a clinical dashboard.

**Typography:** Pair a humanist serif display font (e.g. Playfair Display or DM Serif) with a clean sans-serif body (e.g. DM Sans or Plus Jakarta Sans).

---

**App Shell — 5 Screens (Mobile-first, ~390px wide)**

---

**Screen 1 — Onboarding / Baseline Setup**

- Full-screen warm gradient welcome. Headline: *"Your health, finally making sense."*

- 3-step progress pill at top

- Step 1: Connect wearable (boAt / Noise / Apple Watch / Samsung) — show device cards with icons, tap to "connect" (static state)

- Step 2: Upload last blood report — a soft dashed upload zone with a PDF icon

- Step 3: 3-question health snapshot (sleep quality, stress level, last check-up) — rendered as large tap-to-select pill options, not a form

- CTA: "Build My Health Profile →"

---

**Screen 2 — Home / Weekly Insight Card**

- Top: Greeting ("Good morning, Rohan") + a circular Health Score badge (e.g. 72/100) with a subtle ring animation

- **Hero card** (full-width, coral/warm bg): The weekly insight — e.g. *"Your sleep quality dropped 22% this week. Your resting heart rate is trending up. This pattern usually signals stress buildup."* + a "See what to do →" CTA

- Below: 3 quick stat tiles (Sleep, HRV, Steps) — icon + value + 7-day mini sparkline

- Bottom nav: Home / Plan / Log / Profile

---

**Screen 3 — Health Plan View**

- Two tabs at top: **This Week** (micro habits) | **This Quarter** (macro milestones)

- Micro tab: 4–5 habit cards, each showing:

  - Habit name + icon (e.g. 🥗 Reduce sodium, 😴 Sleep by 10:30pm)

  - Streak counter

  - Tap to mark complete — satisfying checkmark animation

- Macro tab: Timeline-style view — upcoming blood test, doctor check-in, dietitian session — each as a card with a status chip (Scheduled / Recommended / Done)

---

**Screen 4 — Service Trigger Modal**

- Triggered from a habit card that has crossed a threshold

- Bottom sheet modal (slides up)

- Headline: *"2 weeks of high stress detected"*

- Sub-copy: *"Based on your HRV and sleep data, a 30-min stress consult could help reset your baseline."*

- Service card: Therapist / Dietitian / Doctor — photo placeholder, name, rating, duration

- Two CTAs: "Book Now" (primary, filled) | "Remind me later" (ghost)

---

**Screen 5 — Log Entry (Food + Mood)**

- Clean logger screen

- Two sections: **How are you feeling?** (5 emoji mood options, large tap targets) + **What did you eat?** (search bar + 3 recent quick-add chips)

- No form fields — everything is tap or search

- Subtle encouragement copy below: *"Every log makes your health picture sharper."*

---

**Global Design Rules**

- No harsh blacks — use `#1C1C1E` or deep forest for text

- Card radius: 20px minimum

- Button radius: pill-shaped (999px)

- No modals except Screen 4 — everything else is native scrollable

- Micro-interactions: habit check = confetti burst or ring fill; insight card = soft fade-in on load

- Empty states should feel warm, not sterile

---

**Do NOT build:**

- Any real API calls or auth

- Insurance or marketplace UI

- Gamification badges or leaderboards

- Desktop layout (mobile prototype only)

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://welup.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/095336f5-6d32-4194-b3c6-6ea886fa5628).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
