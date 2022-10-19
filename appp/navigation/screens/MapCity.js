import { View,Dimensions,StyleSheet } from "react-native"
import * as React from 'react';
import MapView from 'react-native-maps';

const MapCity = ({ route }) => {

    const key = route.params

    // const get = () => {
    //     navigation.navigate(Map, { key: region })
    //     const Map = () => {


    //         console.log(key) // “value”
    //     }
    // }
    // get()

    return (
        <View>
            <MapView style={styles.map} initialRegion={{
                latitude:key.latitude,
                longitude:key.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} />

        </View>
    )
}
export default MapCity


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    inp: {
        height: 60,
        width: 200,
        border: 10,
        margin: 12,
        backgroundColor: '#FF8C00'
    }
});