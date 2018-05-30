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
        this.setState({ name: target.value });
    }

    handleFooter({ target }) {
        this.setState({ name: target.value });
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
                    <div className="image-container"
                        ref={node => this.imageExport = node}
                    >
                        <h2>{headerText}</h2>
                        <img src={image}/>
                        <h2>{footerText}</h2>
                    </div>
                </section>
            </main>
        );
    }

}