export type ThemeMode = 'dark' | 'light'

const STORAGE_KEY = 'amaan-portfolio-theme'

export function getInitialTheme(): ThemeMode {
  const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null
  if (saved === 'dark' || saved === 'light') return saved
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
  return prefersDark ? 'dark' : 'light'
}

export function applyTheme(theme: ThemeMode) {
  const root = document.documentElement
  root.dataset.theme = theme
  if (theme === 'dark') root.classList.add('dark')
  else root.classList.remove('dark')
  localStorage.setItem(STORAGE_KEY, theme)
}
