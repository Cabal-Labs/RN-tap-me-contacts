import React from 'react'
import { View } from 'react-native'
import TMContactsModule, { ContactCard } from 'rn-tap-me-contacts'

const App = () => {
  const users = [
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
    },
    {
      picture: `https://xsgames.co/randomusers/avatar.php?g=${
        Math.random() < 0.5 ? 'male' : 'female'
      }`,
      altPicture: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      name: 'Jordan A',
    },
  ]
  const containerStyle = {
    paddingTop: 50,
    paddingHorizontal: 5,
  }
  return (
    <View style={containerStyle}>
      {users.map((item) => {
        return <ContactCard {...item} />
      })}
    </View>
  )
}

export default App
