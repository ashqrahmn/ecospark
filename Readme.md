---

# EcoSpark - Cleaning Service Website

A modern, fully responsive landing page for a professional cleaning service company called EcoSpark. This project focuses on a clean user interface and a polished user experience, with a strong emphasis on smooth animations and micro-interactions.

---

## ✨ Features

* **Fully Responsive Design:** Looks and works great on all devices, from mobile phones to desktops.
* **Interactive UI:** Polished with custom hover and tap animations on buttons, links, and feature cards.
* **Component-Based Architecture:** Each section of the page is a well-structured React component.
* **Functional Contact Form:** A "Get a Quote" form that sends emails directly to you using the Web3Forms service.
* **IP Limiting:** Limits users to **2 submissions per day per IP address** to prevent spam.
* **Modern Accordion:** A smooth, CSS-powered accordion for the FAQ section.

## 🛠️ Tech Stack

* **Frontend:** React
* **Styling:** Tailwind CSS
* **Notifications:** React Toastify
* **Icons:** React Icons
* **Form Handling:** Web3Forms
* **Backend API (optional, for IP limiting):** Vercel Serverless Functions + Upstash Redis

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

* Node.js (v18.x or higher)
* npm
* **Optional for API routes / IP limiting:** Vercel CLI (`npm install -g vercel`)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. **Navigate to the project directory:**

   ```sh
   cd your-repo-name
   ```
3. **Install NPM packages:**

   ```sh
   npm install
   ```

### Environment Variables

To make the contact form and IP limiting work, you need to add your API keys.

1. Create a new file in the root of your project named `.env.local`
2. Add your Web3Forms API key:

   ```
   VITE_WEB3FORM_API_KEY="YOUR_WEB3FORMS_API_KEY_HERE"
   ```
3. **If you are using IP limiting via Upstash Redis** (requires backend API route):

   ```
   UPSTASH_REDIS_REST_URL="YOUR_UPSTASH_REDIS_REST_URL"
   UPSTASH_REDIS_REST_TOKEN="YOUR_UPSTASH_REDIS_REST_TOKEN"
   ```

> **Note:** IP limiting only works if you run the backend API routes. For local testing, use `vercel dev` (see below).

### Running the Application

#### **Frontend only**

```sh
npm run dev
```

* The app will be available at `http://localhost:5173`.
* **IP limiting will not work** with frontend-only mode.

#### **Frontend + Backend (with IP limiting)**

```sh
vercel dev
```

* Runs frontend and API routes together.
* IP limiting will now work locally, simulating the production environment.
* Default port: `http://localhost:3000` (or as shown in terminal).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---