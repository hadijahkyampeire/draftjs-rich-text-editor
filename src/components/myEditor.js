import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import { PreviewModal } from './previewModal';

const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()));

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  render() {
    const { editorState } = this.state;

    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="rich-editor demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          placeholder="The message goes here..."
        />
        <h4>Underlying HTML</h4>
        <div className="html-view">
          {getHtml(editorState)}
        </div>
        <button className="btn btn-success" data-toggle="modal" data-target="#previewModal">
          Preview message
        </button>
        <PreviewModal output={getHtml(editorState)} />
      </div>
    );
  }
}

export { MyEditor };
