import react from "react";
import { SafeAreaView, View, Text, StyleSheet} from "react-native";

import { Feather } from "@expo/vector-icons"

export default function Header(){
    return(
        <SafeAreaView 
            style={styles.container}
        >
            <View
                style={styles.nav}
            >
                <View>
                    <Feather 
                        name="menu"
                        size={32}
                        color="#f9f9f9"
                    />
                </View>
                <View style={styles.nav_title}>
                    <Text
                        style={styles.title}
                    > CineMarketing 
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: "#0E0F13",
        justifyContent: 'center'
    },
    nav: {
        padding: 18,
        flexDirection: 'row',
        alignItems: 'center'
    },
    nav_title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 32
    },  
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: "#d9d9d9",
        textAlign: 'center'
    }
})