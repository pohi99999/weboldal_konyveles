import { expect, test, vi } from 'vitest'

// Mock components that might be used
vi.mock('next/font/google', () => ({
  Inter: () => ({ variable: '--font-inter' }),
  Playfair_Display: () => ({ variable: '--font-playfair' }),
}))

import { metadata as layoutMetadata } from './layout'

test('Layout metadata has correct default values', () => {
  const title = typeof layoutMetadata.title === 'object' && layoutMetadata.title !== null && 'default' in layoutMetadata.title
    ? layoutMetadata.title.default
    : layoutMetadata.title;

  expect(title).toContain('Pohánka és Társa Kft.')
  expect(layoutMetadata.description).toBeDefined()
})

test('Layout metadata includes OpenGraph configuration', () => {
  // This is expected to fail initially as it's not implemented yet
  expect(layoutMetadata.openGraph).toBeDefined()
  expect(layoutMetadata.openGraph?.type).toBe('website')
  expect(layoutMetadata.openGraph?.locale).toBe('hu_HU')
})
