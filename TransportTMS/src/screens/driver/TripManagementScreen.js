import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { startTrip, endTrip, setActiveTrip } from '../../redux/slices/tripSlice';
import ButtonComponent from '../../components/ButtonComponent';

const TripManagementScreen = () => {
  const dispatch = useDispatch();
  const { trips, activeTrip, tripStatus } = useSelector((s) => s.trip);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}><Text style={styles.title}>🚌  Trip Management</Text></View>

      {/* Active Trip Control */}
      <View style={styles.controlCard}>
        <Text style={styles.controlTitle}>Trip Control</Text>
        <Text style={styles.statusText}>Status: <Text style={{ color: tripStatus === 'Ongoing' ? '#059669' : '#F59E0B' }}>{tripStatus}</Text></Text>
        {activeTrip && <Text style={styles.routeText}>{activeTrip.route}</Text>}
        <View style={styles.btnRow}>
          <ButtonComponent title="▶ Start" onPress={() => dispatch(startTrip())} color="#059669" style={{ flex: 1, marginRight: 8 }} />
          <ButtonComponent title="⏹ End"   onPress={() => dispatch(endTrip())}   color="#EF4444" style={{ flex: 1 }} />
        </View>
      </View>

      {/* All Trips List */}
      <Text style={styles.sectionTitle}>All Trips</Text>
      {trips.map((t) => (
        <View key={t.id} style={[styles.tripCard, activeTrip?.id === t.id && styles.tripCardActive]}>
          <View style={styles.tripRow}>
            <Text style={styles.tripRoute}>{t.route}</Text>
            <Text style={[styles.tripStatus, { color: t.status === 'Ongoing' ? '#059669' : t.status === 'Completed' ? '#6B7280' : '#F59E0B' }]}>{t.status}</Text>
          </View>
          <Text style={styles.tripDetail}>🕐 {t.departure}  •  👥 {t.passengers} passengers  •  🚌 {t.bus}</Text>
          <ButtonComponent title="Set as Active" onPress={() => dispatch(setActiveTrip(t))} color="#2563EB" outline style={{ marginTop: 8 }} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0FDF4' },
  header: { backgroundColor: '#065F46', padding: 20, paddingTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  controlCard: { backgroundColor: '#D1FAE5', margin: 16, borderRadius: 14, padding: 16 },
  controlTitle: { fontSize: 14, fontWeight: '700', color: '#065F46', marginBottom: 8 },
  statusText: { fontSize: 15, fontWeight: '600', color: '#374151', marginBottom: 4 },
  routeText: { fontSize: 14, color: '#374151', marginBottom: 12 },
  btnRow: { flexDirection: 'row' },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#374151', paddingHorizontal: 16, marginBottom: 10 },
  tripCard: { backgroundColor: '#FFF', margin: 12, marginBottom: 0, borderRadius: 12, padding: 16, elevation: 2 },
  tripCardActive: { borderWidth: 2, borderColor: '#059669' },
  tripRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  tripRoute: { fontSize: 14, fontWeight: 'bold', color: '#111827', flex: 1 },
  tripStatus: { fontSize: 13, fontWeight: '600' },
  tripDetail: { fontSize: 12, color: '#6B7280' },
});

export default TripManagementScreen;
