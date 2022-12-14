import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"

const HomeScreen = () => {
    return (
        <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <Text>Explore World with Us!</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    logoContainer: {
        position: "absolute",
        top: 65
    },
    logo: {
        width: 150,
        height: 150
    },
    loginButton: {
        width: "100%",
        height: 60,
        backgroundColor: "#fc5c65"
    },
    registerButton: {
        width: "100%",
        height: 60,
        backgroundColor: "#4ecdc4"
    }
})

export default HomeScreen