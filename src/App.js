import React, { Component } from 'react';
import './App.css';
import { Header } from './header.js';
import { Footer } from './footer.js';
import { Section } from './job-details.js';
import JobForm from './input-form.js';
import { Preview } from './preview.js'

class App extends Component {
  state = {
    jobs: []
  }

  constructor(props) {
    super(props)
    this.state = {jobs: []}
  }

  componentDidMount() {
    this.getListings();
  }

  getListings = () => {
    return fetch("./listing.json")
    .then(response => response.json())
    .then(jobs => this.setState({jobs}));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Section listings={this.state.jobs} />
          <JobForm />
          <Preview />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
