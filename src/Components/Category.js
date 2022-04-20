import react, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

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
    return(
        <View>
            <View>
                <View>
                    <Text>Select a category</Text>
                </View>
                <FlatList
                    data={genres}
                    renderItem={({item}) => {
                        return(
                            <Text>Ruan</Text>
                        )
                    }}
                    horizontal
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    genre: {
        backgroundColor: '#111218',
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        padding: 4,
        marginHorizontal: 8,
        borderRadius: 24,
    },
    genreText: {
        fontSize: 8,
        fontWeight: '700',
        color: '#f9f9f9',
        textAlign: 'center',
        lineHeight: 12,
    },
})