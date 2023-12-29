import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import style from './style.css'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function ButtonUpload({label}) {
  return (
    <Button component="label" variant="outlined" id="buttonUpload" >
    {label}
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}