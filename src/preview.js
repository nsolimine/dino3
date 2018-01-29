import React from 'react';

export class Preview extends React.Component {
  showPreview = () => {
    document.querySelector('#application-preview').classList.toggle('hidden')
    const previewBox = document.querySelector('#application-preview')
    const text = document.querySelector('#application-text').value
    previewBox.textContent = text;
  }
  
  render() {
    return(
      <div>
        <button id="preview-toggle" onClick={this.showPreview}>Show Preview</button>
        <section id="application-preview" className="hidden"></section>
      </div>
    );
  }
}
