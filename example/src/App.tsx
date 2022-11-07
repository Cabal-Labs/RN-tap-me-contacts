import React from 'react'
import { View } from 'react-native'
import TMContactsModule, { ContactCard, TMProvider } from 'rn-tap-me-contacts'
import theme from './styles/theme'
const App = () => {
  const users = [
    {
      picture: `https://xsgames.co/randomusers/avatar.php?g=${
        Math.random() < 0.5 ? 'male' : 'female'
      }`,
      altPicture: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      name: 'Jordan A',
      // size: 'lg',
    },
    {
      picture: `https://xsgames.co/randomusers/avatar.php?g=${
        Math.random() < 0.5 ? 'male' : 'female'
      }`,
      altPicture: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      name: 'Jordan A',
    },
    {
      picture: `https://xsgames.co/randomusers/avatar.php?g=${
        Math.random() < 0.5 ? 'male' : 'female'
      }`,
      altPicture: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      name: 'Jordan A',
      // size: 'sm',
    },
  ]
  const containerStyle = {
    paddingTop: 50,
    paddingHorizontal: 5,
  }
  return (
    <TMProvider theme={theme}>
      <View style={containerStyle}>
        {users.map((item) => {
          return <ContactCard {...item} />
        })}
      </View>
    </TMProvider>
  )
}

export default App
