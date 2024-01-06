import React from "react";
import Carousel from "./carousel";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./TipoTela.css";
import Design from "../../imagens/saudacao/Design.svg";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  Button,
  CardMedia,
} from "@mui/material";
import "../../components/basecss/base.css";

export default function TipoTela() {
  return (
    <>
      <div className="Navbar">
        <Navbar />
      </div>

    <section className="telas">
      <div className="recepcao">
    <Box width='300px'>
      <Card >
        <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            React
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eum aut voluptatem fugit sit aliquid ipsa! Autem, voluptatum dicta vitae perferendis consequatur adipisci, eius reiciendis aut labore eaque enim quam.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>
            <NavLink to="/telas/tvRecepcao" target="blank">
              Selecionar
            </NavLink>
          </Button>
        </CardActions>
        </CardActionArea>
      </Card>
    </Box>
    </div>

        <div className="torre">
          <Box width="300px">
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="unsplash image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Torre
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <NavLink to="/telas/tvTorre" target="blank">
                      Selecionar
                    </NavLink>
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Box>
        </div>
      </section>

      {/* <div className="telas">
    <div className="recepcao">
      <NavLink to="/telas/tvRecepcao" target="blank">
        <h1>Tv Recepção</h1>
      </NavLink>
      </div>
      <div className="torre">
      <NavLink to="/telas/tvTorre" target="blank">
        <h1>Tv Torre</h1>
      </NavLink>
    </div>
  </div> */}
    </>
  );
}
