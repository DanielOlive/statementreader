import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Radio, Segment } from "semantic-ui-react";
import { transToggle } from "../actions";
import { getTransactionToggle } from "../selectors";

const TransactionToggle = ({ transToggle, toggleValue }) => {
  const toggle = () => {
    transToggle(!toggleValue);
  };
  return (
    <div>
      <p>show selected</p>
      <Segment compact>
        <Radio toggle onChange={() => toggle()} checked={toggleValue} />
      </Segment>
    </div>
  );
};

TransactionToggle.propTypes = {
  transToggle: PropTypes.func,
  toggleValue: PropTypes.bool
};

const mapStateToProps = state => ({
  toggleValue: getTransactionToggle(state)
});

const mapDispatchToProps = {
  transToggle
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionToggle);
