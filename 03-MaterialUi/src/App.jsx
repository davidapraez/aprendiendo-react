import { Button, Container, Typography, Box, Grid, Stack } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import CastleIcon from "@mui/icons-material/Castle";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import Product from "./components/Product";
import BluuCard from "./components/BluuCard";
import CustomImageList from "./components/listImgs";
import PruebaImgs from "./components/pruebaImg";
import Child from "./components/Child";
import { useState } from "react";

export default function App() {
  const [nombre, setNombre] = useState("Mario");
  const [mensaje, setMensaje] = useState("");

  const addmensaje = (mensaje) => {
    console.log(mensaje, "esss");
    setMensaje(mensaje);
  };

  return (
    <>
      <Child nombre={nombre} addmensaje={addmensaje} />
      <h1>{mensaje}</h1>
      <Container>
        <h1>Que pedo</h1>
        <PruebaImgs />
      </Container>
      <Container sx={{ alignItems: "center" }}>
        <CustomImageList />
      </Container>
      <Container sx={{ border: 5, boxShadow: 10, pb: 2, mt: 5 }}>
        <BluuCard />
      </Container>

      <Container
        sx={{
          border: 2,
          boxShadow: 20,
          pb: 2,
        }}
        mt={5}
      >
        <Product />
      </Container>
      <Container sx={{ border: 5, boxShadow: 10, pb: 2 }}>
        <h1>App</h1>

        <Typography
          color="primary"
          variant="h1"
          component="h3"
          sx={{ border: 5, boxShadow: 10, pb: 2 }}
        >
          App h1 con componente
        </Typography>
        <Typography
          variant="body1"
          mt={10}
          sx={{ border: 5, boxShadow: 10, pb: 2 }}
        >
          App h1 con componente
        </Typography>
        <Box sx={{ border: 5, boxShadow: 10, p: 2 }} mt={5}>
          Es una cja
        </Box>
        <Button
          variant="contained"
          mt={10}
          color="secondary"
          endIcon={<AirplanemodeActiveIcon />}
        >
          Mi primer boton
        </Button>
        <Button
          variant="outlined"
          mt={10}
          color="success"
          startIcon={<CastleIcon />}
        >
          Chuloooo
        </Button>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <p>
              {" "}
              <LoremIpsum p={2} />
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <p>
              {" "}
              <LoremIpsum p={1} />
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <p>
              {" "}
              <LoremIpsum p={1} />
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
