/* eslint-disable react-native/no-inline-styles */
import { RouteProp, useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Badge from 'Components/Badge/Badge'
import { Icon } from 'Components/Icon/Icon'
import Label from 'Components/Text/Text'
import { useAttendanceDataBuilder } from 'Hooks/useAttendanceDataBuilder'
import { BasicScreenLayout } from 'Layouts/BasicScreenLayout'
import { RootStackParamList } from 'Navigators/RootStackNavigator'
import React, { useLayoutEffect, useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import Colors from 'Styles/colors'
import { dateFormatter } from 'Utils/dateFormatter'

type DetailAttendanceScheduleRouteProp = RouteProp<RootStackParamList, 'DetailAttendanceSchedule'>
type DetailAttendanceScheduleProps = NativeStackNavigationProp<
  RootStackParamList,
  'AttendanceSchedule'
>

const DetailSection = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <View style={{ marginBottom: 24 }} renderToHardwareTextureAndroid>
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

  const [detailAttendance, setDetailAttendance] = useState<AttendanceInterface>()

  const { data: attendanceData } = useAttendanceDataBuilder()

  useFocusEffect(() => {
    const detailAttendanceData = attendanceData?.filter((data) => data.id === route.params.id)[0]

    if (!detailAttendance) {
      setDetailAttendance(detailAttendanceData)
    }
  })

  useLayoutEffect(() => {
    detailAttendance?.schedule?.start &&
      navigation.setOptions({
        title: dateFormatter({
          date: detailAttendance?.schedule?.start,
          format: 'd MMMM yyyy',
        }),
      })
  }, [detailAttendance?.schedule?.start, navigation])

  if (detailAttendance) {
    return (
      <BasicScreenLayout padding={16}>
        <DetailSection title="Store">
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
              }}
              source={{
                uri: detailAttendance?.imageUri,
              }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Label sizeVariant="large" restStyle={{ fontWeight: 'bold' }}>
                {detailAttendance?.store}
              </Label>
              <View style={{ marginVertical: 12 }}>
                <Label
                  sizeVariant="small"
                  numberOfLines={2}
                  restStyle={{ lineHeight: 16 }}
                  color={Colors.silver}
                >
                  {detailAttendance?.location}
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
                date: detailAttendance?.schedule?.start ?? new Date(),
                format: 'HH:mm',
              })} - ${dateFormatter({
                date: detailAttendance?.schedule?.end ?? new Date(),
                format: 'HH:mm',
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
              {detailAttendance?.clock.in
                ? dateFormatter({
                    date: detailAttendance?.clock.in,
                    format: 'HH:mm',
                  })
                : '--:--'}
            </Label>
          </View>
        </DetailSection>
        <DetailSection title="Clock Out">
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
            <View style={{ marginRight: 8 }}>
              <Icon name="barcode" size={24} />
            </View>
            <Label restStyle={{ fontWeight: 'bold' }} color={Colors.darkGrey}>
              {detailAttendance?.clock.out
                ? dateFormatter({
                    date: detailAttendance?.clock.out,
                    format: 'HH:mm',
                  })
                : '--:--'}
            </Label>
          </View>
        </DetailSection>
      </BasicScreenLayout>
    )
  }

  return (
    <View>
      <Label>No Schedule</Label>
    </View>
  )
}

export default DetailAttendanceScheduleScreen
