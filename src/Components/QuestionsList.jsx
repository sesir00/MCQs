import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuestionsList.css';
import Swal from 'sweetalert2';

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [newOption, setNewOption] = useState('');
  const [editOption, setEditOption] = useState({}); // To track editing

  
  useEffect(() => {
    // Fetch questions and options from the API
    axios
      .get('http://localhost:3000/questions')
      .then((response) => {
        setQuestions(response.data);
        setLoading(false);
      })
      .catch((error) => {
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

  /* const addOption = (questionId) => {
    if (newOption.trim() !== '') {
      const payload = {
        question_id: questionId,
        option_text: newOption,
        is_correct: 0, // Assuming the new option is incorrect by default
      };
      axios
        .post('http://localhost:3000/options', payload)
        .then((response) => {
          setQuestions((prevQuestions) =>
            prevQuestions.map((question) => {
              if (question.question_id === questionId) {
                return {
                  ...question,
                  options: [...question.options, response.data],
                };
              }
              return question;
            })
          );
          setNewOption('');
        })
        .catch((error) => {
          console.error('Error adding new option:', error);
          setError('Failed to add option. Please try again later.');
        });
    }
  };
 */
  const startEditing = (option) => {
    setEditOption(option);
  };

  /* const saveEdit = (optionId, updatedText) => {
    axios
      .put(`http://localhost:3000/options/${optionId}`, {
        option_text: updatedText,
      })
      .then((response) => {
        setQuestions((prevQuestions) =>
          prevQuestions.map((question) => ({
            ...question,
            options: question.options.map((opt) =>
              opt.option_id === optionId
                ? { ...opt, option_text: updatedText }
                : opt
            ),
          }))
        );
        setEditOption({}); // Clear editing state
      })
      .catch((error) => {
        console.error('Error updating option:', error);
        setError('Failed to update option. Please try again later.');
      });
  }; */

  const cancelEdit = () => {
    setEditOption({});
  };
 
  const saveEdit = (optionId, updatedText) => {
    axios
      .put(`http://localhost:3000/options/${optionId}`, {
        option_text: updatedText,
      })
      .then((response) => {
        setQuestions((prevQuestions) =>
          prevQuestions.map((question) => ({
            ...question,
            options: question.options.map((opt) =>
              opt.option_id === optionId
                ? { ...opt, option_text: updatedText }
                : opt
            ),
          }))
        );
        setEditOption({});
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Option updated successfully!',
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.error('Error updating option:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to update option. Please try again.',
        });
      });
  };
  
  const addOption = (questionId) => {
    if (newOption.trim() !== '') {
      const payload = {
        question_id: questionId,
        option_text: newOption,
        is_correct: 0,
      };
      axios
        .post('http://localhost:3000/options', payload)
        .then((response) => {
          setQuestions((prevQuestions) =>
            prevQuestions.map((question) => {
              if (question.question_id === questionId) {
                return {
                  ...question,
                  options: [...question.options, response.data],
                };
              }
              return question;
            })
          );
          setNewOption('');
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Option added successfully!',
            timer: 2000,
            showConfirmButton: false,
          });
        })
        .catch((error) => {
          console.error('Error adding new option:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to add option. Please try again.',
          });
        });
    }
  };
  



  return (
    <div className='questions-container'>
      <h1>Questions</h1>
      {loading && (
        <p className='loading'>
          <div className="dot-spinner">
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
          </div>
        </p>
      )}
      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={retryFetch} className="retry-btn">
            Retry
          </button>
        </div>
      )}
      {!loading && !error && (
        <div>
          {questions.map((question) => (
            <div key={question.question_id} className="question-block">
              <h2>{question.question_text}</h2>
              {question.options.length < 4 && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button
                    style={{
                      color: 'white',
                      background: '#015d75',
                      textAlign: 'center',
                      borderRadius: '5px',
                      border: 'none',
                      padding: '0.5rem 0.8rem',
                    }}
                    onClick={() => addOption(question.question_id)}
                  >
                    <i className="fas fa-plus"></i> Add Option
                  </button>
                  <input
                    type="text"
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                    placeholder="New option here"
                    style={{
                      padding: '0.5rem',
                      borderRadius: '5px',
                      border: '2px solid black',
                    }}
                  />
                </div>
              )}
              <ul className="options-list">
                {question.options.map((option) => (
                  <li
                    key={option.option_id}
                    className={`option-item ${option.is_correct ? 'correct' : 'incorrect'}`}
                  >{/* if the button edit is pressed */}
                    {editOption.option_id === option.option_id ? (   
                      <div style={{display:"flex",justifyContent:'flex-end',justifyItems:'center',gap:'1rem'}}>
                        <input
                          type="text"
                          value={editOption.option_text}
                          onChange={(e) =>
                            setEditOption({ ...editOption, option_text: e.target.value })
                          }
                          style={{padding:'0.4rem',justifyContent:'center'}}
                        />
                        <button
                          onClick={() => saveEdit(option.option_id, editOption.option_text)}
                          style={{
                              color: 'white',
                              background: '#029929',
                              borderRadius: '5px',
                              border: 'none',
                              padding: '0.3rem 0.6rem',
                              
                            }}
                        >
                          Save
                        </button>
                        <button onClick={cancelEdit}
                        style={{
                              color: 'white',
                              background: '#e52a2a',
                              borderRadius: '5px',
                              border: 'none',
                              padding: '0.3rem 0.5rem',
                            }}
                        >Cancel</button>
                      </div>
                    ) : (
                      <>
                        {option.option_text}
                        {option.is_correct === 1 ? (
                          <span className="correct-badge">Correct</span>
                        ) : (
                          <button
                            style={{
                              color: 'white',
                              background: '#015d75',
                              borderRadius: '10px',
                              border: 'none',
                              padding: '0.5rem 0.8rem',
                            }}
                            onClick={() => startEditing(option)}
                          >
                            <i className="fas fa-pencil-alt" title="Edit">
                              {' '}
                              <span style={{ fontFamily: 'monospace' }}>edit</span>
                            </i>
                          </button>
                        )}
                      </>
                    )}
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
