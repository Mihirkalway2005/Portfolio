import React from 'react';

export interface TechIconProps {
  className?: string;
}

// 01. JavaScript
export const JavaScriptIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4.5" fill="#F7DF1E" />
    <path
      d="M7.5 16.8c.5.9 1.4 1.4 2.7 1.4 1.6 0 2.5-.9 2.5-2.4v-4.8H10.8v4.8c0 .7-.4 1-.9 1-.4 0-.8-.3-1-.9l-1.4.9zm6.4.3c.5.8 1.4 1.1 2.5 1.1 1.6 0 2.7-.9 2.7-2.4 0-1.4-.9-2.1-2.3-2.6l-.5-.2c-.9-.3-1.4-.8-1.4-1.4 0-.7.6-1.2 1.4-1.2.8 0 1.3.4 1.7.9l1.4-1c-.7-1-1.8-1.5-3.1-1.5-1.8 0-3 1-3 2.5 0 1.3.9 2.1 2.3 2.6l.5.2c1 .4 1.5.8 1.5 1.5 0 .8-.7 1.3-1.6 1.3-1 0-1.7-.5-2.1-1.3l-1.5 1.3z"
      fill="#000000"
    />
  </svg>
);

// 02. TypeScript
export const TypeScriptIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4.5" fill="#3178C6" />
    <path
      d="M6.2 10.4h6.5v1.8h-2.3v6.6H8.5v-6.6H6.2v-1.8zm7.5 7c.4.7 1.2 1.1 2.3 1.1 1.6 0 2.5-.9 2.5-2.3 0-1.4-.9-2-2.3-2.5l-.5-.2c-1-.4-1.5-.8-1.5-1.4 0-.7.6-1.2 1.5-1.2.8 0 1.3.4 1.7 1l1.4-1.1c-.7-1-1.8-1.5-3.1-1.5-1.8 0-3.1 1-3.1 2.6 0 1.4.9 2.1 2.4 2.6l.5.2c1 .4 1.5.8 1.5 1.5 0 .8-.7 1.3-1.6 1.3-1 0-1.7-.5-2.1-1.3l-1.3 1.1z"
      fill="#FFFFFF"
    />
  </svg>
);

// 03. Python (Authentic Official Interlocking Two-Tone Snakes)
export const PythonIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    {/* Blue Top Snake */}
    <path
      d="M11.922 2c-5.064 0-4.739 2.195-4.739 2.195l.006 2.274h4.82v.684H5.21S2 6.786 2 11.916c0 5.129 2.793 4.966 2.793 4.966h1.666v-2.327s-.09-2.794 2.748-2.794h4.708s2.613.042 2.613-2.528V5.378S16.945 2 11.922 2zm-2.61 1.637a1.053 1.053 0 1 1 0 2.106 1.053 1.053 0 0 1 0-2.106z"
      fill="#3776AB"
    />
    {/* Yellow Bottom Snake */}
    <path
      d="M12.078 22c5.064 0 4.739-2.195 4.739-2.195l-.006-2.274h-4.82v-.684h6.799S22 17.214 22 12.084c0-5.129-2.793-4.966-2.793-4.966h-1.666v2.327s.09 2.794-2.748 2.794h-4.708s-2.613-.042-2.613 2.528v3.863S7.055 22 12.078 22zm2.61-1.637a1.053 1.053 0 1 1 0-2.106 1.053 1.053 0 0 1 0 2.106z"
      fill="#FFD43B"
    />
  </svg>
);

// 04. SQL
export const SQLIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="5.5" rx="8" ry="2.8" fill="#336791" fillOpacity="0.2" stroke="#336791" strokeWidth="1.8" />
    <path d="M4 5.5v13C4 20 7.6 21.5 12 21.5s8-1.5 8-3v-13" stroke="#336791" strokeWidth="1.8" />
    <path d="M4 12c0 1.5 3.6 3 8 3s8-1.5 8-3" stroke="#336791" strokeWidth="1.6" />
  </svg>
);

// 05. React (Authentic Atom & Orbitals)
export const ReactIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#087EA4" strokeWidth="1.6" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#087EA4" strokeWidth="1.6" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#087EA4" strokeWidth="1.6" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" fill="#087EA4" />
  </svg>
);

// 06. Next.js
export const NextJSIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="11" fill="#000000" />
    <path
      d="M15.8 7.5v9M8.2 7.5v9"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.2 7.5L16.2 17.5"
      stroke="url(#nextjs_grad_auth)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="nextjs_grad_auth" x1="8.2" y1="7.5" x2="16.2" y2="17.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// 07. Tailwind CSS
export const TailwindIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"
      fill="#06B6D4"
    />
  </svg>
);

// 08. HTML5 & CSS3
export const HTMLCSSIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 2L5.8 20L12 22L18.2 20L20 2H4Z" fill="#E44D26" fillOpacity="0.1" />
    <path d="M4 2L5.8 20L12 22L18.2 20L20 2H4Z" stroke="#E44D26" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M12 4.5V19.5L16.6 18.2L18 4.5H12Z" fill="#E44D26" fillOpacity="0.25" />
    <path d="M7.5 7.5H16.5L16 11.5H8L8.3 14.5L12 15.5L15.7 14.5L15.9 13" stroke="#E44D26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 09. Node.js
export const NodeJSIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z"
      fill="#5FA04E"
      fillOpacity="0.18"
      stroke="#5FA04E"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M9 16.5V9.5L15 13.5V16.5"
      stroke="#5FA04E"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 10. FastAPI
export const FastAPIIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10.5" fill="#059669" />
    <path
      d="M13 4.5L6.5 13.2h5l-1.3 6.3 6.3-8.7h-5l1.5-6.3z"
      fill="#FFFFFF"
    />
  </svg>
);

// 11. PostgreSQL (Authentic Elephant Emblem)
export const PostgreSQLIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2.2c-4.6 0-7.8 2.8-8.3 6.6-.5 3.6 1.6 7.2 4.2 9.7 2.1 2 4.7 3.5 7.3 3.5 2.6 0 4.7-2 5.2-4.6.5-2.6 0-5.6-2-8.2-1.6-2-3.7-2.6-5.3-2.6"
      stroke="#336791"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M8.2 11.5c0-2 1.6-3.6 3.6-3.6s3.6 1.6 3.6 3.6v4c0 1.6-1.6 2.6-3.6 2.6s-3.6-1-3.6-2.6v-4z"
      fill="#336791"
      fillOpacity="0.25"
      stroke="#336791"
      strokeWidth="1.4"
    />
    <circle cx="10.5" cy="11.8" r="1" fill="#336791" />
  </svg>
);

// 12. MongoDB (Authentic Green Leaf)
export const MongoDBIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2C12 2 6.5 7.5 6.5 13.5c0 3.8 2.8 7.3 5.5 8.5 2.7-1.2 5.5-4.7 5.5-8.5C17.5 7.5 12 2 12 2z"
      fill="#00ED64"
      fillOpacity="0.2"
      stroke="#00684A"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M12 2.5v19"
      stroke="#00684A"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// 13. OpenAI APIs (Authentic Rosette / Spiral)
export const OpenAIIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z" />
    <path d="M13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494z" />
    <path d="M12 9v6M9.5 10.5l5 3M9.5 13.5l5-3" strokeLinecap="round" />
  </svg>
);

// 14. PyTorch
export const PyTorchIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M13.2 2.3a1 1 0 0 0-1.4.3l-1.3 2.2a6.8 6.8 0 1 0 4.8 11.7l1.5 1.5A8.9 8.9 0 1 1 12 3a8.8 8.8 0 0 1 4.5 1.2l-1.6 2.7a5.7 5.7 0 0 0-1.7-.6z"
      fill="#EE4C2C"
    />
    <circle cx="16.5" cy="5.5" r="1.5" fill="#EE4C2C" />
  </svg>
);

// 15. Docker
export const DockerIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M13.9 8.4h2.1v2.1h-2.1V8.4zm-3 0h2.1v2.1h-2.1V8.4zm-3 0H10v2.1H7.9V8.4zm6-3h2.1v2.1h-2.1V5.4zm-3 0h2.1v2.1h-2.1V5.4zm-3 0H10v2.1H7.9V5.4zm-3 3H7v2.1H4.9V8.4zm18.3 4.2c-.3-.2-1.4-.4-2.5.3-.2.1-.3.3-.4.4-.8-.5-1.9-.7-3.1-.7H1.3c-.5 0-.9.3-1.1.7-.4 1.7-.1 5.3 3.3 7.8 2.6 1.9 6.2 1.9 8.8 1.9 5.3 0 9.7-2.9 11.2-8.3.6 0 1.2-.4 1.5-.9.2-.5 0-.8-.2-.9z"
      fill="#2496ED"
    />
  </svg>
);

// 16. Computer Vision / OpenCV
export const ComputerVisionIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="7.5" r="4.2" stroke="#FF5A00" strokeWidth="1.8" />
    <circle cx="7" cy="16.2" r="4.2" stroke="#00D26A" strokeWidth="1.8" />
    <circle cx="17" cy="16.2" r="4.2" stroke="#0088FF" strokeWidth="1.8" />
    <circle cx="12" cy="7.5" r="1.5" fill="#FF5A00" />
    <circle cx="7" cy="16.2" r="1.5" fill="#00D26A" />
    <circle cx="17" cy="16.2" r="1.5" fill="#0088FF" />
  </svg>
);

// 17. NLP & LLM Integration
export const NLPIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
      fill="#FF5A00"
      fillOpacity="0.18"
      stroke="#FF5A00"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 15.5L19.4 18.6L22.5 19.5L19.4 20.4L18.5 23.5L17.6 20.4L14.5 19.5L17.6 18.6L18.5 15.5Z"
      fill="#3178C6"
      stroke="#3178C6"
      strokeWidth="1"
    />
  </svg>
);

// 18. Git
export const GitIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M21.7 10.9L13.1 2.3c-.4-.4-1.1-.4-1.5 0L9.5 4.4l2.7 2.7c.7-.3 1.5-.1 2 .4.5.5.7 1.3.4 2l2.6 2.6c.7-.3 1.5-.1 2 .4.6.6.6 1.6 0 2.2-.6.6-1.6.6-2.2 0-.5-.5-.7-1.3-.4-2l-2.5-2.5v6.1c.2.2.3.5.3.8 0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c0-.7.4-1.3 1-1.5V9.8c-.6-.2-1-.8-1-1.5 0-.3.1-.6.3-.9L8.8 4.7 2.3 11.2c-.4.4-.4 1.1 0 1.5l8.6 8.6c.4.4 1.1.4 1.5 0l9.3-9.3c.4-.4.4-1.1 0-1.5z"
      fill="#F05032"
    />
  </svg>
);

// 19. GitHub
export const GitHubIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.867 20.198 8.84 21.527C9.34 21.618 9.52 21.31 9.52 21.045C9.52 20.81 9.51 20.187 9.51 19.362C6.73 19.967 6.14 18.022 6.14 18.022C5.68 16.857 5.03 16.547 5.03 16.547C4.12 15.927 5.1 15.94 5.1 15.94C6.1 16.01 6.63 16.972 6.63 16.972C7.52 18.502 8.96 18.06 9.53 17.805C9.62 17.157 9.88 16.715 10.16 16.467C7.94 16.217 5.61 15.357 5.61 11.532C5.61 10.442 6 9.552 6.64 8.855C6.54 8.602 6.2 7.585 6.74 6.225C6.74 6.225 7.58 5.955 9.48 7.245C10.28 7.022 11.14 6.912 12 6.908C12.86 6.912 13.72 7.022 14.52 7.245C16.42 5.955 17.26 6.225 17.26 6.225C17.8 7.585 17.46 8.602 17.36 8.855C18 9.552 18.39 10.442 18.39 11.532C18.39 15.367 16.05 16.212 13.82 16.46C14.18 16.77 14.49 17.382 14.49 18.322C14.49 19.67 14.48 20.757 14.48 21.045C14.48 21.313 14.66 21.625 15.17 21.525C19.14 20.193 22 16.444 22 12.017C22 6.484 17.522 2 12 2Z"
    />
  </svg>
);

// 20. Figma
export const FigmaIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M7 2H12V8H7C5.34 8 4 6.66 4 5C4 3.34 5.34 2 7 2Z" fill="#F24E1E" />
    <path d="M12 2H17C18.66 2 20 3.34 20 5C20 6.66 18.66 8 17 8H12V2Z" fill="#FF7262" />
    <path d="M12 8H17C18.66 8 20 9.34 20 11C20 12.66 18.66 14 17 14H12V8Z" fill="#1ABCFE" />
    <path d="M7 8H12V14H7C5.34 14 4 12.66 4 11C4 9.34 5.34 8 7 8Z" fill="#0ACF83" />
    <path d="M7 14H12V19C12 20.66 10.66 22 9 22C7.34 22 6 20.66 6 19C6 17.34 7.34 16 9 16H7V14Z" fill="#A259FF" />
  </svg>
);

// 21. Vercel
export const VercelIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L23 21H1L12 2Z" />
  </svg>
);

// 22. Supabase
export const SupabaseIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12.8 2.2c-.4-.5-1.2-.2-1.3.4l-2.6 10.5h6.6c.7 0 1 .8.5 1.2L7.5 22.4c-.4.4-1.1.1-1.1-.5l2.4-9.8H3.3c-.6 0-1-.7-.6-1.2L11.5 2.3c.4-.4 1-.4 1.3-.1z"
      fill="#3ECF8E"
    />
  </svg>
);

// 23. Redis
export const RedisIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2.5 15.5l9.5 5.5 9.5-5.5-3-2-6.5 3.5-6.5-3.5-3 2z" fill="#A81F17" />
    <path d="M2.5 12l9.5 5.5 9.5-5.5-3-2-6.5 3.5-6.5-3.5-3 2z" fill="#D82C20" />
    <path d="M12 3L2.5 8.5l9.5 5.5 9.5-5.5L12 3z" fill="#E64436" />
    <path d="M8.5 7.5l3.5 2 3.5-2-3.5-2-3.5 2z" fill="#FFFFFF" />
  </svg>
);

// 24. GraphQL
export const GraphQLIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" stroke="#E10098" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 5.5L18 9v6l-6 3.5L6 15V9l6-3.5z" stroke="#E10098" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="12" cy="2" r="1.5" fill="#E10098" />
    <circle cx="20.66" cy="7" r="1.5" fill="#E10098" />
    <circle cx="20.66" cy="17" r="1.5" fill="#E10098" />
    <circle cx="12" cy="22" r="1.5" fill="#E10098" />
    <circle cx="3.34" cy="17" r="1.5" fill="#E10098" />
    <circle cx="3.34" cy="7" r="1.5" fill="#E10098" />
  </svg>
);

// 25. C++
export const CppIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="#00599C" fillOpacity="0.15" stroke="#00599C" strokeWidth="1.6" />
    <path d="M9.5 9.5a3.5 3.5 0 1 0 0 5M13.5 12h2M14.5 11v2M17.5 12h2M18.5 11v2" stroke="#00599C" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// 26. REST APIs
export const RestAPIIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="2" y="5" width="7" height="5" rx="2" stroke="currentColor" />
    <rect x="15" y="14" width="7" height="5" rx="2" stroke="currentColor" />
    <path d="M9 7.5h3.5a2.5 2.5 0 0 1 2.5 2.5v4" strokeLinecap="round" />
    <path d="M15 16.5h-3.5a2.5 2.5 0 0 1-2.5-2.5v-4" strokeLinecap="round" />
  </svg>
);
