import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  FlatList,
  Pressable,
  Image,
  Button,
  SafeAreaView,
} from 'react-native';

const image = {
  uri: 'https://i.pinimg.com/736x/0c/07/54/0c0754bff050208051230bfb322bebeb.jpg',
};
import img1 from './../../assets/images/1.jpeg';
import img2 from './../../assets/images/2.jpeg';
import img3 from './../../assets/images/3.jpeg';
import img4 from './../../assets/images/4.jpeg';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.boxViewFull}>
          <View style={styles.boxView}>
            <Pressable
              style={{flex: 1}}
              onPress={() => navigation.navigate('Details')}>
              <Image source={img1} style={styles.image} />
            </Pressable>
          </View>
          <View style={styles.boxView}>
            <Pressable
              style={{flex: 1}}
              onPress={() => navigation.navigate('Details')}>
              <Image source={img2} style={styles.image} />
            </Pressable>
          </View>
        </View>
        <View style={styles.boxViewFull}>
          <View style={styles.boxView}>
            <Pressable
              style={{flex: 1}}
              onPress={() => navigation.navigate('Details')}>
              <Image source={img3} style={styles.image} />
            </Pressable>
          </View>
          <View style={styles.boxView}>
            <Pressable
              style={{flex: 1}}
              onPress={() => navigation.navigate('Details')}>
              <Image source={img4} style={styles.image} />
            </Pressable>
          </View>
        </View>
        <View style={styles.boxViewFull}>
          <View style={styles.boxView}>
            <Pressable
              style={{flex: 1}}
              onPress={() => navigation.navigate('Details')}>
              <Image source={image} style={styles.image} />
            </Pressable>
          </View>
          <View style={styles.boxView}>
            <Pressable
              style={{flex: 1}}
              onPress={() => navigation.navigate('Details')}>
              <Image source={image} style={styles.image} />
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  button: {
    alignItem: 'flex-start',
    width: '50%',
  },
  boxView: {
    flex: 0.45,
    borderRadius: 20,
  },
  boxViewFull: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    margin: 10,

    alignItems: 'stretch',
  },
});
export default HomeScreen;
