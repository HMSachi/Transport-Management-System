import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { RegisterAction } from '../../actions/AuthActions';
import ScreenShell from './ScreenShell';
import { COLORS, TYPOGRAPHY } from './theme';

const ROLE_OPTIONS = ['customer', 'driver', 'admin'];
const ROUTES = {
  customer: 'CustomerDashboard',
  driver: 'DriverDashboard',
  admin: 'AdminDashboard',
};

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    if (!name || !email || !password) return Alert.alert('Validation', 'Please fill in all fields.');
    setIsLoading(true);
    dispatch(RegisterAction(name, email, password, role));
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate(ROUTES[role] || 'CustomerDashboard');
    }, 500);
  };

  return (
    <ScreenShell>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Create Account</Text>
        <Text style={styles.subheading}>Sign up to get started</Text>
        <View style={styles.card}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="Enter your full name" placeholderTextColor="#B58C66" value={name} onChangeText={setName} />
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#B58C66" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="Create a password" placeholderTextColor="#B58C66" value={password} onChangeText={setPassword} secureTextEntry />
          <Text style={styles.label}>Select Role</Text>
          <View style={styles.roleRow}>
            {ROLE_OPTIONS.map((item) => (
              <TouchableOpacity key={item} style={[styles.roleBtn, role === item && styles.roleBtnActive]} onPress={() => setRole(item)}>
                <Text style={[styles.roleText, role === item && styles.roleTextActive]}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.primaryBtn} onPress={handleRegister} disabled={isLoading}>
            {isLoading ? <ActivityIndicator color={COLORS.white} /> : <Text style={styles.primaryBtnText}>Register</Text>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.linkBtn}>
            <Text style={styles.linkText}>Already have an account? <Text style={styles.linkStrong}>Login</Text></Text>
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
  roleRow: { flexDirection: 'row', gap: 8, marginBottom: 14 },
  roleBtn: { flex: 1, backgroundColor: COLORS.light, borderRadius: 14, paddingVertical: 12, alignItems: 'center', borderWidth: 1, borderColor: '#FFD9B0' },
  roleBtnActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  roleText: { color: COLORS.text, fontSize: TYPOGRAPHY.small, fontWeight: '700', textTransform: 'capitalize' },
  roleTextActive: { color: COLORS.white },
  primaryBtn: { backgroundColor: COLORS.primary, borderRadius: 14, paddingVertical: 14, alignItems: 'center', marginTop: 4 },
  primaryBtnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  linkBtn: { marginTop: 16, alignItems: 'center' },
  linkText: { fontSize: TYPOGRAPHY.body, color: COLORS.muted },
  linkStrong: { color: COLORS.primary, fontWeight: '700' },
});

export default RegisterScreen;
