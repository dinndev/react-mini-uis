import React from 'react'

import {
  Button,
  Typography,
  Card,
  CardMedia,
  CardControls,
  CardContent
} from 'react-mini-uis'

const App = () => {
  return (
    <div>
      <Card size='350'>
        <CardMedia
          size='40'
          image='https://images.pexels.com/photos/4904569/pexels-photo-4904569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          title='gurl'
        />
        <CardContent>
          <Typography size='medium' component='title'>
            Portrait
          </Typography>
          <Typography size='small' component='paragraph'>
            A painting, drawing, photograph, or engraving of a person,
            especially one depicting only the face or head and shoulders.
          </Typography>
        </CardContent>
        <CardControls>
          <Button size='xsmall' color='Danger'>
            S
          </Button>
          <Button size='xsmall' color='transparent'>
            Share
          </Button>
        </CardControls>
      </Card>
    </div>
  )
}

export default App
