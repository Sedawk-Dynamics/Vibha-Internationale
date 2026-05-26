"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { type ReactNode } from "react"

const easeOutSoft = [0.22, 1, 0.36, 1] as const

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  scale?: number
  immediate?: boolean
}

/**
 * Single element reveal — fades + slides (and optionally scales) into view.
 * Default is scroll-triggered; pass `immediate` to fire on mount.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 24,
  scale = 1,
  immediate = false,
}: RevealProps) {
  const reduce = useReducedMotion()

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : y,
      scale: reduce ? 1 : scale,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration, delay, ease: easeOutSoft },
    },
  }

  const trigger = immediate
    ? { initial: "hidden", animate: "visible" }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-80px" },
      }

  return (
    <motion.div {...trigger} variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

interface RevealStaggerProps {
  children: ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
  immediate?: boolean
}

/**
 * Orchestrator — animates its `RevealItem` children in sequence.
 */
export function RevealStagger({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.1,
  immediate = false,
}: RevealStaggerProps) {
  const trigger = immediate
    ? { initial: "hidden", animate: "visible" }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-80px" },
      }

  return (
    <motion.div
      {...trigger}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren, staggerChildren } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface RevealItemProps {
  children: ReactNode
  className?: string
  y?: number
  duration?: number
}

/**
 * Child slot used inside `RevealStagger`. Inherits trigger state from parent.
 */
export function RevealItem({
  children,
  className,
  y = 24,
  duration = 0.7,
}: RevealItemProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: easeOutSoft },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
