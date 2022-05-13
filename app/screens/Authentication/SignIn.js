import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { AuthLayout } from '../';
import { FONTS, SIZES, COLORS, icons, icons2, images } from '../../constants';

import { FormInput, CustomSwitch, TextButton, TextGoogleButton } from '../../components';

import { utils } from '../../utils'; 

const SignIn = ({ navigation }) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [emailError, setEmailError] = React.useState('')

    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)

    function isEnableSignIn() {
        return email != '' && password != '' && emailError == ''
    }

    return (
        <AuthLayout
            title="Faça seu login"
            subtitle="Bem vindo de volta, sentimos sua falta"
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2,
                    paddingHorizontal: SIZES.padding * 2
                }}
            >
                {/* Form Inputs */}
                <FormInput
                    label='Email'
                    keyboardType='email-address'
                    autoCompleteType='email'
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={email == '' || (email != '' && emailError == '') ?
                                icons2.correct : icons2.cross}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: email == '' ? COLORS.gray 
                                    : (email != '' && emailError == '') ? COLORS.green 
                                    : COLORS.red
                                }}
                            />
                        </View>
                    }
                />

                <FormInput
                    label='Senha'
                    secureTextEntry={!showPass}
                    autoCompleteType='password'
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => setPassword(value)}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image 
                                source={showPass ? icons2.eye_close : icons2.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                />

                {/* Save me & Forgot Password */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'space-between'
                    }}
                >
                    <CustomSwitch
                        value={saveMe}
                        onChange={(value) => setSaveMe(value)}
                    />

                    <TextButton
                        label='Redefinir senha'
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                        onPress={() => navigation.navigate('ForgotPassword')}
                    />
                </View>

                {/* Sign In */}
                <TextButton 
                    label='Entrar'
                    disabled={isEnableSignIn() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: 35,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignIn() ? COLORS.primary
                        : COLORS.transparentPrimary
                    }}
                    onPress={() => navigation.navigate('MainScreen')}
                />

                {/* Google Auth */}
                <TextGoogleButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        marginTop: 20,
                        borderRadius: SIZES.radius,
                        backgroundColor: '#fff',
                        borderWidth: 1,
                        borderColor: COLORS.darkGray
                    }}  
                    label='Continue com Google'
                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.black
                    }}
                />

                {/* Sign Up */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text 
                        style={{
                            color: COLORS.darkgray,
                            ...FONTS.body3
                        }}
                    >
                        Ainda não tem cadastro?
                    </Text>

                    <TextButton
                        label='Cadastre-se'
                        buttonContainerStyle={{
                            marginLeft: 3,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3,
                            fontSize: 18
                        }}
                        onPress={() => navigation.navigate('SignUp')}
                    />
                </View>
            </View>    
        </AuthLayout>
    )
}

export default SignIn;