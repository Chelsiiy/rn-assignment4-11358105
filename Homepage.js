import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Image } from 'react-native';

export default function Homepage() {
  const activities = [
    { key: '1', activity: 'Jr Executive' },
    { key: '2', activity: 'Product Manager' },
    { key: '3', activity: 'Data Scientist' },
    { key: '4', activity: 'UI/UX Designer' },
    { key: '5', activity: 'Frontend Developer' },
    { key: '6', activity: 'Backend Developer' },
    { key: '7', activity: 'Full-stack Developer' },
    { key: '8', activity: 'Mobile Developer' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView vertical style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.text}>Chelsea Adeniji</Text>
          <Image source={require('./assets/1564535_customer_user_userphoto_account_person_icon.png')} style={styles.picture}/>
        </View>
        <Text style={styles.smallText}>Chelsea@gmail.com</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Search a job or position"
          />
          <Image source={require('./assets/search.png')} style={styles.orangePicture}/>
        </View>
        <Text style={styles.randomtext}>Featured Jobs</Text>
         <Text style={styles.randomtext}>See All</Text>
        <ScrollView horizontal style={styles.horizontalScrollView}>
          <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>Jr Executive</Text>
              <Text style={styles.taskText}>Apple</Text>
              <Text style={styles.taskText}>$180,000</Text>
              <Text style={styles.taskText}>Accra,Ghana</Text>
              <Image source={require('./assets/104490_apple_icon.png')} style={styles.largeActivityIcon}/>
            </View>
          </View>
           <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>Project Manager</Text>
              <Text style={styles.taskText}>Facebook</Text>
              <Text style={styles.taskText}>$160,000</Text>
              <Text style={styles.taskText}>Accra,Ghana</Text>
              <Image source={require('./assets/3225194_app_facebook_logo_media_popular_icon.png')} style={styles.largeActivityIcon}/>
            </View>
          </View>
           <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>UI/UX Designer</Text>
              <Text style={styles.taskText}>Google</Text>
              <Text style={styles.taskText}>$100,000</Text>
              <Text style={styles.taskText}>Accra,Ghana</Text>
              <Image source={require('./assets/2993685_brand_brands_google_logo_logos_icon.png')} style={styles.largeActivityIcon}/>
            </View>
          </View>
           <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>Data scientist</Text>
              <Text style={styles.taskText}>IBM</Text>
              <Text style={styles.taskText}>$280,000</Text>
              <Text style={styles.taskText}>California,USA</Text>
              <Image source={require('./assets/7422428_ibm_hardware_technology_computer_icon.png')} style={styles.largeActivityIcon}/>
            </View>
          </View>
          <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>Front-End Developer</Text>
              <Text style={styles.taskText}>Samsung</Text>
              <Text style={styles.taskText}>$150,000</Text>
              <Text style={styles.taskText}>London,England</Text>
              <Image source={require('./assets/4691268_samsung_icon.png')} style={styles.largeActivityIcon}/>
            </View>
          </View>
           <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>Data Engineer</Text>
              <Text style={styles.taskText}>HP</Text>
              <Text style={styles.taskText}>$300,000</Text>
              <Text style={styles.taskText}>Tokyo,Japan</Text>
              <Image source={require('./assets/99710_hp_icon.png')} style={styles.largeActivityIcon}/>
            </View>
          </View>
           <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>Network Administrator</Text>
              <Text style={styles.taskText}>Microsoft</Text>
              <Text style={styles.taskText}>$200,000</Text>
              <Text style={styles.taskText}>Kumasi,Ghana</Text>
              <Image source={require('./assets/294669_microsoft_icon.png')} style={styles.largeActivityIcon}/>
            </View>
          </View>
           <View style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseText}>Cybersecurity Specialist</Text>
              <Text style={styles.taskText}>Youtube</Text>
              <Text style={styles.taskText}>$350,000</Text>
              <Text style={styles.taskText}>Silicon Valley,USA</Text>
              <Image source={require('./assets/294703_youtube_icon.png')} style={styles.largeActivityIcon}/>
            </View>
          </View>
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
    backgroundColor: '#FFFDD1',
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
  randomtext: {
    marginTop: 25,
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
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF',
  },
  exerciseText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center",
  },
  taskText: {
    fontSize: 12,
    color: 'black',
    marginTop: 10,
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
  }
});
