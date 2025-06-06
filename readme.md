# 🍽 Restaurant Menu & Order Management System

A full-stack web application built using the **MERN stack (MongoDB, Express, React, Node.js)** to help restaurants manage digital menus, take and track orders, and generate insightful analytics. Designed with scalability, efficiency, and real-time updates in mind.

🚀 **[Live Demo](https://restaurant-management-production-0161.up.railway.app/index)**  

---

## 📝 Problem Statement

Restaurants often struggle to manage dynamic menus, customizations, real-time order tracking, and analytics using traditional systems. Relational databases aren’t flexible enough to handle evolving nested order structures.

This project solves that by using **MongoDB**, a document-oriented NoSQL database, to store and manage semi-structured data effectively.

---

## 🎯 Features

### ✅ Core Modules

- **Add Menu Items & Orders**  
  Includes item name, category, price, ingredients, tags (e.g., spicy/vegan), and availability.
  
- **Search & Filter Menu**  
  Use filters like name, category, tags, ingredients, and price range with pagination.

- **Update/Delete Menu & Orders**  
  Modify existing items/orders, pricing, status, or cancel/delete them.

- **Order Tracking**  
  Status updates: *Placed → In Preparation → Ready → Delivered*.

- **Sales Analytics**  
  Aggregated insights: most ordered items, category revenue, peak times, etc.

- **Authentication (Optional)**  
  Role-based access for admin and staff.

---

## 🛠 Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | React, Bootstrap, HTML/CSS |
| Backend     | Node.js, Express   |
| Database    | MongoDB            |
| Hosting     | Railway, GitHub    |

---

## 📦 Installation Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/revanthrajeev/restaurant-management.git
   cd restaurant-management
