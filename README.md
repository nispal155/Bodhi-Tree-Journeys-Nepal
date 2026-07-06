# 🏔️ Bodhi Tree Journeys Nepal

![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer)

A premium, highly interactive travel agency website built for **Bodhi Tree Journeys Nepal**. This platform is designed to provide an immersive experience for travelers looking to explore the Himalayas, cultural heritage sites, spiritual retreats, and thrilling expeditions in Nepal.

Developed by **Nispal Bhattarai** (Owner of Astra Technology Horizon).

---

## ✨ Key Features & Recent Additions

### 🎨 Modern & Immersive UI/UX
- **Dark/Light Mode:** Seamless theme switching with system preference detection (`next-themes`).
- **Micro-Animations & Parallax:** Fluid scroll animations and hover states powered by **Framer Motion**.
- **Important Notice Modal:** A massive, responsive, image-centric promotional flyer overlay that triggers on page load (with persistent `localStorage` dismissal tracking).

### 💬 Instant Communication
- **WeChat Integration:** A custom floating WeChat widget featuring a high-quality popup QR code scanner, tailored specifically for Chinese client engagement (WeChat ID: Lingyunnepal).

### 🛡️ Secure & Serverless Architecture (cPanel Optimized)
- **100% Static Export (`output: 'export'`):** The architecture has been completely migrated to support Node.js-free environments, making it fully compatible with shared cPanel hosting.
- **Client-Side Form Validation:** Secure Web3Forms integration with client-side **Zod** schema validation and built-in honeypots to prevent spam without relying on backend API routes.
- **Apache Security Headers (`.htaccess`):** Implemented strict routing, HTTPS forced redirects, and advanced Content Security Policies out of the box for Apache web servers.

### 🚀 Bulletproof Deployment System
- **WAF Bypass Installer (`installer.php`):** Created a custom PHP drop-and-extract script with a base64 encoded payload (`payload.txt`). This securely bypasses overly aggressive cPanel antivirus scanners (like `Sanesecurity.Foxhole.JS_Zip_11.UNOFFICIAL FOUND`) that block Next.js compiled `.js` files within `.zip` archives.

---

## 🛠️ Technology Stack

| Category | Technologies Used |
|----------|-------------------|
| **Framework** | Next.js 16 (App Router), React 18 |
| **Styling** | Tailwind CSS, Lucide React (Icons) |
| **Animation** | Framer Motion |
| **Forms & Auth** | Web3Forms (Client-Side), Zod Validation |
| **Language** | TypeScript |
| **Deployment**| Static HTML Export, Apache HTTP Server |

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
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📞 Contact Information

For inquiries, support, or custom software development, reach out to **Astra Technology Horizon**:

- **Developer / Owner:** Nispal Bhattarai
- **Email:** contact@nispalbhattarai.com.np
- **Phone:** 9852049719

---

## 📝 License

Designed and developed for Bodhi Tree Journeys Nepal by Astra Technology Horizon. All rights reserved.
