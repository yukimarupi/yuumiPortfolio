import React, { useState } from 'react'
import axios from 'axios' // axiosをインポート

function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/sendEmail', {
        email,
        message,
      })

      if (response.status === 200) {
        alert('お問い合わせありがとうございます！')
        setEmail('')
        setMessage('')
      }
    } catch (error) {
      alert('送信に失敗しました。もう一度試してください。')
      console.error(error) // エラーログを表示
    }
  }

  return (
    <div className="contact">
      <h1>お問い合わせ</h1>
      <form onSubmit={handleSubmit}>
        <label>
          メールアドレス:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          メッセージ:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button type="submit">送信</button>
      </form>
    </div>
  )
}

export default Contact
