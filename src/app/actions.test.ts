import { expect, test } from 'vitest'
import { submitContactForm } from './actions'

test('submitContactForm validates empty fields', async () => {
  const formData = new FormData()
  const result = await submitContactForm(formData)
  expect(result.success).toBe(false)
  expect(result.message).toContain('Hibás')
})

test('submitContactForm accepts valid data', async () => {
  const formData = new FormData()
  formData.append('name', 'Test User')
  formData.append('email', 'test@example.com')
  formData.append('message', 'Hello, this is a test message.')
  
  const result = await submitContactForm(formData)
  expect(result.success).toBe(true)
})
