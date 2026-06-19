import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Alert } from 'react-native';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

const BusRegistrationScreen = () => {
  const [busNo, setBusNo]     = useState('');
  const [model, setModel]     = useState('');
  const [capacity, setCapacity] = useState('');
  const [loading, setLoading] = useState(false);

  const [buses] = useState([
    { id: 'B01', busNo: 'KA-01-1234', model: 'Tata Starbus',  capacity: 52, status: 'Active'   },
    { id: 'B02', busNo: 'KA-02-5678', model: 'Ashok Leyland', capacity: 45, status: 'Active'   },
    { id: 'B03', busNo: 'KA-03-9012', model: 'Eicher Skyline', capacity: 38, status: 'Maintenance' },
    { id: 'B04', busNo: 'KA-04-3456', model: 'Volvo 9400',    capacity: 48, status: 'Active'   },
  ]);

  const handleRegister = () => {
    if (!busNo || !model || !capacity) { Alert.alert('Error', 'Fill all fields'); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); Alert.alert('✅ Success', `Bus ${busNo} registered!`); setBusNo(''); setModel(''); setCapacity(''); }, 800);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}><Text style={styles.title}>🚌  Bus Registration</Text></View>

      {/* Registration Form */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Register New Bus</Text>
        <InputComponent label="Bus Number" placeholder="e.g. KA-05-7890" value={busNo} onChangeText={setBusNo} />
        <InputComponent label="Model" placeholder="e.g. Tata Starbus" value={model} onChangeText={setModel} />
        <InputComponent label="Capacity" placeholder="e.g. 52" value={capacity} onChangeText={setCapacity} keyboardType="numeric" />
        <ButtonComponent title="Register Bus" onPress={handleRegister} loading={loading} color="#7C3AED" />
      </View>

      {/* Existing Buses */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Registered Buses ({buses.length})</Text>
        {buses.map((b, i) => (
          <View key={b.id} style={[styles.row, i < buses.length - 1 && styles.rowBorder]}>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowMain}>{b.busNo}</Text>
              <Text style={styles.rowSub}>{b.model}  •  {b.capacity} seats</Text>
            </View>
            <Text style={[styles.status, { color: b.status === 'Active' ? '#059669' : '#F59E0B' }]}>{b.status}</Text>
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
  rowMain: { fontSize: 14, fontWeight: '700', color: '#111827' },
  rowSub: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  status: { fontSize: 12, fontWeight: '700' },
});

export default BusRegistrationScreen;
