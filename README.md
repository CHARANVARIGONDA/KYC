# KYC Onboarding & Verification System

A modern, responsive Know Your Customer (KYC) onboarding portal built with React and Vite.

## Features
- **Welcome & Identity Intro**: Fast-track onboarding flow with bank-grade security indicators.
- **Personal Details Form**: Validated multi-step personal details input.
- **Address & Communication**: Structured address verification fields.
- **Digital KYC Verification**: PAN / ID verification with biometric badges and instant check confirmation.
- **Nominee & Banking Information**: Nominee allocation and bank account binding with secure iconography.
- **Summary & Review**: Transparent data review screen with inline edit shortcuts.
- **Submission Feedback**: Interactive success celebration and failure retry screens.

## Project Structure
```text
PROJECT1/
├── FRONTEND/        # React + Vite application
│   ├── src/
│   │   ├── assets/          # Icons, illustrations, badges
│   │   ├── features/        # Onboarding & KYC step components
│   │   ├── functionalities/ # Success & Failure response views
│   │   ├── App.jsx          # Route definitions
│   │   └── App.css          # Design system & responsive layouts
│   └── package.json
└── BACKEND/         # Backend services and API endpoints
```

## Getting Started

### Frontend
```bash
cd FRONTEND
npm install
npm run dev
```
