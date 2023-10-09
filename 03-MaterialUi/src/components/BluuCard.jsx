import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import LoremIpsum from "react-lorem-ipsum";

export default function BluuCard() {
  return (
    <Card
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://via.placeholder.com/1000x200"
          height="200"
          alt="descripcion de la imagen"
        />
        <CardContent>
          <Typography variant="h5"> Card Title</Typography>
          <Typography body="1" component="p">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Platea habitant
            porta porttitor porttitor facilisi primis odio lobortis. Mollis
            dignissim accumsan himenaeos condimentum dolor. Ultricies
            consectetur sodales imperdiet malesuada ligula blandit dapibus.
            Elementum habitant et dis egestas elementum vitae cubilia. Eleifend
            non rutrum sollicitudin; congue maximus aliquam elementum. Pharetra
            gravida parturient dolor torquent venenatis nam aenean varius.
            Avehicula faucibus sed auctor ad
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary">
          Add
        </Button>
        <Button variant="outlined" color="error">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
