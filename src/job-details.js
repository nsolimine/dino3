import React from 'react';

export class Section extends React.Component {
  createListItem(item) {
    return (
      <li>
        <h2>Job Details</h2>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <small>{item.pay}</small>
        <p>{item.interested}</p>
      </li>
    )
  }
  render () {
    return (
      <section>
        <ul id="job-listings">
          {this.props.listings.map(this.createListItem)}
        </ul>
      </section>
    );
  }
}
