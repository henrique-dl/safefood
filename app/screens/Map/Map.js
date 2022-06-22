import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  ActivityIndicator,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Header } from "../../components";
import LinearGradient from "react-native-linear-gradient";
import * as Location from "expo-location";

// ICON BUTTON
import {
  COLORS,
  FONTS,
  icons,
  images,
  icons2,
  SIZES,
  dummyData,
  constants,
} from "../../constants";
import { utils } from "../../utils";
import { block, set } from "react-native-reanimated";

const Map = ({ navigation }) => {
  const mapView = React.useRef();
  const [region, setRegion] = React.useState({});
  const [toLoc, setToLoc] = React.useState(null);
  const [fromLoc, setFromLoc] = React.useState(null);
  const [streetName, setStreetName] = React.useState(null);
  const [angle, setAngle] = React.useState(0);

  const [isReady, setIsReady] = React.useState(false);
  const [duration, setDuration] = React.useState("");

  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permissão para acessar localização recusada");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      });
      setFromLoc({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      });

      setLocation(location);
    })();
    let text = "Carregando localização...";
    setErrorMsg(text);
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  }, []);

  console.log(region);

  // let destination = {
  //   latitude: -15.840064042324233,
  //   longitude: -48.022379055273724,
  // };

  // setToLoc(destination);
  // // setFromLoc(dummyData.fromLocs[1])
  // setRegion(initialRegion);

  function renderMap() {
    return (
      <MapView
        ref={mapView}
        style={{
          flex: 1,
          marginBottom: 50,
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
      >
        {fromLoc && (
          <Marker
            key={"FromLoc"}
            coordinate={fromLoc}
            tracksViewChanges={false}
            rotation={angle}
            image={icons2.navigator1}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        )}

        {toLoc && (
          <Marker
            key={"ToLoc"}
            coordinate={toLoc}
            tracksViewChanges={false}
            image={icons2.location_pin}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        )}

        <MapViewDirections
          origin={fromLoc}
          destination={toLoc}
          apikey={constants.GOOGLE_MAP_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true}
          onReady={(result) => {
            setDuration(Math.ceil(result.duration));

            if (!isReady) {
              // Fit the map based on the route
              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: SIZES.width * 0.1,
                  bottom: 400,
                  left: SIZES.width * 0.1,
                  top: SIZES.height * 0.1,
                },
              });

              // Reposition the navigator
              if (result.coordinates.length >= 2) {
                let angle = utils.calculateAngle(result.coordinates);

                setAngle(angle);
              }

              setIsReady(true);
            }
          }}
        />
      </MapView>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header navigation={navigation} />

      {/* {Map} */}

      {location != null && region != null ? (
        renderMap()
      ) : (
        <Text
          style={{
            textAlign: "center",
            marginTop: "80%",
            ...FONTS.body3,
          }}
        >
          {errorMsg + "\n\n"}
          {errorMsg == "Carregando localização..." && (
            <ActivityIndicator size="large" color="#999" />
          )}
        </Text>
      )}
      {/* Header Buttons */}

      {/* Footer / info */}
    </View>
  );
};

export default Map;
