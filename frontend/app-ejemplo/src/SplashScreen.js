// Splash.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigation from './Navigation'

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      // Navegar a la pantalla principal de la aplicación después de 3 segundos
      Navigation.replace({Navigation});
    }, 3000); // 3000 milisegundos (3 segundos)yarn star
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Bienvenido</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Splash;
