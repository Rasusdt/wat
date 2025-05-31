"use client"
import MobileLayout from "@/components/mobile-layout"
import EmptyState from "@/components/empty-state"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Requisites() {
  const router = useRouter()
  const [requisites, setRequisites] = useState([])

  useEffect(() => {
    // Здесь будет логика получения реквизитов из API или другого источника данных
    // Для примера, создадим массив с данными
    const mockRequisites = [
      { id: 1, cardNumber: "1111222233334444", phoneNumber: "+79001112233", description: "Основной счет" },
      { id: 2, cardNumber: "5555666677778888", phoneNumber: "+79004445566", description: "Запасной счет" },
    ]
    setRequisites(mockRequisites)
  }, [])

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

      {requisites.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="py-2">Номер карты</th>
                <th className="py-2">Номер телефона</th>
                <th className="py-2">Описание</th>
              </tr>
            </thead>
            <tbody>
              {requisites.map((requisite) => (
                <tr key={requisite.id} className="border-b border-gray-700">
                  <td className="py-2">{requisite.cardNumber}</td>
                  <td className="py-2">{requisite.phoneNumber}</td>
                  <td className="py-2">{requisite.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState showSearch showFilter />
      )}
    </MobileLayout>
  )
}
