import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { AuthLayout } from '../';
import { FONTS, SIZES, COLORS, icons2 } from '../../constants';
import { FormInput, TextButton, TextIconButton } from '../../components';
import { utils } from '../../utils';

const SignUp = () => {

    const [email, setEmail] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showPass, setShowPass] = React.useState(false)

    const [emailError, setEmailError] = React.useState('')
    const [usernameError, setUsernameError] = React.useState('')
    const [passwordError, setPasswordError] = React.useState('')

    const [signUpType, setSignUpType] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [cnpj, setCnpj] = React.useState('');
    const [number, setNumber] = React.useState('');

    function isEnableSignUp() {
        if (signUpType == 'PF') {
            return email != '' && username != '' && password != '' &&
            emailError == '' && passwordError == '' && usernameError == ''
        } else {
            return email != '' && username != '' && password != '' &&
            emailError == '' && passwordError == '' && usernameError == ''
            && address != '' && cnpj != '' && number != ''
        }
    }

    return (
        <AuthLayout
            title='Cadastre-se'
            subtitle='Informe os dados para continuar'
            titleContainerStyle={{
                marginTop: SIZES.radius,
                marginBottom: SIZES.radius
            }}
        >

            <ScrollView>
                {/* Form Input And Sign UP */}
                <View
                    style={{
                        flex: 1,
                        marginTop: SIZES.padding * 2,
                        paddingHorizontal: SIZES.padding * 2
                    }}
                >

                    {/* PICKER */}
                    <Text style={{ color: COLORS.gray }}>Pessoa física ou jurídica?</Text>
                    <View
                        style={{
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray2,
                            marginTop: SIZES.base,
                            marginBottom: SIZES.base
                        }}
                    >
                        <Picker
                            selectedValue={signUpType}
                            onValueChange={(itemValue, itemIndex) =>
                                setSignUpType(itemValue)
                            }>
                            <Picker.Item label="Pessoa Física" value="PF" />
                            <Picker.Item label="Pesosa Jurídica" value="PJ" />
                        </Picker>
                    </View>
                    {/* TO DO */}
        


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
                        label={signUpType == 'PF' ? 'Nome completo' : 'Nome do estabelecimento'}
                        containerStyle={{
                            marginTop: SIZES.radius
                        }}
                        onChange={(value) => {
                            setUsername(value)
                        }}
                        errorMsg={usernameError}
                        appendComponent={
                            <View
                                style={{
                                    justifyContent: 'center'
                                }}
                            >
                                <Image
                                    source={username == '' || (username != '' && usernameError == '')
                                    ? icons2.correct : icons2.cross}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        tintColor: username == '' ? COLORS.gray : (username != ''
                                        && usernameError == '') ? COLORS.green : COLORS.red
                                    }}
                                />
                            </View>
                        }
                    />

                    {
                        signUpType == 'PJ' ? (
                            <FormInput
                                label='Endereço'
                                containerStyle={{
                                    marginTop: SIZES.radius
                                }}
                                onChange={(value) => {
                                    setAddress(value)
                                }}
                                appendComponent={
                                    <View
                                        style={{
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Image
                                            source={address == '' || (address != '')
                                            ? icons2.correct : icons2.cross}
                                            style={{
                                                height: 20,
                                                width: 20,
                                                tintColor: address == '' ? COLORS.gray 
                                                : (address != '') ? COLORS.green : COLORS.red
                                            }}
                                        />
                                    </View>
                                }
                            />
                        ) : null
                    }

                    {
                        signUpType == 'PJ' ? (
                            <FormInput
                                label='CNPJ'
                                containerStyle={{
                                    marginTop: SIZES.radius
                                }}
                                onChange={(value) => {
                                    setCnpj(value)
                                }}
                                appendComponent={
                                    <View
                                        style={{
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Image
                                            source={cnpj == '' || (cnpj != '')
                                            ? icons2.correct : icons2.cross}
                                            style={{
                                                height: 20,
                                                width: 20,
                                                tintColor: cnpj == '' ? COLORS.gray 
                                                : (cnpj != '') ? COLORS.green : COLORS.red
                                            }}
                                        />
                                    </View>
                                }
                            />
                        ) : null
                    }

                    {
                        signUpType == 'PJ' ? (
                            <FormInput
                                label='Número de telefone'
                                containerStyle={{
                                    marginTop: SIZES.radius
                                }}
                                onChange={(value) => {
                                    setNumber(value)
                                }}
                                appendComponent={
                                    <View
                                        style={{
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Image
                                            source={number == '' || (number != '')
                                            ? icons2.correct : icons2.cross}
                                            style={{
                                                height: 20,
                                                width: 20,
                                                tintColor: number == '' ? COLORS.gray 
                                                : (number != '') ? COLORS.green : COLORS.red
                                            }}
                                        />
                                    </View>
                                }
                            />
                        ) : null
                    }
                    

                    <FormInput
                        label='Senha'
                        secureTextEntry={!showPass}
                        autoCompleteType='password'
                        containerStyle={{
                            marginTop: SIZES.radius
                        }}
                        onChange={(value) => {
                            utils.validatePassword(value, 
                            setPasswordError)
                            setPassword(value)
                        }}
                        errorMsg={passwordError}
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

                    {/* Sign Up & Sign In */}
                    <TextButton
                        label='Cadastrar'
                        disabled={isEnableSignUp() ? false : true}
                        buttonContainerStyle={{
                            height: 55,
                            alginItems: 'center',
                            marginTop: 30,
                            borderRadius: SIZES.radius,
                            backgroundColor: isEnableSignUp() ? COLORS.primary
                            : COLORS.transparentPrimary
                        }}
                        onPress={() => navigation.navigate('Otp')}
                    />


                    {/* Google Auth */}
                    <TextIconButton
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
                        onPress={() => console.log('Google')}
                    />

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.radius,
                            justifyContent: 'center',
                            marginBottom: 80
                        }}
                    >
                        <Text style={{color: COLORS.darkgray, 
                        ...FONTS.body3 }}>Já possui cadastro?</Text>
                        
                        <TextButton
                            label='Entrar'
                            buttonContainerStyle={{
                                marginLeft: 3,
                                backgroundColor: null
                            }}
                            labelStyle={{
                                color: COLORS.primary,
                                ...FONTS.h3,
                                fontSize: 18
                            }}
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                </View>
            </ScrollView>
            {/* Footer */}
        </AuthLayout>
    );
}

export default SignUp;