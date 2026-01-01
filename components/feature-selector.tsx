"use client"

import { useEffect, useRef } from "react"
import { CATEGORIES } from "@/lib/avatar-data"
import { cn } from "@/lib/utils"
import type { AvatarState } from "@/lib/avatar-data"

interface FeatureSelectorProps {
  category: string
  selectedValue: number
  onSelect: (value: number) => void
  currentState: AvatarState
}

export function FeatureSelector({ category, selectedValue, onSelect, currentState }: FeatureSelectorProps) {
  const categoryData = CATEGORIES.find((c) => c.id === category)
  if (!categoryData) return null

  return (
    <div className="grid grid-cols-5 gap-2">
      {/* None option */}
      <button
        onClick={() => onSelect(0)}
        className={cn(
          "aspect-square rounded-lg border-2 flex items-center justify-center transition-all hover:scale-105",
          selectedValue === 0 ? "border-pink-500 bg-pink-50" : "border-gray-200 hover:border-gray-300",
        )}
      >
        <span className="text-2xl">❌</span>
      </button>

      {/* Feature options with visual previews */}
      {categoryData.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(index + 1)}
          className={cn(
            "aspect-square rounded-lg border-2 overflow-hidden transition-all hover:scale-105 bg-white",
            selectedValue === index + 1 ? "border-pink-500 ring-2 ring-pink-200" : "border-gray-200 hover:border-gray-300",
          )}
        >
          <FeaturePreview
            category={category}
            optionIndex={index + 1}
            currentState={currentState}
          />
        </button>
      ))}
    </div>
  )
}

interface FeaturePreviewProps {
  category: string
  optionIndex: number
  currentState: AvatarState
}

function FeaturePreview({ category, optionIndex, currentState }: FeaturePreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create a preview state with only this feature changed
    const previewState: AvatarState = {
      features: { ...currentState.features },
      colors: { ...currentState.colors },
    }
    previewState.features[category] = optionIndex

    // Clear and draw preview
    ctx.clearRect(0, 0, 60, 60)
    drawPreview(ctx, previewState, category)
  }, [category, optionIndex, currentState])

  return <canvas ref={canvasRef} width={60} height={60} className="w-full h-full object-cover" />
}

function drawPreview(ctx: CanvasRenderingContext2D, state: AvatarState, category: string) {
  // Background
  ctx.fillStyle = "#f5f5f5"
  ctx.fillRect(0, 0, 60, 60)

  const scale = 60 / 256
  ctx.save()
  ctx.scale(scale, scale)

  // Base face (simplified)
  ctx.fillStyle = state.colors.skin || "#FFE4C4"
  roundRect(ctx, 48, 48, 160, 170, 20)
  ctx.fill()

  // Draw the specific feature preview
  switch (category) {
    case "bangs":
      if (state.features.bangs > 0) {
        ctx.fillStyle = state.colors.bangs || "#4A3728"
        drawBangsPreview(ctx, state, state.features.bangs)
      }
      break
    case "sideHair":
      if (state.features.sideHair > 0) {
        ctx.fillStyle = state.colors.sideHair || "#4A3728"
        drawSideHairPreview(ctx, state, state.features.sideHair)
      }
      break
    case "eye":
      drawEyePreview(ctx, state, state.features.eye)
      break
    case "nose":
      drawNosePreview(ctx, state, state.features.nose)
      break
    case "mouth":
      drawMouthPreview(ctx, state, state.features.mouth)
      break
    case "eyebrow":
      drawEyebrowPreview(ctx, state, state.features.eyebrow)
      break
    case "cheek":
      if (state.features.cheek > 0) {
        drawCheekPreview(ctx, state, state.features.cheek)
      }
      break
    case "glasses":
      if (state.features.glasses > 0) {
        drawGlassesPreview(ctx, state, state.features.glasses)
      }
      break
    case "hat":
      if (state.features.hat > 0) {
        drawHatPreview(ctx, state, state.features.hat)
      }
      break
    case "clothes":
      drawClothesPreview(ctx, state, state.features.clothes)
      break
    case "other":
      if (state.features.other > 0) {
        drawOtherPreview(ctx, state, state.features.other)
      }
      break
  }

  ctx.restore()
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

// Simplified preview functions for each feature
function drawBangsPreview(ctx: CanvasRenderingContext2D, _state: AvatarState, style: number) {
  const hairColor = _state.colors.bangs || "#4A3728"
  ctx.fillStyle = hairColor

  switch (style) {
    case 1: // Full
      roundRect(ctx, 48, 35, 160, 45, 15)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(128, 80, 80, Math.PI, 2 * Math.PI)
      ctx.fill()
      break
    case 2: // Side swept
      ctx.beginPath()
      ctx.moveTo(48, 48)
      ctx.quadraticCurveTo(80, 30, 180, 55)
      ctx.lineTo(208, 48)
      ctx.lineTo(208, 85)
      ctx.quadraticCurveTo(128, 100, 48, 85)
      ctx.closePath()
      ctx.fill()
      break
    case 3: // Parted
      ctx.beginPath()
      ctx.moveTo(48, 48)
      ctx.lineTo(118, 48)
      ctx.lineTo(118, 95)
      ctx.quadraticCurveTo(80, 95, 48, 75)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(208, 48)
      ctx.lineTo(138, 48)
      ctx.lineTo(138, 95)
      ctx.quadraticCurveTo(176, 95, 208, 75)
      ctx.closePath()
      ctx.fill()
      break
    case 4: // Fluffy
      ctx.beginPath()
      ctx.arc(80, 60, 35, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(128, 55, 38, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(176, 60, 35, 0, Math.PI * 2)
      ctx.fill()
      break
    case 5: // Blunt
      ctx.fillRect(48, 40, 160, 50)
      break
    case 6: // Curly
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.arc(65 + i * 32, 55, 20, 0, Math.PI * 2)
        ctx.fill()
      }
      break
    case 7: // Asym
      ctx.beginPath()
      ctx.moveTo(48, 48)
      ctx.lineTo(150, 48)
      ctx.lineTo(150, 80)
      ctx.quadraticCurveTo(100, 90, 48, 70)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(160, 48)
      ctx.lineTo(208, 48)
      ctx.lineTo(208, 65)
      ctx.quadraticCurveTo(185, 75, 160, 65)
      ctx.closePath()
      ctx.fill()
      break
    case 8: // Wispy
      ctx.beginPath()
      ctx.moveTo(48, 50)
      ctx.quadraticCurveTo(70, 35, 90, 55)
      ctx.quadraticCurveTo(110, 40, 128, 50)
      ctx.quadraticCurveTo(146, 40, 166, 55)
      ctx.quadraticCurveTo(186, 35, 208, 50)
      ctx.lineTo(208, 75)
      ctx.quadraticCurveTo(128, 95, 48, 75)
      ctx.closePath()
      ctx.fill()
      break
    case 9: // Bowed
      ctx.beginPath()
      ctx.moveTo(48, 50)
      ctx.quadraticCurveTo(100, 25, 128, 50)
      ctx.quadraticCurveTo(156, 25, 208, 50)
      ctx.lineTo(208, 75)
      ctx.quadraticCurveTo(128, 90, 48, 75)
      ctx.closePath()
      ctx.fill()
      break
    case 10: // Swept
      ctx.beginPath()
      ctx.moveTo(48, 55)
      ctx.lineTo(208, 45)
      ctx.lineTo(208, 80)
      ctx.quadraticCurveTo(128, 85, 48, 80)
      ctx.closePath()
      ctx.fill()
      break
  }
}

function drawSideHairPreview(ctx: CanvasRenderingContext2D, _state: AvatarState, style: number) {
  const hairColor = _state.colors.sideHair || "#4A3728"
  ctx.fillStyle = hairColor

  switch (style) {
    case 1: // Long
      ctx.fillRect(35, 60, 25, 180)
      ctx.fillRect(196, 60, 25, 180)
      break
    case 2: // Short
      ctx.fillRect(40, 60, 20, 80)
      ctx.fillRect(196, 60, 20, 80)
      break
    case 3: // Curly
      for (let i = 0; i < 4; i++) {
        ctx.beginPath()
        ctx.arc(50, 80 + i * 35, 18, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(206, 80 + i * 35, 18, 0, Math.PI * 2)
        ctx.fill()
      }
      break
    case 4: // Wavy
      ctx.beginPath()
      ctx.moveTo(35, 60)
      ctx.quadraticCurveTo(25, 120, 45, 160)
      ctx.quadraticCurveTo(25, 200, 40, 220)
      ctx.lineTo(60, 220)
      ctx.lineTo(60, 60)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(221, 60)
      ctx.quadraticCurveTo(231, 120, 211, 160)
      ctx.quadraticCurveTo(231, 200, 216, 220)
      ctx.lineTo(196, 220)
      ctx.lineTo(196, 60)
      ctx.closePath()
      ctx.fill()
      break
    case 5: // Pony
      ctx.fillRect(35, 60, 20, 120)
      ctx.fillRect(201, 60, 20, 120)
      ctx.beginPath()
      ctx.ellipse(128, 150, 15, 40, 0, 0, Math.PI * 2)
      ctx.fill()
      break
    case 6: // Pigtails
      ctx.beginPath()
      ctx.arc(45, 100, 25, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(211, 100, 25, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillRect(35, 60, 20, 70)
      ctx.fillRect(201, 60, 20, 70)
      break
    case 7: // Twin
      ctx.fillRect(35, 60, 22, 100)
      ctx.fillRect(199, 60, 22, 100)
      ctx.beginPath()
      ctx.ellipse(40, 180, 20, 35, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(216, 180, 20, 35, 0, 0, Math.PI * 2)
      ctx.fill()
      break
    case 8: // Spiky
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.moveTo(40, 60 + i * 30)
        ctx.lineTo(30, 80 + i * 30)
        ctx.lineTo(50, 90 + i * 30)
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(216, 60 + i * 30)
        ctx.lineTo(226, 80 + i * 30)
        ctx.lineTo(206, 90 + i * 30)
        ctx.closePath()
        ctx.fill()
      }
      break
    case 9: // Bob
      ctx.beginPath()
      ctx.roundRect(35, 60, 28, 130, 10)
      ctx.fill()
      ctx.beginPath()
      ctx.roundRect(193, 60, 28, 130, 10)
      ctx.fill()
      break
    case 10: // Layered
      ctx.fillRect(40, 60, 20, 160)
      ctx.fillRect(196, 60, 20, 160)
      ctx.globalAlpha = 0.8
      ctx.fillRect(45, 70, 15, 140)
      ctx.fillRect(196, 70, 15, 140)
      ctx.globalAlpha = 1
      break
  }
}

function drawEyePreview(ctx: CanvasRenderingContext2D, _state: AvatarState, style: number) {
  const eyeColor = _state.colors.eye || "#2C1810"

  // Eye whites
  ctx.fillStyle = "#FFFFFF"
  ctx.beginPath()
  ctx.ellipse(100, 130, 18, 20, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.beginPath()
  ctx.ellipse(156, 130, 18, 20, 0, 0, Math.PI * 2)
  ctx.fill()

  ctx.fillStyle = eyeColor
  ctx.strokeStyle = eyeColor

  switch (style) {
    case 1: // Round
      ctx.beginPath()
      ctx.arc(100, 132, 11, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(156, 132, 11, 0, Math.PI * 2)
      ctx.fill()
      break
    case 2: // Oval
      ctx.beginPath()
      ctx.ellipse(100, 132, 8, 13, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(156, 132, 8, 13, 0, 0, Math.PI * 2)
      ctx.fill()
      break
    case 3: // Happy
      ctx.lineWidth = 4
      ctx.beginPath()
      ctx.arc(100, 132, 12, 0, Math.PI)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(156, 132, 12, 0, Math.PI)
      ctx.stroke()
      break
    case 4: // Wink
      ctx.beginPath()
      ctx.arc(100, 132, 11, 0, Math.PI * 2)
      ctx.fill()
      ctx.lineWidth = 4
      ctx.beginPath()
      ctx.moveTo(144, 132)
      ctx.lineTo(168, 132)
      ctx.stroke()
      break
    case 5: // Star
      drawStar(ctx, 100, 132, 5, 11, 5)
      ctx.fill()
      drawStar(ctx, 156, 132, 5, 11, 5)
      ctx.fill()
      break
    case 6: // Sparkle
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(100, 120)
      ctx.lineTo(100, 144)
      ctx.moveTo(88, 132)
      ctx.lineTo(112, 132)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(100, 132, 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(156, 120)
      ctx.lineTo(156, 144)
      ctx.moveTo(144, 132)
      ctx.lineTo(168, 132)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(156, 132, 4, 0, Math.PI * 2)
      ctx.fill()
      break
    case 7: // Sleepy
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(86, 132)
      ctx.quadraticCurveTo(100, 138, 114, 132)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(142, 132)
      ctx.quadraticCurveTo(156, 138, 170, 132)
      ctx.stroke()
      break
    case 8: // Wide
      ctx.beginPath()
      ctx.arc(100, 130, 14, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(156, 130, 14, 0, Math.PI * 2)
      ctx.fill()
      break
    case 9: // Heart
      drawHeart(ctx, 100, 132, 10)
      drawHeart(ctx, 156, 132, 10)
      break
    case 10: // Crescent
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.arc(95, 128, 12, 0.8 * Math.PI, 0.2 * Math.PI, true)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(151, 128, 12, 0.8 * Math.PI, 0.2 * Math.PI, true)
      ctx.stroke()
      break
  }
}

function drawNosePreview(ctx: CanvasRenderingContext2D, _state: AvatarState, style: number) {
  ctx.fillStyle = _state.colors.nose || "#D4A574"
  ctx.strokeStyle = _state.colors.nose || "#D4A574"
  ctx.lineWidth = 2

  switch (style) {
    case 1: // Dot
      ctx.beginPath()
      ctx.arc(128, 155, 4, 0, Math.PI * 2)
      ctx.fill()
      break
    case 2: // Line
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(128, 148)
      ctx.lineTo(128, 162)
      ctx.stroke()
      break
    case 3: // Triangle
      ctx.beginPath()
      ctx.moveTo(128, 148)
      ctx.lineTo(120, 162)
      ctx.lineTo(136, 162)
      ctx.closePath()
      ctx.fill()
      break
    case 4: // Cat
      ctx.beginPath()
      ctx.moveTo(128, 155)
      ctx.lineTo(120, 162)
      ctx.lineTo(136, 162)
      ctx.closePath()
      ctx.fill()
      break
    case 5: // Round
      ctx.beginPath()
      ctx.arc(128, 156, 6, 0, Math.PI * 2)
      ctx.fill()
      break
    case 6: // Diamond
      ctx.beginPath()
      ctx.moveTo(128, 148)
      ctx.lineTo(134, 156)
      ctx.lineTo(128, 164)
      ctx.lineTo(122, 156)
      ctx.closePath()
      ctx.fill()
      break
    case 7: // Slash
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(122, 150)
      ctx.lineTo(134, 162)
      ctx.stroke()
      break
    case 8: // Small
      ctx.beginPath()
      ctx.arc(128, 156, 2, 0, Math.PI * 2)
      ctx.fill()
      break
    case 9: // Button
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(128, 156, 5, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(128, 156, 2, 0, Math.PI * 2)
      ctx.fill()
      break
    case 10: // Triple
      ctx.beginPath()
      ctx.arc(124, 154, 2, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(128, 156, 2, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(132, 154, 2, 0, Math.PI * 2)
      ctx.fill()
      break
  }
}

function drawMouthPreview(ctx: CanvasRenderingContext2D, _state: AvatarState, style: number) {
  ctx.fillStyle = _state.colors.mouth || "#E57373"
  ctx.strokeStyle = _state.colors.mouth || "#E57373"
  ctx.lineWidth = 3

  switch (style) {
    case 1: // Smile
      ctx.beginPath()
      ctx.arc(128, 178, 15, 0.1 * Math.PI, 0.9 * Math.PI)
      ctx.stroke()
      break
    case 2: // Big Smile
      ctx.beginPath()
      ctx.arc(128, 175, 18, 0, Math.PI)
      ctx.fill()
      break
    case 3: // Cat
      ctx.beginPath()
      ctx.moveTo(113, 180)
      ctx.lineTo(128, 185)
      ctx.lineTo(143, 180)
      ctx.stroke()
      break
    case 4: // Open
      ctx.beginPath()
      ctx.ellipse(128, 182, 12, 8, 0, 0, Math.PI * 2)
      ctx.fill()
      break
    case 5: // Line
      ctx.beginPath()
      ctx.moveTo(115, 182)
      ctx.lineTo(141, 182)
      ctx.stroke()
      break
    case 6: // Tongue
      ctx.beginPath()
      ctx.arc(128, 178, 14, 0.1 * Math.PI, 0.9 * Math.PI)
      ctx.stroke()
      ctx.fillStyle = "#FF6B6B"
      ctx.beginPath()
      ctx.ellipse(128, 186, 8, 6, 0, 0, Math.PI)
      ctx.fill()
      break
    case 7: // Small
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(128, 180, 10, 0.1 * Math.PI, 0.9 * Math.PI)
      ctx.stroke()
      break
    case 8: // Oval
      ctx.beginPath()
      ctx.ellipse(128, 182, 10, 7, 0, 0, Math.PI * 2)
      ctx.stroke()
      break
    case 9: // Smirk
      ctx.beginPath()
      ctx.moveTo(115, 182)
      ctx.quadraticCurveTo(128, 178, 141, 184)
      ctx.stroke()
      break
    case 10: // Peace
      ctx.beginPath()
      ctx.arc(128, 180, 12, 0, Math.PI)
      ctx.stroke()
      break
  }
}

function drawEyebrowPreview(ctx: CanvasRenderingContext2D, _state: AvatarState, style: number) {
  ctx.strokeStyle = _state.colors.eyebrow || "#4A3728"
  ctx.lineWidth = 3

  switch (style) {
    case 1: // Normal
      ctx.beginPath()
      ctx.moveTo(85, 105)
      ctx.lineTo(115, 105)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(141, 105)
      ctx.lineTo(171, 105)
      ctx.stroke()
      break
    case 2: // Arched
      ctx.beginPath()
      ctx.moveTo(85, 110)
      ctx.quadraticCurveTo(100, 100, 115, 108)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(141, 108)
      ctx.quadraticCurveTo(156, 100, 171, 110)
      ctx.stroke()
      break
    case 3: // Angry
      ctx.beginPath()
      ctx.moveTo(85, 100)
      ctx.lineTo(115, 110)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(141, 110)
      ctx.lineTo(171, 100)
      ctx.stroke()
      break
    case 4: // Worried
      ctx.beginPath()
      ctx.moveTo(85, 110)
      ctx.lineTo(115, 100)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(141, 100)
      ctx.lineTo(171, 110)
      ctx.stroke()
      break
    case 5: // Thick
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.moveTo(85, 105)
      ctx.lineTo(115, 105)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(141, 105)
      ctx.lineTo(171, 105)
      ctx.stroke()
      break
    case 6: // Slash
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(82, 100)
      ctx.lineTo(118, 110)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(138, 110)
      ctx.lineTo(174, 100)
      ctx.stroke()
      break
    case 7: // Flat
      ctx.lineWidth = 4
      ctx.beginPath()
      ctx.moveTo(88, 108)
      ctx.lineTo(112, 108)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(144, 108)
      ctx.lineTo(168, 108)
      ctx.stroke()
      break
    case 8: // Curved
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(85, 105)
      ctx.quadraticCurveTo(100, 98, 115, 105)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(141, 105)
      ctx.quadraticCurveTo(156, 98, 171, 105)
      ctx.stroke()
      break
    case 9: // Raised
      ctx.beginPath()
      ctx.moveTo(85, 98)
      ctx.quadraticCurveTo(100, 90, 115, 98)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(141, 98)
      ctx.quadraticCurveTo(156, 90, 171, 98)
      ctx.stroke()
      break
    case 10: // Relaxed
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(85, 106)
      ctx.quadraticCurveTo(100, 104, 115, 106)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(141, 106)
      ctx.quadraticCurveTo(156, 104, 171, 106)
      ctx.stroke()
      break
  }
}

function drawCheekPreview(ctx: CanvasRenderingContext2D, _state: AvatarState, style: number) {
  const cheekColor = _state.colors.cheek || "#FFB6C1"
  ctx.fillStyle = cheekColor
  ctx.globalAlpha = 0.5

  switch (style) {
    case 1: // Round
      ctx.beginPath()
      ctx.ellipse(75, 165, 15, 10, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(181, 165, 15, 10, 0, 0, Math.PI * 2)
      ctx.fill()
      break
    case 2: // Heart
      drawHeartBlush(ctx, 75, 165)
      drawHeartBlush(ctx, 181, 165)
      break
    case 3: // Lines
      ctx.strokeStyle = cheekColor
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(65, 160)
      ctx.lineTo(85, 160)
      ctx.moveTo(65, 166)
      ctx.lineTo(85, 166)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(171, 160)
      ctx.lineTo(191, 160)
      ctx.moveTo(171, 166)
      ctx.lineTo(191, 166)
      ctx.stroke()
      break
    case 4: // Flower
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        const angle = (i * 72 * Math.PI) / 180
        ctx.arc(75 + Math.cos(angle) * 6, 165 + Math.sin(angle) * 6, 5, 0, Math.PI * 2)
        ctx.fill()
      }
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        const angle = (i * 72 * Math.PI) / 180
        ctx.arc(181 + Math.cos(angle) * 6, 165 + Math.sin(angle) * 6, 5, 0, Math.PI * 2)
        ctx.fill()
      }
      break
    case 5: // Star
      drawStar(ctx, 75, 165, 5, 12, 6)
      ctx.fill()
      drawStar(ctx, 181, 165, 5, 12, 6)
      ctx.fill()
      break
    case 6: // Sparkle
      ctx.lineWidth = 2
      ctx.strokeStyle = cheekColor
      ctx.beginPath()
      ctx.moveTo(65, 155)
      ctx.lineTo(85, 175)
      ctx.moveTo(85, 155)
      ctx.lineTo(65, 175)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(171, 155)
      ctx.lineTo(191, 175)
      ctx.moveTo(191, 155)
      ctx.lineTo(171, 175)
      ctx.stroke()
      break
    case 7: // Soft
      const grad1 = ctx.createRadialGradient(75, 165, 0, 75, 165, 20)
      grad1.addColorStop(0, cheekColor)
      grad1.addColorStop(1, "transparent")
      ctx.fillStyle = grad1
      ctx.beginPath()
      ctx.arc(75, 165, 20, 0, Math.PI * 2)
      ctx.fill()
      const grad2 = ctx.createRadialGradient(181, 165, 0, 181, 165, 20)
      grad2.addColorStop(0, cheekColor)
      grad2.addColorStop(1, "transparent")
      ctx.fillStyle = grad2
      ctx.beginPath()
      ctx.arc(181, 165, 20, 0, Math.PI * 2)
      ctx.fill()
      break
    case 8: // Ribbon
      ctx.fillStyle = cheekColor
      drawRibbonBlush(ctx, 75, 165)
      drawRibbonBlush(ctx, 181, 165)
      break
    case 9: // Dots
      ctx.globalAlpha = 0.6
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.arc(70 + i * 8, 160 + i * 5, 4, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(176 + i * 8, 160 + i * 5, 4, 0, Math.PI * 2)
        ctx.fill()
      }
      break
    case 10: // Rainbow
      const colors = ["#FFB6C1", "#FFD700", "#87CEEB", "#98FB98", "#DDA0DD"]
      colors.forEach((c, i) => {
        ctx.fillStyle = c
        ctx.globalAlpha = 0.3
        ctx.beginPath()
        ctx.arc(70 + i * 5, 165, 8, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(176 + i * 5, 165, 8, 0, Math.PI * 2)
        ctx.fill()
      })
      break
  }

  ctx.globalAlpha = 1
}

function drawGlassesPreview(ctx: CanvasRenderingContext2D, _state: AvatarState, style: number) {
  const color = _state.colors.glasses || "#333333"
  ctx.strokeStyle = color
  ctx.lineWidth = 3

  switch (style) {
    case 1: // Round
      ctx.beginPath()
      ctx.arc(100, 130, 22, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(156, 130, 22, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(122, 130)
      ctx.lineTo(134, 130)
      ctx.stroke()
      break
    case 2: // Square
      ctx.strokeRect(78, 110, 44, 40)
      ctx.strokeRect(134, 110, 44, 40)
      ctx.beginPath()
      ctx.moveTo(122, 130)
      ctx.lineTo(134, 130)
      ctx.stroke()
      break
    case 3: // Sunglass
      ctx.fillStyle = "#333333"
      roundRect(ctx, 75, 115, 50, 35, 8)
      ctx.fill()
      roundRect(ctx, 131, 115, 50, 35, 8)
      ctx.fill()
      break
    case 4: // Oval
      ctx.beginPath()
      ctx.ellipse(100, 130, 24, 18, 0, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.ellipse(156, 130, 24, 18, 0, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(124, 130)
      ctx.lineTo(132, 130)
      ctx.stroke()
      break
    case 5: // Heart
      ctx.lineWidth = 2
      drawHeartFrame(ctx, 100, 130, 25)
      drawHeartFrame(ctx, 156, 130, 25)
      break
    case 6: // Star
      ctx.lineWidth = 2
      drawStar(ctx, 100, 130, 5, 25, 12)
      ctx.stroke()
      drawStar(ctx, 156, 130, 5, 25, 12)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(122, 130)
      ctx.lineTo(134, 130)
      ctx.stroke()
      break
    case 7: // Butterfly
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.ellipse(85, 130, 18, 25, -0.3, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.ellipse(115, 130, 18, 25, 0.3, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.ellipse(141, 130, 18, 25, -0.3, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.ellipse(171, 130, 18, 25, 0.3, 0, Math.PI * 2)
      ctx.stroke()
      break
    case 8: // Cool
      ctx.lineWidth = 4
      ctx.beginPath()
      ctx.moveTo(70, 125)
      ctx.lineTo(125, 125)
      ctx.lineTo(130, 140)
      ctx.lineTo(125, 145)
      ctx.lineTo(70, 145)
      ctx.closePath()
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(186, 125)
      ctx.lineTo(131, 125)
      ctx.lineTo(126, 140)
      ctx.lineTo(131, 145)
      ctx.lineTo(186, 145)
      ctx.closePath()
      ctx.stroke()
      break
    case 9: // Circle
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(100, 130, 26, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(156, 130, 26, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(126, 130)
      ctx.lineTo(130, 130)
      ctx.stroke()
      break
    case 10: // Crescent
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(90, 125, 22, 0.8 * Math.PI, 0.2 * Math.PI, true)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(166, 125, 22, 0.8 * Math.PI, 0.2 * Math.PI, true)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(110, 135)
      ctx.lineTo(146, 135)
      ctx.stroke()
      break
  }
}

function drawHatPreview(ctx: CanvasRenderingContext2D, _state: AvatarState, style: number) {
  const color = _state.colors.hat || "#333333"
  ctx.fillStyle = color

  switch (style) {
    case 1: // Cap
      ctx.beginPath()
      ctx.arc(128, 50, 65, Math.PI, 2 * Math.PI)
      ctx.fill()
      ctx.fillRect(50, 45, 156, 15)
      break
    case 2: // Beanie
      roundRect(ctx, 55, 20, 146, 55, 30)
      ctx.fill()
      ctx.fillStyle = "#FFFFFF"
      ctx.beginPath()
      ctx.arc(128, 20, 12, 0, Math.PI * 2)
      ctx.fill()
      break
    case 3: // Top Hat
      ctx.fillRect(78, 0, 100, 55)
      ctx.fillRect(58, 50, 140, 15)
      break
    case 4: // Cat Ears
      ctx.beginPath()
      ctx.moveTo(60, 75)
      ctx.lineTo(85, 20)
      ctx.lineTo(110, 65)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(196, 75)
      ctx.lineTo(171, 20)
      ctx.lineTo(146, 65)
      ctx.closePath()
      ctx.fill()
      break
    case 5: // Bow
      ctx.fillRect(88, 35, 80, 30)
      ctx.beginPath()
      ctx.arc(70, 50, 22, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(186, 50, 22, 0, Math.PI * 2)
      ctx.fill()
      break
    case 6: // Crown
      ctx.fillRect(78, 20, 100, 40)
      ctx.beginPath()
      ctx.moveTo(78, 20)
      ctx.lineTo(88, 0)
      ctx.lineTo(98, 20)
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(118, 20)
      ctx.lineTo(128, -5)
      ctx.lineTo(138, 20)
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(158, 20)
      ctx.lineTo(168, 0)
      ctx.lineTo(178, 20)
      ctx.fill()
      break
    case 7: // Headset
      ctx.strokeStyle = color
      ctx.lineWidth = 8
      ctx.beginPath()
      ctx.arc(128, 70, 70, Math.PI, 0)
      ctx.stroke()
      ctx.fillStyle = color
      ctx.fillRect(55, 50, 20, 40)
      ctx.fillRect(181, 50, 20, 40)
      break
    case 8: // Flowers
      ctx.fillStyle = "#FF69B4"
      for (let i = 0; i < 6; i++) {
        ctx.beginPath()
        const angle = (i * 60 * Math.PI) / 180
        ctx.arc(70 + Math.cos(angle) * 12, 50 + Math.sin(angle) * 12, 10, 0, Math.PI * 2)
        ctx.fill()
      }
      for (let i = 0; i < 6; i++) {
        ctx.beginPath()
        const angle = (i * 60 * Math.PI) / 180
        ctx.arc(128 + Math.cos(angle) * 12, 40 + Math.sin(angle) * 12, 10, 0, Math.PI * 2)
        ctx.fill()
      }
      for (let i = 0; i < 6; i++) {
        ctx.beginPath()
        const angle = (i * 60 * Math.PI) / 180
        ctx.arc(186 + Math.cos(angle) * 12, 50 + Math.sin(angle) * 12, 10, 0, Math.PI * 2)
        ctx.fill()
      }
      break
    case 9: // Star Hat
      ctx.beginPath()
      ctx.arc(128, 45, 60, Math.PI, 2 * Math.PI)
      ctx.fill()
      ctx.fillStyle = "#FFD700"
      drawStar(ctx, 128, 35, 5, 15, 7)
      ctx.fill()
      break
    case 10: // Fox Ears
      ctx.beginPath()
      ctx.moveTo(55, 75)
      ctx.lineTo(75, 10)
      ctx.lineTo(100, 60)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(201, 75)
      ctx.lineTo(181, 10)
      ctx.lineTo(156, 60)
      ctx.closePath()
      ctx.fill()
      break
  }
}

function drawClothesPreview(ctx: CanvasRenderingContext2D, _state: AvatarState, style: number) {
  const color = _state.colors.clothes || "#4A90D9"
  ctx.fillStyle = color

  switch (style) {
    case 1: // T-Shirt
      ctx.beginPath()
      ctx.moveTo(48, 218)
      ctx.lineTo(48, 256)
      ctx.lineTo(208, 256)
      ctx.lineTo(208, 218)
      ctx.quadraticCurveTo(128, 200, 48, 218)
      ctx.fill()
      break
    case 2: // Hoodie
      ctx.beginPath()
      ctx.moveTo(38, 218)
      ctx.lineTo(38, 256)
      ctx.lineTo(218, 256)
      ctx.lineTo(218, 218)
      ctx.quadraticCurveTo(128, 195, 38, 218)
      ctx.fill()
      break
    case 3: // Suit
      ctx.fillStyle = "#333333"
      ctx.beginPath()
      ctx.moveTo(48, 218)
      ctx.lineTo(48, 256)
      ctx.lineTo(208, 256)
      ctx.lineTo(208, 218)
      ctx.quadraticCurveTo(128, 200, 48, 218)
      ctx.fill()
      break
    case 4: // Sailor
      ctx.fillStyle = "#FFFFFF"
      ctx.beginPath()
      ctx.moveTo(48, 218)
      ctx.lineTo(48, 256)
      ctx.lineTo(208, 256)
      ctx.lineTo(208, 218)
      ctx.quadraticCurveTo(128, 200, 48, 218)
      ctx.fill()
      break
    case 5: // Dress
      ctx.beginPath()
      ctx.moveTo(68, 218)
      ctx.lineTo(48, 256)
      ctx.lineTo(208, 256)
      ctx.lineTo(188, 218)
      ctx.quadraticCurveTo(128, 200, 68, 218)
      ctx.fill()
      break
    case 6: // Bow Tie
      ctx.fillStyle = "#C62828"
      ctx.beginPath()
      ctx.arc(110, 228, 12, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(146, 228, 12, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(128, 228, 8, 0, Math.PI * 2)
      ctx.fill()
      break
    case 7: // Collar
      ctx.fillStyle = "#FFFFFF"
      ctx.beginPath()
      ctx.moveTo(88, 218)
      ctx.lineTo(128, 245)
      ctx.lineTo(168, 218)
      ctx.lineTo(168, 228)
      ctx.lineTo(128, 256)
      ctx.lineTo(88, 228)
      ctx.closePath()
      ctx.fill()
      break
    case 8: // Business
      ctx.fillStyle = "#2C3E50"
      ctx.beginPath()
      ctx.moveTo(48, 218)
      ctx.lineTo(48, 256)
      ctx.lineTo(208, 256)
      ctx.lineTo(208, 218)
      ctx.quadraticCurveTo(128, 200, 48, 218)
      ctx.fill()
      break
    case 9: // Kimono
      ctx.fillStyle = "#E63946"
      ctx.beginPath()
      ctx.moveTo(48, 218)
      ctx.lineTo(48, 256)
      ctx.lineTo(208, 256)
      ctx.lineTo(208, 218)
      ctx.quadraticCurveTo(128, 200, 48, 218)
      ctx.fill()
      break
    case 10: // Hero
      ctx.fillStyle = "#C62828"
      ctx.beginPath()
      ctx.moveTo(48, 218)
      ctx.lineTo(48, 256)
      ctx.lineTo(208, 256)
      ctx.lineTo(208, 218)
      ctx.quadraticCurveTo(128, 200, 48, 218)
      ctx.fill()
      break
  }
}

function drawOtherPreview(ctx: CanvasRenderingContext2D, _state: AvatarState, style: number) {
  const color = _state.colors.other || "#FFD700"
  ctx.fillStyle = color

  switch (style) {
    case 1: // Star
      drawStar(ctx, 185, 80, 5, 15, 7)
      ctx.fill()
      break
    case 2: // Heart
      ctx.fillStyle = "#FF69B4"
      drawHeart(ctx, 185, 80, 12)
      break
    case 3: // Flower
      ctx.fillStyle = "#FF69B4"
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        const angle = (i * 72 * Math.PI) / 180
        ctx.arc(70 + Math.cos(angle) * 10, 70 + Math.sin(angle) * 10, 8, 0, Math.PI * 2)
        ctx.fill()
      }
      break
    case 4: // Ribbon
      ctx.fillStyle = "#FF69B4"
      ctx.beginPath()
      ctx.moveTo(70, 55)
      ctx.lineTo(50, 45)
      ctx.lineTo(55, 55)
      ctx.lineTo(50, 65)
      ctx.lineTo(70, 55)
      ctx.lineTo(90, 45)
      ctx.lineTo(85, 55)
      ctx.lineTo(90, 65)
      ctx.closePath()
      ctx.fill()
      break
    case 5: // Butterfly
      ctx.fillStyle = "#9370DB"
      ctx.beginPath()
      ctx.ellipse(60, 70, 15, 20, -0.5, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(80, 70, 15, 20, 0.5, 0, Math.PI * 2)
      ctx.fill()
      break
    case 6: // Moon
      ctx.fillStyle = "#F0E68C"
      ctx.beginPath()
      ctx.arc(185, 75, 15, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = "#f0f0f0"
      ctx.beginPath()
      ctx.arc(190, 70, 12, 0, Math.PI * 2)
      ctx.fill()
      break
    case 7: // Gem
      ctx.fillStyle = "#00CED1"
      ctx.beginPath()
      ctx.moveTo(185, 65)
      ctx.lineTo(175, 75)
      ctx.lineTo(185, 90)
      ctx.lineTo(195, 75)
      ctx.closePath()
      ctx.fill()
      break
    case 8: // Music
      ctx.fillStyle = "#9370DB"
      ctx.beginPath()
      ctx.arc(70, 85, 6, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillRect(74, 55, 3, 30)
      ctx.fillRect(74, 55, 12, 3)
      break
    case 9: // Clover
      ctx.fillStyle = "#32CD32"
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        const angle = (i * 120 - 90) * Math.PI / 180
        ctx.arc(70 + Math.cos(angle) * 10, 75 + Math.sin(angle) * 10, 8, 0, Math.PI * 2)
        ctx.fill()
      }
      break
    case 10: // Fire
      ctx.fillStyle = "#FF4500"
      ctx.beginPath()
      ctx.moveTo(185, 90)
      ctx.quadraticCurveTo(175, 75, 180, 65)
      ctx.quadraticCurveTo(178, 55, 185, 50)
      ctx.quadraticCurveTo(192, 55, 190, 65)
      ctx.quadraticCurveTo(195, 75, 185, 90)
      ctx.fill()
      break
  }
}

// Helper functions
function drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outer: number, inner: number) {
  let rot = (Math.PI / 2) * 3
  let x = cx
  let y = cy
  const step = Math.PI / spikes

  ctx.beginPath()
  ctx.moveTo(cx, cy - outer)
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outer
    y = cy + Math.sin(rot) * outer
    ctx.lineTo(x, y)
    rot += step
    x = cx + Math.cos(rot) * inner
    y = cy + Math.sin(rot) * inner
    ctx.lineTo(x, y)
    rot += step
  }
  ctx.lineTo(cx, cy - outer)
  ctx.closePath()
}

function drawHeart(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) {
  ctx.beginPath()
  ctx.moveTo(cx, cy + size * 0.3)
  ctx.bezierCurveTo(cx, cy - size * 0.2, cx - size * 0.8, cy - size * 0.2, cx - size * 0.8, cy + size * 0.3)
  ctx.bezierCurveTo(cx - size * 0.8, cy + size * 0.9, cx, cy + size * 1.2, cx, cy + size * 1.2)
  ctx.bezierCurveTo(cx, cy + size * 1.2, cx + size * 0.8, cy + size * 0.9, cx + size * 0.8, cy + size * 0.3)
  ctx.bezierCurveTo(cx + size * 0.8, cy - size * 0.2, cx, cy - size * 0.2, cx, cy + size * 0.3)
  ctx.fill()
}

function drawHeartBlush(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.beginPath()
  ctx.moveTo(x, y - 7)
  ctx.bezierCurveTo(x, y - 12, x - 7, y - 12, x - 7, y - 7)
  ctx.bezierCurveTo(x - 7, y - 2, x, y + 3, x, y + 3)
  ctx.bezierCurveTo(x, y + 3, x + 7, y - 2, x + 7, y - 7)
  ctx.bezierCurveTo(x + 7, y - 12, x, y - 12, x, y - 7)
  ctx.fill()
}

function drawRibbonBlush(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.beginPath()
  ctx.moveTo(x, y - 8)
  ctx.lineTo(x - 10, y - 12)
  ctx.lineTo(x - 8, y - 5)
  ctx.lineTo(x - 10, y + 2)
  ctx.lineTo(x, y - 2)
  ctx.lineTo(x + 10, y - 12)
  ctx.lineTo(x + 8, y - 5)
  ctx.lineTo(x + 10, y + 2)
  ctx.closePath()
  ctx.fill()
}

function drawHeartFrame(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) {
  ctx.beginPath()
  ctx.moveTo(cx, cy - size * 0.5)
  ctx.bezierCurveTo(cx, cy - size * 0.8, cx - size * 0.8, cy - size * 0.8, cx - size * 0.8, cy - size * 0.3)
  ctx.bezierCurveTo(cx - size * 0.8, cy + size * 0.3, cx, cy + size * 0.6, cx, cy + size * 0.6)
  ctx.bezierCurveTo(cx, cy + size * 0.6, cx + size * 0.8, cy + size * 0.3, cx + size * 0.8, cy - size * 0.3)
  ctx.bezierCurveTo(cx + size * 0.8, cy - size * 0.8, cx, cy - size * 0.8, cx, cy - size * 0.5)
  ctx.stroke()
}
