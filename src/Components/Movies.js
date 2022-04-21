import react, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Modal, TouchableOpacity, ImageBackground } from 'react-native';

import { AntDesign } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";

import { useNavigation } from '@react-navigation/native';
import { getMovies } from '../Services/api';

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

export default function Movies({ data }){
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies(){
            const rows = await getMovies();
            setMovies(rows);
            setLoading(false);
        }

        fetchMovies();
    }, []);

    if(loading){
        return null
    };

    return( 
        <View style={styles.container}>
            { data ? null : <Text style={styles.title}>Em cartaz</Text> }
            <Carousel
                data={data ? data : movies}
                renderItem={({ item, index }) => <Movie item={item} index={index} />}
                sliderWidth={width}
                itemWidth={220}
                layout={'default'}
                bounces={false}
                focusable={false}
                decelerationRate={0}
                scrollEventThrottle={16}
                loop
            />
        </View>
    )
}


function Movie({ item, index }){
    const { rating }  = item;
    const navigate = useNavigation();
    const [active, setActive] = useState(false);

    function handlePress(){
        navigate.push('Movie', {
            movie: item
        });
    }

    return(
       <>
         <View>
            <TouchableOpacity onPress={handlePress}>
                <Image 
                    source={{ uri: item.poster }}
                    style={styles.poster}
                />
            </TouchableOpacity>
            <Text style={styles.posterTitle}>{item.title}</Text>
            <View style={styles.genreContainer}>
                {item.genres.map((el, index) => {
                    if (index >= 2){
                        return null
                    }

                    return(
                        <View key={index} style={styles.genre}>
                            <Text style={styles.genreText}>{el}</Text>
                        </View>
                    )
                })}
                <View key={index} style={styles.rating}>
                    <AntDesign name="staro" size={14} color="#d9d9d9" />
                    <Text style={[styles.genreText, {
                        marginLeft: 4,
                        fontSize: 10
                    }]}>{rating}</Text>
                </View>
            </View>
        </View>
       </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 12
    },
    poster: {
        width: '100%',
        height: ITEM_SIZE * 1.3,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: "#c2c2c2",
        marginBottom: 18
    },
    posterTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: "#f9f9f9",
        marginVertical: 12,
        textAlign: 'center',
        lineHeight: 22
    },
    genreContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    genre: {
        backgroundColor: '#111218',
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        padding: 4,
        marginHorizontal: 8,
        borderRadius: 24
    },
    genreText: {
        fontSize: 8,
        fontWeight: '700',
        color: '#f9f9f9',
        textAlign: 'center',
        lineHeight: 12,
    },
    rating: {
        backgroundColor: '#F61931',
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        padding: 4,
        marginHorizontal: 8,
        borderRadius: 24,
        flexDirection: 'row'
    },
    
})