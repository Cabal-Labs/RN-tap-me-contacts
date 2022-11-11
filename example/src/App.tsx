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
      action: () => console.log('hello'),
      method: 'custom',
    },
    {
      text: 'Say bye',
      action: () => console.log('bye'),
      method: 'custom',
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
