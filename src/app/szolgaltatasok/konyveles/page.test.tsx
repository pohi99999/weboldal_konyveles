import { render, screen, cleanup } from '@testing-library/react'
import { expect, test, afterEach } from 'vitest'
import AccountingPage from './page'

afterEach(() => {
  cleanup()
})

test('AccountingPage renders correctly', () => {
  render(<AccountingPage />)
  expect(screen.getByRole('heading', { name: /Könyvelés és Számvitel/i, level: 1 })).toBeDefined()
  expect(screen.getByText(/Vállalkozása pénzügyi stabilitásának alapja/i)).toBeDefined()
  expect(screen.getByRole('heading', { name: /Mivel segítünk\?/i, level: 2 })).toBeDefined()
  expect(screen.getByText(/Kettős könyvvitel vezetése/i)).toBeDefined()
  expect(screen.getByRole('heading', { name: /Miért minket\?/i, level: 2 })).toBeDefined()
})
