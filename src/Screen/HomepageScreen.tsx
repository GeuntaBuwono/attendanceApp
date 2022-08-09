/* eslint-disable react-native/no-inline-styles */
import { faker } from '@faker-js/faker'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Badge from 'Components/Badge/Badge'
import Button from 'Components/Button/Button'
import { Icon } from 'Components/Icon/Icon'
import Label from 'Components/Text/Text'
import { useAttendanceDataBuilder } from 'Hooks/useAttendanceDataBuilder'
import { RootStackParamList } from 'Navigators/RootStackNavigator'
import { ReactNode, useEffect, useLayoutEffect, useState } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import Colors from 'Styles/colors'
import { dateFormatter } from 'Utils/dateFormatter'

type NavigationLoginScreenProps = NativeStackNavigationProp<RootStackParamList, 'Homepage'>

const HeaderLeft = () => (
  <TouchableOpacity onPress={() => undefined}>
    <Image
      style={{
        width: 32,
        height: 32,
        borderRadius: 32,
      }}
      source={{
        uri: faker.image.cats(),
      }}
    />
  </TouchableOpacity>
)

const HeaderRight = () => (
  <TouchableOpacity onPress={() => undefined}>
    <Icon name="bell" size={24} />
  </TouchableOpacity>
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
        format: 'HH:mm',
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

const TodayScheduleSection = ({
  todaySchedule,
  clockInValue,
  clockOutValue,
}: {
  todaySchedule: AttendanceInterface
  clockInValue: Date | undefined
  clockOutValue: Date | undefined
}) => (
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
      <Label restStyle={{ fontWeight: 'bold', color: Colors.darkGrey }} numberOfLines={1}>
        {todaySchedule?.store}
      </Label>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
        <View style={{ marginRight: 8 }}>
          <Icon name="clock" size={12} />
        </View>
        {todaySchedule?.schedule?.start && todaySchedule?.schedule?.end && (
          <Label sizeVariant="small" restStyle={{ fontWeight: '600', color: Colors.darkGrey }}>
            {`${dateFormatter({
              date: todaySchedule?.schedule?.start,
              format: 'HH:mm',
            })} - ${dateFormatter({
              date: todaySchedule?.schedule?.end,
              format: 'HH:mm',
            })}`}
          </Label>
        )}
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
        <Label sizeVariant={clockInValue ? 'large' : 'extra-large'}>
          {clockInValue
            ? dateFormatter({
                date: clockInValue,
                format: 'HH:mm',
              })
            : '--:--'}
        </Label>
        <View
          style={{
            width: 150,
            borderBottomWidth: 1,
            borderStyle: 'dashed',
            marginHorizontal: 24,
            borderColor: Colors.silver,
          }}
        />
        <Label sizeVariant={clockOutValue ? 'large' : 'extra-large'}>
          {clockOutValue
            ? dateFormatter({
                date: clockOutValue,
                format: 'HH:mm',
              })
            : '--:--'}
        </Label>
      </View>
    </View>
  </HomepageSection>
)

const CardSchedule = ({ onPress, data }: { onPress: () => void; data: AttendanceInterface }) => (
  <TouchableOpacity
    disabled={data.date && !data?.schedule?.start}
    onPress={data.date && data?.schedule?.start && onPress}
    style={{ flex: 1, padding: 12, backgroundColor: Colors.paleGray, borderRadius: 12, width: 225 }}
  >
    <View>
      {data?.date && (
        <Label restStyle={{ fontWeight: '300' }} color={Colors.silver}>
          {dateFormatter({
            date: data.date,
            format: 'iiii',
          })}
        </Label>
      )}
      {data?.date && (
        <Label sizeVariant="large" restStyle={{ fontWeight: 'bold' }}>
          {dateFormatter({
            date: data?.date,
            format: 'd MMM',
          })}
        </Label>
      )}
    </View>
    {data.date && data?.schedule?.start && (
      <View style={{ marginTop: 12 }}>
        <Label numberOfLines={1}>{data?.store}</Label>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginRight: 8 }}>
            <Icon name="clock" size={12} />
          </View>
          <Label sizeVariant="small" restStyle={{ fontWeight: '600', color: Colors.darkGrey }}>
            {`${
              data?.schedule?.start &&
              dateFormatter({
                date: data.schedule.start,
                format: 'HH:mm',
              })
            } - ${
              data?.schedule?.end &&
              dateFormatter({
                date: data.schedule.end,
                format: 'HH:mm',
              })
            }`}
          </Label>
        </View>
      </View>
    )}
  </TouchableOpacity>
)

const ScheduleGapSeparator = () => <View style={{ marginRight: 24 }} />

const NextScheduleSection = ({
  navigation,
  data,
}: {
  navigation: NavigationLoginScreenProps
  data: Array<AttendanceInterface>
}) => (
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
      data={data}
      horizontal
      renderItem={({ item }) => (
        <CardSchedule
          data={item}
          onPress={() =>
            navigation.push('DetailAttendanceSchedule', {
              id: item.id,
            })
          }
        />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ScheduleGapSeparator}
    />
  </HomepageSection>
)

const ButtonSection = ({
  isUserCheckedIn,
  onPress,
}: {
  isUserCheckedIn: boolean
  onPress: {
    checkIn: () => void
    checkOut: () => void
  }
}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <View style={{ flex: 1, marginHorizontal: 12 }}>
      <Button onPress={onPress.checkIn} label="Clock In" isDisabled={isUserCheckedIn} />
    </View>
    <View style={{ flex: 1, marginHorizontal: 12 }}>
      <Button onPress={onPress.checkOut} label="Clock Out" isDisabled={!isUserCheckedIn} />
    </View>
  </View>
)

const HomepageScreen = () => {
  const navigation = useNavigation<NavigationLoginScreenProps>()

  const [clockInValue, setClockInValue] = useState<Date>()
  const [clockOutValue, setClockOutValue] = useState<Date>()
  const [isUserCheckedIn, setIsUserCheckedIn] = useState(false)

  const { data: attendanceData, todaySchedule } = useAttendanceDataBuilder()

  useEffect(() => {
    attendanceData?.shift()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: HeaderLeft,
      headerRight: HeaderRight,
      headerShadowVisible: false,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <HeroSection />
      <View style={{ flex: 2, marginHorizontal: 24 }}>
        {todaySchedule?.date && (
          <TodayScheduleSection
            todaySchedule={todaySchedule}
            clockInValue={clockInValue}
            clockOutValue={clockOutValue}
          />
        )}
        <NextScheduleSection navigation={navigation} data={attendanceData ?? []} />
      </View>
      <View
        style={{
          marginBottom: 12,
          marginHorizontal: 12,
        }}
      >
        <ButtonSection
          isUserCheckedIn={isUserCheckedIn}
          onPress={{
            checkIn: () => {
              setIsUserCheckedIn(true)
              setClockInValue(new Date())
            },
            checkOut: () => {
              setClockOutValue(new Date())
              setIsUserCheckedIn(false)
            },
          }}
        />
      </View>
    </View>
  )
}

export default HomepageScreen
