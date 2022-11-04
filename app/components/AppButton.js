import { StyleSheet, Text, TouchableOpacity } from "react-native"

import colors from "../config/colors"

const AppButton = ({ title, onPress, color }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        width: '90%',
        padding: 15,
        alignItems: "center",
        margin: 10,
        justifyContent: "center",
    },
    title: {
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "bold"

    }
})

export default AppButton