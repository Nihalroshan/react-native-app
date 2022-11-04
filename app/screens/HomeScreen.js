import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import AppButton from "../components/AppButton"

import colors from "../config/colors"

const HomeScreen = () => {
    return (
        <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <Text>Explore World with Us!</Text>
            </View>
            <AppButton title="Login"
                color={colors.primary}
                onPress={() => console.log("clicked login")} />
            <AppButton title="Register"
                color={colors.secondary}
                onPress={() => console.log("clicked Register")} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',

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
        backgroundColor: colors.primary,
    },
    registerButton: {
        width: "100%",
        height: 60,
        backgroundColor: colors.secondary,
    }
})

export default HomeScreen