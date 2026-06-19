import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess } from '../../redux/slices/authSlice';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((s) => s.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) { Alert.alert('Error', 'Please enter email and password'); return; }
    dispatch(loginRequest());
    setTimeout(() => {
      dispatch(loginSuccess({ user: { id: 1, name: 'John Doe', email }, role: null }));
      navigation.navigate('RoleSelection');
    }, 800);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <Text style={styles.headerIcon}>🚌</Text>
        <Text style={styles.headerTitle}>Welcome Back</Text>
        <Text style={styles.headerSub}>Sign in to continue</Text>
      </View>
      <View style={styles.form}>
        <InputComponent label="Email" placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <InputComponent label="Password" placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry />
        <ButtonComponent title="Login" onPress={handleLogin} loading={isLoading} />
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>Don't have an account? <Text style={styles.linkBold}>Register</Text></Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#F0F4FF', paddingHorizontal: 24, paddingTop: 60 },
  header: { alignItems: 'center', marginBottom: 36 },
  headerIcon: { fontSize: 48, marginBottom: 12 },
  headerTitle: { fontSize: 26, fontWeight: 'bold', color: '#1E3A8A' },
  headerSub: { fontSize: 14, color: '#6B7280', marginTop: 4 },
  form: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 24, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 8, elevation: 3 },
  link: { marginTop: 16, alignItems: 'center' },
  linkText: { fontSize: 14, color: '#6B7280' },
  linkBold: { color: '#2563EB', fontWeight: 'bold' },
});

export default LoginScreen;
