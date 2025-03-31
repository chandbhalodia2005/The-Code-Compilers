"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, Code2Icon } from "lucide-react"
import { useTheme } from "next-themes"
import { useAuth } from "@/lib/auth"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const { user, signIn, signOut } = useAuth()

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Code2Icon className="h-6 w-6" />
            <span className="font-bold">CodeChallenge</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className={`text-sm font-medium ${
                pathname === "/" ? "text-foreground" : "text-muted-foreground"
              } transition-colors hover:text-foreground`}
            >
              Problems
            </Link>
            <Link
              href="/leaderboard"
              className={`text-sm font-medium ${
                pathname === "/leaderboard" ? "text-foreground" : "text-muted-foreground"
              } transition-colors hover:text-foreground`}
            >
              Leaderboard
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">{user.name}</span>
              <Button variant="outline" size="sm" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          ) : (
            <Button size="sm" onClick={signIn}>
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

