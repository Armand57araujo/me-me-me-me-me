import React from 'react';

const Contact = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <h2>Contact Me</h2>
        <p>Feel free to reach out using the information below:</p>
        <ul className="list-group">
          <li className="list-group-item">Email: example@example.com</li>
          <li className="list-group-item">Phone: +1234567890</li>
          <li className="list-group-item">Address: 1234 Main St, City, Country</li>
        </ul>
      </div>
      <div className="col-md-6">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
