# Torah Bot Dashboard Design Guidelines

## Design Approach
**Reference-Based Approach**: Exact replica of provided Torah Bot dashboard designs with pixel-perfect accuracy to maintain the established educational interface aesthetic.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Deep Brown: 25 35% 15% (main sidebar and headers)
- Warm Brown: 30 25% 25% (secondary backgrounds)
- Gold Accent: 45 85% 55% (highlights and active states)
- Cream Background: 40 20% 95% (main content area)

**Dark Mode:**
- Dark Brown: 25 25% 8% (sidebar)
- Charcoal: 0 0% 12% (main background)
- Gold remains: 45 85% 55%
- Light text: 0 0% 90%

### B. Typography
**Font Families:**
- Primary: Inter or similar clean sans-serif via Google Fonts
- Headings: 600-700 weight
- Body text: 400-500 weight
- UI elements: 500 weight

**Hierarchy:**
- Page titles: text-2xl font-semibold
- Card headers: text-lg font-medium
- Statistics: text-3xl font-bold
- Body text: text-sm

### C. Layout System
**Spacing Units:** Tailwind units of 2, 4, 6, and 8
- Card padding: p-6
- Section spacing: space-y-6
- Icon spacing: gap-4
- Button padding: px-6 py-2

**Grid System:**
- Sidebar: Fixed 280px width (collapsed: 64px)
- Main content: Responsive grid with gap-6
- Cards: Responsive grid (1-2-3 columns based on screen size)

### D. Component Library

**Navigation:**
- Collapsible sidebar with GSAP smooth animations
- Hamburger menu (three horizontal lines icon)
- Active state indicators with gold background
- Torah scroll icon as brand logo

**Dashboard Cards:**
- White background with subtle shadow
- Rounded corners (rounded-lg)
- Statistics with large numbers and descriptive labels
- Progress bars with gold fill color
- Chart integration for analytics

**Interactive Elements:**
- Gold accent buttons for primary actions
- Subtle hover states with opacity changes
- Form inputs with brown borders
- Toggle switches matching color scheme

**Data Visualization:**
- Line charts with gold/brown color scheme
- Progress circles and bars
- Calendar widgets for streak tracking
- Resource lists with bookmark icons

### E. Responsive Behavior
**Breakpoints:**
- Mobile: Overlay sidebar, stacked cards
- Tablet: Collapsed sidebar, 2-column cards
- Desktop: Full sidebar, 3-column layout

**Animation Strategy:**
- Sidebar slide transitions using GSAP
- Minimal other animations to maintain focus
- Smooth state changes between pages

## Page-Specific Layouts

**Dashboard:** Statistics cards grid, recent activity feed, progress charts
**Weekly Portion:** Lesson cards, study analytics, progress tracking
**History & Resources:** Bookmarked content, PDF library, search functionality
**Profile:** User info, usage statistics, account settings, billing overview

## Accessibility
- High contrast maintained in both light/dark modes
- Focus indicators with gold outline
- Semantic HTML structure for screen readers
- Keyboard navigation support