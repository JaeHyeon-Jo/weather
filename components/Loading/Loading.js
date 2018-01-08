import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from '../Weather';
import reducer from'../../reducer';
import Button from '../Button'

const API_KEY = "f322800da8cb75ca4b79f941d359d943"

export default class App extends Component {
    state = {
        isLoaded: false,
        error: null,
        temperature: null,
        name: null
    }
    // isLoaded = this.props
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(position => {
            this._getWeather(position.coords.latitude, position.coords.longitude)
        },
        error => {
            this.setState({
                error: error
            })
        })
    }

    _getWeather = (lat, long) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
        .then(response => response.json())
        .then(json => {
            this.setState({
                temperature: json.main.temp,
                name: json.weather[0].main,
                // isLoaded: true
            })
        })
    }

    render() {
        const {isLoaded, error, temperature, name} = this.state
        const {isLoaded1, restartApp, loadedApp} = this.props
        console.log(isLoaded1)
        return (
            
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                {isLoaded1 ? 
                <Weather weatherName={name} temp={Math.floor(temperature - 273.15)} restartApp={restartApp} isLoaded={isLoaded1} loadedApp={loadedApp} /> : (
                <View style={styles.loading}>
                    <Button style={styles.button} iconName={"arrow-down-bold-circle"} onPress={loadedApp} />
                    <Text style={styles.loadingText}>Getting the weather</Text>
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                </View>
            )}
            </View>
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    errorText:{
        color: "red",
        backgroundColor: "transparent",
        marginBottom: 40
    },
    loading: {
        flex: 1,
        backgroundColor: "#FDF6AA",
        paddingLeft : 25
    },
    loadingText: {
        flex:1,
        fontSize : 38
    },
    button: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
});
