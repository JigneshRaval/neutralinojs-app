// MIT License

// Copyright (c) 2018 Neutralinojs

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { AppLib } from './app-core/lib';
import './mycss.css';
import './mycss2.css';

let appLib = new AppLib();

let myapp = {
    myfunction: function () {
        document.getElementById('info').innerHTML = NL_NAME + " is running on port " +
            NL_PORT + " inside " + NL_OS + "<br/><br/>" + "<span>v" + NL_VERSION + "</span>";
    }
};

// File data
// ================================================
var notes = {
    "node": "Reading",
    "content": "<p>PCA-8573 : UI issue when there is more content on rollover text - Angular</p><p>Tried various approch to fix this issue and proposed solution.PCA-8030 : Removal of WUFRL from the UPoint Code</p>"
}

// Create file on disk with given data
// ================================================
function createFile() {
    Neutralino.filesystem.writeFile('/data/file1.db', JSON.stringify(notes),
        function (data) {
            console.log('Write file :', data);
        },
        function () {
            console.error('error');
        }
    );
}

// Read data from file
// ================================================
function readFileData() {
    Neutralino.filesystem.readFile('/data/file1.db',
        function (data) {
            console.log('Read file :', data);
            var contentElem = document.querySelector('.content');
            contentElem.innerHTML = JSON.parse(data.content).content;
        },
        function () {
            console.error('error');
        }
    );
}

Neutralino.init({
    load: function () {
        myapp.myfunction();
        appLib.showSettings();
        createFile();
        readFileData();
    },
    pingSuccessCallback: function () {

    },
    pingFailCallback: function () {

    }
});
