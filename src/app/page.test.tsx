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
  default: ({ fill, priority, ...props }: { fill?: boolean; priority?: boolean; src: string; alt: string; className?: string; sizes?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || ""} data-fill={fill ? "true" : undefined} data-priority={priority ? "true" : undefined} />
  },
}))

test('Home page renders Hero section', () => {
  render(<Home />)
  expect(screen.getByText(/Precíz könyvelés/i)).toBeDefined()
  expect(screen.getByText(/nyugodt vállalkozás/i)).toBeDefined()
  expect(screen.getByText(/Kérjen ajánlatot/i)).toBeDefined()
})

test('Home page renders Services section', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { name: /Mivel foglalkozunk\?/i, level: 2 })).toBeDefined()
  expect(screen.getByRole('heading', { name: /Teljes körű könyvelés/i, level: 4 })).toBeDefined()
  expect(screen.getByRole('heading', { name: /Bérszámfejtés/i, level: 4 })).toBeDefined()
  expect(screen.getByRole('heading', { name: /Adótanácsadás/i, level: 4 })).toBeDefined()
})

test('Home page renders About section', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { name: /A szakmai háttér/i, level: 2 })).toBeDefined()
  expect(screen.getAllByText(/Pohánka Józsefné/i).length).toBeGreaterThan(0)
  expect(screen.getByAltText(/Pohánka Józsefné/i)).toBeDefined()
})

test('Home page renders Contact section with form', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { name: /Kapcsolatfelvétel/i, level: 2 })).toBeDefined()
  expect(screen.getByLabelText(/Név/i)).toBeDefined()
  expect(screen.getByLabelText(/E-mail/i)).toBeDefined()
  expect(screen.getByLabelText(/Telefon/i)).toBeDefined()
  expect(screen.getByLabelText(/Üzenet/i)).toBeDefined()
  expect(screen.getByRole('button', { name: /Üzenet küldése/i })).toBeDefined()
})
