import React from "react";
import { Container, Grid, Card, Typography } from "@mui/material";

function ExplainFlow() {
  return (
    <Container>
      {/* Title */}
      <Typography variant="h4" component="h1" gutterBottom>
        Flowchart Template
      </Typography>

      {/* Flowchart Content */}
      <Grid container spacing={2}>
        {/* Node 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <Typography variant="h6">Node 1</Typography>
            <Typography variant="body1">This is the content of Node 1.</Typography>
          </Card>
        </Grid>

        {/* Node 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <Typography variant="h6">Node 2</Typography>
            <Typography variant="body1">This is the content of Node 2.</Typography>
          </Card>
        </Grid>

        {/* Node 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <Typography variant="h6">Node 3</Typography>
            <Typography variant="body1">This is the content of Node 3.</Typography>
          </Card>
        </Grid>

        {/* Connectors */}
        <Grid item xs={12} sm={6} md={4} style={{ textAlign: "center" }}>
          <Typography variant="h6">Connectors</Typography>
          <Typography variant="body1">Use lines/arrows to connect the nodes.</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ExplainFlow;
