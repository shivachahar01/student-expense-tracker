<div align="center">

# 💸 Student Expense Tracker

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![localStorage](https://img.shields.io/badge/Persistence-localStorage-4EAA25?style=for-the-badge&logo=databricks&logoColor=white)](#)
[![Status](https://img.shields.io/badge/Status-Active-green?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](#)

**A clean, beginner-friendly web application for students to track daily expenses, categorize spending, and monitor budget habits.**

<p align="center">
  <a href="#sparkles-features">Features</a> •
  <a href="#rocket-getting-started">Getting Started</a> •
  <a href="#camera-screenshots">Screenshots</a> •
  <a href="#books-architecture">Architecture</a> •
  <a href="#page_facing_up-license">License</a>
</p>

</div>

---

## :sparkles: Features

- :heavy_plus_sign: **Add Expenses**: Quickly log expenses with description, amount, and category
- :wastebasket: **Delete Expenses**: Remove expenses you no longer need to track
- :card_index_dividers: **Categorize Expenses**: Organize spending into 6 predefined categories
- :money_with_wings: **Calculate Total Spending**: See the grand total of all your expenses at a glance
- :chart_with_upwards_trend: **Track Highest Expense**: Identify your biggest individual purchase
- :1234: **Count Expenses**: Know how many transactions you've logged
- :mag: **Filter by Category**: View expenses from a specific category
- :floppy_disk: **Persistent Storage**: All data is saved in your browser's localStorage
- :iphone: **Responsive UI**: Works beautifully on desktop, tablet, and mobile devices

---

## :rocket: Getting Started

### Prerequisites

Nothing! No frameworks, no package managers, no build tools. Just a modern web browser.

### Installation & Usage

1. **Download** the repository (or clone it with Git)
2. **Navigate** to the project folder
3. **Open** `index.html` by double-clicking it, or:
   ```
   Right-click index.html → Open with → Chrome / Firefox / Edge / Safari
   ```
4. **Start tracking!** The app comes pre-loaded with sample expenses to explore.

> :heavy_check_mark: **Supported Browsers**: Chrome, Firefox, Safari, Edge, Brave, Opera, and any modern Chromium-based browser.

---

## :camera: Screenshots

### Dashboard Overview
<div align="center">

![Dashboard Preview](https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20student%20expense%20tracker%20dashboard%20with%20purple%20gradient%20background%2C%20three%20summary%20cards%20showing%20total%20spent%2C%20expense%20count%2C%20and%20highest%20expense%2C%20add%20expense%20form%20on%20left%2C%20expense%20list%20table%20on%20right%2C%20colorful%20category%20badges%2C%20clean%20modern%20UI%2C%20card%20layout%2C%20rounded%20corners%2C%20professional&image_size=landscape_16_9)

*Full dashboard showing summary cards, add-expense form, and expense list*

</div>

### Summary Cards
<div align="center">

| Total Spent | Number of Expenses | Highest Expense |
|:-----------:|:------------------:|:---------------:|
| :green_circle: Green gradient card with cumulative spending total | :large_blue_circle: Blue gradient card showing transaction count | :red_circle: Pink gradient card highlighting largest purchase |

</div>

### Add Expense Form
> Intuitive 3-field form (Description, Amount, Category) with instant validation and smooth submit button.

### Category Filtering
> Dropdown filter above the expense list to isolate specific spending categories.

---

## :books: Architecture

### Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| :page_facing_up: Structure | **HTML5** | Semantic markup, accessible forms, table layout |
| :art: Presentation | **CSS3** | Gradients, responsive grid, flexbox, animations, media queries |
| :gear: Logic | **Vanilla JavaScript (ES6+)** | State management, DOM manipulation, event listeners |
| :floppy_disk: Persistence | **Browser localStorage** | JSON-based client-side data storage |

### Project Structure

```
student-expense-tracker/
├── index.html   ──  Semantic markup, DOM structure, event wiring
├── style.css    ──  Dashboard theme, cards, forms, responsive layout
├── script.js    ──  App logic, expense CRUD, summaries, localStorage
└── README.md    ──  This documentation file
```

### Core Functions (`script.js`)

| Function | Responsibility |
|----------|---------------|
| `addExpense()` | Reads form input → creates expense object → appends to state |
| `deleteExpense(id)` | Removes expense by ID from in-memory array |
| `renderExpenses()` | Filters expenses → generates table rows → injects into DOM |
| `calculateTotal()` | Sums all expense amounts |
| `calculateHighestExpense()` | Finds maximum single expense value |
| `updateSummary()` | Refreshes the three summary cards with current data |
| `filterExpenses()` | Returns subset of expenses matching the selected category |
| `saveExpenses()` | Serializes state to JSON → writes to localStorage |
| `loadExpenses()` | Reads from localStorage → restores state (or seeds sample data) |

### Expense Data Model

Each expense is stored as a plain JavaScript object:

```javascript
{
    id: 1,                    // Unique auto-incrementing identifier
    description: "Lunch",     // User-entered text label
    amount: 120,              // Numeric cost value
    category: "Food"          // One of 6 predefined categories
}
```

---

## :card_index: Spending Categories

| Emoji | Category | Typical Use Cases |
|:-----:|----------|-------------------|
| :hamburger: | **Food** | Meals, snacks, groceries, coffee, beverages |
| :bus: | **Travel** | Bus fare, taxi, gas, train tickets, parking |
| :books: | **Education** | Textbooks, online courses, supplies, tuition |
| :film_projector: | **Entertainment** | Movies, games, concerts, streaming, events |
| :shopping_bags: | **Shopping** | Clothing, electronics, accessories, personal items |
| :pushpin: | **Other** | Anything that doesn't fit the categories above |

---

## :star2: First-Time Experience

On your very first visit, the app automatically seeds **5 sample expenses** so you can explore every feature immediately:

| Description | Category | Amount |
|-------------|----------|--------|
| Lunch | :hamburger: Food | ₹120 |
| Bus Pass | :bus: Travel | ₹450 |
| Online Course | :books: Education | ₹799 |
| Movie | :film_projector: Entertainment | ₹250 |
| Notebook | :shopping_bags: Shopping | ₹180 |

Feel free to delete these and replace them with your own expenses — they won't come back on reload!

---

## :crystal_ball: Future Enhancements

Got ideas? Here are a few features on the roadmap:

- [ ] **Edit Expenses**: Modify existing transactions instead of deleting & re-adding
- [ ] **Date/Time Tracking**: Add timestamps and sort by date
- [ ] **Monthly Reports**: View spending breakdowns per month
- [ ] **Export to CSV**: Download expense data for spreadsheets
- [ ] **Budget Limits**: Set category budgets and get warned when close to overspending
- [ ] **Search Bar**: Full-text search across expense descriptions
- [ ] **Dark Mode**: Toggle between light & dashboard themes
- [ ] **Multiple Currencies**: Support for $, €, £, and more

---

## :handshake: Contributing

This is a beginner-friendly project! Contributions are welcome:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-thing`)
3. **Commit** your changes (`git commit -m 'Add some amazing thing'`)
4. **Push** to the branch (`git push origin feature/amazing-thing`)
5. **Open** a Pull Request

---

## :page_facing_up: License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

Made with :heart: for students learning web development

**Happy Tracking!** :money_with_wings::notebook:

</div>
