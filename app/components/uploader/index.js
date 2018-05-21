import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Button, Message } from "semantic-ui-react";
import { uploadCSV } from "../../containers/dashboard/actions";
import InlineErrors from "../../components/messages/inlineError";

class Uploader extends React.Component {
  state = {
    data: {},
    loading: false,
    errors: {}
  };

  onFormSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      const formData = new FormData();
      formData.append("file", this.state.data.uploader);

      this.props
        .uploadCSV(formData)
        .then(() => this.setState({ loading: false }))
        .catch(err => {
          this.setState({ errors: err.response.data.errors, loading: false });
        });
    }
  };

  onFileLoad = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.files[0] }
    });
  };

  validate = data => {
    const errors = {};
    if (data.uploader.type !== "text/csv")
      errors.uploader = "Only csv files can be uploaded at present.";
    return errors;
  };

  render() {
    const { errors, loading } = this.state;
    const enableUpload = this.state.data.uploader === undefined;

    return (
      <Form
        onSubmit={this.onFormSubmit}
        className="file-uploader"
        loading={loading}
      >
        {errors.global && (
          <Message negative>
            <Message.Header>Server error</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field>
          <label htmlFor="uploader">Please upload a csv file</label>
          <input
            type="file"
            id="uploader"
            name="uploader"
            placeholder="Browse"
            onChange={this.onFileLoad}
            className="file-uploader__input"
            color="teal"
          />
          {errors.uploader && <InlineErrors text={errors.uploader} />}
        </Form.Field>

        <Button type="submit" disabled={enableUpload}>
          file upload
        </Button>
      </Form>
    );
  }
}

Uploader.propTypes = {
  uploadCSV: PropTypes.func
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {
  uploadCSV
};

export default connect(mapStateToProps, mapDispatchToProps)(Uploader);
