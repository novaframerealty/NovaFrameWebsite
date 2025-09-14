export const theme = {
  typography: {
    heading:
      '"Space Grotesk", system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
    body: '"Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
  },
  colors: {
    hero: 'linear-gradient(135deg, #f97316 0%, #ef4444 50%, #7c3aed 100%)',
  },
} as const

export type Theme = typeof theme
export default theme
