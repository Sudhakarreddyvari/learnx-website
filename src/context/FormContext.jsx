"use client"

import { createContext, useContext, useState } from "react"

const FormContext = createContext()

export function FormProvider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <FormContext.Provider value={{ isFormOpen, setIsFormOpen }}>
      {children}
    </FormContext.Provider>
  )
}

export function useForm() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider")
  }
  return context
} 