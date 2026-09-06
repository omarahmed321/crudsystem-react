# Banking and ATM Simulation (Interactive Financial Transaction System)

**Live Demo:** [https://omarahmed321.github.io/test-crudsystem/](https://omarahmed321.github.io/crudsystem-react/)

An interactive **banking and ATM simulation web application** built with **React**, **Vite**, and **React Hot Toast**. The application manages account balances, processes deposits and withdrawals with input validation, maintains a transaction history ledger, and persists data via **LocalStorage**.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

## Table of Contents

- [About](#about)
- [Data Storage and Architecture](#data-storage-and-architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Run Locally](#run-locally)
- [Project Structure](#project-structure)

## About

Financial management applications require strict input validation to prevent invalid operations and negative balance errors. This project models core banking transactions including deposits, withdrawals, and balance inquiries. It demonstrates client-side state management, transaction auditing, and custom notification workflows.

## Data Storage and Architecture

The application persists user balances and transaction arrays directly in browser **LocalStorage** under dedicated keys (balance, transactions, and refunded). State changes trigger synchronous updates to both the React component state and local storage, ensuring transactional integrity across page refreshes.

## Features

- **Account Balance Tracking**: Displays real-time account balances with an interactive privacy toggle.
- **Cash Withdrawal Engine**: Validates withdrawal amounts against available funds and enforces positive numeric constraints.
- **Cash Deposit Processing**: Adds deposited funds directly to the active balance and records transaction entries.
- **Transaction Ledger Logging**: Records historical transactions with before-and-after balances and transaction types.
- **Transaction Reversal Support**: Provides rollback and refund mechanisms to restore previous balance states.
- **Interactive Toast Notifications**: Delivers contextual feedback and humorous validation alerts using React Hot Toast.
- **Client-Side Persistence**: Stores active balances and transaction history directly in the browser.

## Tech Stack

- [React](https://react.dev/) - Component Architecture and State Management
- [React Hot Toast](https://react-hot-toast.com/) - Alert Notifications
- [Vite](https://vite.dev/) - Development Server and Bundler
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Application Logic
- [GitHub Pages](https://pages.github.com/) - Static Hosting and Deployment

## Run Locally

### Prerequisites

Ensure you have Node.js installed on your computer.

### Installation and Execution

1. Clone the repository:
```bash
git clone https://github.com/omarahmed321/test-crudsystem.git
```

2. Navigate to the project directory:
```bash
cd test-crudsystem
```

3. Install dependencies:
```bash
npm install
```

4. Start the local development server:
```bash
npm run dev
```

5. Open http://localhost:5173 in your browser.

## Project Structure

```text
test-crudsystem/
├── src/
│   ├── App.jsx                # Core banking logic, transaction processing, and UI
│   ├── index.css              # Baseline application styles
│   └── main.jsx               # React DOM entrypoint
├── deploy.bat                 # Deployment batch automation script
├── deploy.js                  # Automated GitHub Pages build and push script
├── index.html                 # HTML document shell
├── package.json               # Dependencies and npm scripts
└── vite.config.js             # Vite configuration and base path setup
```
