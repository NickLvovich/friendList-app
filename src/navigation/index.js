import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ViewNotes from '../screens/ViewNotes'
import AddNotes from '../screens/AddNotes'
import Ban from '../screens/Ban'

const StackNavigator = createStackNavigator(
  {
    ViewNotes: {
      screen: ViewNotes
    },
    AddNotes: {
      screen: AddNotes
    },
    Ban: {
      screen: Ban
    }
  },
  {
    initialRouteName: 'ViewNotes',
    headerMode: 'none',
    mode: 'modal'
  }
)

export default createAppContainer(StackNavigator)
