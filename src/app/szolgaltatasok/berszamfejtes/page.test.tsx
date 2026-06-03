import { render, screen, cleanup } from '@testing-library/react'
import { expect, test, afterEach } from 'vitest'
import PayrollPage from './page'

afterEach(() => {
  cleanup()
})

test('PayrollPage renders correctly', () => {
  render(<PayrollPage />)
  expect(screen.getByRole('heading', { name: /Bérszámfejtés és Munkaügy/i, level: 1 })).toBeDefined()
  expect(screen.getByText(/Hatékony bérügyintézés és precíz munkaügyi adminisztráció/i)).toBeDefined()
  expect(screen.getByRole('heading', { name: /Miben segítünk\?/i, level: 2 })).toBeDefined()
  expect(screen.getByText(/Havi bérszámfejtés és bérjegyzékek elkészítése/i)).toBeDefined()
  expect(screen.getByRole('heading', { name: /Biztonság és Szakértelem/i, level: 2 })).toBeDefined()
})
