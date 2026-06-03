import { render, screen, cleanup } from '@testing-library/react'
import { expect, test, afterEach, vi, beforeAll } from 'vitest'
import AccountingPage from './page'

// Mock IntersectionObserver
beforeAll(() => {
  class MockIntersectionObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  }
  global.IntersectionObserver = MockIntersectionObserver as any
})

afterEach(() => {
  cleanup()
})

test('AccountingPage renders correctly', () => {
  render(<AccountingPage />)
  
  // Check for the main heading (Hero)
  expect(screen.getByRole('heading', { name: /Könyvelés és Számvitel/i, level: 1 })).toBeDefined()
  
  // Check for the intro text
  expect(screen.getByText(/Vállalkozása pénzügyi stabilitásának alapja/i)).toBeDefined()
  
  // Check for the specialized service list (using the new wording)
  expect(screen.getByRole('heading', { name: /Szakértő könyvelés a biztonságért/i, level: 2 })).toBeDefined()
  expect(screen.getByText(/Kettős könyvvitel precíz vezetése/i)).toBeDefined()
  
  // Check for the "Mivel segítjük" box
  expect(screen.getByRole('heading', { name: /Mivel segítjük vállalkozását\?/i, level: 3 })).toBeDefined()
  
  // Check for the Contact CTA link
  expect(screen.getByRole('link', { name: /Kérjen ajánlatot most/i })).toBeDefined()
})
