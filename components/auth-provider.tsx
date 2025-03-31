"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  signIn: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: () => {},
  signOut: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  // Mock sign in function
  const signIn = () => {
    setUser({
      id: "1",
      name: "Demo User",
      email: "demo@example.com",
    })
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: "1",
        name: "Demo User",
        email: "demo@example.com",
      }),
    )
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  useEffect(() => {
    // Check if user is already signed in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse stored user", error)
        localStorage.removeItem("user")
      }
    }
  }, [])

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

