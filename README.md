# Portfolio - Jules Gueguen

Welcome to my personal portfolio! This repository contains the code for my professional website, where I showcase my engineering, design, and technical skills.

## Table of Contents
- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [How to Run Locally](#how-to-run-locally)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

## About the Project

This is my personal portfolio website, built to highlight my projects, experiences, and skills in engineering, design, and web development. The website is built with modern technologies such as **Next.js** and **Tailwind CSS** to ensure responsiveness, performance, and maintainability.

### Features
- **Responsive design**: The website is mobile-friendly and adjusts based on screen size.
- **Dynamic content**: The content, such as projects and experience, is dynamically loaded from a JSON file.
- **Fast load times**: Optimized for performance using Next.js features like automatic static optimization.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for fast UI development.
- **GitHub**: Version control and repository hosting.
- **Netlify**: Continuous deployment platform for hosting the website.

## Project Structure

Here is a breakdown of the project structure:

```
├── public/
│   └── data.json         # Contains the content for the portfolio (projects, experiences, etc.)
├── src/
│   ├── components/       # React components for different sections (header, footer, etc.)
│   ├── pages/            # Next.js pages (home, projects, contact)
│   └── styles/           # Tailwind CSS configuration and global styles
├── .gitignore            # Defines which files should be ignored by Git
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # This file
```

### Key Files
- **`public/data.json`**: Contains personal data like projects, experiences, and skills. Modify this file to update the website content.
- **`src/pages/index.js`**: The homepage that dynamically loads the portfolio data.
- **`src/components/Header.js`**: Displays your name and navigation links.
- **`styles/globals.css`**: Contains global styles and Tailwind CSS configuration.

## How to Run Locally

To run this project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/julesgg/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

   The website will be available at [http://localhost:3000](http://localhost:3000).

## Customization

You can customize the content and design of the portfolio:

### Content Customization
- Modify the `public/data.json` file to update your personal information, projects, experience, and skills.

### Design Customization
- Change the layout and styling in `src/styles/globals.css` and `tailwind.config.js` to suit your personal preferences.
- Modify or add new components in the `src/components/` directory.

## Deployment

Once you've made changes, push them to GitHub to trigger automatic deployment to Netlify:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Updated portfolio content"
   ```

2. Push your changes:
   ```bash
   git push
   ```

Netlify will automatically deploy the updated site when changes are pushed to GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
