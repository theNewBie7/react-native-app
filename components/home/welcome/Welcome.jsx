import React, { useState } from 'react'
import { View, TouchableOpacity, FlatList, Text, TextInput, Image } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons, images, SIZES } from "../../../constants"
const Welcome = () => {
  const [activeJobtype, setActiveJobType] = useState('Full-Time')
  const router = useRouter()
  const jobTypes = ['Full-Time', 'Part-Time', 'Remote']
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.user} >Hello Josh</Text>
        <Text style={styles.welcomeMessage}>Find your Perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => { }}
            placeholder='What are you looking for ? '
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobtype, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}

            >
              <Text style={styles.tabText(activeJobtype, item)}>{item}</Text>
            </TouchableOpacity>
          )}

          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome