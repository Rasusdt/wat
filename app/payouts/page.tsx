"use client"

import MobileLayout from "@/components/mobile-layout"
import EmptyState from "@/components/empty-state"

export default function Payouts() {
  return (
    <MobileLayout title="Выплаты">
      <div className="mb-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium">
          Создать
        </button>
      </div>

      <EmptyState />
    </MobileLayout>
  )
}
