import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      headerText: 'This is',
      footerText: 'a Meme',
      color: '#000000',
      image: 'https://pbs.twimg.com/media/CoTDCVNW8AAAmfA.png'
    };
  }

  handleHeader({ target }) {
    this.setState({ headerText: target.value });
  }

  handleFooter({ target }) {
    this.setState({ footerText: target.value });
  }

  handleColor({ target }) {
    this.setState({ color: target.value });
  }

  handleImageSrc({ target }) {
    this.setState({ image: target.value });
  }

  handleUpload({ target }) {
    const reader = new FileReader();
    
    reader.readAsDataURL(target.files[0]);
    
    reader.onload = () => {
      this.setState({ image: reader.result });
    };
  }

  handleExport() {
    dom2image.toBlob(this.imageExport).then(blob => {
      fileSaver.saveAs(blob, 'meme-image.png');
    });
  }

  render() {
    const { headerText, footerText, color, image } = this.state;

    return (
      <main>
        <h2 id="main-header">Meme Generator</h2>
        <fieldset>
          <div>
            <label>
                            Header Text:
              <input 
                type="text"
                value={headerText}
                onChange={event => this.handleHeader(event)}
              />
              <input
                type="color"
                value={color}
                onChange={event => this.handleColor(event)}
              />
            </label>
          </div>
          <div>
            <label>
                            Footer Text:
              <input 
                value={footerText}
                onChange={event => this.handleFooter(event)}
              />
            </label>
          </div>
        </fieldset>

        <section>
          <div id="image-src">
            <label>
                            Image Src:
              <input onChange={event => this.handleImageSrc(event)}/>
            </label>
          </div>
          <div id="image-file">
            <label>
                            Image:
              <input
                type="file"
                onChange={event => this.handleUpload(event)}
              />
            </label>
          </div>

          <div id="export-button">
            <button onClick={() => this.handleExport()}>
                            Export
            </button>
          </div>
        </section>
        <section id="image-section">
          <div className="image-container"
            ref={node => this.imageExport = node}
          >
            <h2 id="meme-text-top" style={{ color }}>{headerText}</h2>
            <img id="meme-image" src={image}/>
            <h2 id="meme-text-bottom" style={{ color }}>{footerText}</h2>
          </div>
        </section>
      </main>
    );
  }

}