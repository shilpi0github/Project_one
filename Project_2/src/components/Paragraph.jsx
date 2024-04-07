import { Typography } from '@mui/material'
import React from 'react'

const Paragraph = ({ text, maxWidth, mx, textAlign }) => {
  return (
    <Typography
    sx={{
      maxWidth: maxWidth,
      mx: mx,
      textAlign: textAlign,
      py: 3,
      color: 'pink',
    }}
    >
        {text}
    </Typography>
  )
}

export default Paragraph