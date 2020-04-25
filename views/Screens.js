// JavaScript source code
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, Linking } from "react-native";

export const Home = ({ navigation }) => {

    const [gadgets] = useState([
        { name: "PC", key: "1" },
        { name: "Headset", key: "2" },
        { name: "Speakers", key: "3" },
        { name: "Drone", key: "4" },
        { name: "Controller", key: "5" },
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                data={gadgets}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.push(item.name)}>
                        <View style={styles.viewLayout}>
                        <Image
                            style={styles.iconLayout}
                            source={require("../assets/gadget.png")}
                            />
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                        </TouchableOpacity>
                )}
                />
                </View>
    )
}

export const PC = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/computer.webp")}
            />
            <Button
                title="Visit Website"
                onPress={() => Linking.openURL("https://pcpartpicker.com/")}
        />
        </View>

        )
}

export const Headset = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageLayout}
                source={require("../assets/headset.webp")}
            />
            <Button
                title="Visit Website"
                onPress={() => Linking.openURL("https://www.astrogaming.com/en-us")}
            />
        </View>
        )
}

export const Speakers = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageLayout2}
                source={require("../assets/speakers.jpg")}
            />
            <Button
                title="Visit Website"
                onPress={() => Linking.openURL("https://www.jlaudio.com/")}
            />
        </View>
    )
}

export const Drone = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageLayout}
                source={require("../assets/drone.jpg")}
            />
            <Button
                title="Visit Website"
                onPress={() => Linking.openURL("https://www.dji.com/products/mavic")}
            />
        </View>
    )
}

export const Controller = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageLayout2}
                source={require("../assets/controller.jpg")}
            />
            <Button
                title="Visit Website"
                onPress={() => Linking.openURL("https://www.xbox.com/en-US/accessories/controllers/elite-wireless-controller-series-2")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    item: {
        fontSize: 20,
        marginLeft: 5
    },
    iconLayout: {
        width: 50,
        height: 50,
    },
    imageLayout: {
        alignSelf: "center",
        width: 300,
        height: 250,
        marginTop: 5,
        marginBottom: 5
    },
    imageLayout2: {
        alignSelf: "center",
        width: 400,
        height: 250,
        marginTop: 5,
        marginBottom: 5
    },
    viewLayout: {
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderColor: "#CACFD2"
    }
});
