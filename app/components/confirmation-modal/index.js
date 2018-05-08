import React from "react";
import PropTypes from "prop-types";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const ConfirmationModal = ({ cta, description, title, yesBtn }) => {
  const inlineStyle = {
    modal: {
      marginTop: "20px !important",
      marginLeft: "auto",
      marginRight: "auto"
    }
  };

  return (
    <Modal trigger={<Button>{cta}</Button>} closeIcon style={inlineStyle.modal}>
      <Header icon="archive" content={title} />
      <Modal.Content>
        <p>{description}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red">
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={yesBtn}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  cta: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
};

export default ConfirmationModal;
