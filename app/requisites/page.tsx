"use client"
import MobileLayout from "@/components/mobile-layout"
import EmptyState from "@/components/empty-state"
import { useRouter } from "next/navigation"

export default function Requisites() {
  const router = useRouter()

  const handleCreateClick = () => {
    router.push("/requisites/create")
  }

  return (
    <MobileLayout title="Реквизиты">
      <div className="mb-6">
        <button
          onClick={handleCreateClick}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          Создать
        </button>
      </div>

      <EmptyState showSearch showFilter />
    </MobileLayout>
  )
}
