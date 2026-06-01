import { render, screen, cleanup } from '@testing-library/react'
import { expect, test, vi, afterEach } from 'vitest'
import Home from './page'

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock Next.js Image component
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

test('Home page renders Hero section', () => {
  render(<Home />)
  expect(screen.getByText(/Profi Könyvelés és Adótanácsadás/i)).toBeDefined()
  expect(screen.getByText(/Kérjen ajánlatot/i)).toBeDefined()
})

test('Home page renders Services section', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { name: /Kiemelt Szolgáltatásaink/i, level: 2 })).toBeDefined()
  expect(screen.getByRole('heading', { name: /Teljes körű könyvelés/i, level: 3 })).toBeDefined()
  expect(screen.getByRole('heading', { name: /Bérszámfejtés/i, level: 3 })).toBeDefined()
  expect(screen.getByRole('heading', { name: /Adótanácsadás/i, level: 3 })).toBeDefined()
})
