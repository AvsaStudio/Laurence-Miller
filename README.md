# LHS Tabbins - Security Solutions Website

A modern, high-performance single-page application (SPA) designed for **LHS Tabbins**, a premier security installations company. This project showcases the company's services, portfolio, and origin story, featuring a responsive design and an integrated AI assistant.

## Project Overview

LHS Tabbins was founded on the principle that "Security is not a privilege, it's a right." This digital platform reflects that mission by providing an accessible, user-friendly interface for potential clients to explore security solutions ranging from electric fencing to smart gate automation.

### Key Features

*   **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
*   **Interactive UI**: Smooth scroll navigation, hover effects, and engaging animations powered by Framer Motion.
*   **Service Showcase**: Detailed breakdown of security offerings including CCTV, electric fencing, and access control.
*   **Portfolio Gallery**: Filterable gallery displaying recent residential and commercial installations.
*   **AI-Powered Support**: Integrated chat widget capable of answering queries about services and providing quotes based on the company's specific business logic.
*   **Contact Integration**: User-friendly contact form and direct communication channels.

## Technology Stack

*   **Frontend Framework**: React 18+ (TypeScript)
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **AI Integration**: Google GenAI SDK (Gemini API)
*   **Build Tool**: Vite (implied environment)

## Installation & Setup

1.  **Clone the repository** to your local machine.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Environment Configuration**:
    Create a `.env` file in the root directory and add your API key:
    ```env
    API_KEY=your_google_genai_api_key
    ```
4.  **Run the development server**:
    ```bash
    npm run dev
    ```
5.  **Build for production**:
    ```bash
    npm run build
    ```

## Project Structure

*   `/components`: Reusable UI components (Hero, Navbar, Services, etc.).
*   `/services`: Logic for external API integrations (AI Chatbot).
*   `/types`: TypeScript interfaces and definitions.
*   `index.tsx`: Application entry point.
*   `App.tsx`: Main layout structure.

## Customization

To modify the content, navigate to the respective component files.
*   **Company Story**: Edit `components/About.tsx`
*   **Service Offerings**: Edit `components/Services.tsx`
*   **Theme/Colors**: Configure `tailwind.config` in `index.html`.

---
© LHS Tabbins. All rights reserved.