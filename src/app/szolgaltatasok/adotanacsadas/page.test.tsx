import { render, screen, cleanup } from '@testing-library/react'
import { expect, test, afterEach } from 'vitest'
import TaxAdvisoryPage from './page'

afterEach(() => {
  cleanup()
})

test('TaxAdvisoryPage renders correctly', () => {
  render(<TaxAdvisoryPage />)
  expect(screen.getByRole('heading', { name: /Adótanácsadás/i, level: 1 })).toBeDefined()
  expect(screen.getByText(/Szakértő segítség az adódzsungelben/i)).toBeDefined()
  expect(screen.getByRole('heading', { name: /Miben segítünk\?/i, level: 2 })).toBeDefined()
  expect(screen.getByText(/Adóoptimalizálási lehetőségek feltérképezése/i)).toBeDefined()
  expect(screen.getByRole('heading', { name: /Biztonság és Tervszerűség/i, level: 2 })).toBeDefined()
})
