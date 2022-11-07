import React from 'react'
import {
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native'
import TMContactsModule, { ContactCard, TMProvider } from 'rn-tap-me-contacts'
import theme from './styles/theme'
const App = () => {
  const ColorScheme = useColorScheme()
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
  function handleButtonPress() {
    console.log('Pressed')
  }
  return (
    <TMProvider theme={theme}>
      <View style={containerStyle}>
        <TouchableOpacity>
          <Text>Toggle Theme</Text>
        </TouchableOpacity>
        {users.map((item) => {
          return (
            <ContactCard
              {...item}
              rightContent={'button'}
              buttonText={`Invite ${item.name}`}
              onButtonPress={handleButtonPress}
            />
          )
        })}
      </View>
    </TMProvider>
  )
}

export default App
