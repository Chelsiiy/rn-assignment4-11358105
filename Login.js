import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LinearGradient from 'react-native-linear-gradient';

export default function Homepage() {
  const activities = [
    { key: '1', activity: 'Jr Executive', company: 'Apple', salary: '$180,000', location: 'Accra, Ghana', icon: require('./assets/104490_apple_icon.png') },
    { key: '2', activity: 'Product Manager', company: 'Facebook', salary: '$160,000', location: 'Accra, Ghana', icon: require('./assets/3225194_app_facebook_logo_media_popular_icon.png') },
    { key: '3', activity: 'Data Scientist', company: 'IBM', salary: '$280,000', location: 'California, USA', icon: require('./assets/7422428_ibm_hardware_technology_computer_icon.png') },
    { key: '4', activity: 'UI/UX Designer', company: 'Google', salary: '$100,000', location: 'Accra, Ghana', icon: require('./assets/2993685_brand_brands_google_logo_logos_icon.png') },
    { key: '5', activity: 'Frontend Developer', company: 'Samsung', salary: '$150,000', location: 'London, England', icon: require('./assets/4691268_samsung_icon.png') },
    { key: '6', activity: 'Backend Developer', company: 'HP', salary: '$300,000', location: 'Tokyo, Japan', icon: require('./assets/99710_hp_icon.png') },
    { key: '7', activity: 'Full-stack Developer', company: 'Microsoft', salary: '$200,000', location: 'Kumasi, Ghana', icon: require('./assets/294669_microsoft_icon.png') },
    { key: '8', activity: 'Mobile Developer', company: 'YouTube', salary: '$350,000', location: 'Silicon Valley, USA', icon: require('./assets/294703_youtube_icon.png') },
  ];

  return (
    <View style={styles.container}>
      <ScrollView vertical style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.text}>Chelsea Adeniji</Text>
          <Image source={require('./assets/1564535_customer_user_userphoto_account_person_icon.png')} style={styles.picture} />
        </View>
        <Text style={styles.smallText}>Chelsea@gmail.com</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Search a job or position"
          />
          <Image source={require('./assets/search.png')} style={styles.orangePicture} />
        </View>
        <View style={styles.featuredHeader}>
          <Text style={styles.randomtext}>Featured Jobs</Text>
          <Text style={styles.randomtext}>See All</Text>
        </View>
        <ScrollView horizontal style={styles.horizontalScrollView}>
          {activities.map((activity) => (
            <View key={activity.key} style={styles.exerciseContainer}>
              <LinearGradient colors={['#ff7e5f', '#feb47b']} style={styles.exercise}>
                <Text style={styles.exerciseText}>{activity.activity}</Text>
                <Text style={styles.taskText}>{activity.company}</Text>
                <Text style={styles.taskText}>{activity.salary}</Text>
                <Text style={styles.taskText}>{activity.location}</Text>
                <Image source={activity.icon} style={styles.largeActivityIcon} />
              </LinearGradient>
            </View>
          ))}
        </ScrollView>
        <Text style={styles.randomtext}>Popular Jobs</Text>
        <FlatList
          data={activities}
          renderItem={({ item }) => (
            <View style={styles.activityItem}>
              <Text style={styles.activityText}>{item.activity}</Text>
            </View>
          )}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingTop: 52,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    flex: 1,
  },
  smallText: {
    fontSize: 20,
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  textInput: {
    paddingLeft: 20,
    width: 300,
    height: 49,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  orangePicture: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 25,
  },
  randomtext: {
    fontSize: 25,
  },
  scrollView: {
    width: '100%',
  },
  horizontalScrollView: {
    marginTop: 10,
    paddingBottom: 10,
  },
  exerciseContainer: {
    marginRight: 15,
  },
  exercise: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  exerciseText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center",
    color: 'white',
  },
  taskText: {
    fontSize: 12,
    color: 'white',
    marginTop: 10,
    textAlign: "center",
  },
  activityItem: {
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    backgroundColor: '#FFF',
    width: 350,
    height: 90,
  },
  activityText: {
    fontSize: 20,
    textAlign: 'center',
  },
  largeActivityIcon: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  picture: {
    width: 50,
    height: 50,
  },
});

