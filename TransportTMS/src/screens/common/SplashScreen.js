import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const t = setTimeout(() => navigation.replace('Login'), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}><Text style={styles.logoIcon}>🚌</Text></View>
      <Text style={styles.appName}>TransportTMS</Text>
      <Text style={styles.tagline}>Transport Management System</Text>
      <ActivityIndicator style={{ marginTop: 40 }} size="large" color="#60A5FA" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E3A8A', alignItems: 'center', justifyContent: 'center' },
  logoBox: { width: 110, height: 110, borderRadius: 28, backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  logoIcon: { fontSize: 56 },
  appName: { fontSize: 34, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 8 },
  tagline: { fontSize: 14, color: '#93C5FD' },
});

export default SplashScreen;
