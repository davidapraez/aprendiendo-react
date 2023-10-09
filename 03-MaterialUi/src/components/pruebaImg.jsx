import * as React from "react";
import { Stack, Grid, Box } from "@mui/material";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function PruebaImgs() {
  function handleStarClick(title) {
    console.log(`Se hizo clic en la estrella para: ${title}`);
  }

  function handleDeleteClick(title) {
    console.log(`Se hizo clic en eliminar para: ${title}`);
    // Agrega la lógica para eliminar el elemento si es necesario
  }

  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [showText, setShowText] = useState(false);
  return (
    <Grid container p="24px" direction="row" spacing={2}>
      {itemData.map((item, index) => (
        <Grid
          item
          xs={6}
          md={2}
          key={index}
          style={{
            height: "172px",
            width: "136px",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <img
            {...srcset(item.img, 250, 200)}
            alt={item.title}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Añadido para ajustar la imagen
            }}
          />
          {hoveredItem === index && (
            <Box
              className="overlay"
              style={{
                background: `transparent`,
                backdropFilter: "blur(2px)",
                position: "absolute",
                top: 16,
                left: 16,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center", // Centrar horizontalmente
                alignItems: "center", // Centrar verticalmente
                flexDirection: "column",
                zIndex: 1,
                transition: "background 0.3s ease",
              }}
            >
              <IconButton
                sx={{ color: "yellow", position: "relative" }}
                onClick={() => handleStarClick(item.title)}
                onMouseEnter={() => setShowText(true)}
                onMouseLeave={() => setShowText(false)}
              >
                <StarBorderIcon />
                {showText && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%", // Centra verticalmente
                      left: "50%", // Centra horizontalmente
                      transform: "translate(-50%, -50%)", // Centra el contenido
                      fontSize: "12px", // Tamaño de fuente
                      color: "white", // Color de texto
                      background: "rgba(0, 0, 0, 0.7)", // Fondo transparente
                      padding: "4px 8px", // Espacio alrededor del texto
                      borderRadius: "4px", // Bordes redondeados
                    }}
                  >
                    Add to media
                  </div>
                )}
              </IconButton>
            </Box>
          )}
        </Grid>
      ))}
    </Grid>
  );
}
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];
