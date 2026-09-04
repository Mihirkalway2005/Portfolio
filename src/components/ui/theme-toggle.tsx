import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/context/ThemeContext"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  let themeContext: ReturnType<typeof useTheme> | null = null
  try {
    themeContext = useTheme()
  } catch {
    // Fallback if rendered outside ThemeProvider
  }

  const [localIsDark, setLocalIsDark] = useState(true)
  const isDark = themeContext ? themeContext.theme === "dark" : localIsDark

  const handleToggle = () => {
    if (themeContext) {
      themeContext.toggleTheme()
    } else {
      setLocalIsDark(!localIsDark)
    }
  }

  return (
    <div
      data-theme-toggle
      className={cn(
        "relative flex w-16 h-8 p-1 rounded-full cursor-pointer select-none transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        isDark 
          ? "bg-zinc-950 border border-zinc-800" 
          : "bg-white border border-zinc-200",
        className
      )}
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleToggle()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* GPU-Accelerated Sliding Indicator Disc (Smooth 450ms glide) */}
      <div
        className={cn(
          "absolute top-1 left-1 w-6 h-6 rounded-full pointer-events-none transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
          isDark 
            ? "translate-x-0 bg-zinc-800 shadow-sm" 
            : "translate-x-8 bg-gray-200 shadow-sm"
        )}
        style={{
          transform: isDark ? "translate3d(0, 0, 0)" : "translate3d(32px, 0, 0)",
        }}
      />

      {/* Static Icon Slots (prevents icon collisions and frame-0 popping) */}
      <div className="relative z-10 flex justify-between items-center w-full pointer-events-none">
        {/* Moon Icon (Left) */}
        <div className="flex justify-center items-center w-6 h-6 rounded-full">
          <Moon 
            className={cn(
              "w-4 h-4 transition-colors duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isDark ? "text-white" : "text-zinc-400"
            )} 
            strokeWidth={1.5}
          />
        </div>

        {/* Sun Icon (Right) */}
        <div className="flex justify-center items-center w-6 h-6 rounded-full">
          <Sun 
            className={cn(
              "w-4 h-4 transition-colors duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isDark ? "text-zinc-500" : "text-gray-700"
            )} 
            strokeWidth={1.5}
          />
        </div>
      </div>
    </div>
  )
}
