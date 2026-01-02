"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, Sparkles, Info, Heart, ChevronDown, ArrowLeft } from "lucide-react"

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
  description?: string
}

// 首页导航项（带锚点）
const homeNavItems: NavItem[] = [
  { label: "Generator", href: "#generator", icon: <Home className="w-4 h-4" /> },
  { label: "About", href: "#about", icon: <Info className="w-4 h-4" />, description: "The classic Flash experience" },
  { label: "Steps", href: "#steps", icon: <Sparkles className="w-4 h-4" />, description: "Create in 3 easy steps" },
  { label: "Platforms", href: "#platforms", icon: <Heart className="w-4 h-4" />, description: "Works everywhere" },
  { label: "FAQ", href: "#faq", icon: <span className="text-xs font-bold">?</span>, description: "Common questions" },
]

// Modern 页面导航项（带锚点）
const modernNavItems: NavItem[] = [
  { label: "Generator", href: "#generator", icon: <Home className="w-4 h-4" /> },
  { label: "About", href: "#about", icon: <Info className="w-4 h-4" />, description: "Canvas version info" },
  { label: "How to Use", href: "#how-to", icon: <Sparkles className="w-4 h-4" />, description: "Create in 3 steps" },
  { label: "Features", href: "#features", icon: <Heart className="w-4 h-4" />, description: "All features" },
  { label: "FAQ", href: "#faq", icon: <span className="text-xs font-bold">?</span>, description: "Common questions" },
]

export function Navigation() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const isModernPage = pathname === "/modern"
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // 根据页面选择导航项
  const navItems = isModernPage ? modernNavItems : homeNavItems

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // 只在首页或 modern 页面且有锚点时才检测活动区域
      if (isHomePage || isModernPage) {
        const sections = navItems.map(item => item.href.replace('#', '')).filter(Boolean)
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage, isModernPage, navItems])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // 如果是外部链接（不以 # 开头），让它正常跳转
    if (!href.startsWith('#')) {
      return
    }

    // 锚点链接处理
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 // Navigation height + some padding
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      setActiveSection(targetId)
      setIsMobileMenuOpen(false)
    }
  }

  // CTA 按钮配置 - 根据当前页面显示不同内容
  const ctaButton = isHomePage
    ? { href: "/modern", label: "Modern", icon: <Sparkles className="w-4 h-4" />, chevron: <ChevronDown className="w-3 h-3" /> }
    : { href: "/", label: "Classic", icon: <Home className="w-4 h-4" />, chevron: <ArrowLeft className="w-3 h-3" /> }

  return (
    <>
      <nav
        className={`kawaii-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "kawaii-nav-scrolled py-2"
            : "py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo - 点击跳转到首页 */}
            <Link
              href="/"
              className="kawaii-nav-logo flex items-center gap-2 group"
            >
              <div className="relative kawaii-logo-container">
                <div className="kawaii-logo-box w-10 h-10 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center overflow-hidden p-1">
                  <img src="/favicon.png" alt="Square Face Generator" className="w-full h-full object-contain" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-kawaii-pink rounded-full flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </div>
              </div>
              {/* 文字部分 - 手机端隐藏，桌面端显示 */}
              <div className="kawaii-logo-text hidden sm:block">
                <div className="font-bold text-sm leading-tight" style={{ fontFamily: 'var(--font-pixel)' }}>
                  SQUARE FACE
                </div>
                <div className="text-xs opacity-70" style={{ fontFamily: 'var(--font-kawaii)' }}>
                  Generator
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - 首页和 modern 页面都显示锚点导航 */}
            {(isHomePage || isModernPage) && (
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`kawaii-nav-item group relative px-4 py-2 rounded-xl transition-all duration-300 ${
                      activeSection === item.href.replace('#', '')
                        ? "kawaii-nav-item-active"
                        : ""
                    }`}
                    title={item.description}
                  >
                    <span className="flex items-center gap-2">
                      {item.icon}
                      <span className="font-semibold text-sm" style={{ fontFamily: 'var(--font-kawaii)' }}>
                        {item.label}
                      </span>
                    </span>
                    <div className="kawaii-nav-indicator" />
                  </a>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href={ctaButton.href}
                className="kawaii-nav-cta px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 transition-all duration-300"
                style={{ fontFamily: 'var(--font-kawaii)' }}
              >
                {ctaButton.icon}
                <span>{ctaButton.label}</span>
                {ctaButton.chevron}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden kawaii-mobile-toggle p-2 rounded-xl"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`kawaii-mobile-menu lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 pt-4 pb-6">
            <div className="kawaii-mobile-menu-inner rounded-2xl p-4 space-y-2">
              {/* 首页才显示锚点导航 */}
              {isHomePage && navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`kawaii-mobile-nav-item flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? "kawaii-mobile-nav-item-active"
                      : ""
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform ${
                    activeSection === item.href.replace('#', '') ? "scale-110" : ""
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm" style={{ fontFamily: 'var(--font-kawaii)' }}>
                      {item.label}
                    </div>
                    {item.description && (
                      <div className="text-xs opacity-70">{item.description}</div>
                    )}
                  </div>
                  {activeSection === item.href.replace('#', '') && (
                    <div className="w-2 h-2 rounded-full bg-kawaii-mint animate-pulse" />
                  )}
                </a>
              ))}

              {/* Modern 页面显示简略导航 */}
              {isModernPage && modernNavItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`kawaii-mobile-nav-item flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? "kawaii-mobile-nav-item-active"
                      : ""
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform ${
                    activeSection === item.href.replace('#', '') ? "scale-110" : ""
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm" style={{ fontFamily: 'var(--font-kawaii)' }}>
                      {item.label}
                    </div>
                  </div>
                  {activeSection === item.href.replace('#', '') && (
                    <div className="w-2 h-2 rounded-full bg-kawaii-mint animate-pulse" />
                  )}
                </a>
              ))}

              <div className="pt-3 mt-3 border-t-2 border-dashed border-kawaii-pink-light">
                <Link
                  href={ctaButton.href}
                  className="kawaii-mobile-cta flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold"
                  style={{ fontFamily: 'var(--font-kawaii)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {ctaButton.icon}
                  <span>{isHomePage ? "Try Modern Version" : "Back to Classic"}</span>
                  <span className="text-lg">{isHomePage ? "→" : "←"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navigation - with matching background to eliminate gap */}
      <div
        className="nav-spacer w-full"
        style={{
          background: 'linear-gradient(180deg, oklch(0.98 0.02 350 / 0.95) 0%, oklch(0.95 0.04 350 / 0.9) 100%)',
        }}
      />

      <style jsx global>{`
        /* ============================================
           🎮 Kawaii Navigation Bar Styles
           ============================================ */

        .kawaii-nav {
          background: linear-gradient(180deg,
            oklch(0.98 0.02 350 / 0.95) 0%,
            oklch(0.95 0.04 350 / 0.9) 100%);
          backdrop-filter: blur(20px);
          border-bottom: 3px solid transparent;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .kawaii-nav::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg,
            var(--kawaii-pink),
            var(--kawaii-purple),
            var(--kawaii-mint),
            var(--kawaii-yellow),
            var(--kawaii-pink));
          background-size: 200% 100%;
          animation: rainbow-shift 3s linear infinite;
          opacity: 0.8;
        }

        .kawaii-nav-scrolled {
          background: oklch(1 0 0 / 0.95) !important;
          box-shadow:
            0 4px 20px oklch(0.78 0.12 350 / 0.15),
            0 0 0 4px oklch(0.95 0.04 350 / 0.3) inset;
          border-bottom: 3px solid var(--kawaii-pink);
        }

        .kawaii-nav-scrolled::before {
          opacity: 1;
        }

        /* Logo Container - 保持在所有屏幕上都显示 */
        .kawaii-logo-container {
          flex-shrink: 0;
        }

        /* Logo Box */
        .kawaii-logo-box {
          background: linear-gradient(135deg,
            var(--kawaii-pink) 0%,
            var(--kawaii-coral) 100%);
          box-shadow:
            0 3px 0 var(--kawaii-pink-dark),
            0 0 15px oklch(0.78 0.12 350 / 0.4);
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .kawaii-nav-logo:hover .kawaii-logo-box {
          transform: translateY(-2px) rotate(-5deg);
          box-shadow:
            0 5px 0 var(--kawaii-pink-dark),
            0 0 25px oklch(0.78 0.12 350 / 0.6);
        }

        /* Logo Text - 只在移动端隐藏 */
        .kawaii-logo-text {
          flex-shrink: 0;
        }

        /* Desktop Nav Items */
        .kawaii-nav-item {
          color: var(--kawaii-dark);
          position: relative;
          overflow: hidden;
        }

        .kawaii-nav-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg,
            oklch(0.95 0.04 350) 0%,
            oklch(0.92 0.06 350) 100%);
          opacity: 0;
          transition: opacity 0.2s;
          border-radius: inherit;
        }

        .kawaii-nav-item:hover::before {
          opacity: 1;
        }

        .kawaii-nav-item > span {
          position: relative;
          z-index: 1;
        }

        .kawaii-nav-item:hover {
          transform: translateY(-2px);
        }

        .kawaii-nav-item-active {
          background: linear-gradient(135deg,
            var(--kawaii-pink) 0%,
            var(--kawaii-coral) 100%) !important;
          color: white !important;
          box-shadow: 0 3px 0 var(--kawaii-pink-dark);
        }

        .kawaii-nav-indicator {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 80%;
          height: 3px;
          background: var(--kawaii-mint);
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .kawaii-nav-item:hover .kawaii-nav-indicator,
        .kawaii-nav-item-active .kawaii-nav-indicator {
          transform: translateX(-50%) scaleX(1);
        }

        /* CTA Button */
        .kawaii-nav-cta {
          background: linear-gradient(135deg,
            var(--kawaii-mint) 0%,
            var(--kawaii-mint-light) 100%);
          color: var(--kawaii-dark);
          border: 3px solid oklch(0.7 0.12 165);
          box-shadow: 0 3px 0 oklch(0.7 0.12 165);
        }

        .kawaii-nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 0 oklch(0.7 0.12 165);
        }

        .kawaii-nav-cta:active {
          transform: translateY(1px);
          box-shadow: 0 1px 0 oklch(0.7 0.12 165);
        }

        /* Mobile Toggle */
        .kawaii-mobile-toggle {
          background: linear-gradient(135deg,
            var(--kawaii-purple-light) 0%,
            var(--kawaii-lavender) 100%);
          border: 3px solid var(--kawaii-purple);
          box-shadow: 0 3px 0 var(--kawaii-purple);
          color: var(--kawaii-dark);
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .kawaii-mobile-toggle:hover {
          transform: scale(1.05);
        }

        .kawaii-mobile-toggle:active {
          transform: scale(0.95);
        }

        /* Mobile Menu */
        .kawaii-mobile-menu {
          background: linear-gradient(180deg,
            oklch(0.98 0.02 350 / 0.98) 0%,
            oklch(0.95 0.04 350 / 0.95) 100%);
        }

        .kawaii-mobile-menu-inner {
          background: white;
          border: 3px solid var(--kawaii-pink);
          box-shadow:
            4px 4px 0 var(--kawaii-dark),
            0 10px 40px oklch(0.78 0.12 350 / 0.2);
        }

        .kawaii-mobile-nav-item {
          background: oklch(0.98 0.01 350);
          border: 2px solid var(--kawaii-pink-light);
          color: var(--kawaii-dark);
        }

        .kawaii-mobile-nav-item:hover {
          background: var(--kawaii-pink-light);
          border-color: var(--kawaii-pink);
          transform: translateX(4px);
        }

        .kawaii-mobile-nav-item-active {
          background: linear-gradient(135deg,
            var(--kawaii-pink) 0%,
            var(--kawaii-coral) 100%) !important;
          border-color: var(--kawaii-pink-dark) !important;
          color: white !important;
          transform: translateX(4px);
          box-shadow: 0 3px 0 var(--kawaii-pink-dark);
        }

        .kawaii-mobile-nav-item-active .text-xs {
          color: oklch(1 0 0 / 0.8) !important;
        }

        .kawaii-mobile-cta {
          background: linear-gradient(135deg,
            var(--kawaii-mint) 0%,
            var(--kawaii-mint-light) 100%);
          border: 3px solid oklch(0.7 0.12 165);
          box-shadow: 0 3px 0 oklch(0.7 0.12 165);
          color: var(--kawaii-dark);
        }

        .kawaii-mobile-cta:hover {
          transform: scale(1.02);
        }

        .kawaii-mobile-cta:active {
          transform: scale(0.98);
        }

        /* Active section pulse indicator */
        @keyframes nav-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }

        .kawaii-nav-item-active .animate-pulse,
        .kawaii-mobile-nav-item-active .animate-pulse {
          animation: nav-pulse 1.5s ease-in-out infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .kawaii-nav {
            padding: 0.5rem 0;
          }
        }

        /* Nav spacer height - matches fixed nav height */
        .nav-spacer {
          height: 80px;
        }
        @media (min-width: 1024px) {
          .nav-spacer {
            height: 96px;
          }
        }
      `}</style>
    </>
  )
}
