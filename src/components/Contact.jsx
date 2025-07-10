import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>I'm always open to discussing new opportunities, collaborations, or just having a conversation about finance and technology.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <p><a href="mailto:ishanmain10@gmail.com">ishanmain10@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <p><a href="https://www.linkedin.com/in/ishan-kakodkar" target="_blank" rel="noopener noreferrer">linkedin.com/in/ishan-kakodkar</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💻</div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <p><a href="https://github.com/ishankakodkar" target="_blank" rel="noopener noreferrer">github.com/ishankakodkar</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>New York, NY</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 