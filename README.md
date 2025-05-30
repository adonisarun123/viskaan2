# Viskaan Associates - Facility Management Website

A modern, responsive website for Viskaan Associates, a leading facility management company in India with 25+ years of excellence.

## 🚀 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Headless UI

## 📁 Project Structure

```
viskaan-facility-management/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx            # Homepage
│   ├── about/              # About Us page
│   ├── services/           # Services pages
│   ├── industries/         # Industries page
│   └── contact/            # Contact page
├── components/             # React components
│   ├── layout/            # Layout components
│   │   ├── Navigation.tsx # Header navigation
│   │   └── Footer.tsx    # Footer
│   ├── sections/         # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── IndustriesSection.tsx
│   │   ├── ClientsSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   └── CTASection.tsx
│   └── ui/              # UI components
│       └── WhatsAppButton.tsx
├── lib/                 # Utility functions
└── public/             # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: Navy Blue (#003366)
- **Secondary**: Green (#4CAF50)
- **Accent**: Amber (#FFB300)
- **Neutral**: Grays (#F5F5F5, #E0E0E0, #666666)

### Typography
- **Headings**: Montserrat
- **Body**: Open Sans

## 🌟 Features

### Pages Implemented
1. **Homepage** - Hero section, services overview, industries, clients, certifications
2. **About Us** - Company overview, vision/mission, milestones
3. **Services** - Overview of all 6 core services
4. **Service Details** - Facility Management (template for other services)
5. **Industries** - 8 industry verticals with detailed information
6. **Contact** - Contact form, office location, business hours

### Core Services
1. Facility Management
2. Security Services
3. Drivers
4. Manpower Supply
5. Horticulture
6. Canteen Services

### Key Components
- Responsive navigation with dropdown menus
- Mobile-friendly hamburger menu
- WhatsApp floating button
- Animated sections with Framer Motion
- Contact form with validation
- Client testimonials
- Certification badges

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd viskaan-facility-management
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Environment Variables

Create a `.env.local` file for environment variables:

```env
# Add any environment variables here
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

## 📝 To-Do / Future Enhancements

- [ ] Implement remaining service detail pages
- [ ] Add real client logos
- [ ] Integrate contact form with backend
- [ ] Add Google Maps integration
- [ ] Implement SEO optimizations
- [ ] Add blog/news section
- [ ] Create careers page with job listings
- [ ] Add multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to Viskaan Associates.

## 📞 Contact

Viskaan Associates
- Website: [viskaanassociates.com](https://viskaanassociates.com)
- Email: info@viskaanassociates.com
- Phone: +91 98765 43210

---

Built with ❤️ by Viskaan Associates Development Team
