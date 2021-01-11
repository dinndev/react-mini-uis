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
      <Card size='500'>
        <CardContent>
          <Typography component='title'>Portrait</Typography>
          <Typography size='medium' component='Paragraph'>
            A painting, drawing, photograph, or engraving of a person,
            especially one depicting only the face or head and shoulders.
          </Typography>
        </CardContent>
        <CardControls>
          <Button size='small' theme='dark'>
            Share
          </Button>
        </CardControls>
        <CardMedia
          size='40'
          image='https://images.pexels.com/photos/4904569/pexels-photo-4904569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          title='gurl'
        />
      </Card>
    </div>
  )
}

export default App
