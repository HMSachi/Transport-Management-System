import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import ScreenShell from '../common/ScreenShell';
import { COLORS, TYPOGRAPHY } from '../common/theme';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('Login'), 2200);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ScreenShell>
      <View style={styles.wrap}>
        <View style={styles.logoCard}>
          <Text style={styles.logoIcon}>T</Text>
        </View>
        <Text style={styles.title}>TransportApp</Text>
        <Text style={styles.subtitle}>Transport Management System</Text>
        <ActivityIndicator size="large" color={COLORS.primary} style={{ marginTop: 18 }} />
      </View>
    </ScreenShell>
  );
};

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  logoCard: {
    width: 110,
    height: 110,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
  },
  logoIcon: { color: COLORS.white, fontSize: 46, fontWeight: '800' },
  title: { fontSize: TYPOGRAPHY.heading, fontWeight: '800', color: COLORS.text },
  subtitle: { fontSize: TYPOGRAPHY.body, color: COLORS.muted, marginTop: 8 },
});

export default SplashScreen;
