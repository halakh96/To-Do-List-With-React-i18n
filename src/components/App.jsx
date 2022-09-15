import React, { useState , useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  const { t, i18n } = useTranslation();

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(event) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText('');
  }
 
  return (
    <div className="container">
      { i18n.language == 'ar' && <button onClick={() => i18n.changeLanguage('en')}>
        <span>EN</span>
      </button>}
      { i18n.language == 'en' && <button onClick={() => i18n.changeLanguage('ar')}>
        <span>AR</span>
      </button>}
      <div className="heading">
        <h1>{t('title')}</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>{t('Add')}</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}{' '}
        </ul>
      </div>
    </div>
  );
}

export default App;
