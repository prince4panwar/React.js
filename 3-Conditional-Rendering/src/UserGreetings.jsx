import React from "react";
import PropTypes from "prop-types";
function UserGreetings(props) {
  const welcomeMessage = (
    <h2 className="welcome-msg">Welcome {props.username}</h2>
  );
  const loginPrompt = (
    <h2 className="login-prompt">Please log in to continue</h2>
  );
  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreetings.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreetings.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGreetings;
