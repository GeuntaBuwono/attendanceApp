/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Badge from 'Components/Badge/Badge'
import { Icon } from 'Components/Icon/Icon'
import Label from 'Components/Text/Text'
import * as dateFns from 'date-fns'
import { useAttendanceDataBuilder } from 'Hooks/useAttendanceDataBuilder'
import { BasicScreenLayout } from 'Layouts/BasicScreenLayout'
import { RootStackParamList } from 'Navigators/RootStackNavigator'
import React, { useLayoutEffect } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import Colors from 'Styles/colors'
import { dateFormatter } from 'Utils/dateFormatter'

type NavigationLoginScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'AttendanceSchedule'
>
const HeaderRight = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name="refresh" size={20} />
  </TouchableOpacity>
)

interface DateItemInterface {
  date: Date
}

const DateItem = ({ date }: DateItemInterface) => {
  const isSunday = dateFns.getDay(new Date(date)) === 0

  return (
    <View style={{ alignItems: 'center', width: 35 }} renderToHardwareTextureAndroid>
      <Label
        restStyle={{
          color: Colors.silver,
          textTransform: 'uppercase',
          letterSpacing: 0.5,
        }}
      >
        {dateFormatter({
          date,
          format: 'iii',
        })}
      </Label>
      <Label
        restStyle={{ color: isSunday ? Colors.redPink : Colors.darkGrey, fontWeight: 'bold' }}
        sizeVariant="large"
      >
        {dateFormatter({
          date,
          format: 'd',
        })}
      </Label>
    </View>
  )
}

const ContentItemStyled = styled(View)<{ itemType: 'noSchedule' | 'hasSchedule' }>`
  border-radius: 12px;
  flex: 1;
  margin-left: 12px;
  min-height: 64px;
  padding: 12px;
  ${({ itemType }) => {
    if (itemType === 'noSchedule') {
      return {
        alignItems: 'center',
        borderColor: Colors.paleGray,
        borderWidth: 2,
        borderStyle: 'dashed',
        justifyContent: 'center',
      }
    } else {
      return {
        backgroundColor: Colors.paleGray,
        minHeight: 64,
      }
    }
  }}
`

interface CardUpcomingScheduleInterface extends DateItemInterface {
  data: AttendanceInterface
  onPress: () => void
}

const CARD_SCHEDULE_HEIGHT = 75

const CardUpcomingSchedule = ({ data, onPress }: CardUpcomingScheduleInterface) => {
  const isToday = data.schedule?.start && dateFns.isToday(new Date(data.schedule?.start))

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', height: CARD_SCHEDULE_HEIGHT }}
      onPress={onPress}
    >
      <DateItem date={data.date} />
      <ContentItemStyled itemType="hasSchedule">
        <Label numberOfLines={1} restStyle={{ fontWeight: 'bold' }}>
          {data.location}
        </Label>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4, marginTop: 12 }}
        >
          <View style={{ marginRight: 8 }}>
            <Icon name="clock" size={12} />
          </View>
          {data.schedule?.start && data.schedule?.end && (
            <Label sizeVariant="small" restStyle={{ fontWeight: '600', color: Colors.darkGrey }}>
              {`${dateFormatter({
                date: data.schedule?.start,
                format: 'HH:mm',
              })} - ${dateFormatter({
                date: data.schedule?.end,
                format: 'HH:mm',
              })}`}
            </Label>
          )}
          {isToday && (
            <View style={{ marginLeft: 6 }}>
              <Badge label="TODAY" color="red" size="small" />
            </View>
          )}
        </View>
      </ContentItemStyled>
    </TouchableOpacity>
  )
}

const CardNoSchedule = ({ date }: DateItemInterface) => (
  <View
    style={{ flexDirection: 'row', height: CARD_SCHEDULE_HEIGHT }}
    renderToHardwareTextureAndroid
  >
    <DateItem date={date} />
    <ContentItemStyled itemType="noSchedule" renderToHardwareTextureAndroid>
      <Label restStyle={{ fontWeight: 'bold' }}>NO SCHEDULE</Label>
    </ContentItemStyled>
  </View>
)

const ScheduleGapSeparator = () => <View style={{ marginBottom: 12 }} />

const AttendanceScheduleScreen = () => {
  const navigation = useNavigation<NavigationLoginScreenProps>()

  const { data: attendanceData } = useAttendanceDataBuilder()

  useLayoutEffect(() => {
    navigation.setOptions({
      // TODO Add Refresh List
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <HeaderRight onPress={() => undefined} />,
      headerShadowVisible: false,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BasicScreenLayout>
      <View
        testID="attendanceContainerTestId"
        style={{
          flex: 1,
        }}
      >
        <View style={{ marginVertical: 16, paddingHorizontal: 16 }}>
          <Label restStyle={{ fontWeight: 'bold' }} sizeVariant="large">
            {dateFormatter({
              date: new Date(),
              format: 'MMMM yyyy',
            })}
          </Label>
        </View>
        <FlatList
          getItemLayout={(_data, index) => ({
            length: CARD_SCHEDULE_HEIGHT,
            offset: CARD_SCHEDULE_HEIGHT * index,
            index,
          })}
          removeClippedSubviews
          initialNumToRender={7}
          maxToRenderPerBatch={7}
          ListFooterComponent={ScheduleGapSeparator}
          ItemSeparatorComponent={ScheduleGapSeparator}
          style={{ paddingHorizontal: 16 }}
          data={attendanceData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            item.date && item.schedule?.start ? (
              <CardUpcomingSchedule
                data={item}
                date={item.date}
                onPress={() => {
                  requestAnimationFrame(() => {
                    navigation.push('DetailAttendanceSchedule', {
                      id: item.id,
                    })
                  })
                }}
              />
            ) : (
              <CardNoSchedule date={item.date} />
            )
          }
        />
      </View>
    </BasicScreenLayout>
  )
}

export default AttendanceScheduleScreen
