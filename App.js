import { 
  StyleSheet, 
  Text, 
  View, 
  Button,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
  StatusBar,
} from 'react-native'
import React from 'react'

const App = () => {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <>
      <StatusBar barStyle='light-content'/>
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View style={{width: windowWidth, height: windowHeight}}>
          <ImageBackground 
            source={require('./assets/night2.jpg')}
            style={{flex: 1}}
          />
        </View>
        <View style={{width: windowWidth, height: windowHeight}}>
          <ImageBackground 
            source={require('./assets/rainy.jpg')}
            style={{flex: 1}}
          />
        </View>
      </ScrollView>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})