import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import AttendanceScheduleScreen from 'Screen/AttendanceScheduleScreen'
import DetailAttendanceScheduleScreen from 'Screen/DetailAttendanceScheduleScreen'
import HomepageScreen from 'Screen/HomepageScreen'
import Colors from 'Styles/colors'

export type RootStackParamList = {
  Homepage: undefined
  AttendanceSchedule: undefined
  DetailAttendanceSchedule: {
    id: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const DEFAULT_HEADER_TITLE_OPTIONS_STYLE: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
}

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Homepage"
        screenOptions={{
          ...DEFAULT_HEADER_TITLE_OPTIONS_STYLE,
          statusBarTranslucent: true,
          statusBarColor: Colors.yellow,
          statusBarStyle: 'dark',
          headerStyle: {
            backgroundColor: Colors.yellow,
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Homepage"
          component={HomepageScreen}
          options={{
            title: 'LIVE ATTENDANCE',
          }}
        />
        <Stack.Screen
          name="AttendanceSchedule"
          component={AttendanceScheduleScreen}
          options={{ title: 'UPCOMING SCHEDULE' }}
        />
        <Stack.Screen name="DetailAttendanceSchedule" component={DetailAttendanceScheduleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStackNavigator
