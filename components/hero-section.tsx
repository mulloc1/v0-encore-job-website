"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Music, MapPin, ChevronRight, HelpCircle, Check } from "lucide-react"
import Image from "next/image"
import { createPortal } from "react-dom"

// 전공 데이터
const majorCategories = {
  건반악기: ["피아노", "오르간", "하프시코드", "첼레스타", "재즈피아노", "실용건반"],
  현악기: ["바이올린", "비올라", "첼로", "더블베이스", "하프", "기타", "일렉기타", "만돌린"],
  목관악기: [
    "플룻",
    "피콜로",
    "오보에",
    "잉글리쉬호른",
    "클라리넷",
    "베이스클라리넷",
    "바순",
    "콘트라바순",
    "색소폰",
    "알토색소폰",
    "테너색소폰",
    "바리톤색소폰",
    "리코더",
  ],
  금관악기: ["트럼펫", "코넷", "호른", "트롬본", "베이스트롬본", "튜바", "유포니움"],
  타악기: [
    "팀파니",
    "타악기",
    "마림바",
    "비브라폰",
    "글로켄슈필",
    "실로폰",
    "캐스터네츠",
    "심벌즈",
    "스네어드럼",
    "베이스드럼",
    "탬버린",
    "트라이앵글",
  ],
  성악: ["성악", "소프라노", "메조소프라노", "알토", "테너", "바리톤", "하이바리톤", "베이스", "합창"],
  기타: ["지휘", "작곡", "클래식작곡", "실용음악", "국악", "국악(민요)", "가야금", "해금", "무용", "미술", "교육"],
}

// 지역 데이터
const locationData = [
  {
    sd: "서울",
    sgg: [
      "강남구",
      "강동구",
      "강북구",
      "강서구",
      "관악구",
      "광진구",
      "구로구",
      "금천구",
      "노원구",
      "도봉구",
      "동대문구",
      "동작구",
      "마포구",
      "서대문구",
      "서초구",
      "성동구",
      "성북구",
      "송파구",
      "양천구",
      "영등포구",
      "용산구",
      "은평구",
      "종로구",
      "중구",
      "중랑구",
    ],
  },
  {
    sd: "부산",
    sgg: [
      "강서구",
      "금정구",
      "기장군",
      "남구",
      "동구",
      "동래구",
      "부산진구",
      "북구",
      "사상구",
      "사하구",
      "서구",
      "수영구",
      "연제구",
      "영도구",
      "중구",
      "해운대구",
    ],
  },
  {
    sd: "대구",
    sgg: ["군위군", "남구", "달서구", "달성군", "동구", "북구", "서구", "수성구", "중구"],
  },
  {
    sd: "인천",
    sgg: ["강화군", "계양구", "남동구", "동구", "미추홀구", "부평구", "서구", "연수구", "옹진군", "중구"],
  },
  {
    sd: "광주",
    sgg: ["광산구", "남구", "동구", "북구", "서구"],
  },
  {
    sd: "대전",
    sgg: ["대덕구", "동구", "서구", "유성구", "중구"],
  },
  {
    sd: "울산",
    sgg: ["남구", "동구", "북구", "울주군", "중구"],
  },
  {
    sd: "세종",
    sgg: ["세종시"],
  },
  {
    sd: "경기",
    sgg: [
      "가평군",
      "고양시 덕양구",
      "고양시 일산동구",
      "고양시 일산서구",
      "과천시",
      "광명시",
      "광주시",
      "구리시",
      "군포시",
      "김포시",
      "남양주시",
      "동두천시",
      "부천시",
      "성남시 분당구",
      "성남시 수정구",
      "성남시 중원구",
      "수원시 권선구",
      "수원시 영통구",
      "수원시 장안구",
      "수원시 팔달구",
      "시흥시",
      "안산시 단원구",
      "안산시 상록구",
      "안성시",
      "안양시 동안구",
      "안양시 만안구",
      "양주시",
      "양평군",
      "여주시",
      "연천군",
      "오산시",
      "용인시 기흥구",
      "용인시 수지구",
      "용인시 처인구",
      "의왕시",
      "의정부시",
      "이천시",
      "파주시",
      "평택시",
      "포천시",
      "하남시",
      "화성시",
    ],
  },
  {
    sd: "강원",
    sgg: [
      "강릉시",
      "고성군",
      "동해시",
      "삼척시",
      "속초시",
      "양구군",
      "양양군",
      "영월군",
      "원주시",
      "인제군",
      "정선군",
      "철원군",
      "춘천시",
      "태백시",
      "평창군",
      "홍천군",
      "화천군",
      "횡성군",
    ],
  },
  {
    sd: "충북",
    sgg: [
      "괴산군",
      "단양군",
      "보은군",
      "영동군",
      "옥천군",
      "음성군",
      "제천시",
      "증평군",
      "진천군",
      "청주시 상당구",
      "청주시 서원구",
      "청주시 청원구",
      "청주시 흥덕구",
      "충주시",
    ],
  },
  {
    sd: "충남",
    sgg: [
      "계룡시",
      "공주시",
      "금산군",
      "논산시",
      "당진시",
      "보령시",
      "부여군",
      "서산시",
      "서천군",
      "아산시",
      "예산군",
      "천안시 동남구",
      "천안시 서북구",
      "청양군",
      "태안군",
      "홍성군",
    ],
  },
  {
    sd: "전북",
    sgg: [
      "고창군",
      "군산시",
      "김제시",
      "남원시",
      "무주군",
      "부안군",
      "순창군",
      "완주군",
      "익산시",
      "임실군",
      "장수군",
      "전주시 덕진구",
      "전주시 완산구",
      "정읍시",
      "진안군",
    ],
  },
  {
    sd: "전남",
    sgg: [
      "강진군",
      "고흥군",
      "곡성군",
      "광양시",
      "구례군",
      "나주시",
      "담양군",
      "목포시",
      "무안군",
      "보성군",
      "순천시",
      "신안군",
      "여수시",
      "영광군",
      "영암군",
      "완도군",
      "장성군",
      "장흥군",
      "진도군",
      "함평군",
      "해남군",
      "화순군",
    ],
  },
  {
    sd: "경북",
    sgg: [
      "경산시",
      "경주시",
      "고령군",
      "구미시",
      "군위군",
      "김천시",
      "문경시",
      "봉화군",
      "상주시",
      "성주군",
      "안동시",
      "영덕군",
      "영양군",
      "영주시",
      "영천시",
      "예천군",
      "울릉군",
      "울진군",
      "의성군",
      "청도군",
      "청송군",
      "칠곡군",
      "포항시 남구",
      "포항시 북구",
    ],
  },
  {
    sd: "경남",
    sgg: [
      "거제시",
      "거창군",
      "고성군",
      "김해시",
      "남해군",
      "밀양시",
      "사천시",
      "산청군",
      "양산시",
      "의령군",
      "진주시",
      "창녕군",
      "창원시 마산합포구",
      "창원시 마산회원구",
      "창원시 성산구",
      "창원시 의창구",
      "창원시 진해구",
      "통영시",
      "하동군",
      "함안군",
      "함양군",
      "합천군",
    ],
  },
  {
    sd: "제주",
    sgg: ["서귀포시", "제주시"],
  },
]

export default function HeroSection() {
  const [activeDropdown, setActiveDropdown] = useState<"major" | "location" | "help" | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // 선택된 필터 상태 관리
  const [selectedMajors, setSelectedMajors] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<{ region: string; district: string }[]>([])

  // 버튼 위치 참조
  const majorButtonRef = useRef<HTMLButtonElement>(null)
  const locationButtonRef = useRef<HTMLButtonElement>(null)
  const helpButtonRef = useRef<HTMLButtonElement>(null)

  // 버튼 위치 상태
  const [majorButtonRect, setMajorButtonRect] = useState<DOMRect | null>(null)
  const [locationButtonRect, setLocationButtonRect] = useState<DOMRect | null>(null)
  const [helpButtonRect, setHelpButtonRect] = useState<DOMRect | null>(null)

  // 마운트 상태 업데이트
  useEffect(() => {
    setMounted(true)
  }, [])

  // 버튼 위치 업데이트
  useEffect(() => {
    const updateButtonRects = () => {
      if (majorButtonRef.current) {
        setMajorButtonRect(majorButtonRef.current.getBoundingClientRect())
      }

      if (locationButtonRef.current) {
        setLocationButtonRect(locationButtonRef.current.getBoundingClientRect())
      }

      if (helpButtonRef.current) {
        setHelpButtonRect(helpButtonRef.current.getBoundingClientRect())
      }
    }

    updateButtonRects()

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", updateButtonRects)
    window.addEventListener("resize", updateButtonRects)

    return () => {
      window.removeEventListener("scroll", updateButtonRects)
      window.removeEventListener("resize", updateButtonRects)
    }
  }, [])

  // 드롭다운 토글 함수
  const toggleDropdown = (dropdown: "major" | "location" | "help") => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
      setSelectedCategory(null)
      setSelectedRegion(null)
    } else {
      setActiveDropdown(dropdown)
      setSelectedCategory(null)
      setSelectedRegion(null)
    }
  }

  // 전공 선택 함수
  const handleMajorSelect = (major: string) => {
    if (selectedMajors.includes(major)) {
      setSelectedMajors(selectedMajors.filter((item) => item !== major))
    } else {
      setSelectedMajors([...selectedMajors, major])
    }
  }

  // 지역 선택 함수
  const handleLocationSelect = (region: string, district: string) => {
    const existingLocation = selectedLocations.find((loc) => loc.region === region && loc.district === district)

    if (existingLocation) {
      setSelectedLocations(selectedLocations.filter((loc) => !(loc.region === region && loc.district === district)))
    } else {
      setSelectedLocations([...selectedLocations, { region, district }])
    }
  }

  // 필터 적용 함수
  const applyFilters = () => {
    console.log("선택된 전공:", selectedMajors)
    console.log("선택된 지역:", selectedLocations)
    setActiveDropdown(null)
    // 여기에 필터 적용 로직 추가
  }

  // 드롭다운 렌더링 함수
  const renderDropdown = () => {
    if (!mounted) return null

    let dropdownContent = null
    let buttonRect = null
    const dropdownWidth = 240 // 기본 드롭다운 너비

    if (activeDropdown === "major") {
      buttonRect = majorButtonRect
      dropdownContent = selectedCategory ? (
        <>
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 dark:border-gray-700">
            <button
              className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedCategory(null)
              }}
            >
              <ChevronDown className="rotate-90 h-4 w-4 mr-1" />
              뒤로
            </button>
            <span className="text-sm font-medium">{selectedCategory}</span>
          </div>
          <div className="max-h-60 overflow-y-auto py-1">
            {majorCategories[selectedCategory as keyof typeof majorCategories].map((item) => (
              <button
                key={item}
                className="flex justify-between items-center w-full text-left px-4 py-2.5 text-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors text-gray-900 dark:text-gray-100"
                onClick={(e) => {
                  e.stopPropagation()
                  handleMajorSelect(item)
                }}
              >
                <span>{item}</span>
                {selectedMajors.includes(item) && <Check className="h-4 w-4 text-emerald-700 dark:text-[#a7d7c5]" />}
              </button>
            ))}
          </div>
          <div className="border-t border-gray-100 dark:border-gray-700 p-2 flex justify-end">
            <button
              className="px-3 py-1.5 bg-emerald-700 dark:bg-[#a7d7c5] text-white dark:text-black text-xs rounded-md hover:bg-emerald-600 dark:hover:bg-[#8fcbb6] transition-colors"
              onClick={applyFilters}
            >
              필터 적용
            </button>
          </div>
        </>
      ) : (
        <div className="max-h-60 overflow-y-auto py-1">
          {Object.keys(majorCategories).map((category) => (
            <button
              key={category}
              className="flex justify-between items-center w-full text-left px-4 py-2.5 text-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors text-gray-900 dark:text-gray-100"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedCategory(category)
              }}
            >
              {category}
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </button>
          ))}
        </div>
      )
    } else if (activeDropdown === "location") {
      buttonRect = locationButtonRect
      dropdownContent = selectedRegion ? (
        <>
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 dark:border-gray-700">
            <button
              className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedRegion(null)
              }}
            >
              <ChevronDown className="rotate-90 h-4 w-4 mr-1" />
              뒤로
            </button>
            <span className="text-sm font-medium">{selectedRegion}</span>
          </div>
          <div className="max-h-60 overflow-y-auto py-1">
            {locationData
              .find((item) => item.sd === selectedRegion)
              ?.sgg.map((district) => (
                <button
                  key={district}
                  className="flex justify-between items-center w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-gray-900 dark:text-gray-100"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleLocationSelect(selectedRegion, district)
                  }}
                >
                  <span>{district}</span>
                  {selectedLocations.some((loc) => loc.region === selectedRegion && loc.district === district) && (
                    <Check className="h-4 w-4 text-emerald-700 dark:text-[#a7d7c5]" />
                  )}
                </button>
              ))}
          </div>
          <div className="border-t border-gray-100 dark:border-gray-700 p-2 flex justify-end">
            <button
              className="px-3 py-1.5 bg-emerald-700 dark:bg-[#a7d7c5] text-white dark:text-black text-xs rounded-md hover:bg-emerald-600 dark:hover:bg-[#8fcbb6] transition-colors"
              onClick={applyFilters}
            >
              필터 적용
            </button>
          </div>
        </>
      ) : (
        <div className="max-h-60 overflow-y-auto py-1">
          {locationData.map((region) => (
            <button
              key={region.sd}
              className="flex justify-between items-center w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-gray-900 dark:text-gray-100"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedRegion(region.sd)
              }}
            >
              {region.sd}
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </button>
          ))}
        </div>
      )
    } else if (activeDropdown === "help") {
      buttonRect = helpButtonRect
      dropdownContent = (
        <div className="p-4">
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">ENCORE란?</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            ENCORE는 음악인들을 위한 구인구직 플랫폼입니다. 전국의 음악 관련 일자리를 한 곳에서 찾아보고 지원할 수
            있습니다.
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-medium">앙코르 (ENCORE)</span>는 공연 후 관객의 환호에 답하는 추가 연주를 의미합니다.
            저희는 모든 음악인이 무대 밖에서도 지속 가능한 음악 활동을 할 수 있도록 돕고자 합니다.
          </p>
        </div>
      )
    }

    if (!dropdownContent || !buttonRect) return null

    // 모바일에서 드롭다운이 화면 밖으로 나가지 않도록 위치 조정
    const isMobile = window.innerWidth < 640
    const leftPosition = isMobile
      ? Math.min(buttonRect.left, window.innerWidth - dropdownWidth - 16) // 16px는 여백
      : buttonRect.left

    // 드롭다운 위치 계산
    const dropdownStyle = {
      position: "fixed" as const,
      top: `${buttonRect.bottom + 8}px`, // 버튼과 드롭다운 사이 간격 추가
      left: `${leftPosition}px`,
      width: `${Math.min(buttonRect.width, dropdownWidth)}px`,
      maxWidth: `${window.innerWidth - 32}px`, // 화면 양쪽에 16px 여백
      zIndex: 9999,
    }

    return createPortal(
      <div style={dropdownStyle} onClick={(e) => e.stopPropagation()} className="animate-in fade-in duration-200">
        <div className="mt-2 bg-white dark:bg-gray-800 border border-[#e0e0e0] dark:border-gray-700 rounded-md shadow-lg w-full">
          {dropdownContent}
        </div>
      </div>,
      document.body,
    )
  }

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        activeDropdown &&
        majorButtonRef.current &&
        !majorButtonRef.current.contains(event.target as Node) &&
        locationButtonRef.current &&
        !locationButtonRef.current.contains(event.target as Node) &&
        helpButtonRef.current &&
        !helpButtonRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
        setSelectedCategory(null)
        setSelectedRegion(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeDropdown])

  return (
    <div className="relative">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop"
          alt="Piano background"
          fill
          className="object-cover object-center brightness-[0.35]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 to-gray-900/60 mix-blend-multiply"></div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-4 py-4 md:py-6 flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-heading leading-tight whitespace-nowrap animate-in fade-in slide-in-from-bottom-4 duration-700">
            "Every musician deserves an Encore."
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-3 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            하루종일 음악 구인 글을 뒤지느라 지치셨나요?
          </p>
          <p className="text-sm md:text-lg lg:text-xl text-gray-200 mb-3 mx-auto max-w-2xl px-2 sm:px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            앙코르 (ENCORE)는 전국의 음악 일자리를 자동으로 모아서
            <br className="hidden sm:block" />
            당신에게 가장 빠르게 연결해드립니다.
          </p>

          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            지금 클릭 한 번으로 당신의 무대를 연결하세요.
          </p>

          {/* 필터 버튼 */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4 relative animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            {/* 전공 선택 버튼 */}
            <div className="relative">
              <button
                ref={majorButtonRef}
                onClick={() => toggleDropdown("major")}
                className="flex items-center justify-center w-full sm:w-auto px-5 py-2.5 rounded-md bg-emerald-700 dark:bg-[#a7d7c5] text-white dark:text-black font-bold hover:bg-emerald-600 dark:hover:bg-[#8fcbb6] transition-colors shadow-md font-heading text-sm sm:text-base"
              >
                <Music className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                전공 선택 <ChevronDown className="ml-1.5 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            {/* 지역 선택 버튼 */}
            <div className="relative">
              <button
                ref={locationButtonRef}
                onClick={() => toggleDropdown("location")}
                className="flex items-center justify-center w-full sm:w-auto px-5 py-2.5 rounded-md bg-white/90 text-gray-900 font-bold hover:bg-white transition-colors shadow-md font-heading text-sm sm:text-base"
              >
                <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                지역 선택 <ChevronDown className="ml-1.5 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            {/* ENCORE? 버튼 */}
            <div className="relative">
              <button
                ref={helpButtonRef}
                onClick={() => toggleDropdown("help")}
                className="flex items-center justify-center w-full sm:w-auto px-5 py-2.5 rounded-md bg-gray-800/80 text-white font-bold hover:bg-gray-700 transition-colors shadow-md font-heading text-sm sm:text-base"
              >
                <HelpCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                ENCORE?
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 드롭다운 메뉴 (포털로 렌더링) */}
      {renderDropdown()}

      {/* 장식 요소 */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-emerald-700/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-700/20 rounded-full blur-3xl"></div>
    </div>
  )
}
