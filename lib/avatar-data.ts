export interface AvatarState {
  features: Record<string, number>
  colors: Record<string, string>
}

export interface CategoryOption {
  icon: string
  name: string
}

export interface Category {
  id: string
  name: string
  icon: string
  options: CategoryOption[]
}

export const CATEGORIES: Category[] = [
  {
    id: "skin",
    name: "Skin",
    icon: "👤",
    options: [{ icon: "👤", name: "Default" }],
  },
  {
    id: "bangs",
    name: "Bangs",
    icon: "💇",
    options: [
      { icon: "💇", name: "Full" },
      { icon: "💁", name: "Side" },
      { icon: "👱", name: "Parted" },
      { icon: "🌊", name: "Fluffy" },
      { icon: "〰️", name: "Blunt" },
      { icon: "🌀", name: "Curly" },
      { icon: "📐", name: "Asym" },
      { icon: "✨", name: "Wispy" },
      { icon: "🎀", name: "Bowed" },
      { icon: "💫", name: "Swept" },
    ],
  },
  {
    id: "sideHair",
    name: "Side Hair",
    icon: "✨",
    options: [
      { icon: "📏", name: "Long" },
      { icon: "✂️", name: "Short" },
      { icon: "🌀", name: "Curly" },
      { icon: "🌊", name: "Wavy" },
      { icon: "📿", name: "Pony" },
      { icon: "💫", name: "Pigtails" },
      { icon: "🎀", name: "Twin" },
      { icon: "⚡", name: "Spiky" },
      { icon: "🔮", name: "Bob" },
      { icon: "🌟", name: "Layered" },
    ],
  },
  {
    id: "eye",
    name: "Eye",
    icon: "👁️",
    options: [
      { icon: "⚫", name: "Round" },
      { icon: "👀", name: "Oval" },
      { icon: "😊", name: "Happy" },
      { icon: "😉", name: "Wink" },
      { icon: "⭐", name: "Star" },
      { icon: "💫", name: "Sparkle" },
      { icon: "😴", name: "Sleepy" },
      { icon: "👁️", name: "Wide" },
      { icon: "😍", name: "Heart" },
      { icon: "🌙", name: "Crescent" },
    ],
  },
  {
    id: "nose",
    name: "Nose",
    icon: "👃",
    options: [
      { icon: "•", name: "Dot" },
      { icon: "|", name: "Line" },
      { icon: "▽", name: "Triangle" },
      { icon: "🐱", name: "Cat" },
      { icon: "●", name: "Round" },
      { icon: "◇", name: "Diamond" },
      { icon: "／", name: "Slash" },
      { icon: "＾", name: "Small" },
      { icon: "⌒", name: "Button" },
      { icon: "∴", name: "Triple" },
    ],
  },
  {
    id: "mouth",
    name: "Mouth",
    icon: "👄",
    options: [
      { icon: "😊", name: "Smile" },
      { icon: "😄", name: "Big Smile" },
      { icon: "😺", name: "Cat" },
      { icon: "😮", name: "Open" },
      { icon: "😐", name: "Line" },
      { icon: "😛", name: "Tongue" },
      { icon: "🙂", name: "Small" },
      { icon: "😮‍", name: "Oval" },
      { icon: "😼", name: "Smirk" },
      { icon: "😌", name: "Peace" },
    ],
  },
  {
    id: "eyebrow",
    name: "Eyebrow",
    icon: "🤨",
    options: [
      { icon: "➖", name: "Normal" },
      { icon: "🌈", name: "Arched" },
      { icon: "😠", name: "Angry" },
      { icon: "😟", name: "Worried" },
      { icon: "😏", name: "Thick" },
      { icon: "／", name: "Slash" },
      { icon: "＿", name: "Flat" },
      { icon: "︶", name: "Curved" },
      { icon: "🤨", name: "Raised" },
      { icon: "😌", name: "Relaxed" },
    ],
  },
  {
    id: "cheek",
    name: "Cheek",
    icon: "🔴",
    options: [
      { icon: "🔴", name: "Round" },
      { icon: "❤️", name: "Heart" },
      { icon: "〰️", name: "Lines" },
      { icon: "🌸", name: "Flower" },
      { icon: "⭐", name: "Star" },
      { icon: "✨", name: "Sparkle" },
      { icon: "💫", name: "Blush" },
      { icon: "🎀", name: "Ribbon" },
      { icon: "💗", name: "Dots" },
      { icon: "🌈", name: "Rainbow" },
    ],
  },
  {
    id: "glasses",
    name: "Glasses",
    icon: "👓",
    options: [
      { icon: "👓", name: "Round" },
      { icon: "🤓", name: "Square" },
      { icon: "🕶️", name: "Sunglass" },
      { icon: "🥽", name: "Oval" },
      { icon: "💜", name: "Heart" },
      { icon: "⭐", name: "Star" },
      { icon: "🦋", name: "Butterfly" },
      { icon: "😎", name: "Cool" },
      { icon: "🔮", name: "Circle" },
      { icon: "🌙", name: "Crescent" },
    ],
  },
  {
    id: "hat",
    name: "Hat",
    icon: "🧢",
    options: [
      { icon: "🧢", name: "Cap" },
      { icon: "🎿", name: "Beanie" },
      { icon: "🎩", name: "Top Hat" },
      { icon: "🐱", name: "Cat Ears" },
      { icon: "🎀", name: "Bow" },
      { icon: "👑", name: "Crown" },
      { icon: "🎧", name: "Headset" },
      { icon: "🌸", name: "Flowers" },
      { icon: "⭐", name: "Star" },
      { icon: "🦊", name: "Fox Ears" },
    ],
  },
  {
    id: "clothes",
    name: "Clothes",
    icon: "👕",
    options: [
      { icon: "👕", name: "T-Shirt" },
      { icon: "🧥", name: "Hoodie" },
      { icon: "🤵", name: "Suit" },
      { icon: "⚓", name: "Sailor" },
      { icon: "👗", name: "Dress" },
      { icon: "🎀", name: "Bow Tie" },
      { icon: "👔", name: "Collar" },
      { icon: "💼", name: "Business" },
      { icon: "🌸", name: "Kimono" },
      { icon: "🦸", name: "Hero" },
    ],
  },
  {
    id: "other",
    name: "Other",
    icon: "⭐",
    options: [
      { icon: "⭐", name: "Star" },
      { icon: "❤️", name: "Heart" },
      { icon: "🌸", name: "Flower" },
      { icon: "🎀", name: "Ribbon" },
      { icon: "🦋", name: "Butterfly" },
      { icon: "🌙", name: "Moon" },
      { icon: "💎", name: "Gem" },
      { icon: "🎵", name: "Note" },
      { icon: "🍀", name: "Clover" },
      { icon: "🔥", name: "Fire" },
    ],
  },
]

export function getDefaultState(): AvatarState {
  return {
    features: {
      skin: 1,
      bangs: 1,
      sideHair: 1,
      eye: 1,
      nose: 1,
      mouth: 1,
      eyebrow: 1,
      cheek: 1,
      glasses: 0,
      hat: 0,
      clothes: 1,
      other: 0,
    },
    colors: {
      skin: "#FFE4C4",
      bangs: "#4A3728",
      sideHair: "#4A3728",
      eye: "#2C1810",
      nose: "#D4A574",
      mouth: "#E57373",
      eyebrow: "#4A3728",
      cheek: "#FFB6C1",
      glasses: "#333333",
      hat: "#333333",
      clothes: "#4A90D9",
      other: "#FFD700",
    },
  }
}

export function getRandomState(): AvatarState {
  const randomFeature = (max: number) => Math.floor(Math.random() * (max + 1))
  const randomColor = (colors: string[]) => colors[Math.floor(Math.random() * colors.length)]

  const skinColors = ["#FFE4C4", "#FFDAB9", "#D2B48C", "#C19A6B", "#8D5524", "#FFDBAC", "#F1C27D", "#E0AC69", "#C68642", "#8D5524"]
  const hairColors = ["#000000", "#4A3728", "#8B4513", "#D4A574", "#FFD700", "#FF69B4", "#E6E6FA", "#98FB98", "#87CEEB", "#DDA0DD"]
  const eyeColors = ["#000000", "#2C1810", "#4169E1", "#228B22", "#8B4513", "#FF69B4", "#FFD700", "#9370DB", "#00CED1", "#FF6347"]
  const clothesColors = ["#4A90D9", "#333333", "#C62828", "#228B22", "#FF69B4", "#FFD700", "#9370DB", "#FF6347", "#20B2AA", "#FFA500"]
  const accessoryColors = ["#FFD700", "#FF69B4", "#1E90FF", "#333333", "#FF6347", "#9370DB", "#00CED1", "#32CD32", "#FFA500", "#FF1493"]

  return {
    features: {
      skin: 1, // Only 1 option for skin
      bangs: randomFeature(9),
      sideHair: randomFeature(9),
      eye: randomFeature(9),
      nose: randomFeature(9),
      mouth: randomFeature(9),
      eyebrow: randomFeature(9),
      cheek: randomFeature(9),
      glasses: randomFeature(9),
      hat: randomFeature(9),
      clothes: randomFeature(9),
      other: randomFeature(9),
    },
    colors: {
      skin: randomColor(skinColors),
      bangs: randomColor(hairColors),
      sideHair: randomColor(hairColors),
      eye: randomColor(eyeColors),
      nose: "#D4A574",
      mouth: "#E57373",
      eyebrow: randomColor(hairColors),
      cheek: "#FFB6C1",
      glasses: randomColor(accessoryColors),
      hat: randomColor(accessoryColors),
      clothes: randomColor(clothesColors),
      other: randomColor(accessoryColors),
    },
  }
}

