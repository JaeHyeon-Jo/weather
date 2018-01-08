import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import {LinearGradient} from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from 'prop-types';
import Button from "../Button";
import App from "../../App"

const weatherCases = {
    Rain: {
        colors: ['#A2F6FF','#1266FF'],
        title: "Raining",
        subtitle: "For more info look outside",
        icon: "weather-rainy"
    },
    Clear: {
        colors: ['#FF5E00','#FFA648'],
        title: "Sunny day",
        subtitle: "Let's go outside",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ['#0090B7','#36FFFF'],
        title: "Thunderstorm",
        subtitle: "Watch out!",
        icon: "weather-lightning"
    },
    Clouds: {
        colors: ['#8C8C8C','#D4D4D4'],
        title: "Clouds",
        subtitle: "How about chicken tonight?",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ['#F361A6','#FFBBFF'],
        title: "Snow",
        subtitle: "Do you wanna build a snowman?",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors: ['#7DAB12','#D7FF6C'],
        title: "Drizzle",
        subtitle: "Listen some K-pop music",
        icon: "weather-hail"
    },
    Haze: {
        colors: ['#5D5D5D','#C9C9C9'],
        title: "Haze",
        subtitle: "Eat some pizza!",
        icon: "weather-fog"
    },
    Mist: {
        colors: ['#662500','#E4A37E'],
        title: "Mist",
        subtitle: "Watch out while driving!",
        icon: "weather-fog"
    }
}

function Weather({weatherName, temp, restartApp, isLoaded, loadedApp }){
    // const {isLoaded1, restartApp, loadedApp} = this.props
    console.log(isLoaded)
    // if(!isLoaded){<App/>}
    return(
        <LinearGradient 
            colors={weatherCases[weatherName].colors} 
            style={styles.container}
        >
            <View style={styles.upper}>
                { !isLoaded && 
                (<Button iconName={weatherCases[weatherName].icon} onPress={loadedApp} />)
                }
                { isLoaded && 
                (<Button iconName={weatherCases[weatherName].icon} onPress={restartApp} />)
                }
                {/* <Button iconName={weatherCases[weatherName].icon} onPress={restartApp} /> */}
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>
                {weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>
                {weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex:1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 100
    }

})
