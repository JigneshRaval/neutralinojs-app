(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/app-core/lib.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppLib = /*#__PURE__*/function () {
  function AppLib() {
    _classCallCheck(this, AppLib);
  }

  _createClass(AppLib, [{
    key: "showSettings",
    value: function showSettings() {
      Neutralino.settings.getSettings(function (d) {
        alert(JSON.stringify(d));
      }, function () {});
    }
  }]);

  return AppLib;
}();
// CONCATENATED MODULE: ./src/app-core/utility.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function utility_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function utility_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function utility_createClass(Constructor, protoProps, staticProps) { if (protoProps) utility_defineProperties(Constructor.prototype, protoProps); if (staticProps) utility_defineProperties(Constructor, staticProps); return Constructor; }

var UtilityLib = /*#__PURE__*/function () {
  function UtilityLib() {
    utility_classCallCheck(this, UtilityLib);

    console.log('UtilityLib loaded...');
  }

  utility_createClass(UtilityLib, [{
    key: "removeAllChildNodes",
    value: function removeAllChildNodes(parent) {
      if (parent) {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      }
    } // Create file on disk with given data
    // ================================================

  }, {
    key: "createFile",
    value: function createFile(fileName, data) {
      Neutralino.filesystem.writeFile(fileName, data, function (data) {
        console.log('Write file :', data);
      }, function (error) {
        console.error('Error in writeFile ', error);
      });
    } // Read data from file
    // ================================================

  }, {
    key: "readFileData",
    value: function readFileData(fileName) {
      Neutralino.filesystem.readFile(fileName, function (data) {
        console.log('Read file :', data);
        var contentElem = document.querySelector('.content');

        if (data && data.content) {
          console.log('Parse file data :', JSON.parse(data.content));

          if (JSON.parse(data.content).content) {
            contentElem.innerHTML = JSON.parse(data.content).content;
          }
        }
      }, function (error) {
        console.error('Error in readFile : ', error);
      });
    } // Read JSON file from storage folder
    // ================================================

  }, {
    key: "readJsonData",
    value: function readJsonData() {
      var _this = this; // The stored data is being retrieved from the JSON based data store.


      Neutralino.storage.getData('notes', // executes when data is successfully retrieved.
      function (content) {
        // the data that has been retrieved.
        console.log('The data you requested for \n', content);

        if (content && content.tasks) {
          _this.getNoteList(content.tasks);

          _this.showNoteDetail(content.tasks[0].description);
        }
      }, // executes if an error occurs
      function (error) {
        console.log('An error occured while retrieving the data.', error);
      });
    } // Create JSON file in storage folder
    // ================================================

  }, {
    key: "writeJsonData",
    value: function writeJsonData(dataObj) {
      var _this = this;

      console.log('writeJsonData function called...', dataObj); // Javascript Object to be stored as JSON

      var data = {
        bucket: 'notes',
        content: {
          tasks: _toConsumableArray(dataObj || {
            dateCreated: new Date().getTime(),
            title: "Jignesh",
            description: 10
          })
        }
      }; // stores the data into JSON based data store.

      Neutralino.storage.putData(data, // executes on successful storage of data
      function () {
        console.log('Data saved to storage/notes.json');

        _this.readJsonData();
      }, // executes if an error occurs
      function (error) {
        console.log('An error occurred while saving the Data', error);
      });
    } // Display list of items on the screen

  }, {
    key: "getNoteList",
    value: function getNoteList(data) {
      var _this2 = this;

      var leftPanel = document.querySelector('aside');
      var floatingMenuItems = document.querySelectorAll('.floating-menu li button'); // First clear or remove all list items to avoid duplicate nodes

      this.removeAllChildNodes(leftPanel);

      if (data && data.length > 0) {
        data.map(function (note, index) {
          leftPanel.innerHTML += '<a href="#" data-note-id="' + index + '">' + note.title + '</a>';
        });
        var allLinks = leftPanel.querySelectorAll('a');
        var allLinksArray = Array.apply(null, allLinks); // Bind click event to all the note items in the sidebar panel

        if (allLinks && allLinks.length > 0) {
          [].forEach.call(allLinks, function (link) {
            link.addEventListener('click', function (event) {
              _this2.showNoteDetail(link.dataset.noteId, data[link.dataset.noteId]);

              allLinksArray.forEach(function (item) {
                item.classList.remove('active');
              });
              link.classList.add('active'); // Set noteId to floating menu items

              [].forEach.call(floatingMenuItems, function (menuItem) {
                menuItem.setAttribute('data-note-id', link.dataset.noteId);
              });
            });
          });
        }

        allLinksArray[0].click();
        allLinksArray[0].classList.add('active');
      }
    }
  }, {
    key: "buildNoteHeader",
    value: function buildNoteHeader(index, data) {
      var noteHeader = "\n        <header class=\"note__header\">\n            <div class=\"note-header__content\">\n                <h1>".concat(data.title, "</h1>\n                <!-- <div class=\"note-header__tags-list\">Tagged as\n                    <ul>\n                        <li class=\"\"><a href=\"javascript:void(0);\" data-tag-name=\"RxJs\"><span uk-icon=\"tag\"></span> #RxJs</a></li>\n                    </ul>\n                </div> -->\n                <div class=\"control-buttons\">").concat(this.createBtnGroup(index), "</div>\n            </div>\n        </header>");
      return noteHeader;
    } // Display details on click of left navigation item

  }, {
    key: "showNoteDetail",
    value: function showNoteDetail(index, data) {
      if (data) {
        var noteContent = document.querySelector('.note-content');
        noteContent.setAttribute('data-current-note-id', index);
        noteContent.innerHTML = this.buildNoteHeader(index, data) + "<article>" + data.description + "</article>";
      } // Set selected note id to container element


      var noteContentContainer = document.querySelector('.note-editor.note-frame');

      if (noteContentContainer) {
        noteContentContainer.setAttribute('data-current-note-id', index);
      }

      var codeBlockElem = document.querySelectorAll('pre code');
      [].forEach.call(codeBlockElem, function (block) {
        hljs.highlightBlock(block);
      });
    }
  }, {
    key: "createBtnGroup",
    value: function createBtnGroup(noteId) {
      var editBtn = "<button type=\"button\" class=\"btn btn-primary\" data-note-id=\"".concat(noteId, "\" onclick=\"utilityLib.editNote(event, ").concat(noteId, ")\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">Edit Note</button> ");
      var saveBtn = "<button type=\"button\" class=\"btn btn-primary\" data-note-id=\"".concat(noteId, "\" onclick=\"utilityLib.saveNote(event, ").concat(noteId, ")\">Save Note</button> ");
      var deleteBtn = "<button type=\"button\" class=\"btn btn-danger\" data-note-id=\"".concat(noteId, "\" onclick=\"utilityLib.deleteNote(event, ").concat(noteId, ")\">Delete Note</button>");
      var btnGroup = editBtn + saveBtn + deleteBtn;
      return btnGroup;
    } // Edit Single Note

  }, {
    key: "editNote",
    value: function editNote(event, noteId) {
      if (!$('.note-content > article').hasClass('active')) {
        $('.note-content > article').addClass('active');
        $('.note-content > article').summernote({
          focus: true,
          callbacks: {
            // https://stackoverflow.com/questions/43491553/how-to-remove-style-attributes-from-tags-on-summernote-onpaste/56279119#56279119
            onPaste: function onPaste(e) {
              var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('text/html');
              e.preventDefault();
              var div = $('<div />');
              div.append(bufferText);
              div.find('*').removeAttr('style');
              div.find('*').removeAttr('class');
              div.find('a').attr('target', '_blank');
              setTimeout(function () {
                document.execCommand('insertHtml', false, div.html());
              }, 10);
            }
          }
        }); // console.log(event, event.target);

        event.target.innerText = "Cancel Editing";
      } else {
        $('.note-content > article').removeClass('active');
        $('.note-content > article').summernote('destroy');
        event.target.innerText = "Edit Note";
      }
    }
  }, {
    key: "saveNote",
    // Save Single Note
    value: function saveNote(event, noteId) {
      var _this = this;

      var noteId = noteId || Number(event.target.dataset.noteId);
      console.log('Save Note :', event, noteId);
      var markup = $('.note-content > article').summernote('code'); // The stored data is being retrieved from the JSON based data store.

      Neutralino.storage.getData('notes', // executes when data is successfully retrieved.
      function (content) {
        // the data that has been retrieved.
        console.log('The data you requested for \n', content);

        if (content && content.tasks) {
          var filtered = content.tasks.map(function (note, index) {
            if (index === noteId) {
              console.log(index, noteId);
              note.description = markup;
            }

            ;
            return note;
          });
          console.log('saveNote Data : ', filtered);

          _this.writeJsonData(filtered);

          $('.note-content > article').summernote('destroy');
        }
      }, // executes if an error occurs
      function (error) {
        console.log('An error occurred while retrieving the data.', error);
      });
    }
  }, {
    key: "deleteNote",
    // Delete Single Note
    value: function deleteNote(event, noteId) {
      var _this = this;

      var noteId = noteId || Number(event.target.dataset.noteId);
      console.log('Delete Note :', event, noteId); // The stored data is being retrieved from the JSON based data store.

      Neutralino.storage.getData('notes', // executes when data is successfully retrieved.
      function (content) {
        // the data that has been retrieved.
        console.log('The data you requested for \n', content);

        if (content && content.tasks) {
          var filtered = content.tasks.filter(function (value, index, arr) {
            return index !== noteId;
          });
          console.log('deleteNote Data : ', filtered);

          _this.writeJsonData(filtered);
        }
      }, // executes if an error occurs
      function (error) {
        console.log('An error occurred while retrieving the data.', error);
      });
    }
  }]);

  return UtilityLib;
}();
// EXTERNAL MODULE: ./src/mycss.css
var mycss = __webpack_require__(0);

// CONCATENATED MODULE: ./src/app.js
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



window.utilityLib = new UtilityLib();

window.submitForm = function (event) {
  //callback handler for form submit
  event.preventDefault(); //STOP default action

  var form = event.target; // let formData = new FormData(form);
  // console.log('formData : ', formData);

  var title = form[0].value;
  var description = $('#summernote').summernote('code');
  var data = {
    dateCreated: new Date().getTime(),
    title: title,
    description: description
  };
  Neutralino.storage.getData('notes', // executes when data is successfully retrieved.
  function (content) {
    // the data that has been retrieved.
    if (content.tasks) {
      content.tasks.push(data);
      utilityLib.writeJsonData(content.tasks);
    }
  }, // executes if an error occurs
  function (error) {
    console.log('An error occured while retrieving the data.', error);
  });
};

Neutralino.init({
  load: function load() {
    // utilityLib.writeJsonData({ fname: "Hiren", lname: "patel" });
    utilityLib.readJsonData();
  },
  pingSuccessCallback: function pingSuccessCallback(error) {
    console.log('An error occurred while pingSuccessCallback.', error);
  },
  pingFailCallback: function pingFailCallback(error) {
    console.log('An error occurred while pingFailCallback.', error);
  }
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.js.map