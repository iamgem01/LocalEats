# LocalEats - Design Guidelines

## Design Approach

**Reference-Based Approach** drawing inspiration from storytelling-focused e-commerce platforms (Etsy's artisan narratives, Airbnb's local authenticity, The Farmer's Dog's farm-to-table transparency) while creating a distinct Vietnamese identity that emphasizes cultural connection and community trust.

**Core Design Principles**:
1. **Storytelling First**: Every product is a story, every farmer is a hero
2. **Transparent Authenticity**: Visual proof of origin through imagery and video
3. **Warm Community**: Design feels inviting, not corporate
4. **Cultural Pride**: Celebrates Vietnamese agricultural heritage
5. **Modern Accessibility**: Clean, international-friendly interface

---

## Typography System

**Primary Font**: Inter (Google Fonts) - Clean, modern, excellent readability in Vietnamese and English
**Secondary Font**: Playfair Display (Google Fonts) - For storytelling headlines and emotional moments

**Hierarchy**:
- **Hero Headlines**: Playfair Display, 48-64px (3rem-4rem), font-weight: 700
- **Section Headers**: Inter, 32-40px (2rem-2.5rem), font-weight: 700
- **Product Titles**: Inter, 24px (1.5rem), font-weight: 600
- **Body Text**: Inter, 16px (1rem), font-weight: 400, line-height: 1.6
- **Small Text/Labels**: Inter, 14px (0.875rem), font-weight: 500
- **Captions**: Inter, 12px (0.75rem), font-weight: 400

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing (within components): p-2, p-4, gap-2
- Component spacing: p-6, p-8, m-4, m-8
- Section spacing: py-12, py-16, py-20, py-24
- Container widths: max-w-7xl for full sections, max-w-4xl for content-focused areas

**Grid System**:
- Desktop: 3-4 column grid for products (grid-cols-3 lg:grid-cols-4)
- Tablet: 2 column grid (md:grid-cols-2)
- Mobile: Single column (grid-cols-1)
- Feature sections: Asymmetric 60/40 or 70/30 splits for visual interest

---

## Component Library

### Navigation
**Primary Navigation Bar**:
- Sticky header with backdrop blur effect
- Logo left, main navigation center, cart/user actions right
- Search bar integrated or expandable
- Bilingual toggle (VN/EN) prominent
- Categories mega-menu on hover with imagery

### Hero Section
**Storytelling Hero**:
- Full-width, 80vh height with parallax background image
- Large hero image showing Vietnamese farmers/landscapes in authentic settings
- Overlaid headline with frosted glass backdrop blur (backdrop-blur-md bg-white/30)
- Dual CTA buttons with blur backgrounds
- Subtle scroll indicator

**Images**: Large hero showcasing Vietnamese agricultural landscapes - rice terraces, farmers at work, or market scenes with warm golden hour lighting. Secondary images throughout showing product origins, farmer portraits, and production processes.

### Product Cards
**Enhanced Product Display**:
- Card with subtle elevation (shadow-md hover:shadow-xl transition)
- Primary product image with secondary hover image showing origin/farmer
- Badge system: "Organic", "Đà Nẵng", "Làng nghề" positioned top-left
- Product name, farmer name in smaller text
- Price and "Mua chung" (group buy) indicator
- Quick "Xem câu chuyện" (View story) button on hover

### Product Detail Page
**Immersive Storytelling Layout**:
- Left: Large image gallery with zoom capability
- Right: Product info, price, add to cart
- Below fold: Tabbed sections
  - "Câu Chuyện" (Story): Farmer profile with photo, video, timeline of production
  - "Nguồn Gốc" (Origin): Interactive map, QR code for traceability
  - "Dinh Dưỡng" (Nutrition): Visual infographic
  - "Đánh Giá" (Reviews): Customer testimonials with photos

### Farmer/Artisan Profiles
**Human-Centered Cards**:
- Portrait photo (circular, large)
- Name, location with map pin icon
- Short bio (2-3 lines)
- "Sản phẩm" count badge
- "Gặp gỡ" (Meet) CTA button
- Hover effect reveals more details

### Group Buying Component
**Smart Recommendation Card**:
- Appears when cart has products from same region
- Shows potential savings with visual progress bar
- "Tìm nhóm" (Find group) or "Tạo nhóm" (Create group) actions
- Timer for group completion

### Forms & Inputs
**User-Friendly Input System**:
- Floating labels
- Clear validation states (green checkmark for valid, red outline for errors)
- Helper text below inputs
- Large touch targets (min 44px height)
- Address autocomplete for Vietnamese locations

### Data Displays
**Visual Information Cards**:
- Stats cards with large numbers, icons, and micro-animations
- Timeline visualization for product journey
- Progress bars for group buying status
- Map integration showing farmer locations

### Footer
**Comprehensive Information Hub**:
- Four-column layout: About LocalEats, Quick Links, Contact, Social/Newsletter
- Newsletter signup with inline form
- Trust badges: "Hỗ trợ nông dân Việt", "Minh bạch nguồn gốc"
- Social media icons with brand colors
- Copyright and legal links

---

## Page-Specific Layouts

### Homepage
1. **Hero Section** (80vh): Compelling Vietnamese agricultural imagery with "Xem Tận Mắt, Mua Tận Gốc" headline
2. **Featured Regions** (py-20): 3-column grid showcasing Miền Bắc/Trung/Nam with representative images
3. **Trending Products** (py-16): 4-column grid with best-selling items
4. **Farmer Spotlight** (py-20): Asymmetric layout (40/60) featuring farmer story with large portrait
5. **How It Works** (py-16): 3-step process with icons and short descriptions
6. **Group Buying CTA** (py-12): Explanatory section with visual example
7. **Testimonials** (py-16): 3-column customer reviews with photos
8. **Newsletter/Footer** (py-12)

### Product Listing
- Left sidebar: Filters (region, category, price, organic certification)
- Right content area: Grid of products with sorting options
- Top: Breadcrumb navigation and result count

### Farmer Directory
- Hero introducing farmers
- Grid of farmer profile cards
- Interactive map showing all locations
- Filter by region/specialty

---

## Interaction Patterns

**Micro-interactions**:
- Card lift on hover (transform: translateY(-4px))
- Button scale on press (active:scale-95)
- Smooth page transitions
- Loading states with skeleton screens
- Success confirmations with checkmark animations

**Animations**: Minimal and purposeful
- Fade-in on scroll for sections
- Parallax effect on hero only
- Smooth cart additions
- No distracting perpetual animations

---

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column grids, condensed navigation)
- Desktop: > 1024px (full layout with all features)

**Mobile Optimizations**:
- Bottom navigation bar for key actions
- Swipeable image galleries
- Collapsible filter panels
- Simplified product cards
- Click-to-call for farmer contact

---

## Accessibility

- WCAG 2.1 AA compliance minimum
- Semantic HTML throughout
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators visible and styled
- Alt text for all images describing content and context
- Form inputs with associated labels
- Sufficient contrast ratios (4.5:1 minimum for text)