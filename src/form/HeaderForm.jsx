import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: 'center',
    fontSize: '40px',
    color: 'deeppink',
    textShadow: '1px 1px darkmagenta'
  }
}))

export const HeaderForm = () => {
  const styles = useStyles()

  return (
    <Typography
      className='styles.root'
      component='h2'
      variant='h2'
      >
      React Form Material
    </Typography>
  )
}
