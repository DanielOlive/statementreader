import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Menu, Segment } from "semantic-ui-react";
// require("./global-navigation.css")

class GlobalNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "home" };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
    this.props.history.push(`/${name}`);
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="dashboard"
              active={activeItem === "dashboard"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="account"
              active={activeItem === "account"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Segment>
      </div>
    );
  }
}

/* GlobalNav.propTypes = {
  history: PropTypes.func
} */

export default withRouter(GlobalNav);
