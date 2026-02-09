import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  :root {
    /* Header-Farben (Gradient-Theme) */
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

  
  .app-main, main, section {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-lg);
  }
  
  button, a[href] {
    border-radius: var(--border-radius);
    transition: var(--btn-transition);
    font-weight: 500;
    cursor: pointer;
    border: none;
    background: none;
  }

  button:hover, a[href]:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px var(--accent-hover);
  }

  /* Zentrierung für ALLE Hauptinhalte */
  .app-main,
  main,
  section,
  .page-container,
  [class*="page"],
  [class*="section"] {
    max-width: 1200px;       
    margin: 0 auto;           
    padding: 2rem 1rem;       
    width: 100%;
  }

  /* Speziell für Gallery/Spotlight-Container */
  .gallery-grid,
  .spotlight-container {
    display: grid;
    place-items: center;     
    min-height: 60vh;
  }

  /* Flex-Fallback für Listen/Buttons */
  .content-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  /* Responsive */
  @media (max-width: 768px) {
    :root {
      --font-size-h1: 1.5rem;
      --spacing-lg: 1rem;
    }

    .app-main, main, section {
      padding: 1rem 0.5rem;
    }
  }
  
  /* Art Gallery Cards – perfekt zum Header */
.art-card {
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  max-width: 300px;
  width: 100%;
  transition: var(--btn-transition);
  position: relative;
  cursor: pointer;
}

.art-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.art-image-wrapper {
  width: 100%;
  height: 200px;  /* Feste Höhe für einheitliche Karten */
  overflow: hidden;
  position: relative;
}

.art-image-wrapper img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;  /* Responsive, füllt perfekt */
  transition: transform 0.4s ease;
}

.art-card:hover .art-image-wrapper img {
  transform: scale(1.1);  /* Zoom-Effekt */
}

.art-card-body {
  padding: 1.5rem;
}

.art-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.art-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

/* Mobile */
@media (max-width: 768px) {
  .art-card {
    max-width: 100%;
  }
}

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    place-items: center;
    padding: 2rem 0;
  }
`;


export default GlobalStyle;
