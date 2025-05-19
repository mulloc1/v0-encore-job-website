import { CalendarDays, MapPin, DollarSign, Clock, ExternalLink } from "lucide-react"

interface JobProps {
  job: {
    id: number
    title: string
    description: string
    location: string
    fee: string
    type?: "한 번 연주" | "대타" | null
    schedule?: string
    uploadDate: string
    source: string
  }
}

export default function JobCard({ job }: JobProps) {
  // Format the upload date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`
  }

  // 정중한 표현으로 변경된 제목
  const formatTitle = (title: string) => {
    return title
      .replace(/구함/g, "모십니다")
      .replace(/모집/g, "모십니다")
      .replace(/구인/g, "모십니다")
      .replace(/구합니다/g, "모십니다")
  }

  return (
    <div className="card-emerald flex flex-col h-full transform hover:scale-105 hover:-translate-y-1 cursor-pointer relative animate-in fade-in slide-in-from-bottom-4 duration-500">
      {job.type && (
        <div className="absolute -top-1 right-4 px-3 py-1 rounded-b-lg bg-emerald-700 dark:bg-[#a7d7c5] flex items-center justify-center text-xs font-bold text-white dark:text-black shadow-md">
          {job.type}
        </div>
      )}

      <div className="p-5 flex-grow">
        <h3 className="font-bold text-[#111] dark:text-white mb-3 text-lg font-card-heading text-center mt-1">
          {formatTitle(job.title)}
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2 font-card">
          {job.description.replace(/구함|모집|구인|구합니다/g, "모십니다")}
        </p>

        <div className="space-y-2">
          <div className="flex items-start text-xs">
            <MapPin className="h-3.5 w-3.5 text-emerald-700 dark:text-[#a7d7c5] mr-1.5 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300 font-card">{job.location}</span>
          </div>

          <div className="flex items-start text-xs">
            <DollarSign className="h-3.5 w-3.5 text-emerald-700 dark:text-[#a7d7c5] mr-1.5 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300 font-medium font-card">{job.fee}</span>
          </div>

          {job.schedule && (
            <div className="flex items-start text-xs">
              <CalendarDays className="h-3.5 w-3.5 text-emerald-700 dark:text-[#a7d7c5] mr-1.5 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 font-card">{job.schedule}</span>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 px-5 py-2.5 border-t border-[#e0e0e0] dark:border-gray-700 mt-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 font-card">
            <Clock className="h-3 w-3 mr-1" />
            <span>{formatDate(job.uploadDate)}</span>
          </div>

          <div className="flex items-center text-xs">
            <ExternalLink className="h-3 w-3 text-emerald-700 dark:text-[#a7d7c5] mr-1" />
            <span className="text-emerald-700 dark:text-[#a7d7c5] font-medium font-card">{job.source}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
