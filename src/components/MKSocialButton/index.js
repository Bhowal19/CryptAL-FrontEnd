/**
=========================================================
* CryptAL React - v2.1.0
=========================================================

* Product Page: https://Ayan Bhowal (https://www.linkedin.com/in/ayan-bhowal/) and Varun Bhatacharya (https://www.linkedin.com/in/varunbhattacharya/)/product/material-kit-react
* Copyright 2023 Ayan Bhowal (https://www.linkedin.com/in/ayan-bhowal/) and Varun Bhatacharya (https://www.linkedin.com/in/varunbhattacharya/)

Coded by Ayan Bhowal (https://www.linkedin.com/in/ayan-bhowal/) and Varun Bhatacharya (https://www.linkedin.com/in/varunbhattacharya/)

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MKSocialButton
import MKSocialButtonRoot from "components/MKSocialButton/MKSocialButtonRoot";

const MKSocialButton = forwardRef(({ color, size, iconOnly, circular, children, ...rest }, ref) => (
  <MKSocialButtonRoot
    {...rest}
    ref={ref}
    variant="contained"
    color="primary"
    size={size}
    ownerState={{ color, size, iconOnly, circular }}
  >
    {children}
  </MKSocialButtonRoot>
));

// Setting default values for the props of MKSocialButton
MKSocialButton.defaultProps = {
  size: "medium",
  color: "facebook",
  iconOnly: false,
  circular: false,
};

// Typechecking props for the MKSocialButton
MKSocialButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
    "pinterest",
    "youtube",
    "github",
    "vimeo",
    "slack",
    "dribbble",
    "reddit",
    "tumblr",
  ]),
  iconOnly: PropTypes.bool,
  circular: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MKSocialButton;
