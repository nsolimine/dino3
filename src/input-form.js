import React from 'react';

export default function JobForm({onSubmit}) {
  onSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    const message = document.querySelector('#message');
    message.textContent = "Your application was submitted!"
  }

  return (
    <form id="application-input" onSubmit={onSubmit}>
        <label>Apply Here: </label>
        <textarea id="application-text" rows="8" cols="100"></textarea>
        <input id="submit" type="submit" value="Submit" />
        <p id="message">&nbsp;</p>
      </form>
  );
}
