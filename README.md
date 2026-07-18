# RoyCafe - Real-Time Point of Sale (POS) Application

RoyCafe is a modern, real-time Point of Sale (POS) system designed for food and beverage businesses. It enables staff to manage dining tables, process customer orders instantly, verify payments securely, and provides store administrators with comprehensive real-time transaction reports.

## 🚀 Tech Stack
- **Frontend & Routing:** Next.js (App Router), TypeScript, Tailwind CSS, lucide-react.
- **State Management:** Zustand (for lightweight, reactive local app state).
- **Backend-as-a-Service:** Supabase (Auth, Real-time Channels, Storage).
- **Database & Querying:** PostgreSQL (hosted on Supabase).
- **Payment Gateway:** Midtrans Sandbox Integration (for checkout simulation and secure payment callbacks).

---

## ✨ Key Features
- **Dynamic Table Management:** Assign and monitor table statuses (empty, occupied, ordering) in real-time.
- **Interactive Ordering Flow:** Browse menu categories, customize order items, and send orders directly to the kitchen dashboard.
- **Real-Time Order Updates:** Instantly updates statuses across staff and kitchen terminals using Supabase Realtime subscription channels.
- **Payment Integration:** Secure online checkout flow using Midtrans Sandbox. Validates transaction success automatically.
- **Sales & Transaction Reporting:** Comprehensive dashboard representing daily earnings, order histories, and best-selling menu items.

---

## 🛠️ Local Installation & Development Setup

### Prerequisites
- Node.js installed (v18 or higher recommended).
- A [Supabase](https://supabase.com/) project set up (with PostgreSQL tables for Menu, Orders, Tables, and Transactions).
- A [Midtrans](https://midtrans.com/) Sandbox Account (for Client Key and Server Key credentials).

### 1. Clone the Repository
```bash
git clone https://github.com/roynyk/roycafe.git
cd roycafe
