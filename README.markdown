# Raita-Bandhu

Welcome to **Raita-Bandhu**, a React-based web application built with Vite. This project uses Tailwind CSS for styling, React Router for navigation, Framer Motion for animations, EmailJS for email functionality, Heroicons for icons, and CORS for backend integration.

## Prerequisites

Before setting up the project, ensure you have the following installed:
- **Node.js** (version 18 or later)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## Setup Instructions

Follow these steps to set up and run the project locally.



### 1. Clone the Repository
Clone the repository to your local machine and navigate to the project directory:
```bash
git clone https://github.com/RkeshKumar18/Raita-Bandhu.git
cd Raita-Bandhu
```

### 2. Install Dependencies
Run the following commands to install all required dependencies:


#### Install Tailwind CSS
```bash
npm install tailwindcss @tailwindcss/vite
```

#### Install Project Dependencies
```bash
npm install
```

#### Install Additional Packages
```bash
npm install react-router-dom
npm install cors
npm install @emailjs/browser
npm install @heroicons/react
npm install framer-motion
npm install dotenv
```

### 4. Set Up Environment Variables
Create a `.env` file in the project root to store sensitive information (e.g., EmailJS credentials):
```plaintext
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```
Replace `your_service_id`, `your_template_id`, and `your_public_key` with your actual EmailJS credentials from [emailjs.com](https://www.emailjs.com).

### 5. Configure CORS (Optional, for Backend)
If your project includes a backend (e.g., Express server), add CORS middleware in your server file:
```javascript
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
```

### 6. Run the Development Server
Start the Vite development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173` (or another port if specified). Open this URL in your browser to view the application.

### 7. Build for Production
To create a production-ready build:
```bash
npm run build
```

## Troubleshooting
- **Dependency Errors**: If you encounter issues during `npm install`, delete the `node_modules` folder and `package-lock.json` file, then rerun `npm install`.
- **Port Conflicts**: If `http://localhost:5173` is in use, Vite will suggest an alternative port.
- **EmailJS Issues**: Ensure your `.env` file has valid EmailJS credentials and that they match your EmailJS dashboard settings.
- **Updates**: Pull the latest changes from the repository with `git pull origin main` to stay up-to-date.

## Contributing
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes.

## License
This project is licensed under the MIT License.