"use client"

import { useState } from "react"
import { Coffee, BarChart2, HelpCircle, X } from "lucide-react"

export default function Footer() {
  const [showEncoreModal, setShowEncoreModal] = useState(false)

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-[#e0e0e0] dark:border-gray-800 py-10">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="text-center mb-8 max-w-3xl">
          {/* Support Section */}
          <div className="space-y-4 mb-6 mx-auto px-2">
            <p className="text-[#111] dark:text-gray-300 font-medium text-sm sm:text-base">
              Encore는 무대 밖에서 버티는 음악인을 위해 존재합니다.
            </p>

            <p className="text-[#111] dark:text-gray-300 text-sm sm:text-base">
              <span className="font-bold">당신의 작은 응원이</span>
              <br className="sm:hidden" />
              누군가에겐 음악을 포기하지 않아도 되는 하루가 됩니다.
            </p>

            <p className="text-[#111] dark:text-gray-300 font-bold text-sm sm:text-base">
              지금, 이 연결에 함께해 주세요.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 bg-emerald-700 text-white dark:bg-[#a7d7c5] dark:text-gray-900 font-bold rounded-md hover:bg-emerald-600 dark:hover:bg-[#8fcbb6] transition-colors shadow-md text-sm sm:text-base">
              <Coffee className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Buy me a coffee
            </button>
            <button className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-md text-sm sm:text-base">
              <BarChart2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              설문 참여하기
            </button>
            <button
              className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-200 font-bold rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors shadow-md text-sm sm:text-base"
              onClick={() => setShowEncoreModal(true)}
            >
              <HelpCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              ENCORE?
            </button>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="border-t border-[#e0e0e0] dark:border-gray-800 pt-6 text-center">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            회사 정보
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            이용약관
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            개인정보처리방침
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            문의하기
          </a>
        </div>
      </div>

      {/* ENCORE? 모달 */}
      {showEncoreModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full p-6 relative animate-in slide-in-from-bottom-8 duration-300">
            <button
              onClick={() => setShowEncoreModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-2xl font-bold mb-4 font-heading text-center">ENCORE란?</h3>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-bold">앙코르 (ENCORE)</span>는 공연 후 관객의 환호에 답하는 추가 연주를
                의미합니다.
              </p>

              <p>
                클래식 음악계에서 앙코르는 연주자의 기량과 관객의 열정이 만나는 특별한 순간입니다. 하지만 무대 밖에서
                음악인들은 생계를 위한 일자리를 찾는 데 많은 시간과 노력을 소비합니다.
              </p>

              <p>
                <span className="font-bold">ENCORE 플랫폼</span>은 음악인들이 자신의 재능을 발휘할 수 있는 기회를 더
                쉽게 찾을 수 있도록 돕습니다. 전국의 음악 관련 일자리를 한 곳에 모아 제공함으로써, 음악인들이 더 많은
                시간을 음악에 집중할 수 있도록 합니다.
              </p>

              <p>
                우리는 모든 음악인이 무대 밖에서도 지속 가능한 음악 활동을 할 수 있는 환경을 만들고자 합니다.
                <span className="font-bold"> 당신의 음악 여정에 앙코르를 선사합니다.</span>
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setShowEncoreModal(false)}
                className="px-5 py-2.5 bg-emerald-700 text-white dark:bg-[#a7d7c5] dark:text-gray-900 font-bold rounded-md hover:bg-emerald-600 dark:hover:bg-[#8fcbb6] transition-colors shadow-md"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
