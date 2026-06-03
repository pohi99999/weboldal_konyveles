import { render, screen, cleanup } from '@testing-library/react'
import { expect, test, afterEach, vi, beforeAll } from 'vitest'
import PayrollPage from './page'

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

test('PayrollPage renders correctly', () => {
  render(<PayrollPage />)
  
  // Check for the main heading (Hero)
  expect(screen.getByRole('heading', { name: /Bérszámfejtés és Munkaügy/i, level: 1 })).toBeDefined()
  
  // Check for the intro text
  expect(screen.getByText(/Hatékony bérügyintézés és precíz munkaügyi adminisztráció/i)).toBeDefined()
  
  // Check for the specialized service list
  expect(screen.getByRole('heading', { name: /Komplex bérügyintézés/i, level: 2 })).toBeDefined()
  expect(screen.getByText(/Havi bérszámfejtés és bérjegyzékek/i)).toBeDefined()
  
  // Check for the "Miért bízza ránk" box
  expect(screen.getByRole('heading', { name: /Miért bízza ránk a bérszámfejtést\?/i, level: 3 })).toBeDefined()
  
  // Check for the Contact CTA link
  expect(screen.getByRole('link', { name: /Kérjen ajánlatot most/i })).toBeDefined()
})
