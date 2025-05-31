"use client"

import { useState } from "react"
import MobileLayout from "@/components/mobile-layout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { X } from "lucide-react"

export default function Profile() {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [tokenName, setTokenName] = useState("")
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

  return (
    <MobileLayout title="Мой Профиль">
      {/* Password Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Пароль</h2>
        <p className="text-gray-400 text-sm mb-6">Должно быть минимум 8 символов.</p>

        <div className="bg-[#1a2332] p-6 rounded-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Новый пароль <span className="text-red-500">*</span>
              </label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-[#2a3441] border-0 text-white rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Подтверждение пароля <span className="text-red-500">*</span>
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-[#2a3441] border-0 text-white rounded-lg"
              />
            </div>

            <div className="flex justify-end">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg">Обновить</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Двухфакторная аутентификация</h2>
        <p className="text-gray-400 text-sm mb-6">
          Управление двухфакторной аутентификацией для вашей учетной записи (рекомендуется)
        </p>

        <div className="bg-[#1a2332] p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Вы не включили двухфакторную аутентификацию</h3>
          <p className="text-gray-400 text-sm mb-6">
            Если включена двухфакторная аутентификация, вам будет предложено ввести безопасный токен во время
            аутентификации. Вы можете получить этот токен из Google Authenticator
          </p>

          <div className="flex justify-end">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center gap-2">
              <span>✓</span>
              Включить
            </Button>
          </div>
        </div>
      </div>

      {/* API Tokens */}
      <div>
        <h2 className="text-xl font-bold mb-2">API Токены</h2>
        <p className="text-gray-400 text-sm mb-6">
          Ваш токен отображается один раз при создании. Если вы потеряете свой токен, вам нужно будет удалить его и
          создать новый
        </p>

        <div className="bg-[#1a2332] p-6 mb-6 rounded-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Имя токена <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
                className="bg-[#2a3441] border-0 text-white rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Доступ <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-2">
                <Checkbox id="all" defaultChecked />
                <label htmlFor="all" className="text-sm">
                  all
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg">Создать</Button>
            </div>
          </div>
        </div>

        {/* Token Search */}
        <div className="bg-[#1a2332] p-6 rounded-lg">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Поиск"
              className="w-full bg-[#2a3441] border-0 rounded-lg px-4 py-3 text-white placeholder-gray-400"
            />
          </div>

          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-[#2a3441] flex items-center justify-center mx-auto mb-4">
              <X className="text-orange-500" size={24} />
            </div>
            <p className="text-white text-lg">Не найдено записей</p>
          </div>
        </div>
      </div>
    </MobileLayout>
  )
}
