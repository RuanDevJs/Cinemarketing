import react, { useState, useRef, useEffect } from "react"
import { Text, View, ImageBackground, StyleSheet, Dimensions, Platform, TouchableOpacity, Animated } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import Genre from "../../Components/Genres";

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

export default function Movie({ route }){
    const { movie } = route.params;
    const ImageAnimated = useRef(new Animated.Value(-600)).current;
    const InfoAnimated = useRef(new Animated.Value(900)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(ImageAnimated, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false
            }),
            Animated.timing(InfoAnimated, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false
            })
        ]).start()
    }, []);

    return(
        <View style={{ flex: 1, backgroundColor: '#0E0F13' }}>
            <ImageBackground 
                style={{
                    flex: 1,
                    height: width * 1.2,
                    resizeMode: 'cover',
                    opacity: 1,
                    shadowOpacity: 13,
                    shadowRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                blurRadius={4}
                source={{
                    uri: movie.poster
                }}
            >
                <Animated.Image
                    style={{
                        width: 220,
                        height: 320,
                        borderRadius: 12,
                        resizeMode: 'cover',
                        transform: [
                            {
                                translateY: ImageAnimated
                            }
                        ],
                    }}
                    source={{
                        uri: movie.poster
                    }}
                /> 
            </ImageBackground>
            <Animated.View style={[styles.info, {
                transform: [{
                    translateY: InfoAnimated
                }]
            }]}>
                <Genre
                    width={80}
                    padding={5}
                    flex={0}
                    backgroundColor="#F61931"
                >
                    <AntDesign name="staro" size={8} color="#fff" />
                    <Text style={{ marginLeft: 12}}> {movie.rating}</Text>
                </Genre>
                <View style={{ padding: 8 }}>
                    <Text style={styles.title}> {movie.title} </Text> 
                    <Text style={styles.description}> 
                        {movie.description} 
                    </Text> 
                </View>
                <View style={styles.genreContainer}>
                    { movie.genres.map(el => {
                        return(
                            <Genre 
                                backgroundColor="#1f1f1f"
                                color="#fff"
                            >
                                {el}
                            </Genre>
                        )
                    })}
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> comprar ingresso </Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        flex: 1,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: "#0E0F13",
        padding: 12
    },
    genreContainer:{
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    title: {
        fontSize: 20,
        fontWeight: "900",
        color: "#f9f9f9",
        marginBottom: 12
    },
    description: {
        fontSize: 12,
        fontWeight: "300",
        color: "#d9d9d9",
        lineHeight: 18
    },
    buttonContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },  
    button: {
        width: 300,
        padding: 16,
        backgroundColor: '#F61931',
        borderRadius: 50
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        color: "#f9f9f9",
        textTransform: 'capitalize'
    }
})