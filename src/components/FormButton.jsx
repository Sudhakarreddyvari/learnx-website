"use client"

import { useForm } from "../context/FormContext"

const FormButton = ({ 
  children, 
  className = "", 
  variant = "primary", 
  onClick,
  ...props 
}) => {
  const { setIsFormOpen } = useForm()

  const baseStyles = "px-8 py-4 text-base font-medium text-white rounded-md transition-all relative group overflow-hidden"
  
  const variants = {
    primary: "bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600",
    secondary: "border border-violet-500/50 hover:border-violet-500 hover:bg-violet-700/20",
  }

  const handleClick = (e) => {
    if (onClick) {
      onClick(e)
    }
    setIsFormOpen(true)
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {variant === "primary" && (
        <>
          <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-300"></div>
          <div className="absolute inset-0 glow-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </>
      )}
      {variant === "secondary" && (
        <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-r from-violet-800/20 to-violet-600/20 transition-transform duration-300"></div>
      )}
    </button>
  )
}

export default FormButton 