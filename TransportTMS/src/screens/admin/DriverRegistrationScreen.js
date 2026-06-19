import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

const DriverRegistrationScreen = () => {
  const [name, setName]     = useState('');
  const [phone, setPhone]   = useState('');
  const [license, setLicense] = useState('');
  const [loading, setLoading] = useState(false);

  const [drivers] = useState([
    { id: 'D01', name: 'Ravi Kumar',  phone: '+91 98765 43210', license: 'DL-1234567', status: 'Active'   },
    { id: 'D02', name: 'Suresh Babu', phone: '+91 91234 56789', license: 'DL-7654321', status: 'Active'   },
    { id: 'D03', name: 'Mahesh R',    phone: '+91 90001 11222', license: 'DL-9988776', status: 'On Leave' },
  ]);

  const handleRegister = () => {
    if (!name || !phone || !license) { Alert.alert('Error', 'Fill all fields'); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); Alert.alert('✅ Success', `Driver ${name} registered!`); setName(''); setPhone(''); setLicense(''); }, 800);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}><Text style={styles.title}>🧑‍✈️  Driver Registration</Text></View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Register New Driver</Text>
        <InputComponent label="Driver Name"    placeholder="Full name"          value={name}    onChangeText={setName} />
        <InputComponent label="Phone Number"   placeholder="+91 XXXXX XXXXX"   value={phone}   onChangeText={setPhone}   keyboardType="phone-pad" />
        <InputComponent label="License Number" placeholder="DL-XXXXXXX"        value={license} onChangeText={setLicense} />
        <ButtonComponent title="Register Driver" onPress={handleRegister} loading={loading} color="#7C3AED" />
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Registered Drivers ({drivers.length})</Text>
        {drivers.map((d, i) => (
          <View key={d.id} style={[styles.row, i < drivers.length - 1 && styles.rowBorder]}>
            <Text style={styles.rowIcon}>🧑‍✈️</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowMain}>{d.name}</Text>
              <Text style={styles.rowSub}>{d.phone}  •  {d.license}</Text>
            </View>
            <Text style={[styles.status, { color: d.status === 'Active' ? '#059669' : '#F59E0B' }]}>{d.status}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F3FF' },
  header: { backgroundColor: '#5B21B6', padding: 20, paddingTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  card: { backgroundColor: '#FFF', margin: 16, borderRadius: 12, padding: 16, elevation: 2 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#374151', marginBottom: 14 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  rowIcon: { fontSize: 22, marginRight: 12 },
  rowMain: { fontSize: 14, fontWeight: '700', color: '#111827' },
  rowSub: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  status: { fontSize: 12, fontWeight: '700' },
});

export default DriverRegistrationScreen;
