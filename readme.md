
# Anand Printek Enterprise - Documentation

## 🏗 Project Architecture
This application is built as a **Serverless SPA (Single Page Application)**. It mimics a full-stack environment using a "Virtual Backend" approach.

### 1. The "Backend" (State Management)
- **Data Layer:** Located in `constants.tsx`. This acts as the "Seed Data" for the database.
- **Engine:** Located in `context/AppContext.tsx`. This uses the React Context API to manage global state.
- **Persistence:** All changes (Inventory updates, Orders, Cart) are persisted in the browser's `localStorage` under the keys `ap_products`, `ap_orders`, and `ap_cart`. This ensures that if you add a product in the Admin panel, it stays there even after a page refresh.

### 2. Database Schema (External)
For professional production deployment, refer to:
- `anand_printek_schema.sql`: Contains the table structures (Categories, Products, Schools, Orders).
- `anand_printek_data.sql`: Contains the initial population data.
- **Compatibility:** Optimized for SQLite, MySQL, and MariaDB.

## 📂 File Structure Clarification
- `App.tsx`: The heart of the app. Handles routing and the AI Assistant overlay.
- `constants.tsx`: The "Source of Truth". Contains all product data, category definitions, and contact lists.
- `types.ts`: TypeScript definitions ensuring data integrity (e.g., GST, HSN fields).
- `pages/Admin.tsx`: The management suite for inventory and live orders.
- `pages/Quotation.tsx`: A specialized lead-generation form for bulk institutional orders.
- `pages/Contact.tsx`: Support hub with direct technical expert access.

## 🚀 Steps for Future Reference
1. **Adding Products:** Go to `/#/admin` -> Inventory Manager. All new products are automatically assigned a unique ID.
2. **Compliance:** Ensure all new products added via Admin have valid HSN codes for institutional billing.
3. **AI Training:** To change how the AI behaves, edit `services/gemini.ts`.
4. **Updating Contacts:** Modify the `CONTACTS` array in `constants.tsx`.

---
*Developed for Anand Printek Enterprise - Empowering Institutions through Quality.*
