/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Badge from 'Components/Badge/Badge'
import { Icon } from 'Components/Icon/Icon'
import Label from 'Components/Text/Text'
import * as dateFns from 'date-fns'
import { RootStackParamList } from 'Navigators/RootStackNavigator'
import React, { useLayoutEffect } from 'react'
import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native'
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
  const isSunday = dateFns.getDay(date) === 0

  return (
    <View style={{ alignItems: 'center' }}>
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
  location: string
  onPress: () => void
}

const CardUpcomingSchedule = ({ date, location, onPress }: CardUpcomingScheduleInterface) => {
  const isToday = dateFns.isToday(date)

  return (
    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={onPress}>
      <DateItem date={date} />
      <ContentItemStyled itemType="hasSchedule">
        <Label restStyle={{ fontWeight: 'bold' }}>{location}</Label>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4, marginTop: 12 }}
        >
          <View style={{ marginRight: 8 }}>
            <Icon name="clock" size={12} />
          </View>
          <Label sizeVariant="small" restStyle={{ fontWeight: '600', color: Colors.darkGrey }}>
            {`${dateFormatter({
              date: date,
              format: 'HH:mm',
            })} - ${dateFormatter({
              date: date,
              format: 'HH:mm',
            })}`}
          </Label>
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
  <View style={{ flexDirection: 'row' }}>
    <DateItem date={date} />
    <ContentItemStyled itemType="noSchedule">
      <Label restStyle={{ fontWeight: 'bold' }}>NO SCHEDULE</Label>
    </ContentItemStyled>
  </View>
)

const ScheduleGapSeparator = () => <View style={{ marginBottom: 12 }} />

const MOCK_SCHEDULE_DATA = [
  {
    id: 'First Item',
    date: new Date(),
    location: 'Mediterania Garden Residence1',
  },
  {
    id: 'Second Item',
    date: new Date(),
    location: 'Mediterania Garden Residence2',
    isNoSchedule: true,
  },
  {
    id: 'Third Item',
    date: new Date('2019-09-05T00:00:00.000Z'),
    location: 'Mediterania Garden Residence3',
  },
  {
    id: 'Fourth Item',
    date: new Date('2019-09-01T00:00:00.000Z'),
    location: 'Mediterania Garden Residence4',
  },
  {
    id: 'First Item1',
    date: new Date(),
    location: 'Mediterania Garden Residence5',
  },
  {
    id: 'Second Item1',
    date: new Date(),
    location: 'Mediterania Garden Residence6',
    isNoSchedule: true,
  },
  {
    id: 'Third Item1',
    date: new Date('2019-09-08T00:00:00.000Z'),
    location: 'Mediterania Garden Residence7',
  },
  {
    id: 'Fourth Item1',
    date: new Date('2019-09-08T00:00:00.000Z'),
    location: 'Mediterania Garden Residence8',
  },
  {
    id: 'First Item2',
    date: new Date(),
    location: 'Mediterania Garden Residence',
  },
  {
    id: 'Second Item2',
    date: new Date(),
    location: 'Mediterania Garden Residence',
    isNoSchedule: true,
  },
  {
    id: 'Third Item2',
    date: new Date('2019-09-08T00:00:00.000Z'),
    location: 'Mediterania Garden Residence',
  },
  {
    id: 'Fourth Item2',
    date: new Date('2019-09-08T00:00:00.000Z'),
    location: 'Mediterania Garden Residence',
  },
]

const AttendanceScheduleScreen = () => {
  const navigation = useNavigation<NavigationLoginScreenProps>()

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
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
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
          ListFooterComponent={ScheduleGapSeparator}
          ItemSeparatorComponent={ScheduleGapSeparator}
          style={{ paddingHorizontal: 16 }}
          data={MOCK_SCHEDULE_DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            item.isNoSchedule ? (
              <CardNoSchedule date={item.date} />
            ) : (
              <CardUpcomingSchedule
                date={item.date}
                location={item.location}
                onPress={() =>
                  navigation.push('DetailAttendanceSchedule', {
                    id: 'id__DetailAttendanceSchedule__1',
                  })
                }
              />
            )
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default AttendanceScheduleScreen
