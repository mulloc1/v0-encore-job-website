"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleClear = () => {
    setSearchTerm("")
  }

  return (
    <div className="relative max-w-md w-full mx-auto mb-6">
      <div
        className={`flex items-center border ${
          isFocused
            ? "border-emerald-700 dark:border-[#a7d7c5] ring-2 ring-emerald-100 dark:ring-emerald-900/30"
            : "border-gray-300 dark:border-gray-700"
        } rounded-lg bg-white dark:bg-gray-800 px-3 py-2 transition-all duration-200`}
      >
        <Search className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="제목, 지역, 악기 등으로 검색"
          className="flex-grow bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )
}
