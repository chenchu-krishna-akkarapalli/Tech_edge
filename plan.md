## Project Overview
Build a modern, single-page company profile website for "Tech Edge" using React, JavaScript, and Tailwind CSS with smooth scrolling navigation and professional animations.

## Tech Stack
- React 18+
- JavaScript (ES6+)
- Tailwind CSS
- React Icons (lucide-react)
- Smooth scroll behavior
- Framer Motion (for animations)

## Design Requirements

### Color Scheme
- Primary: Blue (#2563eb, #3b82f6)
- Secondary: White (#ffffff)
- Accent: Light blue gradients
- Text: Dark gray (#1f2937) and white
- Background: Clean white with blue gradient sections

### Layout Structure
Create a responsive single-page application with the following sections:

---

## Section 1: Navigation Bar (Sticky)
- **Height**: 80px
- **Background**: White with shadow on scroll
- **Logo**: "Tech Edge" text logo on the left
- **Menu Items**: About, Services, Values, Mission, Vision, Contact
- **Position**: Fixed top, transparent initially, solid white on scroll
- **Mobile**: Hamburger menu for screens < 768px

---

## Section 2: Hero Section
- **Height**: 100vh (full viewport)
- **Background**: Blue gradient (from #3b82f6 to #2563eb)
- **Content Layout**:
  - Large heading: "At Tech Edge"
  - Subheading: "We believe technology is more than systems and software—it's the edge that transforms businesses, empowers people, and shapes the future."
  - Description: "We partner with enterprises worldwide to modernize applications, harness the cloud, unlock data intelligence, and secure operations with confidence."
  - CTA Button: "Get Started" and "Learn More"
- **Animation**: Fade in text from bottom
- **Text Color**: White

---

## Section 3: About Us
- **Background**: White
- **Padding**: 80px vertical
- **Layout**: Two columns (60/40 split on desktop, stacked on mobile)
- **Left Column**:
  - Section title: "ABOUT US"
  - Description about global team, certifications, cloud platforms, ServiceNow, AI, cybersecurity
- **Right Column**: 
  - Stats cards with icons:
    - "2M" - Users/Projects
    - "100K" - Deployments
    - "82%" - Success Rate
- **Animation**: Fade in on scroll

---

## Section 4: What We Offer (Services)
- **Background**: Light blue gradient (#eff6ff to white)
- **Padding**: 100px vertical
- **Title**: "WHAT WE OFFER" (centered)
- **Layout**: 3-column grid on desktop, 1 column on mobile
- **Service Cards** (6 cards total):
  1. **Digital Transformation & Consulting**
     - Icon: Lightbulb or Workflow
     - Description: "Business-aligned roadmaps, process automation, and compliance solutions."
  
  2. **Cloud & Infrastructure**
     - Icon: Cloud
     - Description: "Multi-cloud management, DevOps, and infrastructure automation."
  
  3. **Data Intelligence & AI**
     - Icon: Brain or Database
     - Description: "Predictive analytics, governance, and AI-powered IT operations."
  
  4. **Cybersecurity & Compliance**
     - Icon: Shield
     - Description: "Threat monitoring, VAPT, and regulatory automation."
  
  5. **Application Modernization & Integration**
     - Icon: Code or Layers
     - Description: "Cloud-native migration, API-first integration, and real-time data pipelines."
  
  6. **Managed Services**
     - Icon: Settings or HeadsetIcon
     - Description: "Flexible delivery models (onshore, offshore, hybrid) with PMO-driven governance."

- **Card Style**:
  - White background
  - Padding: 32px
  - Border radius: 16px
  - Hover effect: Scale up slightly, add shadow
  - Icon size: 48px (blue color)

---

## Section 5: Our Values
- **Background**: White
- **Padding**: 100px vertical
- **Title**: "OUR VALUES" (centered)
- **Layout**: 5 value cards in a responsive grid
- **Values**:
  1. **Innovation** - Driving change through smart, future-ready solutions.
  2. **Integrity** - Building trust with transparent, secure, and reliable services.
  3. **Excellence** - Delivering measurable outcomes with certified expertise.
  4. **Collaboration** - Partnering with clients for shared success.
  5. **Agility** - Adapting quickly to evolving business needs.

- **Card Style**:
  - Blue background with white text
  - Icon at top
  - Bold title
  - Description text
  - Hover: Slightly darker blue

---

## Section 6: Our Mission
- **Background**: Blue gradient
- **Text Color**: White
- **Padding**: 120px vertical
- **Layout**: Centered content with max-width 1200px
- **Title**: "OUR MISSION"
- **Main Text**: "At Tech Edge, our mission is to empower enterprises to achieve sustainable growth through technology that is innovative, secure, and scalable. We aim to bridge the gap between business strategy and IT by delivering solutions that:"
- **4 Points** (with numbers):
  1. Modernize operations with cloud, AI, and automation.
  2. Enable smarter decisions with data-driven intelligence and predictive insights.
  3. Enhance experiences for customers, employees, and stakeholders alike.
  4. Strengthen resilience through robust cybersecurity and compliance frameworks.

---

## Section 7: Our Vision
- **Background**: White
- **Padding**: 120px vertical
- **Title**: "OUR VISION"
- **Intro**: "Our vision is to be recognized as the global partner of choice for enterprises navigating digital transformation. We aspire to:"
- **3 Vision Points**:
  1. **Innovation Leads the Way** - We harness cutting-edge technologies like AI, cloud, and automation to create smarter, faster, and more resilient enterprises.
  2. **Trust Builds Growth** - We enable organizations to thrive with secure, compliant, and transparent digital ecosystems that foster long-term confidence.
  3. **Enterprises Shape the Future** - We empower businesses worldwide to not only adapt to change but to lead it—driving sustainable impact for industries, people, and communities.

---

## Section 8: Footer/Contact
- **Background**: Dark blue (#1e3a8a)
- **Text Color**: White
- **Padding**: 60px vertical
- **Layout**: Centered content
- **Content**:
  - Company name: "Tech Edge"
  - Contact info:
    - Website: www.reallygreatsite.com
    - Phone: +123-456-7890
  - Social media icons
  - Copyright text
  - Quick links to sections

---

## Technical Requirements

### Animations
- Use Framer Motion for scroll animations
- Fade in sections on scroll
- Smooth page transitions
- Button hover effects
- Card hover effects (scale and shadow)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Component Structure
```
src/
├── App.jsx (main component)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Values.jsx
│   ├── Mission.jsx
│   ├── Vision.jsx
│   └── Footer.jsx
├── index.css (Tailwind imports)
└── main.jsx
```

### Navigation Behavior
- Smooth scroll to sections
- Active section highlighting in navbar
- Sticky navbar with transparent to solid transition
- Mobile hamburger menu

### Styling Guidelines
- Use Tailwind utility classes
- Custom gradients: `bg-gradient-to-r from-blue-500 to-blue-600`
- Shadows: `shadow-lg`, `shadow-xl`
- Border radius: `rounded-2xl` for cards
- Spacing: Use consistent padding and margins (px-6, py-20, etc.)
- Typography: Use `text-4xl`, `text-xl`, `font-bold`, `font-semibold`

---

## Implementation Instructions for Copilot

**Step 1**: Create the project structure with Vite + React + Tailwind CSS

**Step 2**: Build each section as a separate component following the design specifications above

**Step 3**: Implement smooth scrolling navigation with active section detection

**Step 4**: Add Framer Motion animations for scroll-triggered reveals

**Step 5**: Make fully responsive with mobile-first approach

**Step 6**: Add hover effects and transitions for interactive elements

**Step 7**: Optimize performance and ensure accessibility (semantic HTML, ARIA labels)

---

## Sample Tailwind Config Colors
```javascript
colors: {
  primary: {
    DEFAULT: '#3b82f6',
    dark: '#2563eb',
  },
  secondary: {
    DEFAULT: '#1e3a8a',
  }
}
```

## Package Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

---

**Note to Copilot**: Build a production-ready, visually stunning single-page website with smooth animations, modern UI/UX, and clean code structure. Follow all accessibility best practices and ensure mobile responsiveness.