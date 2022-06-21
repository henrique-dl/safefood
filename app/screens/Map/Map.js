import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  PermissionsAndroid,
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

const Map = ({ navigation }) => {
  const mapView = React.useRef();
  const [region, setRegion] = React.useState(null);
  const [toLoc, setToLoc] = React.useState(null);
  const [fromLoc, setFromLoc] = React.useState(null);
  const [angle, setAngle] = React.useState(0);

  const [isReady, setIsReady] = React.useState(false);
  const [duration, setDuration] = React.useState("");

  React.useEffect(() => {
    let initialRegion = {
      latitude: -15.838815144953708,
      longitude: -48.013806715340145,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    let destination = {
      latitude: -15.840064042324233,
      longitude: -48.022379055273724,
    };

    setToLoc(destination);
    // setFromLoc(dummyData.fromLocs[1])
    setFromLoc(initialRegion);

    setRegion(initialRegion);
  }, []);

  function renderMap() {
    return (
      <MapView
        ref={mapView}
        style={{
          flex: 1,
          marginBottom: 35,
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
      {renderMap()}
      {/* Header Buttons */}

      {/* Footer / info */}
      <Text>Map</Text>
    </View>
  );
};

export default Map;
