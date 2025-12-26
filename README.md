## https://netflix-gpt-silk-three.vercel.app

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
- Bug fix: Sign up user displayName and login page
- unsubscirbe to onAuth state change callback
- add hardcoded value to the constant files
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- created custom hooks from the nowPlaying movies and the movieTrailer separated via trailer ID
- Build the Movie list
- Movie card
- TMDB image CDN
- custom hooks popular, trending, nowPlaying
- GPT Search feature
- create Search bar, Search buttons
- Made multilingual
- API from TMDB (5 movies prompt)
- sliced movie into array
- searched each movie in the API 
- received json and called the movie list for that json
- Made it responsive for all screen devices
- created .env
- Integrated Groq AI API for intelligent movie recommendations
- Implemented AI-powered search with Llama 3.3 model
- Added dynamic movie suggestions based on user queries
- Created GPT Movie Suggestion component with scrollable results
- Styled GPT search results with Netflix background and gradient overlays
- Fixed responsive design for mobile, tablet, and desktop screens
- Optimized video background scaling across different devices
- Enhanced UI/UX with proper spacing, shadows, and hover effects
- Implemented fullscreen video background for large screens
- Added line-clamp for text overflow handling
- Created seamless transition between Browse and GPT Search modes
- Fixed header navigation and maintained consistent styling
- Added proper z-index layering for overlapping elements
- Implemented horizontal scrolling for movie cards
- Enhanced button styling with icons and transitions
- Made overview text responsive (hidden on mobile, visible on larger screens)
- Adjusted negative margins for proper content overlap
- Added backdrop blur and transparency effects
- Optimized movie card sizing (w-24 on mobile to w-48 on desktop)
- Fixed video title positioning (centered on desktop, bottom-aligned on mobile)
- Added proper padding and margins for all screen breakpoints
- Implemented space-y utilities for consistent vertical spacing
- Enhanced drop shadows for better text readability
- Created reusable MovieList and MovieCard components
- Added smooth hover animations and scale effects
- Implemented scrollbar-hide for cleaner horizontal scrolling
- Fixed SecondaryContainer overlap with MainContainer
- Added proper TypeScript interfaces for all components
- Implemented Redux slices for movies and GPT state management
- Created constants file for API keys and CDN URLs
- Added error handling for API calls and empty states

### Deployment
- install firebase CLI
- Firebase login
- Initialize command
- Deploy App to production
- Create signup user account
- Enable Firebase Email/Password authentication provider
- Configure environment variables for production
- Set up Firebase hosting configuration
- Add build scripts for optimization
- Configure deployment workflows

### Pages
- Login/Sign up page
     - Hero landing page with email validation
     - Authentication form (toggle between Sign In/Sign Up)
     - Name input field (Sign Up only)
     - Email and password validation
     - Firebase integration for user authentication
     - Error handling and display
     - Responsive design for all devices
- Browse (after authentication)
     - Header (with Netflix logo, user icon, Sign Out button, GPT Search toggle, Language selector)
     - Main movie
         - Fullscreen video background trailer (responsive)
         - Title and Description with gradient overlay
         - Play and More Info buttons with icons
         - Auto-playing, muted, looping YouTube embed
     - Movie Suggestions
         - Now Playing movies section
         - Trending movies section
         - Popular movies section
         - Upcoming Movies section
         - Horror movies section
         - Horizontal scrollable movie lists
         - Movie cards with hover effects
- Netflix GPT
    - Search bar with responsive design
    - Search button with loading states
    - AI-powered movie recommendations using Groq API
    - Movie suggestions displayed in Netflix-style cards
    - Background image with gradient overlay
    - Scrollable results with proper spacing
    - Error handling and empty state messages

### Components Structure
- Body.tsx - Router configuration and auth listener
- Login.tsx - Hero landing page
- Login2.tsx - Authentication form
- Browse.tsx - Post-authentication page with conditional rendering
- Header.tsx - Navigation bar with sign out functionality, GPT toggle, language selector
- MainContainer.tsx - Video background and title section (responsive)
- SecondaryContainer.tsx - Movie lists container with proper overlap
- MovieList.tsx - Reusable movie list component with horizontal scroll
- MovieCard.tsx - Individual movie card with poster and hover effects
- VideoBackground.tsx - YouTube iframe embed for movie trailers
- VideoTitle.tsx - Movie title, overview, and action buttons
- GPTSearch.tsx - Container for GPT search bar
- GPTSearchBar.tsx - Search input and button with Groq API integration
- GPTMovieSuggestion.tsx - Display AI-generated movie recommendations

### Custom Hooks
- useNowPlayingMovies.tsx - Fetch now playing movies from TMDB
- usePopularMovies.tsx - Fetch popular movies from TMDB
- useTrendingMovies.tsx - Fetch trending movies from TMDB
- useMovieTrailer.tsx - Fetch movie trailer by ID from TMDB

### Utils
- firebase.tsx - Firebase configuration and initialization
- validate.tsx - Form validation functions for email and password
- userSlice.tsx - Redux user state slice with actions
- moviesSlice.tsx - Redux movies state slice for TMDB data
- gptSlice.tsx - Redux GPT state slice for search results
- configSlice.tsx - Redux config slice for language preferences
- appstore.tsx - Redux store configuration with all slices
- constants.tsx - API keys, URLs, and configuration constants
- GROQAI.tsx - Groq API integration for AI movie recommendations
- LanguageConstants.tsx - Multilingual support for UI text

### Styling Features
- Tailwind CSS utility classes for responsive design
- Mobile-first approach with sm, md, lg, xl breakpoints
- Custom gradient overlays for visual depth
- Drop shadows for text readability
- Hover effects and transitions for interactivity
- Flexbox and grid layouts for component structure
- Aspect ratio utilities for video containers
- Line-clamp for text truncation
- Custom scrollbar hiding
- Z-index layering for proper element stacking
- Backdrop blur effects for glassmorphism
- Responsive typography scaling
- Space and gap utilities for consistent spacing
- Shadow utilities for depth and elevation

### API Integration
- TMDB API for movie data (Now Playing, Popular, Trending)
- TMDB Image CDN for movie posters
- YouTube API for trailer embeds
- Groq AI API (Llama 3.3-70b-versatile model) for intelligent search
- Firebase Authentication API for user management

### State Management
- Redux Toolkit for global state
- User authentication state
- Movies data state (nowPlaying, popular, trending, trailer)
- GPT search state (query, results, loading)
- Configuration state (language, theme)
- Persistent state with proper cleanup

### Performance Optimizations
- Lazy loading for routes
- Memoized selectors for Redux
- Efficient re-rendering with proper dependencies
- Image optimization with CDN
- Code splitting for better load times
- Proper cleanup of side effects
- Debounced search inputs
- Conditional rendering to avoid unnecessary DOM updates

### Responsive Breakpoints
- Mobile: < 640px (w-24 cards, smaller text, stacked buttons)
- Tablet: 640px - 768px (w-32 cards, medium text)
- Small Desktop: 768px - 1024px (w-40 cards, larger text)
- Large Desktop: > 1024px (w-48 cards, full features, fullscreen video)

### Future Enhancements
- User profile management
- Watchlist functionality
- Movie detail modal
- Rating and review system
- Advanced filtering and sorting
- Social features (share, recommend)
- Dark/Light theme toggle
- Accessibility improvements (ARIA labels, keyboard navigation)
- Progressive Web App (PWA) features
- Offline support
- Performance monitoring
- Analytics integration
