import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../../actions/AuthActions';
import ScreenShell from './ScreenShell';
import { COLORS, TYPOGRAPHY } from './theme';

const ROUTES = {
  customer: 'CustomerDashboard',
  driver: 'DriverDashboard',
  admin: 'AdminDashboard',
};

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, error, role } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) return Alert.alert('Validation', 'Please enter email and password.');
    dispatch(LoginAction(email, password, role));
    setTimeout(() => navigation.navigate(ROUTES[role] || 'CustomerDashboard'), 500);
  };

  return (
    <ScreenShell>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.subheading}>Sign in to your account</Text>
        <View style={styles.card}>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#B58C66" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="Enter your password" placeholderTextColor="#B58C66" value={password} onChangeText={setPassword} secureTextEntry />
          <TouchableOpacity style={styles.primaryBtn} onPress={handleLogin} disabled={isLoading}>
            {isLoading ? <ActivityIndicator color={COLORS.white} /> : <Text style={styles.primaryBtnText}>Login</Text>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.linkBtn}>
            <Text style={styles.linkText}>Don't have an account? <Text style={styles.linkStrong}>Register</Text></Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenShell>
  );
};

const styles = StyleSheet.create({
  content: { padding: 20, paddingTop: 28 },
  heading: { fontSize: TYPOGRAPHY.heading, fontWeight: '800', color: COLORS.text },
  subheading: { fontSize: TYPOGRAPHY.body, color: COLORS.muted, marginTop: 6, marginBottom: 18 },
  card: { backgroundColor: COLORS.white, borderRadius: 20, padding: 18, borderWidth: 1, borderColor: COLORS.border, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 12, elevation: 2 },
  label: { fontSize: TYPOGRAPHY.small, color: COLORS.text, fontWeight: '600', marginBottom: 6 },
  input: { backgroundColor: COLORS.light, borderRadius: 14, paddingHorizontal: 14, paddingVertical: 13, fontSize: TYPOGRAPHY.body, color: COLORS.text, marginBottom: 14, borderWidth: 1, borderColor: '#FFD9B0' },
  primaryBtn: { backgroundColor: COLORS.primary, borderRadius: 14, paddingVertical: 14, alignItems: 'center', marginTop: 4 },
  primaryBtnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  linkBtn: { marginTop: 16, alignItems: 'center' },
  linkText: { fontSize: TYPOGRAPHY.body, color: COLORS.muted },
  linkStrong: { color: COLORS.primary, fontWeight: '700' },
  errorText: { color: '#C2410C', fontSize: TYPOGRAPHY.small, marginBottom: 10 },
});

export default LoginScreen;
