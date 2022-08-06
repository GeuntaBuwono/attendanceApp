/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'Navigators/RootStackNavigator'
import { Button, Text, View } from 'react-native'

type NavigationLoginScreenProps = NativeStackNavigationProp<RootStackParamList, 'Homepage'>

const HomepageScreen = () => {
  const navigation = useNavigation<NavigationLoginScreenProps>()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
      }}
    >
      <Text style={{ textAlign: 'center' }}>Homepage</Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <Button onPress={() => navigation.push('AttendanceSchedule')} title="Attendance Schedule" />
      </View>
    </View>
  )
}

export default HomepageScreen
