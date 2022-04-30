import React from 'react';
import { View, Text, Image } from 'react-native';

import { images, FONTS, SIEZS, COLORS, SIZES } from '../../constants'

const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
    return (
        <View
            style={{
                flex: 1,
                paddingVertical: 60,
                backgroundColor: COLORS.white,
            }}
        >
            {/* App Icon */}
            <View
                style={{
                    alignItems: 'center',
                }}
            >
                <Image
                    source={images.logo}
                    resizeMode='contain'
                    style={{
                        height: 100,
                        width: 200
                    }}
                />
            </View>

            {/* Title & Subtitle */}
            <View
                style={{
                    marginTop: SIZES.padding,
                    ...titleContainerStyle,
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        ...FONTS.h2
                    }}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        textAlign: 'center',
                        color: COLORS.darkgray,
                        marginTop: SIZES.base,
                        ...FONTS.body3
                    }}
                >
                    {subtitle}
                </Text>
            </View>

            {/* Content / Children */}
            {children}
        </View>
    )
}

export default AuthLayout;