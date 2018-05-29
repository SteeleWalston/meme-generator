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
            </main>
        );
    }

}