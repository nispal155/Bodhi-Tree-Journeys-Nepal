# 🏔️ Bodhi Tree Journeys Nepal

![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer)

A premium, highly interactive travel agency website built for **Bodhi Tree Journeys Nepal**. This platform is designed to provide an immersive experience for travelers looking to explore the Himalayas, cultural heritage sites, spiritual retreats, and thrilling expeditions in Nepal.

---

## ✨ Key Features

### 🎨 Modern & Immersive UI/UX
- **Dark/Light Mode:** Seamless theme switching with system preference detection (`next-themes`).
- **Micro-Animations & Parallax:** Fluid scroll animations and hover states powered by **Framer Motion**.
- **Interactive 3D Elements:** Embedded 3D visuals using Spline to create a captivating hero section.
- **Custom Mouse Cursor:** A personalized, travel-themed custom cursor for desktop users.

### 🗺️ Dynamic Travel Experiences
- **Interactive Route Maps:** Integrated **Leaflet** maps (`react-leaflet`) that dynamically draw the actual trekking/tour paths based on geographic coordinates.
- **Live Destination Weather:** Real-time weather forecasting for key destinations using the **Open-Meteo API**, helping travelers prepare for their trips.
- **Dynamic Routing:** Beautiful, SEO-friendly package detail pages generated dynamically (`/packages/[slug]`) with rich itineraries, FAQs, and pricing.

### 🛡️ Secure & Robust Booking System
- **Advanced Contact Form:** A comprehensive inquiry form with multi-select chips for additional services.
- **Bulletproof Validation:** Powered by **Zod** for strict client-side and server-side data validation.
- **Anti-Spam Protection:** Custom visual CAPTCHA and hidden honeypot fields to eliminate bot spam.
- **Secure API Proxy:** Web3Forms integration routed securely through a Next.js API endpoint (`/api/contact`) to keep API keys hidden and bypass strict browser/network blockers (like Cloudflare Bot Fight Mode).

### 💬 Instant Communication
- **Floating WhatsApp Widget:** Direct, one-click access to chat with the founder.
- **Social Integration:** Links to TikTok, Instagram, and Facebook seamlessly embedded.

---

## 🛠️ Technology Stack

| Category | Technologies Used |
|----------|-------------------|
| **Framework** | Next.js 16 (App Router), React 18 |
| **Styling** | Tailwind CSS, Lucide React (Icons) |
| **Animation** | Framer Motion |
| **Maps & Data** | Leaflet, React-Leaflet, Open-Meteo API |
| **Forms & Auth** | Web3Forms, Zod Validation |
| **Language** | TypeScript |

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18+) and **npm** installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nispal155/Bodhi-Tree-Journeys-Nepal.git
   cd explore-nepal-travels
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env.local` file in the root directory and add your Web3Forms access key:
   ```env
   WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

- **`src/app/`**: Next.js App Router pages (Home, About, Contact, Packages, etc.)
- **`src/app/api/`**: Serverless backend endpoints (e.g., secure contact form proxy)
- **`src/components/`**: Reusable UI components (Hero, Navigation, Maps, Weather, Forms)
- **`src/data/`**: Static data for tour packages, itineraries, and gallery images.

---

## 📝 License

Designed and developed for Bodhi Tree Journeys Nepal. All rights reserved.
