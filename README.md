### Create react app
- configure React App
- Configure TailwindCSS
- Routing of App
- Login form
- Sign up form
- form validation
- useRef hook
- Firebase Authentication (Email/Password)
- Redux Toolkit for state management
- React Router v6 for navigation
- User authentication flow (Sign In/Sign Up/Sign Out)
- Protected routes
- Auth state listener with onAuthStateChanged

### Deployment
- install firebase CLI
- Firebase login
- Initilize command
- Deploy App to production
- Create signup user account
- Enable Firebase Email/Password authentication provider

- Login/Sign up page
     - Hero landing page with email validation
     - Authentication form (toggle between Sign In/Sign Up)
     - Name input field (Sign Up only)
     - Email and password validation
     - Firebase integration for user authentication
     - Error handling and display
- Browser (after authentications)
     - Header (with Netflix logo, user icon, Sign Out button)
     - Main movie
         - Trailer
         - Title and Description
         - Movie Suggestion
             - Movies Lists
-  Netflix GPT
    - Search bar
    - Movie suggestion

### Components Structure
- Body.tsx - Router configuration and auth listener
- Login.tsx - Hero landing page
- Login2.tsx - Authentication form
- Browse.tsx - Post-authentication page
- Header.tsx - Navigation bar with sign out functionality

### Utils
- firebase.tsx - Firebase configuration
- validate.tsx - Form validation functions
- userSlice.tsx - Redux user state slice
- appstore.tsx - Redux store configuration
    - Movie suggestion