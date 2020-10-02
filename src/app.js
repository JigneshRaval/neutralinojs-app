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
        function (error) {
            console.error('Error in writeFile ', error);
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
            if (data && data.content) {
                console.log('Parse file data :', JSON.parse(data.content));
                if (JSON.parse(data.content).content) {
                    contentElem.innerHTML = JSON.parse(data.content).content;
                }
            }

        },
        function (error) {
            console.error('Error in readFile : ', error);
        }
    );
}

// Create JSON file in storage folder
// ================================================
function writeJsonData(dataObj) {
    console.log('writeJsonData function called...', dataObj);
    // Javascript Object to be stored as JSON
    let data = {
        bucket: 'notes',
        content: {
            tasks: [
                ...dataObj || {
                    title: "Jignesh",
                    description: 10
                }
            ]
        }
    }

    // stores the data into JSON based data store.
    Neutralino.storage.putData(data,
        // executes on successful storage of data
        function () {
            console.log('Data saved to storage/notes.json');
            readJsonData();
        },
        // executes if an error occurs
        function (error) {
            console.log('An error occurred while saving the Data', error);
        }
    );
}

// Read JSON file from storage folder
// ================================================
function readJsonData() {
    // The stored data is being retrieved from the JSON based data store.
    Neutralino.storage.getData('notes',
        // executes when data is successfully retrieved.
        function (content) {
            // the data that has been retrieved.
            console.log('The data you requested for \n', content);
            if (content && content.tasks) {
                displayData(content.tasks);
            }
        },
        // executes if an error occurs
        function (error) {
            console.log('An error occured while retrieving the data.', error);

        }
    );
}

window.submitForm = function (event) {
    //callback handler for form submit
    event.preventDefault(); //STOP default action
    let form = event.target;
    // let formData = new FormData(form);
    // console.log('formData : ', formData);
    let title = form[0].value;
    let description = form[1].value;

    let data = {
        title: title,
        description: description
    }

    Neutralino.storage.getData('notes',
        // executes when data is successfully retrieved.
        function (content) {
            // the data that has been retrieved.
            console.log('content 1 : ', content);

            if (content.tasks) {
                content.tasks.push(data);
                console.log('content 2 : ', content, content.tasks);
                displayData(content.tasks);
                writeJsonData(content.tasks);
            }

        },
        // executes if an error occurs
        function (error) {
            console.log('An error occured while retrieving the data.', error);
        }
    );
}

// Display list of items on the screen
function displayData(data) {
    if (data && data.length > 0) {
        var dataSection = document.createElement('section');

        data.map(function (note) {
            var singleNote = document.createElement('details');
            singleNote.innerHTML = "<summary>" + note.title + "</summary> <pre>" + note.description + "</pre>";
            dataSection.appendChild(singleNote);
        });

        var contentElem = document.querySelector('.content');
        contentElem.appendChild(dataSection);
    }
}

Neutralino.init({
    load: function () {
        // myapp.myfunction();

        // createFile();
        // readFileData();

        // writeJsonData({ fname: "Hiren", lname: "patel" });
        readJsonData();
    },
    pingSuccessCallback: function (error) {
        console.log('An error occurred while pingSuccessCallback.', error);
    },
    pingFailCallback: function (error) {
        console.log('An error occurred while pingFailCallback.', error);
    }
});
