import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const LiveTrackingScreen = ({ navigation }) => {
  const { activeTrip } = useSelector((s) => s.trip);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>← Back</Text></TouchableOpacity>
        <Text style={styles.title}>📡  Live Tracking</Text>
      </View>
      {/* Map Placeholder */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapIcon}>🗺️</Text>
        <Text style={styles.mapText}>Live Map View</Text>
        <Text style={styles.mapSub}>Map integration coming soon</Text>
      </View>
      {/* Trip Info */}
      {activeTrip && (
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Current Trip</Text>
          <Text style={styles.infoRoute}>{activeTrip.route}</Text>
          <View style={styles.row}><Text style={styles.rowLabel}>Driver</Text><Text style={styles.rowValue}>{activeTrip.driver}</Text></View>
          <View style={styles.row}><Text style={styles.rowLabel}>Bus No.</Text><Text style={styles.rowValue}>{activeTrip.bus}</Text></View>
          <View style={styles.row}><Text style={styles.rowLabel}>Status</Text><Text style={[styles.rowValue, { color: '#059669' }]}>{activeTrip.status}</Text></View>
          <View style={styles.row}><Text style={styles.rowLabel}>Departure</Text><Text style={styles.rowValue}>{activeTrip.departure}</Text></View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { color: '#93C5FD', fontSize: 14 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  mapPlaceholder: { backgroundColor: '#DBEAFE', height: 260, margin: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  mapIcon: { fontSize: 60, marginBottom: 12 },
  mapText: { fontSize: 18, fontWeight: 'bold', color: '#1E40AF' },
  mapSub: { fontSize: 13, color: '#3B82F6', marginTop: 4 },
  infoCard: { backgroundColor: '#FFF', margin: 16, marginTop: 0, borderRadius: 12, padding: 16, elevation: 2 },
  infoTitle: { fontSize: 14, fontWeight: '700', color: '#374151', marginBottom: 12 },
  infoRoute: { fontSize: 17, fontWeight: 'bold', color: '#1E3A8A', marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  rowLabel: { fontSize: 13, color: '#6B7280' },
  rowValue: { fontSize: 13, fontWeight: '600', color: '#111827' },
});

export default LiveTrackingScreen;
