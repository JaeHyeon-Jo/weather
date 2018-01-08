import React from 'react';
import PropTypes from "prop-types";
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Button({iconName, onPress}){
    console.log(onPress)
    return (
        <TouchableOpacity onPressOut={onPress}>
            <MaterialCommunityIcons name={iconName} size={144} color="white" />
        </TouchableOpacity>
    )
}

Button.PropTypes = {
    iconName: PropTypes.string.isRequired,
    onPressOut: PropTypes.func.isRequired
}

export default Button


