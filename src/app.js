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

window.utilityLib = new UtilityLib();

window.submitForm = function (event) {
    //callback handler for form submit
    event.preventDefault(); //STOP default action
    let form = event.target;
    // let formData = new FormData(form);
    // console.log('formData : ', formData);
    let title = form[0].value;
    let description = $('#summernote').summernote('code');

    let data = {
        dateCreated: new Date().getTime(),
        title: title,
        description: description
    }

    Neutralino.storage.getData('notes',
        // executes when data is successfully retrieved.
        function (content) {
            // the data that has been retrieved.

            if (content.tasks) {
                content.tasks.push(data);
                utilityLib.writeJsonData(content.tasks);
            }

        },
        // executes if an error occurs
        function (error) {
            console.log('An error occured while retrieving the data.', error);
        }
    );
}

Neutralino.init({
    load: function () {
        // utilityLib.writeJsonData({ fname: "Hiren", lname: "patel" });
        utilityLib.readJsonData();
    },
    pingSuccessCallback: function (error) {
        console.log('An error occurred while pingSuccessCallback.', error);
    },
    pingFailCallback: function (error) {
        console.log('An error occurred while pingFailCallback.', error);
    }
});
