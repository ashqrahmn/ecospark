-----

# EcoSpark - Cleaning Service Website

A modern, fully responsive landing page for a professional cleaning service company called EcoSpark. This project focuses on a clean user interface and a polished user experience, with a strong emphasis on smooth animations and micro-interactions.

-----


## ✨ Features

  * **Fully Responsive Design:** Looks and works great on all devices, from mobile phones to desktops.
  * **Interactive UI:** Polished with custom hover and tap animations on buttons, links, and feature cards.
  * **Component-Based Architecture:** Each section of the page is a well-structured React component.
  * **Functional Contact Form:** A "Get a Quote" form that sends emails directly to you using the Web3Forms service.
  * **Modern Accordion:** A smooth, CSS-powered accordion for the FAQ section.

## 🛠️ Tech Stack

  * **Frontend:** React
  * **Styling:** Tailwind CSS
  * **Notifications:** React Toastify
  * **Icons:** React Icons
  * **Form Handling:** Web3Forms

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

  * Node.js (v18.x or higher)
  * npm

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repo-name
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Environment Variables

To make the contact form work, you need to add your Web3Forms API key.

1.  Create a new file in the root of your project named `.env.local`
2.  Add your API key to this file as shown below:
    ```
    VITE_WEB3FORM_API_KEY="YOUR_WEB3FORMS_API_KEY_HERE"
    ```

### Running the Application

To start the development server, run the following command:

```sh
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.