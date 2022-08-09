/* eslint-disable react-native/no-inline-styles */
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Badge from 'Components/Badge/Badge'
import { Icon } from 'Components/Icon/Icon'
import Label from 'Components/Text/Text'
import { RootStackParamList } from 'Navigators/RootStackNavigator'
import React, { useEffect, useLayoutEffect } from 'react'
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native'
import Colors from 'Styles/colors'
import { dateFormatter } from 'Utils/dateFormatter'

type DetailAttendanceScheduleRouteProp = RouteProp<RootStackParamList, 'DetailAttendanceSchedule'>
type DetailAttendanceScheduleProps = NativeStackNavigationProp<
  RootStackParamList,
  'AttendanceSchedule'
>

const MOCK_SCHEDULE_DATA = {
  date: new Date(),
  imageUri:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.benchmarkgc.com%2Fwp-content%2Fuploads%2F2015%2F10%2F1Interior_Front_Desk.jpg&f=1&nofb=1',
  store: 'Mediterania garden residence',
  location:
    'Main Lobby, Apartment Mediterania Garden Residence 1 (Bougenville Terrace) Garden Residence 1 (Bougenville Terrace)',
  schedule: {
    start: new Date('2019-09-05T08:00:00.000Z'),
    end: new Date('2019-09-05T17:00:00.000Z'),
  },
  clock: {
    in: new Date('2019-09-05T08:00:00.000Z'),
    out: new Date('2019-09-05T17:00:00.000Z'),
  },
}

const DetailSection = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <View style={{ marginBottom: 24 }}>
    <Label restStyle={{ fontWeight: 'bold', textTransform: 'uppercase' }} sizeVariant="large">
      {title}
    </Label>
    <View
      style={{
        marginTop: 12,
        backgroundColor: Colors.paleGray,
        padding: 16,
        borderRadius: 8,
      }}
    >
      {children}
    </View>
  </View>
)

const DetailAttendanceScheduleScreen = () => {
  const route = useRoute<DetailAttendanceScheduleRouteProp>()
  const navigation = useNavigation<DetailAttendanceScheduleProps>()

  useEffect(() => {
    // TODO Get Data base on Attendance ID from screen params
    // eslint-disable-next-line no-console
    console.log('route id', route.params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: dateFormatter({
        date: MOCK_SCHEDULE_DATA.date,
        format: 'd MMMM yyyy',
      }),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, paddingTop: 20, backgroundColor: Colors.white }}>
      <DetailSection title="Store">
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
            }}
            source={{
              uri: MOCK_SCHEDULE_DATA.imageUri,
            }}
          />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Label sizeVariant="large" restStyle={{ fontWeight: 'bold' }}>
              {MOCK_SCHEDULE_DATA.store}
            </Label>
            <View style={{ marginVertical: 12 }}>
              <Label
                sizeVariant="small"
                numberOfLines={2}
                restStyle={{ lineHeight: 16 }}
                color={Colors.silver}
              >
                {MOCK_SCHEDULE_DATA.location}
              </Label>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Badge label="View maps" color="red" variant="outline" size="small" />
            </TouchableOpacity>
          </View>
        </View>
      </DetailSection>
      <DetailSection title="Time Schedule">
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
          <View style={{ marginRight: 8 }}>
            <Icon name="clock" size={24} />
          </View>
          <Label restStyle={{ fontWeight: 'bold' }} color={Colors.darkGrey}>
            {`${dateFormatter({
              date: MOCK_SCHEDULE_DATA.schedule.start,
              format: 'HH:MM',
            })} - ${dateFormatter({
              date: MOCK_SCHEDULE_DATA.schedule.end,
              format: 'HH:MM',
            })}`}
          </Label>
        </View>
      </DetailSection>
      <DetailSection title="Clock In">
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
          <View style={{ marginRight: 8 }}>
            <Icon name="barcode" size={24} />
          </View>
          <Label restStyle={{ fontWeight: 'bold' }} color={Colors.darkGrey}>
            {MOCK_SCHEDULE_DATA.clock.in
              ? dateFormatter({
                  date: MOCK_SCHEDULE_DATA.clock.in,
                  format: 'HH:MM',
                })
              : ''}
          </Label>
        </View>
      </DetailSection>
      <DetailSection title="Clock Out">
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
          <View style={{ marginRight: 8 }}>
            <Icon name="barcode" size={24} />
          </View>
          <Label restStyle={{ fontWeight: 'bold' }} color={Colors.darkGrey}>
            {MOCK_SCHEDULE_DATA.clock.out
              ? dateFormatter({
                  date: MOCK_SCHEDULE_DATA.clock.out,
                  format: 'HH:MM',
                })
              : ''}
          </Label>
        </View>
      </DetailSection>
    </SafeAreaView>
  )
}

export default DetailAttendanceScheduleScreen
