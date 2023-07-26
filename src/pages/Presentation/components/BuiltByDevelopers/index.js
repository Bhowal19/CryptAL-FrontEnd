/*
=========================================================
* CryptAL React - v2.1.0
=========================================================

* Product Page: https://Ayan Bhowal (https://www.linkedin.com/in/ayan-bhowal/) and Varun Bhatacharya (https://www.linkedin.com/in/varunbhattacharya/)/product/material-kit-react
* Copyright 2023 Ayan Bhowal (https://www.linkedin.com/in/ayan-bhowal/) and Varun Bhatacharya (https://www.linkedin.com/in/varunbhattacharya/)

Coded by Ayan Bhowal (https://www.linkedin.com/in/ayan-bhowal/) and Varun Bhatacharya (https://www.linkedin.com/in/varunbhattacharya/)

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// CryptAL React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// import htuImage from "htu.png";

function BuiltByDevelopers() {
  const bgImage =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";
  // const htu = htuImage;
  return (
    <>
      <div className="container max-w-screen-lg mx-auto text-center pb-10">
        <img src={bgImage} className="self-center object-center items-center max-w-sm"></img>
      </div>
      <MKBox
        display="flex"
        alignItems="center"
        borderRadius="xl"
        my={2}
        py={6}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
            <MKTypography variant="h4" color="white" fontWeight="bold">
              Built by Landurasss
            </MKTypography>
            <MKTypography variant="h1" color="white" mb={1}>
              Complex Documentation
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
              From colors, cards, typography to complex elements, you will find the full
              documentation. Play with the utility classes and you will create unlimited
              combinations for our components.
            </MKTypography>
            <MKTypography
              component="a"
              href="https://Ayan Bhowal (https://www.linkedin.com/in/ayan-bhowal/) and Varun Bhatacharya (https://www.linkedin.com/in/varunbhattacharya/)/learning-lab/react/overview/material-kit/"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="white"
              fontWeight="regular"
              sx={{
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: `translateX(3px)`,
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: `translateX(6px)`,
                },
              }}
            >
              Read docs <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default BuiltByDevelopers;
