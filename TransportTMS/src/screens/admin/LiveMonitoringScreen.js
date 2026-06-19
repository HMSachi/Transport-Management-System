import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const LiveMonitoringScreen = () => {
  const { trips } = useSelector((s) => s.trip);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}><Text style={styles.title}>📡  Live Monitoring</Text></View>
      {/* Map Placeholder */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapIcon}>🗺️</Text>
        <Text style={styles.mapText}>Fleet Map View</Text>
        <Text style={styles.mapSub}>Real-time bus locations on map</Text>
      </View>
      {/* Live Fleet List */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Live Fleet Status</Text>
        {trips.map((t, i) => (
          <View key={t.id} style={[styles.row, i < trips.length - 1 && styles.rowBorder]}>
            <Text style={styles.rowIcon}>🚌</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowMain}>{t.route}</Text>
              <Text style={styles.rowSub}>{t.driver}  •  {t.bus}  •  {t.passengers} pax</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: t.status === 'Ongoing' ? '#D1FAE5' : t.status === 'Scheduled' ? '#DBEAFE' : '#F3F4F6' }]}>
              <Text style={[styles.badgeText, { color: t.status === 'Ongoing' ? '#059669' : t.status === 'Scheduled' ? '#2563EB' : '#6B7280' }]}>{t.status}</Text>
            </View>
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
  mapPlaceholder: { backgroundColor: '#EDE9FE', height: 240, margin: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  mapIcon: { fontSize: 56, marginBottom: 10 },
  mapText: { fontSize: 16, fontWeight: 'bold', color: '#5B21B6' },
  mapSub: { fontSize: 12, color: '#7C3AED', marginTop: 4 },
  section: { backgroundColor: '#FFF', margin: 16, marginTop: 0, borderRadius: 12, padding: 16, elevation: 2 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#374151', marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  rowIcon: { fontSize: 22, marginRight: 12 },
  rowMain: { fontSize: 14, fontWeight: '600', color: '#111827' },
  rowSub: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeText: { fontSize: 11, fontWeight: '700' },
});

export default LiveMonitoringScreen;
