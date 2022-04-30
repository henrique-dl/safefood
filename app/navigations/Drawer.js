import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { MainLayout } from '../screens';
import Tabs from './Tabs'
import { COLORS, FONTS, SIZES, constants, icons2, icons, images } from '../constants';

const Drawer = createDrawerNavigator()

const CustomDrawerItem = ({ label, icon }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 40,
                marginBottom: SIZES.base,
                alignItems: 'center',
                paddingLeft: SIZES.base,
                borderRadius: SIZES.base,
            }}
        >
            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black
                }}
            />

            <Text
                style={{
                    marginLeft: 15,
                    color: COLORS.black,
                    ...FONTS.h3
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({ navigation }) => {
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
                                tintColor: COLORS.black
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
                        <Text style={{ color: COLORS.black, ...FONTS.h3 }}>Teste nome</Text>
                        <Text style={{ color: COLORS.black, ...FONTS.body4 }}>Ver meu perfil</Text>
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
                        marginLeft: SIZES.base,
                        backgroundColor: COLORS.darkGray
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

                <TouchableOpacity
                    style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        height: 40,
                        marginBottom: SIZES.base,
                        alignItems: 'center',
                        paddingLeft: SIZES.base,
                        borderRadius: SIZES.base,
                    }}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Image
                        source={icons2.logout}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.black,
                        }}
                    />
                    <Text style={{ color: COLORS.black, ...FONTS.h3, marginLeft: SIZES.padding }}>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}

const MainScreen = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: 'slide',
                overlayColor: 'transparent',
                drawerStyle: {
                    flex: 1,
                    width: '65%',
                    paddingRight: 20,
                    backgroundColor: COLORS.lightGray2
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
            <Drawer.Screen name='MainLayout' component={Tabs} />
        </Drawer.Navigator>
    )
}

export default MainScreen;