import Link from "next/link"
import {
  BellRing,
  Bot,
  Filter,
  Globe,
  Mail,
  Radar,
  Send,
  Sparkles,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubscribeForm } from "@/components/subscribe-form"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

const features = [
  {
    icon: Radar,
    title: "Always-on monitoring",
    text: "The agent continuously scans tech blogs, release notes, GitHub, Hacker News and research feeds so you never have to.",
  },
  {
    icon: Filter,
    title: "Personalized filtering",
    text: "Tell it your stack and interests. It ranks every story by relevance and drops the noise.",
  },
  {
    icon: Sparkles,
    title: "AI summaries",
    text: "Long articles become short, accurate briefs with the key takeaways and a link to the source.",
  },
  {
    icon: BellRing,
    title: "Smart delivery",
    text: "Get a daily digest or instant alerts for breaking news, on your schedule.",
  },
]

const steps = [
  { n: "01", title: "Pick your topics", text: "Choose languages, frameworks, vendors and themes you care about." },
  { n: "02", title: "The agent gathers", text: "It searches, deduplicates and scores news from hundreds of sources." },
  { n: "03", title: "You get your brief", text: "Receive a tailored digest via email or Telegram." },
]

const channels = [
  { icon: Mail, label: "Email" },
  { icon: Send, label: "Telegram" },
  { icon: Globe, label: "Web feed" },
]

const faqs = [
  {
    q: "How does the agent decide what is relevant to me?",
    a: "You select topics and tech stack. The agent scores each article against your profile and improves as you give feedback.",
  },
  {
    q: "Which sources does it monitor?",
    a: "Major tech news sites, developer blogs, release changelogs, GitHub trends and community forums. You can add your own sources too.",
  },
  {
    q: "How often will I receive news?",
    a: "Choose a daily or weekly digest, or enable instant alerts for high-priority stories.",
  },
  {
    q: "Are the summaries reliable?",
    a: "Every summary links to the original article so you can verify details and read further.",
  },
]

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Bot className="size-5" />
            IT News Agent
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>
          <a href="#subscribe" className={buttonVariants({ size: "sm" })}>
            Get started
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_at_top,var(--color-muted),transparent_70%)]" />
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-24 text-center sm:py-32">
            <Badge variant="secondary" className="gap-1.5">
              <Sparkles className="size-3" /> AI-powered news agent
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              IT news that finds{" "}
              <span className="text-muted-foreground">you</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              An AI agent that monitors the tech world around the clock and
              delivers only the stories that matter to your stack, your role and
              your interests.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#subscribe" className={buttonVariants({ size: "lg" })}>
                Start for free
              </a>
              <a
                href="#how"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                See how it works
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
              Delivered via
              {channels.map(({ icon: Icon, label }) => (
                <Badge key={label} variant="outline" className="gap-1">
                  <Icon className="size-3" /> {label}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Everything you need to stay informed
            </h2>
            <p className="mt-3 text-muted-foreground">Less scrolling, more signal.</p>
          </div>
          <Tabs
            defaultValue={features[0].title}
            orientation="vertical"
            className="mx-auto max-w-4xl gap-6 md:!flex-row"
          >
            <TabsList className="h-auto w-full shrink-0 gap-1 p-2 md:w-64">
              {features.map(({ icon: Icon, title }) => (
                <TabsTrigger
                  key={title}
                  value={title}
                  className="h-11 justify-start px-3 text-sm hover:translate-x-1"
                >
                  <Icon className="size-4" />
                  {title}
                </TabsTrigger>
              ))}
            </TabsList>
            {features.map(({ icon: Icon, title, text }) => (
              <TabsContent
                key={title}
                value={title}
                className="flex min-h-56 flex-col justify-center gap-4 rounded-xl border bg-muted/40 p-8 data-active:animate-in data-active:fade-in-0 data-active:slide-in-from-right-4 data-active:duration-500"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-background shadow-sm">
                  <Icon className="size-7" />
                </div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-base text-muted-foreground">{text}</p>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <Separator />

        <section id="how" className="mx-auto max-w-6xl px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="mt-3 text-muted-foreground">
              Three steps from setup to your inbox.
            </p>
          </div>
          <Carousel opts={{ loop: true, align: "start" }} className="mx-auto max-w-4xl px-12">
            <CarouselContent>
              {steps.map((st) => (
                <CarouselItem key={st.n} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group flex h-full cursor-grab flex-col gap-2 rounded-xl border bg-muted/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-muted hover:shadow-lg">
                    <span className="text-4xl font-bold text-muted-foreground/40 transition-colors group-hover:text-foreground">
                      {st.n}
                    </span>
                    <h3 className="text-lg font-semibold">{st.title}</h3>
                    <p className="text-sm text-muted-foreground">{st.text}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <Separator />

        <section id="faq" className="mx-auto max-w-3xl px-4 py-20">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
          <Accordion>
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="subscribe" className="mx-auto max-w-3xl px-4 pb-24">
          <div className="flex flex-col gap-6 rounded-2xl border bg-muted/40 p-10 text-center">
            <div>
              <h2 className="text-2xl font-bold">Get your personalized IT digest</h2>
              <p className="mt-2 text-muted-foreground">
                Enter your email and we will set up your agent.
              </p>
            </div>
            <SubscribeForm />
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} IT News Agent. All rights reserved.
      </footer>
    </div>
  )
}
