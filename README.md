# 🚀 Developer Productivity MVP

A simple full-stack MVP to analyze developer productivity metrics and generate actionable insights.

---

## 🧠 Problem

Raw metrics like **cycle time, bug rate, and deployment frequency** are hard to interpret.

This app helps developers:

* Understand what these metrics mean
* Identify issues in workflow
* Get actionable suggestions

---

## ⚙️ Features

* 📊 Input key metrics:

  * Cycle Time
  * Bug Rate
  * Deployment Frequency

* 🧠 Generate:

  * Insights (what’s wrong)
  * Suggestions (what to improve)
  * Summary (overall evaluation)

* ⏳ Simulated backend using Promise (mock API)

---

## 🏗️ Architecture

* **Frontend (React)** → Handles UI & state
* **API Layer (Mock)** → Simulates async backend
* **Business Logic (utils)** → Processes metrics

Flow:

User Input → UI → API (mock) → Logic → Response → UI

---

## 🧪 Data & Logic Approach

* Used **simplified input-based metrics**
* Did NOT implement full workbook dataset (intentionally)

Logic is aligned with assignment definitions:

* **Cycle Time** → speed of work completion
* **Bug Rate** → quality indicator
* **Deployment Frequency** → delivery speed

👉 Focused on **interpretation over data engineering**

---

## 🎯 Product Decisions

* Built a **focused MVP** instead of complex dashboard

* Prioritized:

  * Clarity
  * Simplicity
  * Actionable insights

* Separated concerns:

  * UI (React)
  * Logic (utils)
  * API simulation

---

## 🛠️ Tech Stack

* React (Vite)
* JavaScript
* CSS

---

## 🚀 How to Run

```bash
npm install
npm run dev
```

---

## 📦 Future Improvements

* Use real dataset (Excel / API)
* Add charts & visualization
* Add validation & error handling
* Improve UI/UX

---


---

## 🧭 Miro Architecture

https://miro.com/app/board/uXjVHd0fdWg=/?share_link_id=996498236413

---


---

## 🧠 Key Learning

This project focuses on **turning metrics into decisions**, not just displaying numbers.
