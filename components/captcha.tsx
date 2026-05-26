"use client"

import { useCallback, useEffect, useState } from "react"
import { RefreshCw, ShieldCheck } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export type CaptchaState = {
  answer: string
  setAnswer: (v: string) => void
  isValid: boolean
  validate: () => boolean
  reset: () => void
  question: string
  ready: boolean
}

type Challenge = { question: string; result: number }

const PLACEHOLDER: Challenge = { question: "— —", result: Number.NaN }

function makeChallenge(): Challenge {
  const a = Math.floor(Math.random() * 9) + 1
  const b = Math.floor(Math.random() * 9) + 1
  const op = Math.random() > 0.5 ? "+" : "-"
  const [x, y] = op === "-" && b > a ? [b, a] : [a, b]
  const result = op === "+" ? x + y : x - y
  return { question: `${x} ${op} ${y}`, result }
}

export function useCaptcha(): CaptchaState {
  // Start with a stable placeholder so SSR and first client render match;
  // generate the real challenge only after mount.
  const [challenge, setChallenge] = useState<Challenge>(PLACEHOLDER)
  const [answer, setAnswer] = useState("")
  const ready = !Number.isNaN(challenge.result)

  useEffect(() => {
    setChallenge(makeChallenge())
  }, [])

  const isValid =
    ready && answer.trim() !== "" && Number(answer) === challenge.result

  const reset = useCallback(() => {
    setChallenge(makeChallenge())
    setAnswer("")
  }, [])

  const validate = useCallback(() => {
    if (!ready) return false
    const ok = Number(answer) === challenge.result
    if (!ok) reset()
    return ok
  }, [answer, challenge.result, ready, reset])

  return {
    answer,
    setAnswer,
    isValid,
    validate,
    reset,
    question: challenge.question,
    ready,
  }
}

interface CaptchaProps {
  state: CaptchaState
  /** Show "incorrect, try again" hint */
  showError?: boolean
  className?: string
  id?: string
}

export function Captcha({ state, showError, className, id = "captcha" }: CaptchaProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id} className="text-sm font-semibold flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-vibha-teal" />
        Verify you&apos;re human *
      </Label>
      <div className="flex items-center gap-3">
        <div
          aria-label={`Captcha question: what is ${state.question}`}
          className="select-none font-mono text-lg font-bold tracking-wider px-4 h-12 inline-flex items-center justify-center rounded-md border border-dashed border-vibha-teal/60 bg-linear-to-br from-vibha-teal/10 via-vibha-purple/5 to-vibha-orange/10 text-foreground"
          style={{
            textShadow:
              "1px 0 0 rgba(0,0,0,0.08), 0 1px 0 rgba(0,0,0,0.06), -1px 0 0 rgba(0,0,0,0.08)",
            letterSpacing: "0.25em",
          }}
        >
          {state.question} = ?
        </div>
        <Input
          id={id}
          type="text"
          inputMode="numeric"
          pattern="-?[0-9]*"
          autoComplete="off"
          required
          value={state.answer}
          onChange={(e) => state.setAnswer(e.target.value)}
          placeholder="Answer"
          className="h-12 w-28 focus:border-vibha-teal focus:ring-vibha-teal"
        />
        <button
          type="button"
          onClick={state.reset}
          aria-label="Refresh captcha"
          className="h-12 w-12 rounded-md border border-border bg-muted/40 hover:bg-muted text-muted-foreground hover:text-vibha-teal transition-colors flex items-center justify-center shrink-0"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
      {showError && !state.isValid && (
        <p className="text-xs text-red-600 font-medium">
          Incorrect answer. A new question has been generated — please try again.
        </p>
      )}
    </div>
  )
}
