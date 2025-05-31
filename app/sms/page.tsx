"use client"

import MobileLayout from "@/components/mobile-layout"
import EmptyState from "@/components/empty-state"

export default function SMS() {
  return (
    <MobileLayout title="Смс Сообщения">
      <EmptyState showSearch />
    </MobileLayout>
  )
}
