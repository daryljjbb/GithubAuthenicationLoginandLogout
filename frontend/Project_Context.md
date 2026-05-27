Enterprise Authentication + Role-Based Dashboard Project Prompt

Your job is to act as a senior full-stack architect and produce beginner-friendly, reusable, scalable, and enterprise-grade solutions.

The goal is to build a production-style authentication and authorization system using:

Django
Django REST Framework (DRF)
SimpleJWT
React
React Router DOM
Tailwind CSS
Framer Motion
Axios

The focus is on:

Enterprise authentication
Role-based authorization
JWT lifecycle management
Session security
Dashboard architecture
Enterprise frontend structure
📌 PROJECT GOALS

Build a multi-role enterprise authentication platform with:

Roles
Admin
Agent
Customer
🔥 CORE FEATURES
Authentication
JWT login system
Access + refresh tokens
Secure password hashing
Login validation
Session persistence
Silent token refresh
Logout system
Account lockout system
Audit logging
Idle session timeout
Session expiration handling
Authorization
Role-based dashboards
Protected frontend routes
Role-based route guards
Backend permission classes
Unauthorized page handling
Enterprise Dashboard System
Sidebar navigation
Topbar with logged-in user
Dynamic menus by role
Reusable dashboard layout
Responsive dashboard structure
Session Security
Silent refresh interceptor
Token expiration handling
Automatic logout
Idle timeout detection
Refresh token failure handling
Secure session cleanup
🎯 BACKEND STACK
Django
Django REST Framework
SimpleJWT
Custom User Model
Role-based permissions
Logging system
🎯 FRONTEND STACK
React
React Router DOM
Axios
Tailwind CSS
Framer Motion
React Hot Toast
🧱 DJANGO PROJECT STRUCTURE
backend/
│
├── manage.py
│
├── config/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── authentication/
│   ├── migrations/
│   │
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── permissions.py
│   ├── urls.py
│   ├── admin.py
│   ├── apps.py
│   └── signals.py
│
├── auditlog/
│   ├── migrations/
│   │
│   ├── models.py
│   ├── admin.py
│   └── apps.py
│
├── usersessions/
│   ├── migrations/
│   │
│   ├── models.py
│   ├── admin.py
│   └── apps.py
│
├── common/
│   ├── utils.py
│   ├── permissions.py
│   └── middleware.py
🔥 DJANGO FEATURES TO IMPLEMENT
Custom User Model

Use a custom UserProfile model with:

username
email
role
failed_login_attempts
locked_until
is_active

Roles:

ADMIN = "admin"
AGENT = "agent"
CUSTOMER = "customer"
Authentication Endpoints
POST /api/login/

Returns:

{
  "success": true,
  "tokens": {
    "access": "...",
    "refresh": "..."
  },
  "user": {
    "id": 1,
    "username": "admin",
    "email": "admin@test.com",
    "role": "admin"
  }
}
GET /api/me/

Returns authenticated user info.

Protected with:

IsAuthenticated
Backend Security Features
Account Lockout

After multiple failed attempts:

increment failed_login_attempts
set locked_until
deny login
Audit Logging

Log:

successful logins
failed logins
logout events
IP addresses
timestamps
Permission Classes

Examples:

IsAdminUserRole
IsAgentUserRole
IsCustomerUserRole
JWT Configuration

Use:

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=15),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=7),
}
🌐 REACT PROJECT STRUCTURE
frontend/
│
├── public/
│
├── src/
│   │
│   ├── animations/
│   │   └── motionVariants.js
│   │
│   ├── components/
│   │   │
│   │   ├── auth/
│   │   │   └── LoginForm.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Topbar.jsx
│   │   │
│   │   └── panels/
│   │       ├── AdminPanel.jsx
│   │       ├── AgentPanel.jsx
│   │       └── CustomerPanel.jsx
│   │
│   ├── config/
│   │   └── navigation.js
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useIdleTimeout.js
│   │
│   ├── lib/
│   │   └── axiosClient.js
│   │
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── AdminPage.jsx
│   │   ├── AgentPage.jsx
│   │   ├── CustomerPage.jsx
│   │   └── UnauthorizedPage.jsx
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── RoleRoute.jsx
│   │
│   ├── styles/
│   │   └── tailwind.css
│   │
│   ├── utils/
│   │   └── sessionManager.js
│   │
│   ├── App.js
│   └── main.jsx
🔥 FRONTEND FEATURES TO IMPLEMENT
Authentication Context

Create AuthContext that manages:

current user
login
logout
loading state
fetchCurrentUser()
Axios Interceptors

Implement:

Request Interceptor

Automatically attach:

Authorization: Bearer access_token
Response Interceptor

Handle:

401 unauthorized
silent refresh
token expiration
secure logout
retry original request
Silent Refresh System

When access token expires:

401
↓
refresh token request
↓
new access token
↓
retry original request
Session Expiration Handling

If refresh token expires:

clear tokens
redirect to login
show toast notification
Idle Timeout System

Track:

mouse movement
keyboard input
scrolling
clicks

After inactivity:

show warning
auto logout
Dashboard Architecture
DashboardLayout

Contains:

Sidebar
Topbar
Main content area
Sidebar

Role-aware navigation using:

navigation[user.role]
Topbar

Displays:

logged-in username
role
logout button
Route Security
ProtectedRoute

Blocks unauthenticated users.

RoleRoute

Restricts routes by role.

Example:

allowedRoles={["admin"]}
Dashboard Panels

Create:

AdminPanel
AgentPanel
CustomerPanel

Each panel should render different content based on role.

UI/UX REQUIREMENTS

Use:

Tailwind CSS
Framer Motion
Responsive layouts
Enterprise dashboard styling
Professional authentication screens
ERROR HANDLING REQUIREMENTS

Frontend must handle:

invalid credentials
expired tokens
unauthorized access
forbidden routes
server errors

Backend must handle:

missing payload data
invalid credentials
expired JWTs
locked accounts
permission denial
CODING STYLE REQUIREMENTS
Beginner-friendly
Clear explanations
Reusable architecture
Enterprise patterns
Clean code organization
Helpful comments explaining WHY, not just WHAT
No unnecessary complexity
OUTPUT REQUIREMENTS

Structure responses into:

Project Directory Blueprint
Django Backend Implementation
React Frontend Implementation
Authentication Architecture
Session Management Flow
Route Authorization System
Enterprise Dashboard Layout
Security Best Practices
Step-by-step explanations
Recommended Next Enterprise Phase