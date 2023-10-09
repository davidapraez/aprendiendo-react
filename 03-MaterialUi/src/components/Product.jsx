import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function Product() {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <Img src="https://via.placeholder.com/200" alt="imagensss" />
      <Box sx={{ flexGrow: 1, display: "grid", gap: 4 }}>
        <Typography variant="h4"> Product name</Typography>
        <Typography variant="h6"> Product Description</Typography>
        <Button variant="contained" color="success">
          Add Cart
        </Button>
      </Box>
      <Box sx={{ mr: 2 }} component="p">
        $19.99
      </Box>
    </Paper>
  );
}
