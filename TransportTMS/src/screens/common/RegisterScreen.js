import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { registerSuccess } from '../../redux/slices/authSlice';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    if (!name || !email || !phone || !password) { Alert.alert('Error', 'Please fill all fields'); return; }
    setLoading(true);
    setTimeout(() => {
      dispatch(registerSuccess({ id: 2, name, email, phone }));
      setLoading(false);
      Alert.alert('Success', 'Account created! Please login.', [{ text: 'OK', onPress: () => navigation.navigate('Login') }]);
    }, 800);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <Text style={styles.headerIcon}>📝</Text>
        <Text style={styles.headerTitle}>Create Account</Text>
        <Text style={styles.headerSub}>Register to get started</Text>
      </View>
      <View style={styles.form}>
        <InputComponent label="Full Name" placeholder="Enter your full name" value={name} onChangeText={setName} />
        <InputComponent label="Email" placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <InputComponent label="Phone" placeholder="Enter your phone number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
        <InputComponent label="Password" placeholder="Create a password" value={password} onChangeText={setPassword} secureTextEntry />
        <ButtonComponent title="Register" onPress={handleRegister} loading={loading} color="#059669" />
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Already have an account? <Text style={styles.linkBold}>Login</Text></Text>
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

export default RegisterScreen;
