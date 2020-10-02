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
import { UtilityLib } from './app-core/utility';
import './mycss.css';

let appLib = new AppLib();
let utilityLib = new UtilityLib();

let myapp = {
    myfunction: function () {
        document.getElementById('info').innerHTML = NL_NAME + " is running on port " +
            NL_PORT + " inside " + NL_OS + "<br/><br/>" + "<span>v" + NL_VERSION + "</span>";
    }
};

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
                getNoteList(content.tasks);
                showNoteDetail(content.tasks[0].description)
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

            if (content.tasks) {
                content.tasks.push(data);
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
function getNoteList(data) {
    var leftPanel = document.querySelector('aside');

    // First clear or remove all list items
    utilityLib.removeAllChildNodes(leftPanel);

    if (data && data.length > 0) {
        data.map(function (note) {
            leftPanel.innerHTML += '<a href="#" onclick="showNoteDetail(\'' + note.description.toString() + '\')">' + note.title + '</a>';
        });
    }
}

// Display details on click of left navigation item
window.showNoteDetail = function (description) {
    console.log('description :', description);
    if (description) {
        var noteContent = document.querySelector('.note-content');
        noteContent.innerHTML = description;
    }
}

Neutralino.init({
    load: function () {
        // myapp.myfunction();
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
