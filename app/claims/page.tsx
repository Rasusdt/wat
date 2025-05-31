"use client"

import MobileLayout from "@/components/mobile-layout"
import EmptyState from "@/components/empty-state"

export default function Claims() {
  return (
    <MobileLayout title="Претензии">
      <EmptyState showFilter />
    </MobileLayout>
  )
}
