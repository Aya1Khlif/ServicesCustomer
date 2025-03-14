import { useState, useEffect, useRef } from 'react';
import './Chat.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const messageContainerRef = useRef(null); 

  const suggestions = [
    "hello",
    "goodmorning",
    "are you a bot?",
    "am I talking to a bot?",
    "bye",
    "yes",
    "Can you answer my questions?",
    "كيف يمكنني التواصل مع خدمة العملاء؟",
    "كيف أتواصل مع الدعم الفني؟",
    "هل لديكم خصومات؟",
    "هل توجد خصومات في الوقت الحالي؟",
    "ما هي ساعات العمل؟",
    "هل تقدمون خدمات الطوارئ؟",
    "كم تكلف خدماتكم؟",
    "كم تكلفة تركيب الكاميرات؟",
    "كيف يمكنني الطلب؟",
    "هل توفرون خدمات صيانة؟",
    "ما هي الخدمات التي تقدمونها؟",
    "ما هي المنتجات التي تبيعونها؟",
    "هل توفرون خدمات عقارية؟",
    "كيف تعمل أنظمة الإنذار لديكم؟",
    "هل تقدمون دورات تدريبية؟",
    "كيف يمكنني تركيب كاميرات مراقبة؟",
    "هل يمكنكم تحديد أماكن تركيب الكاميرات في المنزل؟",
    "great"
  ];
  

  const sendMessage = async (msg) => {
    setMessages([...messages, { sender: 'user', text: msg }]);
    setIsTyping(true);

    try {
      const res = await fetch('http://localhost:5006/webhooks/rest/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender: 'user', message: msg })
      });
      const data = await res.json();

      const botMessage = data && data.length > 0 ? data[0].text : 'عذرًا، لا يوجد رد متاح حاليًا.';
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botMessage }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'حدث خطأ. حاول مرة أخرى.' }]);
    }

    setIsTyping(false);
    setMessage('');
  };

  const handleSend = () => {
    if (message) {
      sendMessage(message);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    sendMessage(suggestion);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className={`chat-container ${isOpen ? 'open' : ''}`}>
      <button className="chat-toggle" onClick={toggleChat}>
        💬
      </button>

      {isOpen && (
        <div className="chat-box">
          <h1>Chat With Rasa</h1>

          <div className="message-container" ref={messageContainerRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.sender === 'bot' && <span className="bot-icon">🤖</span>}
                <p>{msg.text}</p>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <span className="bot-icon">🤖</span>
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          <div className="input-container">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب رسالة"
            />
            <button onClick={handleSend}>إرسال</button>
          </div>

          <div className="suggestions-container">
            {suggestions.map((suggestion, index) => (
              <button key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
