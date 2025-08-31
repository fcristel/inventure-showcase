# Inventure Recruitment - Showcase Website

This project is a simple shell website built for the Full-Stack Web Developer & Tech Operations Lead assignment. It serves as a demonstration of my approach to building a clean, scalable, and user-focused web application using a modern tech stack.

The site is fully static, mobile-first, and designed with a minimalist aesthetic, adhering to the core requirements of the assignment.

**Live Demo:** [Link to your Netlify deployment URL]

---

### A Note on Design Choices & Next Steps

My approach was guided by three principles: **simplicity, scalability, and speed.**

I chose Next.js with the App Router, TypeScript, and TailwindCSS because this stack provides a best-in-class developer experience and an incredibly fast user experience out of the box. The design is intentionally minimalist—using generous whitespace, a restrained color palette drawn from your brand, and clean typography—to ensure the focus remains on the content and the user's journey. Every page is server-rendered and SEO-optimized to maximize organic reach from day one.

If this were a live product, the MVP roadmap would focus on establishing the core marketplace first. I would use **Supabase** for the entire backend to simplify the stack, handling authentication, database (PostgreSQL), and storage. The first step would be implementing the **user profiles for both candidates and recruiters**. Next, I'd build the primary interaction loop: allowing recruiters to post jobs and candidates to apply. Once that core functionality is live, I would layer in the marketing and communication tools to facilitate seamless interaction between them. Only after establishing this foundational user base would I introduce the **AI-driven features**, starting with the "Zero-Day Challenge," as a powerful differentiator to attract and retain users.

---

### Getting Started Locally

To run this project on your local machine, please follow these steps.

**Prerequisites:**
*   [Node.js](https://nodejs.org/) (v18.17 or later)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

**1. Clone the repository:**

`git clone https://github.com/fcristel/inventure-showcase.git`


**2. Navigate to the project directory:**

`cd inventure-showcase`

**3. Install the dependencies:**

`npm install`
*(Or `yarn install` if you prefer Yarn)*

**4. Run the development server:**

`npm run dev`
*(Or `yarn dev`)*

The application will now be running and accessible at [http://localhost:3000](http://localhost:3000) in your web browser.
