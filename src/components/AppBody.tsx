import styles from '../styles/AppBody.module.scss';
import { useState } from 'react';
import { LoadingSVG } from '../assets/icons';

import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

const AppBody = () => {
  const [textToTranslate, setTextToTranslate] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('French');
  const [isLoading, setIsLoading] = useState(false);
  const [sucess, setSuccess] = useState(false);
  const [translatedText, setTranslatedText] = useState('');
  //const [isError, setIsError] = useState(false);
  // const [previousTranslations, setPreviousTranslations] = useState([{}]);

  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: `I need the sentance provided translated to ${selectedLanguage}`,
    },
  ];

  const handleSubmt = (e: any) => {
    e.preventDefault();
    setIsLoading(false);
    setSuccess(true);

    if (sucess) {
      setSuccess(false);
      setTranslatedText('');
      setTextToTranslate('');
    } else {
      messages.push({
        role: 'user',
        content: textToTranslate,
      });
      setIsLoading(true);
      fetchTranslate();
    }
  };

  async function fetchTranslate() {
    try {
      const url =
        'https://pollyglot-openai-api-worker.ajkendal-openai.workers.dev/';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messages),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(`Worker Error: ${data.error}`);
      }

      setTranslatedText(data.content);
    } catch (e) {}
    setIsLoading(false);
  }

  return (
    <section className={styles['app-body']}>
      {isLoading ? (
        <div className={styles['loading-svg']}>
          <LoadingSVG />
        </div>
      ) : (
        <form>
          <h4 className={styles['section-headers']}>
            {sucess ? 'Original text 👇' : 'Text to translate 👇'}
          </h4>
          <textarea
            className={styles['text-areas']}
            rows={8}
            cols={40}
            value={textToTranslate}
            onBlur={(e) => setTextToTranslate(e.target.value)}
            onChange={(e) => setTextToTranslate(e.target.value)}
            placeholder='Enter text here'
          />
          <h4 className={styles['section-headers']}>
            {sucess ? 'Your translation 👇' : 'Select language 👇'}
          </h4>

          {sucess ? (
            <textarea
              className={styles['text-areas']}
              rows={8}
              cols={40}
              readOnly
              value={translatedText}
            />
          ) : (
            <div className={styles['radio-buttons']}>
              <input
                type='radio'
                name='language'
                value='French'
                id='french'
                onChange={(e) => {
                  setSelectedLanguage(e.target.value);
                }}
                checked={selectedLanguage === 'French'}
              />
              <label htmlFor='french'>
                French{' '}
                <img src='/static/images/fr-flag.png' alt='French Flag' />
              </label>
              <br />
              <input
                type='radio'
                name='language'
                value='Spanish'
                id='spanish'
                onChange={(e) => {
                  setSelectedLanguage(e.target.value);
                }}
                checked={selectedLanguage === 'Spanish'}
              />
              <label htmlFor='spanish'>
                Spanish{' '}
                <img src='/static/images/sp-flag.png' alt='Spain Flag' />
              </label>
              <br />
              <input
                type='radio'
                name='language'
                value='Japanese'
                id='japanese'
                onChange={(e) => {
                  setSelectedLanguage(e.target.value);
                }}
                checked={selectedLanguage === 'Japanese'}
              />
              <label htmlFor='german'>
                Japanese{' '}
                <img src='/static/images/jpn-flag.png' alt='Japan Flag' />
              </label>
            </div>
          )}

          <button
            onClick={(e) => handleSubmt(e)}
            className={styles['translate-button']}
          >
            {sucess ? 'Start Over' : 'Translate'}
          </button>
        </form>
      )}
    </section>
  );
};

export default AppBody;
