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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const og = layoutMetadata.openGraph as any;
  expect(og).toBeDefined()
  expect(og?.type).toBe('website')
  expect(og?.locale).toBe('hu_HU')
})
