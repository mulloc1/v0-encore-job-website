"use client"

import { X } from "lucide-react"
import { useState } from "react"

export default function FilterTags() {
  // Sample active filters
  const activeFilters = [
    { id: 1, label: "소프라노", type: "major" },
    { id: 2, label: "피아노", type: "major" },
    { id: 3, label: "서울시", type: "location" },
    { id: 4, label: "강남구", type: "location" },
  ]

  // 호버 상태 관리
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  // 필터 제거 함수
  const removeFilter = (id: number) => {
    console.log(`필터 제거: ${id}`)
    // 실제 구현에서는 필터 상태를 업데이트하는 로직 추가
  }

  return (
    <div className="py-4 overflow-x-auto">
      <div className="flex flex-wrap gap-2 md:flex-nowrap">
        {activeFilters.map((filter, index) => (
          <div
            key={filter.id}
            className={`inline-flex items-center px-3 py-1.5 rounded-full border text-sm font-medium transition-colors animate-in fade-in slide-in-from-bottom-4 duration-500 hover-lift ${
              filter.type === "major"
                ? "bg-emerald-700 dark:bg-[#a7d7c5] border-emerald-600 dark:border-[#8fcbb6] text-white dark:text-black"
                : "bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredId(filter.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {filter.label}
            {hoveredId === filter.id && (
              <button
                className="ml-1.5 text-current opacity-70 hover:opacity-100"
                onClick={() => removeFilter(filter.id)}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
