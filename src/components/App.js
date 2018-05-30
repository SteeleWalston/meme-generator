import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            headerText: 'This is',
            footerText: 'a Meme',
            image: 'https://pbs.twimg.com/media/CoTDCVNW8AAAmfA.png'
        }
    }

    handleHeader({ target }) {
        this.setState({ headerText: target.value });
    }

    handleFooter({ target }) {
        this.setState({ footerText: target.value });
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
        const { headerText, footerText, image } = this.state;

        return (
            <main>
                <h2>Cool Stuff</h2>
                <fieldset>
                    <div>
                        <label>
                            Header Text:
                            <input 
                                type="text"
                                value={headerText}
                                onChange={event => this.handleHeader(event)}
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
                    <div>
                        <label>
                            Image Src:
                            <input onChange={event => this.handleImageSrc(event)}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Image:
                            <input
                                type="file"
                                onChange={event => this.handleUpload(event)}
                            />
                        </label>
                    </div>

                    <div>
                        <button onClick={() => this.handleExport()}>
                            Export
                        </button>
                    </div>

                    <div className="image-container"
                        ref={node => this.imageExport = node}
                    >
                        <h2>{headerText}</h2>
                        <img src={image} width="300px"/>
                        <h2>{footerText}</h2>
                    </div>
                </section>
            </main>
        );
    }

}