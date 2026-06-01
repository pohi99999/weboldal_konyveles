'use server'

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  if (!name || !email || !message) {
    return { success: false, message: 'Hibás adatok. Kérjük, töltsön ki minden kötelező mezőt.' }
  }

  // TODO: Implement actual email sending logic here (e.g. using Resend or Nodemailer)
  // For MVP, we just pretend it succeeded
  console.log(`Received message from ${name} (${email}): ${message}`)

  return { success: true, message: 'Köszönjük üzenetét! Hamarosan felvesszük Önnel a kapcsolatot.' }
}
