import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { MainLayout } from '../screens';
import { COLORS, FONTS, SIZES, constants, icons2, icons, images } from '../constants';

const Drawer = createDrawerNavigator()

const CustomDrawerItem = ({label, icon}) => {
    return (
        <TouchableOpacity
        style={{
            flexDirection: 'row',
            height: 40,
            marginBottom: SIZES.base,
            alignItems: 'center',
            // paddingLeft: SIZES.radius,
            paddingLeft: SIZES.base,
            borderRadius: SIZES.base,
            // backgroundColor
        }}
        // onPress
        >
            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.white
                }}
            />

            <Text
                style={{
                    marginLeft: 15,
                    color: COLORS.white,
                    ...FONTS.h3
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({navigation}) => {
    return (
        <DrawerContentScrollView
        scrollEnabled={true}
        contentContainerStyle={{ flex: 1 }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.radius
                }}
            >
                {/* Close */}
                <View
                    style={{
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image 
                            source={icons2.cross}
                            style={{
                                height: 35,
                                width: 35,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>
                
                {/* Profile */}
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        alignItems: 'center'
                    }}
                    onPress={() => console.log("Profile")}
                >
                    <Image
                        source={images.avatar_1}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            marginLeft: SIZES.radius
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Teste nome</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>Ver meu perfil</Text>
                    </View>
                </TouchableOpacity>

                {/* Drawer Items */}
                <View
                    style={{
                        flex: 1,
                        marginTop: SIZES.padding,
                        // added
                        paddingTop: 20
                    }}
                >
                    <CustomDrawerItem
                        label={constants.screens.home}
                        icon={icons2.home}
                    />

                    <CustomDrawerItem
                        label="Configurações"
                        icon={icons2.setting}
                    />

                    <CustomDrawerItem
                        label={constants.screens.notification}
                        icon={icons2.notification}
                    />

                    <CustomDrawerItem
                        label={constants.screens.favourite}
                        icon={icons2.favourite}
                    />

                {/* Line Divider */}
                <View
                    style={{
                        height: 1,
                        marginVertical: SIZES.padding,
                        // marginVertical: SIZES.radius,
                        // marginLeft: SIZES.radius,
                        marginLeft: SIZES.base,
                        backgroundColor: COLORS.lightGray
                    }}
                />

                    <CustomDrawerItem
                        label="Locais"
                        icon={icons2.location}
                    />

                    <CustomDrawerItem
                        label={constants.screens.help}
                        icon={icons2.help}
                    />

                    <CustomDrawerItem
                        label="Convidar amigos"
                        icon={icons2.profile}
                    />
                </View>

                <View
                    style={{
                        // marginBottom: SIZES.padding
                        marginBottom: 60
                    }}
                >
                    <CustomDrawerItem
                        label="Sair"
                        icon={icons2.logout}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const CustomDrawer = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.primary
            }}
        >
            <Drawer.Navigator
                screenOptions={{
                    drawerType: 'slide',
                    overlayColor: 'transparent',
                    drawerStyle: {
                        flex: 1,
                        width: '65%',
                        paddingRight: 20,
                        backgroundColor: 'transparent'
                    },
                    sceneContainerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerShown: false,
                    initialRouteName: 'MainLayout',
                }}
                drawerContent={props => {  
                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                        />
                    )
                }}
            >
                <Drawer.Screen name='MainLayout'>
                    {props => <MainLayout {...props} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer;