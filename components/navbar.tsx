"use client"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  // 스크롤 이벤트 감지
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`border-b border-[#e0e0e0] dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-md transition-all duration-300 ${
        isScrolled ? "bg-opacity-95 backdrop-blur-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-[#111] dark:text-white font-heading tracking-tight">
            ENCORE
          </Link>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <ThemeToggle />

            <Link
              href="/login"
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium bg-emerald-700 text-white dark:bg-[#a7d7c5] dark:text-gray-900 rounded-md hover:bg-emerald-600 dark:hover:bg-[#8fcbb6] transition-colors shadow-sm"
            >
              로그인
            </Link>

            <Link
              href="/signup"
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
            >
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
