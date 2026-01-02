import Hero from '@/components/home/Hero'
import BookingSection from '@/components/home/BookingSection'
import SolutionsSection from '@/components/home/SolutionsSection'
import ThirdSection from '@/components/home/ThirdSection'

export default function HomePage() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <SolutionsSection />
      <BookingSection />
      <ThirdSection />
    </div>
  )
}

