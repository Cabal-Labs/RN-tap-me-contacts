import React from 'react'
import {
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native'
import TMContactsModule, {
  ContactCard,
  ContactList,
  TMProvider,
} from 'rn-tap-me-contacts'
import theme from './styles/theme'
const App = () => {
  const ColorScheme = useColorScheme()

  const containerStyle = {
    paddingTop: 50,
    paddingHorizontal: 5,
  }
  const actions = [
    {
      text: 'Say Hello',
      method: 'custom',
      action: () => console.log('hello'),
      variant: 'contained',
    },
    {
      text: 'Say bye',
      method: 'custom',
      action: () => console.log('bye'),
      variant: 'outlined',
    },
  ]
  return (
    <TMProvider theme={theme}>
      <View style={containerStyle}>
        <TouchableOpacity>
          <Text>Toggle Theme</Text>
        </TouchableOpacity>
        <ContactList
          walletAddress='hello'
          actionStyle='right'
          actions={actions}
        />
      </View>
    </TMProvider>
  )
}

export default App
