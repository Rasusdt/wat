"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
import MobileLayout from "@/components/mobile-layout"

export default function CreateRequisite() {
  const router = useRouter()
  const [cardNumber, setCardNumber] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [description, setDescription] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("CARD")
  const [showPaymentDropdown, setShowPaymentDropdown] = useState(false)
  const [minAmount, setMinAmount] = useState("")
  const [maxAmount, setMaxAmount] = useState("")
  const [maxActiveOrders, setMaxActiveOrders] = useState("")
  const [maxCompletedOrders, setMaxCompletedOrders] = useState("")
  const [timeBetweenOrders, setTimeBetweenOrders] = useState("")
  const [balanceLimit, setBalanceLimit] = useState("")
  const [dayLimit, setDayLimit] = useState("")
  const [monthLimit, setMonthLimit] = useState("")
  const [isActive, setIsActive] = useState(false)

  const paymentMethods = [
    { id: "CARD", name: "CARD" },
    { id: "SBP", name: "SBP" },
    { id: "BANK", name: "Банковский счёт" },
  ]

  const handleCancel = () => {
    router.back()
  }

  const handleCreate = () => {
    // Здесь будет логика создания реквизита
    router.push("/requisites")
  }

  const handleCreateAndMore = () => {
    // Здесь будет логика создания реквизита и открытия новой формы
    // Для демонстрации просто обновим форму
    setCardNumber("")
    setPhoneNumber("")
    setDescription("")
    setMinAmount("")
    setMaxAmount("")
    setMaxActiveOrders("")
    setMaxCompletedOrders("")
    setTimeBetweenOrders("")
    setBalanceLimit("")
    setDayLimit("")
    setMonthLimit("")
  }

  const togglePaymentDropdown = () => {
    setShowPaymentDropdown(!showPaymentDropdown)
  }

  const selectPaymentMethod = (method: string) => {
    setPaymentMethod(method)
    setShowPaymentDropdown(false)
  }

  return (
    <MobileLayout title="Создать Реквизит">
      <div className="bg-[#131824] p-4 rounded-lg relative">
        <div className="space-y-6">
          {/* Номер карты */}
          <div>
            <label className="block mb-2">
              Номер карты <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="11112222333344444"
              className="w-full bg-[#2a3441] p-3 rounded-lg text-white border border-[#3a4451] focus:outline-none focus:border-[rgb(245,158,11)] placeholder-gray-500/50"
            />
          </div>

          {/* Номер для СМС */}
          <div>
            <label className="block mb-2">
              Номер для СМС <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+79001112233"
              className="w-full bg-[#2a3441] p-3 rounded-lg text-white border border-[#3a4451] focus:outline-none focus:border-[rgb(245,158,11)] placeholder-gray-500/50"
            />
          </div>

          {/* Описание */}
          <div>
            <label className="block mb-2">Описание реквизита, любая информация полезная для Вас</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Введите описание..."
              className="w-full bg-[#2a3441] p-3 rounded-lg text-white border border-[#3a4451] focus:outline-none focus:border-[rgb(245,158,11)] placeholder-gray-500/50 h-24"
            />
          </div>

          {/* Метод платежа */}
          <div className="relative">
            <label className="block mb-2">
              Метод платежа <span className="text-red-500">*</span>
            </label>
            <div
              onClick={togglePaymentDropdown}
              className={`w-full bg-[#2a3441] p-3 rounded-lg text-white flex justify-between items-center cursor-pointer border ${
                showPaymentDropdown ? "border-[rgb(245,158,11)]" : "border-[#3a4451]"
              }`}
            >
              <span>{paymentMethod}</span>
              <ChevronDown size={20} />
            </div>

            {/* Выпадающий список */}
            {showPaymentDropdown && (
              <div className="absolute z-10 w-full bg-[#1a2332] mt-1 rounded-lg shadow-lg border border-[#3a4451]">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="p-3 hover:bg-[#2a3441] cursor-pointer flex items-center"
                    onClick={() => selectPaymentMethod(method.name)}
                  >
                    {method.id === paymentMethod && <span className="mr-2 text-[rgb(245,158,11)]">✓</span>}
                    <span>{method.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Минимальная сумма */}
          <div>
            <label className="block mb-2">Минимальная сумма заказа</label>
            <input
              type="text"
              value={minAmount}
              onChange={(e) => setMinAmount(e.target.value)}
              placeholder="Оставьте пустым, если не нужно"
              className="w-full bg-[#2a3441] p-3 rounded-lg text-white border border-[#3a4451] focus:outline-none focus:border-[rgb(245,158,11)] placeholder-gray-500/50"
            />
          </div>

          {/* Максимальная сумма */}
          <div>
            <label className="block mb-2">Максимальная сумма заказа</label>
            <input
              type="text"
              value={maxAmount}
              onChange={(e) => setMaxAmount(e.target.value)}
              placeholder="Оставьте пустым, если не нужно"
              className="w-full bg-[#2a3441] p-3 rounded-lg text-white border border-[#3a4451] focus:outline-none focus:border-[rgb(245,158,11)] placeholder-gray-500/50"
            />
          </div>

          {/* Максимальное количество активных заявок */}
          <div>
            <label className="block mb-2">Максимальное количество активных заявок</label>
            <input
              type="text"
              value={maxActiveOrders}
              onChange={(e) => setMaxActiveOrders(e.target.value)}
              placeholder="Оставьте пустым, если не нужно"
              className="w-full bg-[#2a3441] p-3 rounded-lg text-white border border-[#3a4451] focus:outline-none focus:border-[rgb(245,158,11)] placeholder-gray-500/50"
            />
          </div>

          {/* Максимальное количество завершённых заявок в сутки */}
          <div>
            <label className="block mb-2">Максимальное количество завершённых заявок в сутки с 00 до 24</label>
            <input
              type="text"
              value={maxCompletedOrders}
              onChange={(e) => setMaxCompletedOrders(e.target.value)}
              placeholder="Оставьте пустым, если не нужно"
              className="w-full bg-[#2a3441] p-3 rounded-lg text-white border border-[#3a4451] focus:outline-none focus:border-[rgb(245,158,11)] placeholder-gray-500/50"
            />
          </div>

          {/* Время между заказами */}
          <div>
            <label className="block mb-2">
              Время между заказами в минутах (если стоит 5, заказ пришёл в 16.05, следующий может только в 16.10)
            </label>
            <input
              type="text"
              value={timeBetweenOrders}
              onChange={(e) => setTimeBetweenOrders(e.target.value)}
              placeholder="Оставьте пустым, если не нужно"
              className="w-full bg-[#2a3441] p-3 rounded-lg text-white border border-[#3a4451] focus:outline-none focus:border-[rgb(245,158,11)] placeholder-gray-500/50"
            />
          </div>

          {/* Лимит баланса */}
          <div>
            <label className="block mb-2">
              Лимит баланса <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={balanceLimit}
              onChange={(e) => setBalanceLimit(e.target.value)}
              placeholder="500 000"
              className="w-full bg-[#2a3441] p-3 rounded-lg text-white border border-[#3a4451] focus:outline-none focus:border-[rgb(245,158,11)] placeholder-gray-500/50"
            />
          </div>

          {/* Лимит в день */}
          <div>
            <label className="block mb-2">
              Лимит в день (с 00 до 24) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={dayLimit}
              onChange={(e) => setDayLimit(e.target.value)}
              placeholder="5 000 000"
              className="w-full bg-[#2a3441] p-3 rounded-lg text-white border border-[#3a4451] focus:outline-none focus:border-[rgb(245,158,11)] placeholder-gray-500/50"
            />
          </div>

          {/* Лимит в месяц */}
          <div>
            <label className="block mb-2">
              Лимит в месяц <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={monthLimit}
              onChange={(e) => setMonthLimit(e.target.value)}
              placeholder="10 000 000"
              className="w-full bg-[#2a3441] p-3 rounded-lg text-white border border-[#3a4451] focus:outline-none focus:border-[rgb(245,158,11)] placeholder-gray-500/50"
            />
          </div>

          {/* Переключатель */}
          <div className="flex items-center">
            <div
              onClick={() => setIsActive(!isActive)}
              className={`w-12 h-6 rounded-full relative cursor-pointer ${isActive ? "bg-[rgb(245,158,11)]" : "bg-gray-600"}`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  isActive ? "transform translate-x-7" : "transform translate-x-1"
                }`}
              />
            </div>
            <span className="ml-3">Выкл/Вкл</span>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex flex-wrap gap-4 mt-8">
          <button
            onClick={handleCreate}
            className="bg-[rgb(245,158,11)] hover:bg-[rgb(245,158,11)]/90 text-white px-6 py-3 rounded-lg"
          >
            Создать
          </button>
          <button
            onClick={handleCreateAndMore}
            className="bg-[#2a3441] hover:bg-[#354356] text-white px-6 py-3 rounded-lg"
          >
            Создать и Создать еще
          </button>
          <button onClick={handleCancel} className="bg-[#2a3441] hover:bg-[#354356] text-white px-6 py-3 rounded-lg">
            Отмена
          </button>
        </div>
      </div>
    </MobileLayout>
  )
}
