import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Category from "../../Components/Category";

import Header from "../../Components/Header";
import Movies from "../../Components/Movies";

export default function Home() {
    return (
      <View style={styles.container}>
        <ScrollView
          bounces={false}
        >
          <Movies />
          <Category />
        </ScrollView>
      </View>
    );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0E0F13',
    },
  });
  