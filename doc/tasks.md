# SquareFace Project Tasks

## Retro Canvas (HTML5 Canvas Recreation)

### Mobile Optimization
- [x] 45dvh avatar preview (~1/3 screen)
- [x] Vertical layout (avatar on top, tools below)
- [x] Fixed bottom navigation with larger icons (26px) and font (12px)
- [x] Touch-optimized 44px minimum targets
- [x] 100dvh full viewport height

### UX Improvements
- [x] Skin category shows large color grid directly (no empty space)
- [x] All 12 categories have visible SVG previews
- [x] Fixed nose icon in bottom nav
- [x] Tools panel with two exposed rows:
  - First row: Horizontal scrolling color swatches
  - Second row: All position buttons (↑↓←→↔✕) directly visible

### File Structure
- `/retro-canvas` - Canvas recreation page
- `/components/classic-square-face-generator.tsx` - Main UI component
- `/components/classic-avatar-canvas.tsx` - Canvas renderer
- `/lib/classic-avatar-data.ts` - Avatar data and utilities

### Homepage
- `/` - Ruffle Flash emulator (original SWF)

