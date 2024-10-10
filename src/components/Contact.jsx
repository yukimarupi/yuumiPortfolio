import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5001/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, message })
    });
    if (response.ok) {
      alert('お問い合わせありがとうございます！');
      setEmail('');
      setMessage('');
    } else {
      alert('送信に失敗しました。もう一度試してください。');
    }
  };

  return (
    <div className="contact">
      <h1>お問い合わせ</h1>
      <form onSubmit={handleSubmit}>
        <label>
          メールアドレス:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          メッセージ:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default Contact;
