# Olyra - Health Management Platform

![Olyra Logo](./assets/images/Logo.svg)

A comprehensive health management platform built with Next.js that empowers users to track, analyze, and manage their health data through an intuitive interface with AI-powered insights.

## 🌟 Overview

Olyra is a modern health management application that provides users with tools to:
- Upload and analyze lab reports (PDF)
- Track biomarkers and health metrics
- Get AI-powered health insights through an intelligent chatbot
- Create personalized action plans
- Complete health questionnaires and assessments
- Manage enterprise health programs

## 🚀 Features

### 📊 Dashboard & Health Overview
- **Interactive Health Dashboard**: Real-time visualization of key health metrics
- **Biomarker Tracking**: Monitor important health indicators like cholesterol, blood pressure, glucose levels
- **Functional Markers**: Track lifestyle and functional health metrics
- **Health Carousel**: Visual representation of health journey and progress

### 📄 Lab Report Management
- **PDF Upload**: Secure upload and storage of lab reports
- **Data Extraction**: Automatic extraction of lab values from PDF reports
- **Report History**: Organized view of all uploaded reports with search and filter capabilities
- **Accordion-style Report Cards**: Expandable cards showing detailed lab results

### 🤖 AI-Powered Chatbot
- **Intelligent Health Assistant**: AI chatbot for health-related queries
- **Chat History**: Persistent conversation history with search functionality
- **Real-time Messaging**: Instant responses with typing indicators
- **Health Data Integration**: Contextual responses based on user's health data

### 📋 Health Assessments
- **Questionnaires**: Comprehensive health assessment forms
- **Vaccine Tracking**: Vaccination history and reminders
- **Progress Tracking**: Multi-step questionnaire completion with progress indicators

### 🎯 Action Plans
- **Personalized Recommendations**: Custom health improvement plans
- **Goal Setting**: Track health goals and milestones
- **Progress Monitoring**: Visual progress tracking and analytics

### 🏢 Enterprise Features
- **Anonymous Complaints**: Secure complaint submission system
- **NOM-035 Questionnaires**: Mexican workplace psychosocial risk assessment
- **Multi-step Forms**: Complex questionnaire workflows with validation
- **Enterprise Dashboard**: Organization-wide health metrics

### 👤 Profile Management
- **User Profiles**: Comprehensive user profile management
- **Health History**: Complete health record tracking
- **Document Management**: Organized storage of health documents

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 16.1.6 (React 19.2.3)
- **Styling**: Tailwind CSS 4.0
- **TypeScript**: Full TypeScript support
- **Icons**: Lucide React + Custom SVG icons

### State Management & Data
- **State Management**: Zustand for global state
- **Form Handling**: Formik with Yup validation
- **Data Visualization**: ECharts for React
- **Local Storage**: JSON-based data management

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Build Tool**: Next.js built-in bundler
- **Package Manager**: npm

## 📁 Project Structure

```
olyra/
├── app/                          # Next.js App Router
│   ├── action-plan/             # Action plan pages
│   ├── chatboat/                # AI chatbot interface
│   ├── enterprise/              # Enterprise features
│   │   ├── anonymous-complaints/
│   │   └── nom-035-questionnaires/
│   ├── health-insights/         # Health analytics
│   ├── profile/                 # User profile management
│   │   └── my-uploads/          # Lab report uploads
│   ├── questionnaires/          # Health assessments
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── assets/                      # Static assets
│   ├── images/                  # Image assets
│   ├── CustomIcons.tsx          # Custom icon components
│   └── FunctionalMarkerIcons.tsx
├── components/                  # Reusable UI components
│   ├── common/                  # Shared components
│   │   ├── ChatInput.tsx        # Chat input component
│   │   ├── ChatMessage.tsx      # Chat message bubbles
│   │   ├── Button.tsx           # Button variants
│   │   ├── MainHeading.tsx      # Page headings
│   │   └── ...                  # Other common components
│   ├── Header.tsx               # Main header
│   ├── Sidebar.tsx              # Desktop navigation
│   ├── BottomNavigation.tsx     # Mobile navigation
│   ├── ReportCard.tsx           # Lab report cards
│   └── ...                      # Other components
├── features/                    # Feature-specific components
│   ├── dashboard/               # Dashboard components
│   ├── chat-bot/                # Chatbot functionality
│   ├── enterprise/              # Enterprise features
│   ├── health-insights/         # Health analytics
│   ├── profile/                 # Profile management
│   └── questionnaires/          # Assessment forms
├── hooks/                       # Custom React hooks
├── public/                      # Public assets
│   └── data/                    # JSON data files
├── schemas/                     # Validation schemas
├── store/                       # Zustand stores
└── ...                          # Config files
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd olyra
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The application is fully responsive with:
- **Desktop**: Full sidebar navigation with comprehensive layouts
- **Mobile**: Bottom navigation with optimized mobile interfaces
- **Tablet**: Adaptive layouts that work across all screen sizes

### Mobile Features
- Bottom navigation bar with essential features
- Collapsible sidebar for chat history
- Touch-optimized interactions
- Responsive typography and spacing

## 🔧 Key Components

### Chat System
- **Real-time messaging** with typing indicators
- **Message history** with persistent storage
- **Inline editing** of chat titles
- **Delete functionality** for chat management

### Report Management
- **Accordion-style cards** for lab reports
- **PDF upload** with file validation
- **Data extraction** from uploaded documents
- **Responsive card layouts**

### Form Handling
- **Multi-step forms** with progress tracking
- **Form validation** using Yup schemas
- **Dynamic form fields** based on user input
- **Auto-save functionality**

### Data Visualization
- **Interactive charts** using ECharts
- **Health trend analysis**
- **Biomarker visualization**
- **Progress tracking graphs**

## 🎨 Design System

### Color Palette
- **Primary**: `#BE735B` (Warm brown)
- **Secondary**: `#ADB37D` (Sage green)
- **Background**: `#F5F5F5` (Light gray)
- **Text**: `#181D27` (Dark gray)
- **Accent**: `#8B9DC3` (Soft blue)

### Typography
- **Primary Font**: Manrope (Sans-serif)
- **Secondary Font**: Instrument Serif (Serif)
- **Responsive scaling** across all devices

## 📊 Data Management

### Local Data Storage
- **JSON files** for mock data during development
- **Structured data models** for health records
- **Type-safe interfaces** for all data structures

### Data Flow
- **Zustand stores** for global state management
- **React hooks** for component-level state
- **Form state** managed by Formik
- **Local storage** for user preferences

## 🔒 Security Features

- **File validation** for PDF uploads
- **Form validation** with comprehensive schemas
- **Secure data handling** practices
- **Anonymous complaint system** for enterprise users

## 🌐 Deployment

The application is optimized for deployment on:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting** with Node.js support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

### Code Style
- **TypeScript** for type safety
- **ESLint** for code quality
- **Tailwind CSS** for styling
- **Component-based architecture**

### Best Practices
- **Responsive-first design**
- **Accessibility compliance**
- **Performance optimization**
- **Clean code principles**

## 🐛 Known Issues

- Chat history requires manual refresh after new chat creation
- PDF upload limited to client-side processing
- Mobile navigation overlay needs z-index optimization

## 🔮 Future Enhancements

- **Real-time notifications** for health alerts
- **Integration with wearable devices**
- **Advanced AI health recommendations**
- **Multi-language support**
- **Dark mode theme**
- **Offline functionality**

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ using Next.js and modern web technologies**