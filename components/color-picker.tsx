"use client"

import { cn } from "@/lib/utils"

interface ColorPickerProps {
  category: string
  selectedColor: string
  onChange: (color: string) => void
}

const PRESET_COLORS: Record<string, string[]> = {
  skin: ["#FFE4C4", "#FFDAB9", "#D2B48C", "#C19A6B", "#8D5524", "#5C4033"],
  bangs: ["#000000", "#4A3728", "#8B4513", "#D4A574", "#FFD700", "#FF69B4", "#1E90FF", "#9370DB"],
  sideHair: ["#000000", "#4A3728", "#8B4513", "#D4A574", "#FFD700", "#FF69B4", "#1E90FF", "#9370DB"],
  eye: ["#000000", "#2C1810", "#4169E1", "#228B22", "#8B4513", "#9370DB"],
  eyebrow: ["#000000", "#4A3728", "#8B4513", "#D4A574"],
  mouth: ["#E57373", "#FF69B4", "#C62828", "#8B0000"],
  cheek: ["#FFB6C1", "#FFC0CB", "#FF69B4", "#FF6347"],
  glasses: ["#000000", "#333333", "#8B4513", "#FFD700", "#C0C0C0"],
  hat: ["#000000", "#333333", "#8B4513", "#C62828", "#1565C0", "#FFD700", "#FF69B4"],
  clothes: ["#4A90D9", "#333333", "#C62828", "#228B22", "#FF69B4", "#FFD700", "#9370DB", "#FFFFFF"],
  other: ["#FFD700", "#FF69B4", "#FF6347", "#1E90FF", "#9370DB"],
  nose: ["#D4A574", "#C19A6B", "#8D5524", "#5C4033"],
  wrinkle: ["#D4A574", "#C19A6B"],
  eyelash: ["#000000", "#4A3728"],
}

export function ColorPicker({ category, selectedColor, onChange }: ColorPickerProps) {
  const colors = PRESET_COLORS[category] || PRESET_COLORS.skin

  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onChange(color)}
          className={cn(
            "w-8 h-8 rounded-full border-2 transition-all hover:scale-110",
            selectedColor === color ? "border-pink-500 ring-2 ring-pink-300" : "border-gray-300",
          )}
          style={{ backgroundColor: color }}
          aria-label={`Select color ${color}`}
        />
      ))}

      {/* Custom color picker */}
      <label className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-pink-400 transition-colors overflow-hidden">
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-12 cursor-pointer opacity-0 absolute"
        />
        <span className="text-xs">🎨</span>
      </label>
    </div>
  )
}
