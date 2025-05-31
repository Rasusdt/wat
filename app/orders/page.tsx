"use client"

import MobileLayout from "@/components/mobile-layout"
import EmptyState from "@/components/empty-state"

export default function Orders() {
  return (
    <MobileLayout title="Заказы">
      <EmptyState showSearch />
    </MobileLayout>
  )
}
