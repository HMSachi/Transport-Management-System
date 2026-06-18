import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const passengers = [
  { name: 'Alice Kumar', stop: 'Stop A', lat: '12.9716', lng: '77.5946', status: 'Waiting'  },
  { name: 'Bob Sharma',  stop: 'Stop B', lat: '12.9815', lng: '77.6100', status: 'Boarded'  },
  { name: 'Carol Patel', stop: 'Stop C', lat: '12.9600', lng: '77.5800', status: 'Waiting'  },
];

const PassengerLocationScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.back} onPress={() => navigation.goBack()}>← Back</Text>
      <Text style={styles.title}>📍  Passenger Locations</Text>
    </View>
    {/* Map Placeholder */}
    <View style={styles.mapPlaceholder}>
      <Text style={styles.mapIcon}>🗺️</Text>
      <Text style={styles.mapText}>Passenger Map View</Text>
      <Text style={styles.mapSub}>Shows real-time passenger pickup points</Text>
    </View>
    {/* Passenger List */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Passenger Stops</Text>
      {passengers.map((p, i) => (
        <View key={i} style={[styles.row, i < passengers.length - 1 && styles.rowBorder]}>
          <Text style={styles.rowIcon}>👤</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowName}>{p.name}</Text>
            <Text style={styles.rowStop}>{p.stop} • {p.lat}, {p.lng}</Text>
          </View>
          <Text style={[styles.rowStatus, { color: p.status === 'Boarded' ? '#059669' : '#F59E0B' }]}>{p.status}</Text>
        </View>
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0FDF4' },
  header: { backgroundColor: '#065F46', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { color: '#6EE7B7', fontSize: 14 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  mapPlaceholder: { backgroundColor: '#D1FAE5', height: 220, margin: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  mapIcon: { fontSize: 56, marginBottom: 10 },
  mapText: { fontSize: 16, fontWeight: 'bold', color: '#065F46' },
  mapSub: { fontSize: 12, color: '#059669', marginTop: 4 },
  section: { backgroundColor: '#FFF', margin: 16, marginTop: 0, borderRadius: 12, padding: 16, elevation: 2 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#374151', marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  rowIcon: { fontSize: 20, marginRight: 12 },
  rowName: { fontSize: 14, fontWeight: '600', color: '#111827' },
  rowStop: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  rowStatus: { fontSize: 12, fontWeight: '700' },
});

export default PassengerLocationScreen;
