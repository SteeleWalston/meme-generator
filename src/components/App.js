import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            headerText: 'This is',
            footerText: 'a Meme',
            image: null
        }
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
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Footer Text:
                            <input 
                                value={footerText}
                            />
                        </label>
                    </div>
                </fieldset>

                <section>
                    <div>
                        <label>
                            Image Src:
                            <input/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Image:
                            <input
                                type="file"
                            />
                        </label>
                    </div>
                    <div className="image-container">
                        <img src={image}/>
                    </div>
                </section>
            </main>
        );
    }

}