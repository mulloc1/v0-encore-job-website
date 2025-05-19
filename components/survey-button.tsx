"use client"

import { useState } from "react"
import { BarChart2, Coffee, X } from "lucide-react"

export default function SurveyButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState<"survey" | "coffee" | null>(null)
  const [isDonateOpen, setIsDonateOpen] = useState(false)

  return (
    <>
      {/* Floating Buttons with Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* 후원 버튼 */}
        <div>
          <button
            onClick={() => setIsDonateOpen(true)}
            onMouseEnter={() => setIsHovered("coffee")}
            onMouseLeave={() => setIsHovered(null)}
            className={`p-3 sm:p-4 rounded-full bg-amber-600 text-white shadow-lg hover:bg-amber-500 transition-all pulse-amber ${
              isHovered === "coffee" ? "animate-wiggle-strong" : ""
            }`}
            aria-label="후원하기"
          >
            <Coffee className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* 후원 버튼 Tooltip */}
          {isHovered === "coffee" && (
            <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm py-1 px-3 rounded shadow-md whitespace-nowrap animate-in fade-in slide-in-from-bottom-4 duration-200">
              후원하기
              <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-white dark:border-t-gray-800"></div>
            </div>
          )}
        </div>

        {/* 설문 버튼 */}
        <div>
          <button
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setIsHovered("survey")}
            onMouseLeave={() => setIsHovered(null)}
            className={`p-3 sm:p-4 rounded-full bg-emerald-700 text-white dark:bg-[#a7d7c5] dark:text-gray-900 shadow-lg hover:bg-emerald-600 dark:hover:bg-[#8fcbb6] transition-all pulse-green ${
              isHovered === "survey" ? "animate-wiggle-strong" : ""
            }`}
            aria-label="설문 참여하기"
          >
            <BarChart2 className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* 설문 버튼 Tooltip */}
          {isHovered === "survey" && (
            <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm py-1 px-3 rounded shadow-md whitespace-nowrap animate-in fade-in slide-in-from-bottom-4 duration-200">
              설문참여
              <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-white dark:border-t-gray-800"></div>
            </div>
          )}
        </div>
      </div>

      {/* 설문 모달 */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 relative animate-in slide-in-from-bottom-8 duration-300">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-xl font-bold mb-4 font-heading text-center">ENCORE 서비스 설문조사</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              더 나은 서비스를 위해 여러분의 소중한 의견을 들려주세요.
            </p>

            <div className="space-y-4">
              <button className="w-full py-3 bg-emerald-700 text-white dark:bg-[#a7d7c5] dark:text-gray-900 rounded-md font-medium hover:bg-emerald-600 dark:hover:bg-[#8fcbb6] transition-colors">
                설문 참여하기
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                다음에 참여하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 후원 모달 */}
      {isDonateOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 relative animate-in slide-in-from-bottom-8 duration-300">
            <button
              onClick={() => setIsDonateOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-xl font-bold mb-4 font-heading text-center">음악인을 응원해주세요</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              여러분의 후원은 음악인들이 더 나은 환경에서 활동할 수 있도록 돕습니다.
            </p>

            <div className="space-y-4">
              <button className="w-full py-3 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-500 transition-colors flex items-center justify-center">
                <Coffee className="mr-2 h-5 w-5" />
                후원하기
              </button>
              <button
                onClick={() => setIsDonateOpen(false)}
                className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                다음에 후원하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
