import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { ThemeMode } from "../lib/theme"

type Props = {
  mode: ThemeMode
  onToggle: () => void
}

export function ThemeToggle({ mode, onToggle }: Props) {
  const isDark = mode === "dark"
  const label = isDark ? "Switch to light mode" : "Switch to dark mode"

  return (
    <button
      onClick={onToggle}
      aria-label={label}
      className="
        group relative inline-flex items-center gap-2 rounded-full
        border border-zinc-300 dark:border-white/10
        bg-white dark:bg-white/5
        px-3 py-2 text-sm font-medium
        text-zinc-800 dark:text-white/80
        backdrop-blur
        transition-all duration-200
        hover:bg-zinc-100 dark:hover:bg-white/10
      "
    >
      <span className="sr-only">{label}</span>

      <AnimatePresence mode="wait">
        <motion.span
          key={mode}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="inline-flex h-5 w-5 items-center justify-center"
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-current" />
          ) : (
            <Moon className="h-4 w-4 text-current" />
          )}
        </motion.span>
      </AnimatePresence>

      <span className="hidden sm:block">
        {isDark ? "Light" : "Dark"}
      </span>

      {/* Subtle hover glow */}
      <span
        className="
          pointer-events-none absolute inset-0 rounded-full opacity-0
          shadow-[0_0_0_1px_rgba(0,0,0,.08),0_0_20px_rgba(0,0,0,.08)]
          dark:shadow-[0_0_0_1px_rgba(255,27,45,.35),0_0_30px_rgba(255,27,45,.25)]
          transition-opacity duration-300 group-hover:opacity-100
        "
      />
    </button>
  )
}