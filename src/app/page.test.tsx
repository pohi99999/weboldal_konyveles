import { render, screen } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import Home from './page'

// Mock Next.js Image component
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

test('Home page renders with welcome text', () => {
  render(<Home />)
  expect(screen.getByText(/To get started, edit the page.tsx file/i)).toBeDefined()
})
