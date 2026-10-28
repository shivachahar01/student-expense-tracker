let expenses = [];
let nextId = 1;
let currentFilter = 'all';

const sampleData = [
    { id: 1, description: 'Lunch', amount: 120, category: 'Food' },
    { id: 2, description: 'Bus Pass', amount: 450, category: 'Travel' },
    { id: 3, description: 'Online Course', amount: 799, category: 'Education' },
    { id: 4, description: 'Movie', amount: 250, category: 'Entertainment' },
    { id: 5, description: 'Notebook', amount: 180, category: 'Shopping' }
];

document.addEventListener('DOMContentLoaded', () => {
    loadExpenses();
    setupEventListeners();
    renderExpenses();
    updateSummary();
});

function setupEventListeners() {
    const form = document.getElementById('expenseForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addExpense();
    });

    const filter = document.getElementById('categoryFilter');
    filter.addEventListener('change', (e) => {
        currentFilter = e.target.value;
        renderExpenses();
    });
}

function addExpense() {
    const description = document.getElementById('description').value.trim();
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;

    if (!description || !amount || !category) {
        return;
    }

    const expense = {
        id: nextId,
        description: description,
        amount: amount,
        category: category
    };

    expenses.push(expense);
    nextId++;

    saveExpenses();
    renderExpenses();
    updateSummary();

    document.getElementById('expenseForm').reset();
}

function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    renderExpenses();
    updateSummary();
}

function renderExpenses() {
    const tbody = document.getElementById('expenseTableBody');
    const emptyState = document.getElementById('emptyState');

    const filteredExpenses = filterExpenses(expenses, currentFilter);

    tbody.innerHTML = '';

    if (filteredExpenses.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    filteredExpenses.forEach(expense => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${escapeHtml(expense.description)}</td>
            <td><span class="category-badge ${expense.category}">${expense.category}</span></td>
            <td class="amount-cell">₹${formatAmount(expense.amount)}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteExpense(${expense.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function filterExpenses(expenseList, category) {
    if (category === 'all') {
        return expenseList;
    }
    return expenseList.filter(expense => expense.category === category);
}

function calculateTotal(expenseList) {
    let total = 0;

    expenseList.forEach(expense => {
        total += expense.amount;
    });

    return total;
}

function calculateHighestExpense(expenseList) {
    if (expenseList.length === 0) {
        return 0;
    }

    let highest = Number(expenseList[0].amount);

    expenseList.forEach(expense => {
        const amount = Number(expense.amount);
        if (amount > highest) {
            highest = amount;
        }
    });

    return highest;
}

function updateSummary() {
    const total = calculateTotal(expenses);
    const count = expenses.length;
    const highest = calculateHighestExpense(expenses);

    document.getElementById('totalSpent').textContent = `₹${formatAmount(total)}`;
    document.getElementById('expenseCount').textContent = count;
    document.getElementById('highestExpense').textContent = `₹${formatAmount(highest)}`;
}

function saveExpenses() {
    const data = {
        expenses: expenses,
        nextId: nextId
    };
    localStorage.setItem('studentExpenseTracker', JSON.stringify(data));
}

function loadExpenses() {
    const saved = localStorage.getItem('studentExpenseTracker');

    if (saved) {
        try {
            const data = JSON.parse(saved);
            expenses = data.expenses || [];
            nextId = data.nextId || 1;
        } catch (e) {
            initializeSampleData();
        }
    } else {
        initializeSampleData();
    }
}

function initializeSampleData() {
    expenses = [...sampleData];
    nextId = 6;
    saveExpenses();
}

function formatAmount(amount) {
    const num = Number(amount);
    return num.toLocaleString('en-IN', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
