# 🛍️ Prep Kitchen Interview Task

Next.js-based product management application that allows users to create, read, update and delete products.

**Watch the full demo here:**  [![Product Management App](https://img.shields.io/badge/📹-Watch%20Demo-blue)](https://drive.google.com/file/d/1XKNgpUd6oLNek2Yeuwb9jzkMoVtuhaMO/view?usp=sharing)  

---

## 📂 Project Structure

```
└── src
    ├── components
    │   ├── ProductCard.js
    │   ├── ProductDetails.js
    │   ├── ProductForm.js
    │   └── ProductList.js
    ├── context
    │   └── ProductContext.js
    ├── lib
    │   ├── api.js
    ├── pages
    │   ├── _app.js
    │   ├── _document.js
    │   ├── index.js
    │   └── product
    │       ├── [id].js
    │       ├── edit
    │       │   └── [id].js
    │       └── new.js
    └── styles
        ├── Product.module.css
        └── globals.css
```
## 🚀 Getting Started  

### **1️⃣ Installation**  
Ensure you have **Node.js (v16 or higher)** installed.  

```sh
git clone https://github.com/ayushmishra333/prep-kitchen-task.git
cd prep-kitchen-task 
npm install
```

### **2️⃣ Configure environment variable**
```sh
NEXT_PUBLIC_API_URL=https://dummyjson.com/products
```

### **3️⃣ Running the Development Server**
```sh
npm run dev
```

Then open http://localhost:3000 in your browser.

## 🔧 Application Design and State Management:

- Uses React Context API to manage global state efficiently, and state updates handled within the `context/ProductContext.js` to ensure a single source of truth; avoiding prop drilling.
- Implements `useReducer` within the context to handle state updates in a predictable manner.
- Utilizes the Context API + useReducer pattern instead Redux/Zustand, as the app is small-scale and doesn’t require additional boilerplate.
- Navigates using page-based routing.
- Follows a modular component-based design (ProductCard, ProductList, ProductForm, etc.), ensuring reusability and maintainability.
- Uses a centralized API utility (lib/api.js) for all CRUD operations, making it easy to update API endpoints if needed.
