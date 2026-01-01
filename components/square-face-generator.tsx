"use client"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AvatarCanvas } from "@/components/avatar-canvas"
import { FeatureSelector } from "@/components/feature-selector"
import { ColorPicker } from "@/components/color-picker"
import { ShareModal } from "@/components/share-modal"
import { Shuffle, Download, RotateCcw } from "lucide-react"
import { CATEGORIES, type AvatarState, getDefaultState, getRandomState } from "@/lib/avatar-data"

export function SquareFaceGenerator() {
  const [avatarState, setAvatarState] = useState<AvatarState>(getDefaultState())
  const [activeCategory, setActiveCategory] = useState("skin")
  const [showShareModal, setShowShareModal] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleFeatureChange = useCallback((category: string, value: number) => {
    setAvatarState((prev) => ({
      ...prev,
      features: { ...prev.features, [category]: value },
    }))
  }, [])

  const handleColorChange = useCallback((category: string, color: string) => {
    setAvatarState((prev) => ({
      ...prev,
      colors: { ...prev.colors, [category]: color },
    }))
  }, [])

  const handleRandom = useCallback(() => {
    setAvatarState(getRandomState())
  }, [])

  const handleReset = useCallback(() => {
    setAvatarState(getDefaultState())
  }, [])

  const handleSave = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement("a")
    link.download = "square-face-avatar.png"
    link.href = canvas.toDataURL("image/png")
    link.click()
    setShowShareModal(true)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">🎨 Square Face Generator</h1>
        <p className="text-gray-600">Create your unique square face avatar!</p>
      </header>

      {/* Main Content */}
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        {/* Canvas and Actions */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Avatar Preview */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-gradient-to-br from-pink-100 to-blue-100 p-4 rounded-xl">
              <AvatarCanvas ref={canvasRef} state={avatarState} size={256} />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button onClick={handleSave} className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6">
                <Download className="w-4 h-4 mr-2" />
                SAVE
              </Button>
              <Button
                onClick={handleRandom}
                variant="outline"
                className="border-2 border-blue-400 text-blue-600 hover:bg-blue-50 font-semibold px-6 bg-transparent"
              >
                <Shuffle className="w-4 h-4 mr-2" />
                Random
              </Button>
            </div>

            <Button onClick={handleReset} variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
              <RotateCcw className="w-4 h-4 mr-2" />
              All Reset
            </Button>
          </div>

          {/* Feature Selection */}
          <div className="flex-1">
            {/* Category Tabs */}
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="flex flex-wrap h-auto gap-1 bg-gray-100 p-2 rounded-lg mb-4">
                {CATEGORIES.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="text-xs px-3 py-1.5 data-[state=active]:bg-pink-500 data-[state=active]:text-white rounded-md"
                  >
                    {cat.icon} {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Feature Options */}
            <FeatureSelector
              category={activeCategory}
              selectedValue={avatarState.features[activeCategory] || 0}
              onSelect={(value) => handleFeatureChange(activeCategory, value)}
              currentState={avatarState}
            />

            {/* Color Picker */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">🎨 Color</h3>
              <ColorPicker
                category={activeCategory}
                selectedColor={avatarState.colors[activeCategory] || "#000000"}
                onChange={(color) => handleColorChange(activeCategory, color)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal open={showShareModal} onClose={() => setShowShareModal(false)} />

      {/* Footer */}
      <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>Create your perfect square face avatar! 💕</p>
      </footer>
    </div>
  )
}
