import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import * as AuthSession from 'expo-auth-session';


import { FONTS, COLORS, icons2 } from '../constants';

const TextGoogleButton = ({
    containerStyle,
    label,
    labelStyle,
    iconStyle,
}) => {
    async function handleGoogleSignIn() {
        try {
            const CLIENT_ID = "556033828524-0p5bugvus75j9jh71r384suq5qhkct1b.apps.googleusercontent.com";
            const REDIRECT_URI = "https://auth.expo.io/@viyuka/SafeFood";
            const RESPONSE_TYPE = "token";
            const SCOPE = encodeURI("profile email");

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { type, params } = await AuthSession.startAsync({ authUrl });


        } catch (error) {
            console.log(error);
        }
    }
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                ...containerStyle
            }}
            onPress={handleGoogleSignIn}
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

export default TextGoogleButton;