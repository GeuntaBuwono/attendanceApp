/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView } from 'react-native'
import Colors from 'Styles/colors'

export const BasicScreenLayout = ({
  children,
  padding,
  testID,
}: {
  children: React.ReactNode
  padding?: number
  testID?: string
}) => (
  <SafeAreaView testID={testID} style={{ flex: 1, backgroundColor: Colors.white, padding }}>
    {children}
  </SafeAreaView>
)
