import { render, screen, cleanup } from '@testing-library/react'
import { expect, test, afterEach, vi, beforeAll } from 'vitest'
import TaxAdvisoryPage from './page'

// Mock IntersectionObserver
beforeAll(() => {
  class MockIntersectionObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  }
  global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver
})

afterEach(() => {
  cleanup()
})

test('TaxAdvisoryPage renders correctly', () => {
  render(<TaxAdvisoryPage />)
  
  // Check for the main heading (Hero)
  expect(screen.getByRole('heading', { name: /Adótanácsadás/i, level: 1 })).toBeDefined()
  
  // Check for the intro text
  expect(screen.getByText(/Szakértő segítség az adódzsungelben/i)).toBeDefined()
  
  // Check for the specialized service list
  expect(screen.getByRole('heading', { name: /Stratégiai adótervezés/i, level: 2 })).toBeDefined()
  expect(screen.getByText(/Adóoptimalizálási lehetőségek feltárása/i)).toBeDefined()
  
  // Check for the "Mikor van ránk szüksége?" box
  expect(screen.getByRole('heading', { name: /Mikor van ránk szüksége\?/i, level: 3 })).toBeDefined()
  
  // Check for the Contact CTA link
  expect(screen.getByRole('link', { name: /Kérjen ajánlatot most/i })).toBeDefined()
})
