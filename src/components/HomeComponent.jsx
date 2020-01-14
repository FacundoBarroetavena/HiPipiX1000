import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default async function Home() {

    return (
      <View style={styles.container}>
        <Text>Hola</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', 
      alignItems: 'center',
      justifyContent: 'center',
    },
  });