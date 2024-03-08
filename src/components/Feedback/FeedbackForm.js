import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './FeedbackForm.css'; // Import CSS for styling
import Footer from '../Footer/Footer';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0); // Initial rating is 0
  const [isFormValid, setIsFormValid] = useState(false); // Form validation flag
  const [showNotification, setShowNotification] = useState(false); // Notification state

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if both feedback and rating are provided
    if (feedback.trim() !== '' && rating !== 0) {
      // Here, you can handle the submission of the feedback and rating
      console.log('Feedback submitted:', feedback);
      console.log('Rating:', rating);
      // Clear the input field and reset rating after submission
      setFeedback('');
      setRating(0);
      // Reset form validation flag
      setIsFormValid(false);
      // Show the notification
      setShowNotification(true);
      // Hide the notification after 10 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 10000);
      // Redirect user back to the feedback form page after 10 seconds
      setTimeout(() => {
        window.location.reload(); // Reload the page to reset the form
      }, 10000);
    } else {
      // If either feedback or rating is missing, set form validation flag to false
      setIsFormValid(false);
    }
  };

  // Function to handle emoji click and set rating
  const handleEmojiClick = (selectedRating) => {
    setRating(selectedRating);
  };

  // Function to determine if an emoji is selected
  const isEmojiSelected = (emojiRating) => {
    return emojiRating === rating;
  };

  return (
    <div>
      <br />
      <br />
      <div className="feedback-container">
      <br />
        <h2 style={{ fontSize: '25px', fontFamily: "Apple Chancery"}}>Customer Feedback</h2>
        <form onSubmit={handleSubmit} className="feedback-form">
          <TextField
            label ="Your Feedback"
            multiline
            rows={7}
            variant="outlined"
            fullWidth
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
          <div className="smiley-rating">
            <p style={{ fontSize: '25px', fontFamily: "Apple Chancery"}}>Rate your experience:</p>
            <div className="smiley-icons">
              {/* Add onClick handler to each emoji to set the rating */}
              <span
                onClick={() => handleEmojiClick(1)}
                className={isEmojiSelected(1) ? 'selected-emoji' : ''}
              >
                😞
              </span>
              <span
                onClick={() => handleEmojiClick(2)}
                className={isEmojiSelected(2) ? 'selected-emoji' : ''}
              >
                😐
              </span>
              <span
                onClick={() => handleEmojiClick(3)}
                className={isEmojiSelected(3) ? 'selected-emoji' : ''}
              >
                😊
              </span>
              <span
                onClick={() => handleEmojiClick(4)}
                className={isEmojiSelected(4) ? 'selected-emoji' : ''}
              >
                😄
              </span>
              <span
                onClick={() => handleEmojiClick(5)}
                className={isEmojiSelected(5) ? 'selected-emoji' : ''}
              >
                😁
              </span>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!feedback.trim() || rating === 0} // Disable submit button if feedback or rating is missing
          >
            Submit
          </Button>
        </form>
      </div>
      {showNotification && (
        <div className="notification">
          <h2>Thank you for your feedback!</h2>
         </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default FeedbackForm;








