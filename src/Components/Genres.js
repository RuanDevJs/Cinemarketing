import react, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Genre({ name, backgroundColor, color, children, ...style }){
    return(
        <View style={[styles.genre, {
            backgroundColor: backgroundColor ? backgroundColor : "#111218",
            ...style
        }]}>
            <Text style={[styles.genreText, {
                color: color ? color : "#f9f9f9"
            }]}>
                {children}
            </Text>
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