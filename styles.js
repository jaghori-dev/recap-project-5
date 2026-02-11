import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    --bg-secondary: #ffffff;
    --text-primary: #1e293b;
    --text-secondary: #475569;
    --accent-primary: linear-gradient(135deg, #3b82f6, #8b5cf6);
    --accent-hover: rgba(59, 130, 246, 0.3);
    
    /* Typography & Spacing */
    --font-family: 'Inter', -apple-system, sans-serif;
    --font-size-h1: 2rem;
    --font-size-body: 1.1rem;
    --spacing-lg: 2rem;
    --border-radius: 12px;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    
    /* Buttons & Links */
    --btn-padding: 0.75rem 1.5rem;
    --btn-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: var(--font-family);
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    :root {
      --font-size-h1: 1.5rem;
      --spacing-lg: 1rem;
    }
  }
`;

export default GlobalStyle;
