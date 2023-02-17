import { Box } from '@mui/material'
import React from 'react'
import SquareField from '../SquareField'

type Props = {}

export default function Header({}: Props) {
  return (
    <SquareField>
        <Box>Notificações</Box>
        <Box>Natã Araujo</Box>
    </SquareField>
  )
}