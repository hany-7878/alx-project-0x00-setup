
# 🏡 ALX Project 0x00 — Next.js Setup & Airbnb UI Clone

This project is part of the **ALX Frontend Development program**.
It introduces the fundamentals of building modern web applications using **Next.js**, **TypeScript**, and **Tailwind CSS**, by recreating a simple **Airbnb-style interface**.

## 🎯 Objectives

* Set up a Next.js project with TypeScript and ESLint
* Organize project folders and components properly
* Implement basic **Next.js routing**
* Create and reuse **React components** (Card, Pill, Button)
* Define and use **TypeScript interfaces** for props
* Apply **Tailwind CSS** for responsive styling
* Understand project structure and coding best practices


## 🧰 Technologies Used

* **Next.js** (React framework)
* **TypeScript** (static typing)
* **Tailwind CSS** (utility-first styling)
* **ESLint** (code quality)
* **Node.js & npm** (runtime & package manager)

---

## ⚙️ Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/<your-username>/alx-project-0x00-setup.git
   cd alx-project-0x00-setup
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev -- -p 3000
   ```

   Then open:

   ```
   http://localhost:3000
   ```

---

## 📁 Folder Structure

```
alx-project-0x00/
│
├── components/
│   ├── Card.tsx
│   ├── Pill.tsx
│   └── Button.tsx
│
├── interfaces/
│   └── index.ts
│
├── pages/
│   ├── index.tsx
│   ├── landing.tsx
│   └── about.tsx
│
├── public/
│   └── assets/
│       └── images/
│           ├── house.png
│           └── star.png
│
├── styles/
│   └── globals.css
│
└── package.json
```

---

## 🧩 Tasks Summary

### 0️⃣ Project Scaffolding

Initialize a new Next.js project using:

bash
npx create-next-app@latest alx-project-0x00 --typescript


Include **ESLint** and **Tailwind CSS**, and **exclude `/src` folder and App Router**.


### 1️⃣ Folder Setup

Create the following directories:

/components
/interfaces


Convert `index.tsx` to an arrow function component.

### 2️⃣ Routing

Add two new pages:

/pages/landing.tsx
/pages/about.tsx


### 3️⃣ Components

Move `house.png` and `star.png` into:

/public/assets/images


Then create:

* `Card` component
* `Pill` component

Render them inside the `landing.tsx` page.

### 4️⃣ Props & Typing

Create a TypeScript interface:


export interface PillProps {
  title: string
}

Use it to type the `Pill` component and render dynamic titles.

### 5️⃣ Advanced Component (Button)

Create a reusable **Button** component with props:

* `title`
* `size` (small, medium, large)
* `shape` (rounded-sm, rounded-md, rounded-full)

Render it inside `landing.tsx`.

## 🧱 Best Practices

* Use **TypeScript interfaces** for props
* Keep components reusable and maintainable
* Follow **Next.js project structure** conventions
* Use **Tailwind CSS** for consistent styling
* Run **ESLint** to maintain clean code

## 👩‍💻 Author

**Hana Kebeda**
Full Stack Developer — ALX Learner
🌐 [hanatesfayek.com](http://hanatesfayek.com)



Would you like me to enhance this README with **GitHub badges** (for Next.js, TypeScript, Tailwind, etc.) and a **clean banner section** to make it visually appealing? It would help your profile stand out professionally.
