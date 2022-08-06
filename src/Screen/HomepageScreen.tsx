/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Badge from 'Components/Badge/Badge'
import Button from 'Components/Button/Button'
import Label from 'Components/Text/Text'
import { RootStackParamList } from 'Navigators/RootStackNavigator'
import { ReactNode, useLayoutEffect } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import Colors from 'Styles/colors'
import { dateFormatter } from 'Utils/dateFormatter'

type NavigationLoginScreenProps = NativeStackNavigationProp<RootStackParamList, 'Homepage'>

const HeaderLeft = () => (
  <Image
    style={{
      width: 35,
      height: 35,
      borderRadius: 35,
    }}
    source={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
  />
)

const HeroSection = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: Colors.yellow,
      alignItems: 'center',
      borderBottomStartRadius: 45,
      borderBottomEndRadius: 45,
      marginBottom: 16,
    }}
  >
    <Label sizeVariant="super" restStyle={{ fontWeight: 'bold', color: Colors.darkGrey }}>
      {dateFormatter({
        date: new Date(),
        format: 'HH:MM',
      })}
    </Label>
    <Label
      sizeVariant="small"
      restStyle={{ color: Colors.darkGrey, textAlign: 'center', fontWeight: '500' }}
    >
      {dateFormatter({
        date: new Date(),
        format: 'iiii, d MMM yyyy',
      })}
    </Label>
  </View>
)

const HomepageSection = ({
  left,
  children,
  right,
}: {
  left: {
    label: string
  }
  children: ReactNode
  right: {
    label: string
    onPress: () => void
  }
}) => (
  <>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
      <Label restStyle={{ textTransform: 'uppercase', fontWeight: 'bold', color: Colors.darkGrey }}>
        {left.label}
      </Label>
      <TouchableOpacity onPress={right.onPress}>
        <Label restStyle={{ color: Colors.redPink }}>{right.label}</Label>
      </TouchableOpacity>
    </View>
    <View style={{ marginVertical: 12 }}>{children}</View>
  </>
)

const TodayScheduleSection = () => (
  <HomepageSection
    left={{
      label: "Today's Schedule",
    }}
    right={{
      onPress: () => undefined,
      label: 'Refresh',
    }}
  >
    <View style={{ padding: 12, backgroundColor: Colors.paleGray, borderRadius: 12 }}>
      <Label restStyle={{ fontWeight: 'bold', color: Colors.darkGrey }}>
        Mediterania Garden Residence
      </Label>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
        <View style={{ marginRight: 8 }}>
          {/* TODO: Change to Clock Icon */}
          <Image
            style={{
              width: 10,
              height: 10,
              borderRadius: 10,
            }}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <Label sizeVariant="small" restStyle={{ fontWeight: '600', color: Colors.darkGrey }}>
          {`${dateFormatter({
            date: new Date(),
            format: 'HH:MM',
          })} - ${dateFormatter({
            date: new Date(),
            format: 'HH:MM',
          })}`}
        </Label>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 4,
          justifyContent: 'space-between',
        }}
      >
        <Badge color="topaz" label="CLOCK IN" />
        <Badge color="red" label="CLOCK OUT" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 4,
        }}
      >
        <Label sizeVariant="extra-large">--:--</Label>
        <View
          style={{
            width: 150,
            borderBottomWidth: 1,
            borderStyle: 'dashed',
            marginHorizontal: 24,
            borderColor: Colors.silver,
          }}
        />
        <Label sizeVariant="extra-large">--:--</Label>
      </View>
    </View>
  </HomepageSection>
)

const MOCK_SCHEDULE_DATA = [
  {
    id: 'First Item',
  },
  {
    id: 'Second Item',
  },
  {
    id: 'Third Item',
  },
]

const CardSchedule = () => (
  <View style={{ flex: 1, padding: 12, backgroundColor: Colors.paleGray, borderRadius: 12 }}>
    <View>
      <Label restStyle={{ fontWeight: '300' }} color={Colors.silver}>
        {dateFormatter({
          date: new Date(),
          format: 'iiii',
        })}
      </Label>
      <Label sizeVariant="large" restStyle={{ fontWeight: 'bold' }}>
        {dateFormatter({
          date: new Date(),
          format: 'd MMM',
        })}
      </Label>
    </View>
    <View style={{ marginTop: 12 }}>
      <Label>Mediterania Garden Residence</Label>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 8 }}>
          {/* TODO: Change to Clock Icon */}
          <Image
            style={{
              width: 10,
              height: 10,
              borderRadius: 10,
            }}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <Label sizeVariant="small" restStyle={{ fontWeight: '600', color: Colors.darkGrey }}>
          {`${dateFormatter({
            date: new Date(),
            format: 'HH:MM',
          })} - ${dateFormatter({
            date: new Date(),
            format: 'HH:MM',
          })}`}
        </Label>
      </View>
    </View>
  </View>
)

const ScheduleGapSeparator = () => <View style={{ marginRight: 24 }} />

const NextScheduleSection = ({ navigation }: { navigation: NavigationLoginScreenProps }) => (
  <HomepageSection
    left={{
      label: 'Next Schedule',
    }}
    right={{
      onPress: () => navigation.push('AttendanceSchedule'),
      label: 'See all',
    }}
  >
    <FlatList
      data={MOCK_SCHEDULE_DATA}
      horizontal
      renderItem={CardSchedule}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ScheduleGapSeparator}
    />
  </HomepageSection>
)

const ButtonSection = () => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <View style={{ flex: 1, marginHorizontal: 12 }}>
      <Button onPress={() => undefined} label="Clock In" color="topaz" />
    </View>
    <View style={{ flex: 1, marginHorizontal: 12 }}>
      <Button onPress={() => undefined} label="Clock Out" color="grey" />
    </View>
  </View>
)

const HomepageScreen = () => {
  const navigation = useNavigation<NavigationLoginScreenProps>()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: HeaderLeft,
      // TODO change to notification icon
      headerRight: HeaderLeft,
      headerShadowVisible: false,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <HeroSection />
      <View style={{ flex: 2, marginHorizontal: 24 }}>
        <TodayScheduleSection />
        <NextScheduleSection navigation={navigation} />
      </View>
      <View
        style={{
          marginBottom: 12,
          marginHorizontal: 12,
        }}
      >
        <ButtonSection />
      </View>
    </View>
  )
}

export default HomepageScreen
