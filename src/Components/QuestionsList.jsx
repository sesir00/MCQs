import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuestionsList.css';

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch questions and options from the API
    axios.get('http://localhost:3000/questions')
      .then(response => {
        setQuestions(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
        setError('Failed to load questions. Please try again later.');
        setLoading(false);
      });
  }, []);

  const retryFetch = () => {
    setLoading(true);
    setError('');
    axios
    .get('http://localhost:3000/questions')
    .then((response) => {
      setQuestions(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching questions', error);
      setError('Failed to load questions. Please try again later.');
      setLoading(false);
    });
  };

  return (
    <div className='questions-container'>
      <h1>Questions</h1>
      {loading && <p className='loading' style={{marginLeft:'47%'}}>
        {/* Loading... */}
      
        <div class="dot-spinner">
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
        </div>
      </p>}
      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={retryFetch} className="retry-btn">Retry</button>
        </div>
      )}
      
      {!loading && !error && (
        <div>
          {questions.map((question) => (
            <div key={question.question_id} className="question-block">
              <h2>{question.question_text}</h2>
              <ul className="options-list">
                {question.options.map((option) => (
                  <li
                    key={option.option_id}
                    className={`option-item ${option.is_correct ? 'correct' : 'incorrect'}`}
                  >
                    {option.option_text}
                    {option.is_correct && <span className="correct-badge">Correct</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionsList;
