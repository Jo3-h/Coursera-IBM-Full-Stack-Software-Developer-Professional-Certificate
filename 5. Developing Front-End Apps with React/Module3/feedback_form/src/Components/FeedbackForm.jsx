import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    feedback: '',
    rating: ''
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData, [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nFeedback: ${formData.feedback}\nRating: ${formData.rating}`;
    const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
    if (isConfirmed){
      console.log('Submitting Feedback:', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: '0'
      });
      alert('Thankyou for submitting feedback');
    }
  }

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type="text" placeholder='Your Name' name='name' value={formData.name} onChange={handleChange}/>
        <input type='email' placeholder='Your Email' name='email' value={formData.email} onChange={handleChange}/>
        <textarea name='feedback' placeholder='Your Feedback' value={formData.feedback} onChange={handleChange}>

        </textarea>
        <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
          <span>Rate Us:</span>
          <p><input type="radio" name="rating" value="1" onChange={handleChange}/> 1</p>
          <p><input type="radio" name="rating" value="2" onChange={handleChange}/> 2</p>
          <p><input type="radio" name="rating" value="3" onChange={handleChange}/> 3</p>
          <p><input type="radio" name="rating" value="4" onChange={handleChange}/> 4</p>
          <p><input type="radio" name="rating" value="5" onChange={handleChange}/> 5</p>

        </div>
        <button type='submit'>Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;