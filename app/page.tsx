import JobGrid from "@/components/job-grid"
import FilterTags from "@/components/filter-tags"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SurveyButton from "@/components/survey-button"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <HeroSection />
      <main className="flex-grow container mx-auto px-4 py-8">
        <FilterTags />
        <JobGrid />
      </main>
      <Footer />
      <SurveyButton />
    </div>
  )
}
