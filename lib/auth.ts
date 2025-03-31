"use client"

import { useContext, createContext } from "react"

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

// This is just a re-export of the context from auth-provider
// to avoid circular dependencies
export const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: () => {},
  signOut: () => {},
})

export const useAuth = () => useContext(AuthContext)

