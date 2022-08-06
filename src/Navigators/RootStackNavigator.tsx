import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AttendanceScheduleScreen from 'Screen/AttendanceScheduleScreen'
import DetailAttendanceScheduleScreen from 'Screen/DetailAttendanceScheduleScreen'
import HomepageScreen from 'Screen/HomepageScreen'

export type RootStackParamList = {
  Homepage: undefined
  AttendanceSchedule: undefined
  DetailAttendanceSchedule: {
    id: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Homepage"
        screenOptions={{
          headerShown: false,
          headerTintColor: '#FFF',
          headerTitle: 'Loading',
        }}
      >
        <Stack.Group>
          <Stack.Screen name="Homepage" component={HomepageScreen} />
          <Stack.Screen name="AttendanceSchedule" component={AttendanceScheduleScreen} />
          <Stack.Screen
            name="DetailAttendanceSchedule"
            component={DetailAttendanceScheduleScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStackNavigator
