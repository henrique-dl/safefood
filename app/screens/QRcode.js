import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Header, TextButton } from "../components";
import { SIZES, icons2, COLORS, FONTS } from "../constants";

const QRcode = ({ navigation }) => {
  const [inputText, setInputText] = useState("");
  const [qrValue, setQrValue] = useState("");

  const [showElements, setShowElements] = useState(true);
  const [disableOpacity, setDisableOpacity] = useState(false);

  const unFocus = useRef(null);

  navigation.addListener("focus", () => {
    setShowElements(true);
    setDisableOpacity(false);
  });

  function qrActions(value) {
    setQrValue(value);
    setShowElements(true);
    setDisableOpacity(true);
    setInputText("");
    unFocus.current.blur();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {showElements && (
          <QRCode
            value={qrValue ? qrValue : "NA"}
            size={250}
            color={!disableOpacity ? "rgba(0, 0, 0, 0.5)" : "black"}
            backgroundColor={
              !disableOpacity ? "rgba(255,255,255, 0.5)" : "white"
            }
            logoSize={30}
            logoMargin={2}
            logoBorderRadius={15}
            logoBackgroundColor="yellow"
          />
        )}
      </View>
      {disableOpacity && showElements && (
        <Text
          style={{
            paddingTop: 10,
            textAlign: "center",
            color: COLORS.green,
            fontWeight: "bold",
          }}
        >
          QR Code gerado com sucesso!{"\n"}
          Apresente o QR Code no estabelecimento informado
        </Text>
      )}
      <View style={{ flex: 1, justifyContent: "center", marginBottom: 100 }}>
        <Text
          style={{
            textAlign: "center",
            marginBottom: SIZES.radius,
            textAlign: "center",
            color: COLORS.darkGray,
            ...FONTS.body3,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Insira o nome do estabelecimento {"\n"}para receber descontos
        </Text>

        {/* break */}

        <View style={{ marginHorizontal: 30 }}>
          {/* Label & Error msg */}
          <View
            style={{
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: COLORS.gray, textAlign: "center" }}>
              QR Code
            </Text>
          </View>

          {/* Text Input */}
          <View
            style={{
              flexDirection: "row",
              height: 55,
              paddingHorizontal: SIZES.padding,
              marginTop: SIZES.base,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray2,
              borderColor: COLORS.black,
              borderWidth: 2,
            }}
          >
            <TextInput
              style={{
                flex: 1,
              }}
              ref={unFocus}
              onChangeText={(inputText) => setInputText(inputText)}
              onFocus={() => setShowElements(false)}
              value={inputText}
            />

            {
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={
                    inputText == "" || inputText != ""
                      ? icons2.correct
                      : icons2.cross
                  }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor:
                      inputText == ""
                        ? COLORS.gray
                        : inputText != ""
                        ? COLORS.green
                        : COLORS.red,
                  }}
                />
              </View>
            }
          </View>
        </View>
        {/* break */}

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25,
          }}
        >
          <TextButton
            label="Gerar QR Code"
            buttonContainerStyle={{
              height: 60,
              width: 250,
              borderRadius: SIZES.radius,
              backgroundColor:
                inputText.length > 0
                  ? COLORS.primary
                  : COLORS.transparentPrimary,
            }}
            onPress={() => inputText.length > 0 && qrActions(inputText)}
          />
        </View>
        {/* <TextInput
          style={{}}
          onChangeText={(inputText) => setInputText(inputText)}
          value={inputText}
        /> */}
        {/* <View style={{ margin: 5 }}>
          <Button onPress={() => setQrValue(inputText)} title="Gerar QR Code" />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default QRcode;
