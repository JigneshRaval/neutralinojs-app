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

}
