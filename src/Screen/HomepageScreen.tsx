/* eslint-disable react-native/no-inline-styles */
import { faker } from '@faker-js/faker'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Badge from 'Components/Badge/Badge'
import Button from 'Components/Button/Button'
import { Icon } from 'Components/Icon/Icon'
import Label from 'Components/Text/Text'
import { useAttendanceDataBuilder } from 'Hooks/useAttendanceDataBuilder'
import { BasicScreenLayout } from 'Layouts/BasicScreenLayout'
import { RootStackParamList } from 'Navigators/RootStackNavigator'
import { memo, ReactNode, useEffect, useLayoutEffect, useState } from 'react'
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
    <View
      style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}
      renderToHardwareTextureAndroid
    >
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

const TodayScheduleSection = ({ todaySchedule }: { todaySchedule: AttendanceInterface }) => (
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
        <Label sizeVariant={todaySchedule.clock.in ? 'large' : 'extra-large'}>
          {todaySchedule.clock.in
            ? dateFormatter({
                date: todaySchedule.clock.in,
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
        <Label sizeVariant={todaySchedule.clock.out ? 'large' : 'extra-large'}>
          {todaySchedule.clock.out
            ? dateFormatter({
                date: todaySchedule.clock.out,
                format: 'HH:mm',
              })
            : '--:--'}
        </Label>
      </View>
    </View>
  </HomepageSection>
)

const TodayScheduleSectionMemorize = memo(TodayScheduleSection)

const CARD_SCHEDULE_WIDTH = 225

const CardSchedule = ({ onPress, data }: { onPress: () => void; data: AttendanceInterface }) => (
  <TouchableOpacity
    disabled={data.date && !data?.schedule?.start}
    onPress={data.date && data?.schedule?.start && onPress}
    style={{
      flex: 1,
      padding: 12,
      backgroundColor: Colors.paleGray,
      borderRadius: 12,
      width: CARD_SCHEDULE_WIDTH,
    }}
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
      removeClippedSubviews
      initialNumToRender={2}
      maxToRenderPerBatch={6}
      data={data}
      horizontal
      renderItem={({ item }) => (
        <CardSchedule
          data={item}
          onPress={() => {
            requestAnimationFrame(() => {
              navigation.push('DetailAttendanceSchedule', {
                id: item.id,
              })
            })
          }}
        />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ScheduleGapSeparator}
    />
  </HomepageSection>
)

const ButtonSection = ({
  data,
  onPress,
  isUserNeedCheckIn,
}: {
  data: AttendanceInterface
  isUserNeedCheckIn: boolean
  onPress: {
    checkIn: () => void
    checkOut: () => void
  }
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1, marginHorizontal: 12 }}>
        <Button
          onPress={onPress.checkIn}
          label="Clock In"
          isDisabled={isUserNeedCheckIn && !data.clock.in}
        />
      </View>
      <View style={{ flex: 1, marginHorizontal: 12 }}>
        <Button
          onPress={onPress.checkOut}
          label="Clock Out"
          isDisabled={!isUserNeedCheckIn && !data.clock.out}
        />
      </View>
    </View>
  )
}

const HomepageScreen = () => {
  const navigation = useNavigation<NavigationLoginScreenProps>()

  const [isUserNeedCheckIn, setIsUserNeedCheckIn] = useState(false)
  const [nextSchedule, setNextSchedule] = useState<Array<AttendanceInterface>>()

  const { data: attendanceData, todaySchedule, setData } = useAttendanceDataBuilder()

  useEffect(() => {
    const buildNextScheduleList = () => {
      const fullAttendance = attendanceData && [...attendanceData]
      fullAttendance?.shift()
      setNextSchedule(fullAttendance)
    }
    buildNextScheduleList()
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

  const handlePressClockInOut = () => {
    setIsUserNeedCheckIn(!isUserNeedCheckIn)

    if (todaySchedule) {
      const updatedClockData: ClockInterface = !isUserNeedCheckIn
        ? {
            ...todaySchedule.clock,
            in: new Date(),
          }
        : {
            ...todaySchedule.clock,
            out: new Date(),
          }

      if (attendanceData) {
        attendanceData[0].clock = updatedClockData

        setData([...new Set(attendanceData)])
      }
    }
  }

  return (
    <BasicScreenLayout>
      <HeroSection />
      <View style={{ flex: 2, marginHorizontal: 24 }} renderToHardwareTextureAndroid>
        {todaySchedule?.date && <TodayScheduleSectionMemorize todaySchedule={todaySchedule} />}
        {nextSchedule && <NextScheduleSection navigation={navigation} data={nextSchedule} />}
      </View>
      <View
        style={{
          marginBottom: 12,
          marginHorizontal: 12,
        }}
      >
        {todaySchedule && (
          <ButtonSection
            isUserNeedCheckIn={isUserNeedCheckIn}
            data={todaySchedule}
            onPress={{
              checkIn: handlePressClockInOut,
              checkOut: handlePressClockInOut,
            }}
          />
        )}
      </View>
    </BasicScreenLayout>
  )
}

export default HomepageScreen
