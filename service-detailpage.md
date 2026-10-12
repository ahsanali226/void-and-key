# Void & Key — Service Detail Page Specification (`service-detailpage.md`)

This document provides a comprehensive technical and UI/UX design analysis of the **Service Detail Page** (specifically illustrated for **Web Development**), comparing it with the existing codebase and outlining the blueprint for implementation.

---

## 1. Executive Summary & Design Aesthetics

- **Page Purpose**: High-converting, visually immersive service showcase designed to communicate authority, technical capability, and reliable delivery.
- **Design Language**: 
  - **Background**: Deep obsidian/ink black (`#0c0c0c` / `#000000`) with subtle noise/texture overlays and glowing radial amber/orange ambient lights.
  - **Accent Colors**: Void & Key signature Amber (`#dd7900`, `#ff8c00`, `#ffc47b`) with smooth gold-orange linear gradients.
  - **Typography**: Display font `Franie` / bold sans for prominent headings, paired with clean geometric `Aeonik` / sans for readable body text.
  - **Interactive Elements**: Glassmorphic cards, glowing borders, smooth hover transforms, interactive particle backgrounds, and radial orbit diagrams.

---

## 2. Section-by-Section Design Analysis & Inventory

Here is the complete top-to-bottom breakdown of the page, categorized by status:

| # | Section Name | Status in Codebase | Reusable / New Component |
|---|--------------|--------------------|---------------------------|
| 1 | **Header / Navbar** | ✅ Already Created | Reused from [Navbar.tsx](file:///c:/void-and-key/src/components/Navbar.tsx) |
| 2 | **Service Hero Section** | ⚠️ Partially Created | Reusable [Hero.tsx](file:///c:/void-and-key/src/components/Hero.tsx) / [ImageStack.tsx](file:///c:/void-and-key/src/components/ImageStack.tsx) (needs props) |
| 3 | **Service Ticker / Marquee** | ✅ Already Created | Reused from [Marquee.tsx](file:///c:/void-and-key/src/components/Marquee.tsx) |
| 4 | **Service Value / Intro** | ❌ Brand New | New component: `ServiceIntro.tsx` |
| 5 | **What We Offer (Capabilities)** | ❌ Brand New | New component: `ServiceOfferings.tsx` |
| 6 | **Why Choose Us?** | ❌ Brand New | New component: `ServiceWhyChooseUs.tsx` |
| 7 | **Our Process (Radial Workflow)** | ❌ Brand New | New component: `ServiceProcess.tsx` |
| 8 | **What Clients Say (Testimonials)** | ✅ Already Created | Reused from [Testimonials.tsx](file:///c:/void-and-key/src/components/Testimonials.tsx) |
| 9 | **Our Tech Stack** | ✅ Already Created | Reused from [TechStack.tsx](file:///c:/void-and-key/src/components/TechStack.tsx) |
| 10 | **CTA Banner ("Unique Predicament?")**| ✅ Already Created | Reused from [CTA.tsx](file:///c:/void-and-key/src/components/CTA.tsx) |
| 11 | **Footer ("Let's Talk!")** | ✅ Already Created | Reused from [Footer.tsx](file:///c:/void-and-key/src/components/Footer.tsx) |

---

## 3. Hero Section Analysis (Existing vs Service Detail Page)

> [!IMPORTANT]
> **Detailed breakdown of the Hero section as requested:**
> The current [Hero.tsx](file:///c:/void-and-key/src/components/Hero.tsx) was originally built with hardcoded copy for the Homepage. However, the Service Detail Page hero shares **80%+ of the exact same visual structure, animations, and elements**.

### Comparison: Homepage Hero vs Service Hero

| Feature / Element | Existing Homepage [Hero.tsx](file:///c:/void-and-key/src/components/Hero.tsx) | Service Detail Page Hero (Design) |
| :--- | :--- | :--- |
| **Headline Accent** | `"Unlocking"` (Orange gradient) | `"WEB"` (Orange gradient) |
| **Headline Primary** | `"your Digital Outreach."` (White font) | `"DEVELOPMENT"` (Bold white font) |
| **Subtitle / Kicker** | None | `"High-Performance Web Experiences Built to Grow Your Business."` |
| **Paragraph Copy** | General agency branding statement | *"We build modern, responsive websites designed to perform, engage users, and expand along with your business growth. From custom websites to scalable digital platforms, we provide reliable web experiences."* |
| **CTA Button** | `<TalkButton href="/contact" />` ("Let's Talk") | `"Get Started"` pill button with arrow icon |
| **Social Proof / Reviews** | 3 Avatars + 5 Gold Stars + *"Based on 500+ Reviews"* | **Exact match** (3 Avatars + 5 Gold Stars + *"Based on 500+ Reviews"*) |
| **Social Sidebar (Left)** | Vertical `INSTAGRAM \| FACEBOOK \| TWITTER` | Hidden or optional |
| **Right Side Visual** | [ImageStack.tsx](file:///c:/void-and-key/src/components/ImageStack.tsx) (3 animated cycling cards) | **Exact match** (Cyberpunk/coding neon framed cycling cards) |
| **Background & Effects** | [ParticleCursorCanvas.tsx](file:///c:/void-and-key/src/components/ParticleCursorCanvas.tsx) + grain + gradient | **Exact match** (Dark ambient gradient, grain texture, interactive particles) |

### Refactoring Strategy for Hero:
Rather than duplicating code, we can either:
1. **Option A (Recommended)**: Refactor [Hero.tsx](file:///c:/void-and-key/src/components/Hero.tsx) to accept optional props (`badge`, `highlightTitle`, `mainTitle`, `subtitle`, `description`, `ctaText`, `ctaLink`, `cardImages`). If no props are passed, it defaults to the Homepage content.
2. **Option B**: Create `ServiceHero.tsx` in `src/components/services/ServiceHero.tsx` leveraging the existing [ImageStack.tsx](file:///c:/void-and-key/src/components/ImageStack.tsx), [ParticleCursorCanvas.tsx](file:///c:/void-and-key/src/components/ParticleCursorCanvas.tsx), and [TalkButton.tsx](file:///c:/void-and-key/src/components/TalkButton.tsx).

---

## 4. Detailed Specification of the 4 NEW Sections

### Section 4.1: Service Value / Intro ("Your Website Should Work as Hard as Your Business")
- **Layout**: 2-Column responsive split section (Left: Typography & Value Pitch, Right: Overlapping Photography Cards).
- **Left Column Content**:
  - **Badge / Kicker**: Small orange rounded tag `ABOUT OUR SERVICE >` or category pill.
  - **Heading**: 
    - Text: `"Your Website Should Work as Hard as Your Business."`
    - Styling: `"Website"` in white bold, `"Work as Hard"` in orange gradient.
  - **Body Copy**:
    1. *"A website is more than a digital presence; it's a key part of how customers find, form an opinion, and interact with your business."*
    2. *"At Void & Key, we combine creative design and modern development practices to create websites that are fast, responsive, secure, and easy to scale. Our approach focuses on solving real business challenges rather than simply building assets."*
    3. *"Whether you need a corporate website, a commerce experience, or a custom web application, we build with performance, usability, and long-term results in mind."*
- **Right Column Visual**:
  - Layered composite image cards:
    - Upper photo: Professional smiling client / developer.
    - Lower photo: Collaborative work over code/laptop with neon reflections.
    - Border: Subtle orange glowing accent border with rounded corners (`rounded-2xl`).

---

### Section 4.2: What We Offer (Capabilities Grid)
- **Layout**: Centered header followed by a **2-column × 3-row grid** (6 feature cards).
- **Header**:
  - **Title**: `"What We Offer"` (Amber gradient, large font).
  - **Subtitle**: *"A summary of practical web services tailored to solve specific business problems and support business growth."*
  - **Tagline**: *"Comprehensive from MVP or redesign to full-stack web platforms and Web3/Cloud."*
- **Card Specifications**:
  - Container: Dark surface (`#141414`), border (`border-white/10`), rounded (`rounded-2xl`), hover effect (slight lift & orange border glow).
  - Left Icon: Rounded square badge (`w-14 h-14 bg-white/5 border border-white/10`) housing a high-tech line icon.
  - Right Text: Card title (White, bold, `text-xl`) + Card description (Muted gray/white `text-white/70`, `text-sm`).
- **Cards Content**:
  1. **Custom Websites**: *"Unique, high-performing websites tailored to your brand, audience, and business goals."*
  2. **Web Applications**: *"Powerful web applications designed around real workflows, users, & requirements."*
  3. **E-Commerce**: *"Secure and scalable online stores built to create smooth shopping experiences."*
  4. **API Integration**: *"Connect platforms, services, and systems to create more efficient digital experiences."*
  5. **CMS Development**: *"Flexible content management systems that make it simple to manage and update."*
  6. **Maintenance & Support**: *"Ongoing improvements, updates, monitoring, and support."*

---

### Section 4.3: Why Choose Us? (Photo Card Grid)
- **Layout**: Centered header followed by a **3-column × 2-row grid** (6 photo cards).
- **Header**:
  - **Title**: `"Why "` (White) + `"Choose Us?"` (Orange gradient).
- **Card Specifications**:
  - Container: Sleek dark rounded card (`rounded-2xl overflow-hidden bg-[#161616] border border-white/10`).
  - Top Image: Aspect ratio ~16:10 high-resolution photograph (team meetings, server rooms, multi-monitor coding setups, QA testing).
  - Bottom Content Area: Padding `p-6`.
    - **Card Title**: White bold text (`text-lg font-semibold`).
    - **Card Description**: Light gray text (`text-sm text-white/70 mt-2 leading-relaxed`).
- **Cards Content**:
  1. **Experienced Team**: *"Skilled professionals focused on delivering reliable digital experiences."*
  2. **Business-Focused Solutions**: *"Technology designed around your goals, users, and operational needs."*
  3. **Modern Technology**: *"We use current development technologies to build fast and dependable solutions."*
  4. **Scalable Architecture**: *"Solutions built to evolve as your business grows."*
  5. **Quality Assurance**: *"Careful testing for responsiveness, performance, and reliability."*
  6. **Long-term Support**: *"Continued support beyond launch, ensuring long-term reliability and success."*

---

### Section 4.4: Our Process (Radial Orbit Workflow Graphic)
- **Layout**: Centered interactive graphic with 6 steps orbiting around a central glowing core.
- **Header**:
  - **Title**: `"Our Process"` (Orange gradient).
  - **Subtitle**: *"From ideation to launch, a clear step-by-step workflow."*
- **Visual Design**:
  - **Center**: Concentric circular rings with dark background and the glowing orange **Void & Key logo** in the dead center.
  - **Orbit Rings**: SVG or CSS concentric dotted / solid orange circles with pulse glow.
  - **6 Orbital Nodes** (positioned clockwise around the circle):
    1. **01 Discover** (Top / 12:00): *"Understand business, audience, and requirements."*
    2. **02 Plan** (Top-Right / 02:00): *"Define scope, strategy, and technical direction."*
    3. **03 Design** (Bottom-Right / 04:00): *"Create flows and visual direction where required."*
    4. **04 Develop** (Bottom / 06:00): *"Build the approved solution."*
    5. **05 Test** (Bottom-Left / 08:00): *"Check quality, responsiveness, security, and performance."*
    6. **06 Launch** (Top-Left / 10:00): *"Deploy and provide ongoing support."*
  - **Mobile Responsive Treatment**: On smaller mobile screens (`< 768px`), smoothly transitions from a 2D radial circle to a vertical connected timeline step list for maximum readability.

---

## 5. Existing Components Reused

The following existing components in `src/components/` fit directly into the page:

1. **[Navbar.tsx](file:///c:/void-and-key/src/components/Navbar.tsx)**: Persistent header with navigation links and `"Let's Talk"` action.
2. **[Marquee.tsx](file:///c:/void-and-key/src/components/Marquee.tsx)**: Tilted ribbon displaying rotating agency capabilities.
3. **[Testimonials.tsx](file:///c:/void-and-key/src/components/Testimonials.tsx)**: Light card carousel featuring client testimonials with navigation buttons and pagination dots.
4. **[TechStack.tsx](file:///c:/void-and-key/src/components/TechStack.tsx)**: Docker, Node.js, Python, Vue.js, React, PostgreSQL pill badges.
5. **[CTA.tsx](file:///c:/void-and-key/src/components/CTA.tsx)**: Gradient amber call-to-action banner (`"Unique Predicament? Reach out, see if Void & Key can help."`).
6. **[Footer.tsx](file:///c:/void-and-key/src/components/Footer.tsx)**: Complete footer with newsletter subscription, quick links, contact details, and copyright.

---

## 6. Recommended Data Architecture & File Structure

To support all services dynamically (e.g. `/services/web-development`, `/services/customer-support`, `/services/cybersecurity`), the following file structure is proposed:

```
src/
├── app/
│   └── services/
│       └── [slug]/
│           └── page.tsx           # Dynamic Service Detail Page
├── components/
│   ├── services/
│   │   ├── ServiceHero.tsx        # Reusable or parameterized Hero
│   │   ├── ServiceIntro.tsx       # "Your Website Should Work as Hard..."
│   │   ├── ServiceOfferings.tsx   # 6 What We Offer cards
│   │   ├── ServiceWhyChooseUs.tsx # 6 Why Choose Us photo cards
│   │   └── ServiceProcess.tsx     # Radial 6-step orbit workflow
├── data/
│   └── servicesDetailData.ts      # Complete typed data for each service
```

---

## 7. Next Steps for Implementation

1. **Create Data Store (`src/data/servicesDetailData.ts`)**:
   - Store titles, descriptions, offerings, why choose us points, and process steps.
2. **Build the 4 Custom Components**:
   - `ServiceIntro.tsx`
   - `ServiceOfferings.tsx`
   - `ServiceWhyChooseUs.tsx`
   - `ServiceProcess.tsx`
3. **Build the Page Route**:
   - Implement `src/app/services/[slug]/page.tsx` or `src/app/services/web-development/page.tsx` assembling all components in sequence.
4. **Interactive Polish**:
   - Add Framer Motion staggered reveals for cards and radial orbit animations.
