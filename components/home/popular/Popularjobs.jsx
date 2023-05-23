import { useState } from 'react'
import {
  View, TouchableOpacity, ActivityIndicator, FlatList, Text
} from 'react-native'
import PopularjobCard from "../../common/cards/popular/PopularJobCard"
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import useFetch from "../../../hooks/useFetch"
const Popularjobs = () => {
  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: 1
  })

  const [selectedJob, setSelectedJob] = useState();
  console.log(data)
  error && console.log(`Error here is : ${error}`)
  const router = useRouter()

  const handleCardPress = () => {

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <Text style={styles.headerBtn}>See all</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong</Text>
        ) : (

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularjobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />

        )}
      </View>
    </View>
  )
}

export default Popularjobs