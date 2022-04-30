import React from 'react';
import {
    View,
    Text
} from 'react-native';

const MainLayout = (props) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white'
            }}
        >
            <Text>A FAZER</Text>
        </View>
    )
}

export default MainLayout;