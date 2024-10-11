import React, { useState } from 'react'

function ContactForm() {
  const [email, setEmail] = useState('')
  const [query, setQuery] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    console.log(event)
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append('email', email)
    formData.append('query', query)

    console.log(formData)

    try {
      const response = await fetch('https://formspree.io/f/xpwavooz', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
      console.log(response)
      const data = await response.json()
      console.log(data)

      if (data.ok) {
        alert('お問い合わせありがとうございます！')
        // フォームをリセット
        setEmail('')
        // setUsername('');
        setQuery('')
      } else {
        alert('送信に失敗しました。')
      }
    } catch (error) {
      alert('エラーが発生しました。')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container">
      <h2>お問い合わせ</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">メールアドレス:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <label htmlFor="query">問い合わせ内容:</label>
        <textarea
          id="query"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          rows="10"
          cols="50"
        ></textarea>
        <br />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? '送信中...' : '送信'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
