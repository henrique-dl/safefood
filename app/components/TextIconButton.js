import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native'

import { FONTS, COLORS, icons2 } from '../constants';

const TextIconButton = ({
    containerStyle,
    label,
    labelStyle,
    iconStyle,
}) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                ...containerStyle
            }}
        >
            <Image
                source={icons2.google}
                style={{
                    ...styles.image,
                    ...iconStyle,
                }}
            />

            <Text
                style={{
                    ...FONTS.body3,
                    ...labelStyle
                }}
            >
                {label}
            </Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        marginLeft: 5,
        width: 20,
        height: 20,
    }
})

export default TextIconButton;