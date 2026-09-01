import React from 'react';

export interface TechIconProps {
  className?: string;
}

// 01. JavaScript
export const JavaScriptIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path
      d="M7 16.5C7.5 17.5 8.5 18 9.8 18C11.5 18 12.3 17 12.3 15.5V11H10.5V15.5C10.5 16.2 10.1 16.5 9.6 16.5C9.1 16.5 8.8 16.2 8.6 15.6L7 16.5ZM13.8 16.8C14.3 17.6 15.2 18 16.5 18C18.2 18 19.3 17.1 19.3 15.5C19.3 14 18.4 13.3 17 12.7L16.4 12.4C15.5 12 15 11.6 15 10.9C15 10.3 15.5 9.8 16.4 9.8C17.1 9.8 17.6 10.1 18 10.8L19.4 9.9C18.8 8.8 17.7 8.3 16.4 8.3C14.7 8.3 13.5 9.3 13.5 10.9C13.5 12.3 14.3 13 15.8 13.6L16.4 13.9C17.4 14.3 17.9 14.8 17.9 15.5C17.9 16.2 17.2 16.7 16.4 16.7C15.4 16.7 14.7 16.2 14.2 15.3L13.8 16.8Z"
      fill="#111111"
    />
  </svg>
);

// 02. TypeScript
export const TypeScriptIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path
      d="M6 10H12.5V11.8H9.9V18H8.5V11.8H6V10ZM13.6 16.9C14.1 17.6 15 18 16.2 18C17.9 18 19 17.1 19 15.5C19 14 18.1 13.3 16.7 12.7L16.1 12.4C15.2 12 14.7 11.6 14.7 10.9C14.7 10.3 15.2 9.8 16.1 9.8C16.8 9.8 17.3 10.1 17.7 10.8L19.1 9.9C18.5 8.8 17.4 8.3 16.1 8.3C14.4 8.3 13.2 9.3 13.2 10.9C13.2 12.3 14 13 15.5 13.6L16.1 13.9C17.1 14.3 17.6 14.8 17.6 15.5C17.6 16.2 16.9 16.7 16.1 16.7C15.1 16.7 14.4 16.2 13.9 15.3L13.6 16.9Z"
      fill="#FFFFFF"
    />
  </svg>
);

// 03. Python
export const PythonIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M11.87 2C7.38 2 7.66 3.94 7.66 3.94L7.67 5.96H12.2V6.6H5.4C2.37 6.6 2 9.07 2 11.95C2 15.26 4.63 15.06 4.63 15.06H6.18V12.87C6.18 9.77 8.85 9.82 8.85 9.82H13.43C14.83 9.82 15.7 8.7 15.7 7.33V3.62C15.7 2.37 14.48 2 11.87 2ZM9.43 3.65C9.9 3.65 10.28 4.03 10.28 4.5C10.28 4.97 9.9 5.35 9.43 5.35C8.96 5.35 8.58 4.97 8.58 4.5C8.58 4.03 8.96 3.65 9.43 3.65Z"
      fill="#3776AB"
    />
    <path
      d="M12.13 22C16.62 22 16.34 20.06 16.34 20.06L16.33 18.04H11.8V17.4H18.6C21.63 17.4 22 14.93 22 12.05C22 8.74 19.37 8.94 19.37 8.94H17.82V11.13C17.82 14.23 15.15 14.18 15.15 14.18H10.57C9.17 14.18 8.3 15.3 8.3 16.67V20.38C8.3 21.63 9.52 22 12.13 22ZM14.57 20.35C14.1 20.35 13.72 19.97 13.72 19.5C13.72 19.03 14.1 18.65 14.57 18.65C15.04 18.65 15.42 19.03 15.42 19.5C15.42 19.97 15.04 20.35 14.57 20.35Z"
      fill="#FFD43B"
    />
  </svg>
);

// 04. SQL
export const SQLIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="#E2E8F0" fillOpacity="0.3" />
    <path d="M21 12C21 13.66 16.97 15 12 15C7.03 15 3 13.66 3 12" />
    <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" />
    <path d="M3 12V19" />
    <path d="M21 12V19" />
  </svg>
);

// 05. React
export const ReactIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#087EA4" strokeWidth="1.6" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#087EA4" strokeWidth="1.6" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#087EA4" strokeWidth="1.6" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="#087EA4" />
  </svg>
);

// 06. Next.js
export const NextJSIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="11" fill="#000000" />
    <path
      d="M15.5 7.5V16.5M8.5 7.5V16.5"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 7.5L15.8 17"
      stroke="url(#nextjs_grad)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="nextjs_grad" x1="8.5" y1="7.5" x2="16" y2="17" gradientUnits="userSpaceOnUse">
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

// 08. HTML & CSS
export const HTMLCSSIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 2L5.8 20L12 22L18.2 20L20 2H4Z" fill="#E44D26" fillOpacity="0.1" />
    <path d="M4 2L5.8 20L12 22L18.2 20L20 2H4Z" stroke="#E44D26" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M12 4.5V19.5L16.6 18.2L18 4.5H12Z" fill="#E44D26" fillOpacity="0.2" />
    <path d="M7.5 7.5H16.5L16 11.5H8L8.3 14.5L12 15.5L15.7 14.5L15.9 13" stroke="#E44D26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 09. Node.js
export const NodeJSIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z"
      fill="#5FA04E"
      fillOpacity="0.15"
    />
    <path
      d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z"
      stroke="#5FA04E"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M12 7V17M12 12L17 9.5M12 12L7 9.5M12 17L17 14.5M12 17L7 14.5"
      stroke="#5FA04E"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

// 10. FastAPI
export const FastAPIIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" fill="#059669" fillOpacity="0.15" stroke="#059669" strokeWidth="1.6" />
    <path
      d="M12.5 4.5L6.5 13H11.5L10.5 19.5L17.5 10.5H12.5L12.5 4.5Z"
      fill="#059669"
      stroke="#059669"
      strokeWidth="0.8"
      strokeLinejoin="round"
    />
  </svg>
);

// 11. PostgreSQL
export const PostgreSQLIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2C7.5 2 4.5 4.8 4 8.5C3.5 12 5.5 15.5 8 18C10 20 12.5 21.5 15 21.5C17.5 21.5 19.5 19.5 20 17C20.5 14.5 20 11.5 18 9C16.5 7 14.5 6.5 13 6.5"
      stroke="#336791"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M8.5 11C8.5 9 10 7.5 12 7.5C14 7.5 15.5 9 15.5 11V15C15.5 16.5 14 17.5 12 17.5C10 17.5 8.5 16.5 8.5 15V11Z"
      fill="#336791"
      fillOpacity="0.2"
      stroke="#336791"
      strokeWidth="1.4"
    />
    <circle cx="10.5" cy="11.5" r="1" fill="#336791" />
  </svg>
);

// 12. MongoDB
export const MongoDBIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2C12 2 6.5 8 6.5 13.5C6.5 17 9 20.5 11.5 21.8V22H12.5V21.8C15 20.5 17.5 17 17.5 13.5C17.5 8 12 2 12 2Z"
      fill="#00ED64"
      fillOpacity="0.15"
      stroke="#00684A"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M12 2.5V21.5"
      stroke="#00684A"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

// 13. OpenAI APIs
export const OpenAIIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <path d="M12 2.5C10.3 2.5 8.8 3.5 8.2 5L7 7.5L5 8.5C3.3 9.4 2.5 11.2 2.8 13C3.1 14.8 4.4 16.2 6.2 16.5L8.5 17V19.5C8.5 21.4 10.1 23 12 23C13.7 23 15.2 22 15.8 20.5L17 18L19 17C20.7 16.1 21.5 14.3 21.2 12.5C20.9 10.7 19.6 9.3 17.8 9L15.5 8.5V6C15.5 4.1 13.9 2.5 12 2.5Z" />
    <path d="M12 8.5V15.5M8.5 10L14.5 14M8.5 14L14.5 10" strokeLinecap="round" />
  </svg>
);

// 14. Computer Vision
export const ComputerVisionIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M2 12C3.8 7.5 7.5 4.5 12 4.5C16.5 4.5 20.2 7.5 22 12C20.2 16.5 16.5 19.5 12 19.5C7.5 19.5 3.8 16.5 2 12Z" />
    <circle cx="12" cy="12" r="3.5" fill="#FF5A00" fillOpacity="0.18" stroke="#FF5A00" strokeWidth="1.8" />
    <path d="M12 9V8M12 16V15M9 12H8M16 12H15" strokeLinecap="round" strokeWidth="1.5" />
  </svg>
);

// 15. NLP & LLM Integration
export const NLPIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M21 11.5C21 16.1944 16.9706 20 12 20C10.3 20 8.7 19.5 7.4 18.7L3 20L4.3 15.9C3.5 14.6 3 13.1 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z" />
    <path d="M8 11.5H8.01M12 11.5H12.01M16 11.5H16.01" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 16. Git
export const GitIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M21.7 10.9L13.1 2.3C12.7 1.9 12 1.9 11.6 2.3L9.5 4.4L12.2 7.1C12.9 6.8 13.7 7 14.2 7.5C14.7 8 14.9 8.8 14.6 9.5L17.2 12.1C17.9 11.8 18.7 12 19.2 12.5C19.8 13.1 19.8 14.1 19.2 14.7C18.6 15.3 17.6 15.3 17 14.7C16.5 14.2 16.3 13.4 16.6 12.7L14.1 10.2V16.3C14.3 16.5 14.4 16.8 14.4 17.1C14.4 18 13.7 18.7 12.8 18.7C11.9 18.7 11.2 18 11.2 17.1C11.2 16.4 11.6 15.8 12.2 15.6V9.8C11.6 9.6 11.2 9 11.2 8.3C11.2 8 11.3 7.7 11.5 7.4L8.8 4.7L2.3 11.2C1.9 11.6 1.9 12.3 2.3 12.7L10.9 21.3C11.3 21.7 12 21.7 12.4 21.3L21.7 12C22.1 11.7 22.1 11.3 21.7 10.9Z"
      fill="#F05032"
    />
  </svg>
);

// 17. GitHub
export const GitHubIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.867 20.198 8.84 21.527C9.34 21.618 9.52 21.31 9.52 21.045C9.52 20.81 9.51 20.187 9.51 19.362C6.73 19.967 6.14 18.022 6.14 18.022C5.68 16.857 5.03 16.547 5.03 16.547C4.12 15.927 5.1 15.94 5.1 15.94C6.1 16.01 6.63 16.972 6.63 16.972C7.52 18.502 8.96 18.06 9.53 17.805C9.62 17.157 9.88 16.715 10.16 16.467C7.94 16.217 5.61 15.357 5.61 11.532C5.61 10.442 6 9.552 6.64 8.855C6.54 8.602 6.2 7.585 6.74 6.225C6.74 6.225 7.58 5.955 9.48 7.245C10.28 7.022 11.14 6.912 12 6.908C12.86 6.912 13.72 7.022 14.52 7.245C16.42 5.955 17.26 6.225 17.26 6.225C17.8 7.585 17.46 8.602 17.36 8.855C18 9.552 18.39 10.442 18.39 11.532C18.39 15.367 16.05 16.212 13.82 16.46C14.18 16.77 14.49 17.382 14.49 18.322C14.49 19.67 14.48 20.757 14.48 21.045C14.48 21.313 14.66 21.625 15.17 21.525C19.14 20.193 22 16.444 22 12.017C22 6.484 17.522 2 12 2Z"
    />
  </svg>
);

// 18. Figma
export const FigmaIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M7 2H12V8H7C5.34 8 4 6.66 4 5C4 3.34 5.34 2 7 2Z" fill="#F24E1E" />
    <path d="M12 2H17C18.66 2 20 3.34 20 5C20 6.66 18.66 8 17 8H12V2Z" fill="#FF7262" />
    <path d="M12 8H17C18.66 8 20 9.34 20 11C20 12.66 18.66 14 17 14H12V8Z" fill="#1ABCFE" />
    <path d="M7 8H12V14H7C5.34 14 4 12.66 4 11C4 9.34 5.34 8 7 8Z" fill="#0ACF83" />
    <path d="M7 14H12V19C12 20.66 10.66 22 9 22C7.34 22 6 20.66 6 19C6 17.34 7.34 16 9 16H7V14Z" fill="#A259FF" />
  </svg>
);

// 19. Vercel
export const VercelIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L23 21H1L12 2Z" />
  </svg>
);

// 20. REST APIs
export const RestAPIIcon: React.FC<TechIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="2" y="5" width="8" height="6" rx="2" stroke="currentColor" />
    <rect x="14" y="13" width="8" height="6" rx="2" stroke="currentColor" />
    <path d="M10 8H14C15.1 8 16 8.9 16 10V13" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 16H10C8.9 16 8 15.1 8 14V11" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="8" r="1" fill="#FF5A00" stroke="#FF5A00" />
    <circle cx="10" cy="16" r="1" fill="#FF5A00" stroke="#FF5A00" />
  </svg>
);
