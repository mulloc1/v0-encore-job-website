"use client"

import { useState, useEffect } from "react"
import JobCard from "./job-card"
import JobCardSkeleton from "./job-card-skeleton"

// Sample job data
const jobs = [
  {
    id: 1,
    title: "교회 예배 반주자 모십니다",
    description: "주일 오전 예배 반주자 모십니다",
    location: "서울 강남구",
    fee: "시급 5만원",
    type: "대타" as const,
    schedule: "2023년 5월 12일 오전 11시",
    uploadDate: "2023-05-01",
    source: "음악인 커뮤니티",
  },
  {
    id: 2,
    title: "성악 레슨 선생님 모십니다",
    description: "소프라노 전공자 우대 주 2회 레슨",
    location: "서울 서초구",
    fee: "회당 7만원",
    uploadDate: "2023-05-03",
    source: "음악대학 게시판",
  },
  {
    id: 3,
    title: "오케스트라 단원 모십니다",
    description: "바이올린 비올라 파트 단원 모십니다",
    location: "경기 성남시",
    fee: "공연당 30만원",
    type: "한 번 연주" as const,
    schedule: "2023년 5월 20일 오후 7시",
    uploadDate: "2023-05-02",
    source: "성남시립교향악단",
  },
  {
    id: 4,
    title: "피아노 학원 강사 모십니다",
    description: "초등학생 대상 피아노 교육 경력자 우대",
    location: "서울 송파구",
    fee: "월 250만원",
    uploadDate: "2023-05-04",
    source: "음악교육협회",
  },
  {
    id: 5,
    title: "결혼식 축가 모십니다",
    description: "10월 15일 오후 2시 클래식 1곡",
    location: "서울 중구",
    fee: "30만원",
    type: "한 번 연주" as const,
    schedule: "2023년 10월 15일 오후 2시",
    uploadDate: "2023-05-05",
    source: "웨딩플래너",
  },
  {
    id: 6,
    title: "첼로 앙상블 멤버 모십니다",
    description: "주 1회 연습 정기 공연 참여",
    location: "인천 연수구",
    fee: "공연비 별도 지급",
    uploadDate: "2023-05-06",
    source: "인천 첼로 앙상블",
  },
  {
    id: 7,
    title: "음악학원 플룻 강사 모십니다",
    description: "주 3일 오후 3시-7시 레슨",
    location: "경기 일산",
    fee: "시간당 3만원",
    uploadDate: "2023-05-07",
    source: "일산 음악학원",
  },
  {
    id: 8,
    title: "클래식 기타 연주자 모십니다",
    description: "카페 주말 공연 2시간 연주",
    location: "서울 마포구",
    fee: "회당 15만원",
    type: "대타" as const,
    schedule: "2023년 5월 13일 오후 6시",
    uploadDate: "2023-05-08",
    source: "마포 클래식 카페",
  },
]

export default function JobGrid() {
  const [loading, setLoading] = useState(true)
  const [displayedJobs, setDisplayedJobs] = useState<typeof jobs>([])

  // 데이터 로딩 시뮬레이션
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedJobs(jobs)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
      {loading
        ? Array(8)
            .fill(0)
            .map((_, index) => <JobCardSkeleton key={index} />)
        : displayedJobs.map((job) => <JobCard key={job.id} job={job} />)}
    </div>
  )
}
