import react, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { getMovies } from '../Services/api';
import Movies from './Movies';

const genres = [
    'Adventure',
    'Fantasy',
    'Animation',
    'Drama',
    'Horror',
    'Action',
    'Comedy',
    'History',
    'Western',
    'Thriller',
    'Crime',
    'Documentary',
    'Science Fiction',
    'Mystery',
    'Music',
    'Romance',
    'Family',
    'War',
    'TV Movie',
];

export default function Category(){
    const [parsedGenres, setParsedGenres] = useState(genres.map((el) => {
        return {
            genre: el,
            isActived: false
        }
    }));

    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [typeMovie, setTypeMovie] = useState(null);

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

    const handlePress = (item, index) => {
        setParsedGenres(el => {
            el.map(el => {
                el.isActived = false
            });
            return [...el]
        })
        setParsedGenres(el => {
            el[index].isActived = true
            return [...el]
        })
        const filteredMovies = movies.filter((el) => {
            return el.genres.includes(item.genre)
        });
        setTypeMovie(filteredMovies)
    }

    return(
        <View style={{ paddingBottom: 32}}>
            <View style={{ padding: 14}}>
                <View>
                    <Text style={styles.title}>Categorias</Text>
                </View>
                <View>
                    <FlatList
                        data={parsedGenres}
                        renderItem={({item, index}) => {
                            return(
                                <TouchableOpacity 
                                    style={[styles.genre, {
                                        backgroundColor: item.isActived ? '#F61931' : '#111218'
                                    }]}
                                    onPress={() => handlePress(item, index)}
                                >
                                    <Text style={styles.genreText}>{item.genre}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item, index) => index}
                        horizontal
                        bounces={false}
                        scrollEventThrottle={16}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            <Movies
                data={typeMovie ? typeMovie : movies}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    genre: {
        flex: 1,
        backgroundColor: '#111218',
        alignItems:'center',
        justifyContent: 'center',
        padding: 4,
        marginHorizontal: 8,
        borderRadius: 24,
        width: 50
    },
    genreText: {
        fontSize: 8,
        fontWeight: '700',
        color: '#f9f9f9',
        textAlign: 'center',
        lineHeight: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: "#c2c2c2",
        marginBottom: 18
    },
})