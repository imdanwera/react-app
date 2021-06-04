import React, { Component } from 'react';

class FileUploadComponent extends Component {

    uploadFile = () => {

        alert("Done");

    }

    render() {
        return (
            <div>
                <div>
                    <h1>Hello React World</h1>
                </div>
                <div>
                    <input type="file" id="myfile1" name="myfile1"/>
                </div>
                <button onClick={this.uploadFile}>Upload</button>
            </div>
        );
    }
}

export default FileUploadComponent;
