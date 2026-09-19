"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function SubscribeForm() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setOpen(true)
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row"
      >
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Email"
          className="h-9 transition-shadow focus-visible:shadow-lg"
        />
        <Button
          type="submit"
          className="transition-transform hover:scale-105 active:scale-95"
        >
          Subscribe
        </Button>
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="mb-2 flex size-12 animate-in zoom-in-50 items-center justify-center rounded-full bg-muted duration-500">
              <CheckCircle2 className="size-6" />
            </div>
            <DialogTitle>You are on the list!</DialogTitle>
            <DialogDescription>
              We will send your first personalized IT digest to {email}.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => {
              setOpen(false)
              setEmail("")
            }}
          >
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
