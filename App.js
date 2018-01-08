import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Loading from './components/Loading';
import reducer from'./reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer)

console.log(store.getState())

export default class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Loading />
        </Provider>
      );
    }
  }

// const API_KEY = "f322800da8cb75ca4b79f941d359d943"

// export default class App extends Component {
//     state = {
//         // isLoaded: false,
//         error: null,
//         temperature: null,
//         name: null
//     }
//     isLoaded = this.props
//     componentDidMount(){
//         navigator.geolocation.getCurrentPosition(position => {
//             this._getWeather(position.coords.latitude, position.coords.longitude)
//         },
//         error => {
//             this.setState({
//                 error: error
//             })
//         })
//     }

//     _getWeather = (lat, long) => {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
//         .then(response => response.json())
//         .then(json => {
//             this.setState({
//                 temperature: json.main.temp,
//                 name: json.weather[0].main,
//                 isLoaded: true
//             })
//         })
//     }

//     render() {
//         const {isLoaded, error, temperature, name} = this.state
//         console.log(name)
//         return (
//             <Provider store={store}>
//             <View style={styles.container}>
//                 <StatusBar barStyle={"light-content"} />
//                 {isLoaded ? 
//                 <Weather weatherName={name} temp={Math.floor(temperature - 273.15)} /> : (
//                 <View style={styles.loading}>
//                     <Text style={styles.loadingText}>Getting the weather</Text>
//                     {error ? <Text style={styles.errorText}>{error}</Text> : null}
//                 </View>
//             )}
//             </View>
//             </Provider>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     errorText:{
//         color: "red",
//         backgroundColor: "transparent",
//         marginBottom: 40
//     },
//     loading: {
//         flex: 1,
//         backgroundColor: "#FDF6AA",
//         justifyContent: "flex-end",
//         paddingLeft : 25
//     },
//     loadingText: {
//         fontSize : 38,
//         marginBottom: 100
//     }
// });
