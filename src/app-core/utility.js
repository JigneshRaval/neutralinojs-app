export class UtilityLib {

    constructor() {
        console.log('UtilityLib loaded...')
    }

    removeAllChildNodes(parent) {
        if (parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
    }

    // Create file on disk with given data
    // ================================================
    createFile(fileName, data) {
        Neutralino.filesystem.writeFile(fileName, data,
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
    readFileData(fileName) {
        Neutralino.filesystem.readFile(fileName,
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

    // Read JSON file from storage folder
    // ================================================
    readJsonData() {
        var _this = this;
        // The stored data is being retrieved from the JSON based data store.
        Neutralino.storage.getData('notes',
            // executes when data is successfully retrieved.
            function (content) {
                // the data that has been retrieved.
                console.log('The data you requested for \n', content);
                if (content && content.tasks) {
                    _this.getNoteList(content.tasks);
                    _this.showNoteDetail(content.tasks[0].description)
                }
            },
            // executes if an error occurs
            function (error) {
                console.log('An error occured while retrieving the data.', error);
            }
        );
    }

    // Create JSON file in storage folder
    // ================================================
    writeJsonData(dataObj) {
        var _this = this;
        console.log('writeJsonData function called...', dataObj);
        // Javascript Object to be stored as JSON
        let data = {
            bucket: 'notes',
            content: {
                tasks: [
                    ...dataObj || {
                        dateCreated: new Date().getTime(),
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
                _this.readJsonData();
            },
            // executes if an error occurs
            function (error) {
                console.log('An error occurred while saving the Data', error);
            }
        );
    }

    // Display list of items on the screen
    getNoteList(data) {
        var leftPanel = document.querySelector('aside');
        var floatingMenuItems = document.querySelectorAll('.floating-menu li button');


        // First clear or remove all list items to avoid duplicate nodes
        this.removeAllChildNodes(leftPanel);

        if (data && data.length > 0) {
            data.map(function (note, index) {
                leftPanel.innerHTML += '<a href="#" data-note-id="' + index + '">' + note.title + '</a>';
            });

            let allLinks = leftPanel.querySelectorAll('a');
            let allLinksArray = Array.apply(null, allLinks);

            // Bind click event to all the note items in the sidebar panel
            if (allLinks && allLinks.length > 0) {
                [].forEach.call(allLinks, (link) => {
                    link.addEventListener('click', (event) => {
                        this.showNoteDetail(link.dataset.noteId, data[link.dataset.noteId]);

                        allLinksArray.forEach(item => {
                            item.classList.remove('active');
                        });

                        link.classList.add('active');

                        // Set noteId to floating menu items
                        [].forEach.call(floatingMenuItems, (menuItem) => {
                            menuItem.setAttribute('data-note-id', link.dataset.noteId);
                        })
                    });
                });
            }

            allLinksArray[0].click();
            allLinksArray[0].classList.add('active');

        }
    }

    buildNoteHeader(index, data) {
        let noteHeader = `
        <header class="note__header">
            <div class="note-header__content">
                <h1>${data.title}</h1>
                <!-- <div class="note-header__tags-list">Tagged as
                    <ul>
                        <li class=""><a href="javascript:void(0);" data-tag-name="RxJs"><span uk-icon="tag"></span> #RxJs</a></li>
                    </ul>
                </div> -->
                <div class="control-buttons">${this.createBtnGroup(index)}</div>
            </div>
        </header>`;

        return noteHeader;
    }

    // Display details on click of left navigation item
    showNoteDetail(index, data) {
        if (data) {
            var noteContent = document.querySelector('.note-content');
            noteContent.setAttribute('data-current-note-id', index);
            noteContent.innerHTML = this.buildNoteHeader(index, data) +
                "<article>" + data.description + "</article>";
        }

        // Set selected note id to container element
        let noteContentContainer = document.querySelector('.note-editor.note-frame');
        if (noteContentContainer) {
            noteContentContainer.setAttribute('data-current-note-id', index);
        }

        let codeBlockElem = document.querySelectorAll('pre code');
        [].forEach.call(codeBlockElem, (block) => {
            hljs.highlightBlock(block);
        });
    }

    createBtnGroup(noteId) {
        let editBtn = `<button type="button" class="btn btn-primary" data-note-id="${noteId}" onclick="utilityLib.editNote(event, ${noteId})">Edit Note</button> `;
        let saveBtn = `<button type="button" class="btn btn-primary" data-note-id="${noteId}" onclick="utilityLib.saveNote(event, ${noteId})">Save Note</button> `;
        let deleteBtn = `<button type="button" class="btn btn-danger" data-note-id="${noteId}" onclick="utilityLib.deleteNote(event, ${noteId})">Delete Note</button>`;

        let btnGroup = editBtn + saveBtn + deleteBtn;

        return btnGroup;
    }

    // Edit Single Note
    editNote(event, noteId) {
        console.log('Edit Note :', event, noteId);
        $('.note-content > article').summernote({
            focus: true,
            callbacks: {
                // https://stackoverflow.com/questions/43491553/how-to-remove-style-attributes-from-tags-on-summernote-onpaste/56279119#56279119
                onPaste: function (e) {
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
        });
    };

    // Save Single Note
    saveNote(event, noteId) {
        var _this = this;
        var noteId = noteId || Number(event.target.dataset.noteId);
        console.log('Save Note :', event, noteId);

        var markup = $('.note-content > article').summernote('code');

        // The stored data is being retrieved from the JSON based data store.
        Neutralino.storage.getData('notes',
            // executes when data is successfully retrieved.
            function (content) {
                // the data that has been retrieved.
                console.log('The data you requested for \n', content);
                if (content && content.tasks) {
                    var filtered = content.tasks.map(function (note, index) {

                        if (index === noteId) {
                            console.log(index, noteId);
                            note.description = markup;
                        };
                        return note;
                    });
                    console.log('saveNote Data : ', filtered);
                    _this.writeJsonData(filtered);
                    $('.note-content > article').summernote('destroy');
                }
            },
            // executes if an error occurs
            function (error) {
                console.log('An error occurred while retrieving the data.', error);
            }
        );
    };

    // Delete Single Note
    deleteNote(event, noteId) {
        var _this = this;
        var noteId = noteId || Number(event.target.dataset.noteId);
        console.log('Delete Note :', event, noteId);

        // The stored data is being retrieved from the JSON based data store.
        Neutralino.storage.getData('notes',
            // executes when data is successfully retrieved.
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
            },
            // executes if an error occurs
            function (error) {
                console.log('An error occurred while retrieving the data.', error);
            }
        );
    }

}
