import * as React from 'react';
import { Grid } from '@mui/material';
import FloorTab from '../../components/tabelaAndar/tabelaAndar';
import './Painel.css';

export default function Painel() {
    const mezzaninoItems = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
          },
          {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
          },
    ];

    const primeiroAndarItems = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
          },
          {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
          },
          {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
          },
          {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
          },
    ];

    const segundoAndarItems = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
          },
          {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
          },
    ];

    const terceiroAndarItems = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
          },
          {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
          },
          {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
          },
          {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
          },
    ];

    const quartoAndarItems = [

    ];

    const quintoAndarItems = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
          },
          {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
          },
          {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
          },
    ];

    const sextoAndarItems = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
          },
          {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
          },
          {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
          },
          {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
          },
    ];

    const andares = [
        { title: "Mezanino", items: mezzaninoItems },
        { title: "1º Andar", items: primeiroAndarItems },
        { title: "2º Andar", items: segundoAndarItems },
        { title: "3º Andar", items: terceiroAndarItems },
        { title: "4º Andar", items: quartoAndarItems },
        { title: "5º Andar", items: quintoAndarItems },
        { title: "6º Andar", items: sextoAndarItems },
      ];

      return (
        <Grid container spacing={1} className='painelRecepcao'>
        {andares.map((andar, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={1.6} xl={1}>
            <FloorTab title={andar.title} items={andar.items} />
          </Grid>
        ))}
      </Grid>
      );
    }

