import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import Uploader from "../uploader";

class UploaderModal extends Component {
  state = { open: false };

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, size } = this.state;
    const inlineStyle = {
      modal: {
        marginTop: "20px !important",
        marginLeft: "auto",
        marginRight: "auto"
      }
    };

    return (
      <div>
        <Button onClick={this.show("mini")} size="tiny">
          Import File
        </Button>
        <Modal
          size={size}
          open={open}
          onClose={this.close}
          style={inlineStyle.modal}
        >
          <Modal.Header>Import A CSV File</Modal.Header>
          <Modal.Content>
            <Uploader />
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default UploaderModal;
