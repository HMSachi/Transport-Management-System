import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { startTrip, endTrip } from '../../redux/slices/tripSlice';
import ButtonComponent from '../../components/ButtonComponent';

const DriverDashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((s) => s.auth);
  const { activeTrip, tripStatus } = useSelector((s) => s.trip);

  const quickLinks = [
    { icon: '📍', label: 'Passenger Location', screen: 'PassengerLocation'  },
    { icon: '📢', label: 'Emergency Broadcast', screen: 'EmergencyBroadcast' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, {user?.name || 'Driver'} 🚗</Text>
          <Text style={styles.headerSub}>Driver Dashboard</Text>
        </View>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => dispatch(logout())}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Trip Status Card */}
      <View style={[styles.tripCard, { backgroundColor: tripStatus === 'Ongoing' ? '#D1FAE5' : '#DBEAFE' }]}>
        <Text style={styles.tripCardTitle}>Current Trip Status</Text>
        <Text style={[styles.tripStatus, { color: tripStatus === 'Ongoing' ? '#059669' : '#2563EB' }]}>{tripStatus}</Text>
        {activeTrip && <Text style={styles.tripRoute}>{activeTrip.route}</Text>}
        <View style={styles.tripActions}>
          <ButtonComponent title="▶ Start Trip" onPress={() => dispatch(startTrip())} color="#059669" style={{ flex: 1, marginRight: 8 }} />
          <ButtonComponent title="⏹ End Trip"   onPress={() => dispatch(endTrip())}   color="#EF4444" style={{ flex: 1 }} />
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        {[
          { icon: '👥', label: 'Passengers', value: activeTrip?.passengers || 0, color: '#2563EB' },
          { icon: '🚌', label: 'Bus No.',    value: activeTrip?.bus || 'N/A',   color: '#7C3AED' },
        ].map((s, i) => (
          <View key={i} style={styles.statCard}>
            <Text style={styles.statIcon}>{s.icon}</Text>
            <Text style={[styles.statValue, { color: s.color }]}>{s.value}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>

      {/* Quick Links */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.grid}>
        {quickLinks.map((item, i) => (
          <TouchableOpacity key={i} style={styles.gridItem} onPress={() => navigation.navigate(item.screen)}>
            <Text style={styles.gridIcon}>{item.icon}</Text>
            <Text style={styles.gridLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0FDF4' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#065F46', padding: 20, paddingTop: 50 },
  greeting: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  headerSub: { fontSize: 12, color: '#6EE7B7', marginTop: 2 },
  logoutBtn: { backgroundColor: '#EF4444', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  logoutText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
  tripCard: { margin: 16, borderRadius: 14, padding: 16 },
  tripCardTitle: { fontSize: 13, color: '#374151', fontWeight: '600', marginBottom: 4 },
  tripStatus: { fontSize: 28, fontWeight: 'bold', marginBottom: 4 },
  tripRoute: { fontSize: 14, color: '#374151', marginBottom: 12 },
  tripActions: { flexDirection: 'row' },
  statsRow: { flexDirection: 'row', gap: 12, paddingHorizontal: 16, marginBottom: 16 },
  statCard: { flex: 1, backgroundColor: '#FFF', borderRadius: 12, padding: 16, alignItems: 'center', elevation: 2 },
  statIcon: { fontSize: 24, marginBottom: 6 },
  statValue: { fontSize: 22, fontWeight: 'bold', marginBottom: 2 },
  statLabel: { fontSize: 12, color: '#6B7280' },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#374151', paddingHorizontal: 16, marginBottom: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16, gap: 10, paddingBottom: 30 },
  gridItem: { backgroundColor: '#FFF', borderRadius: 12, width: '46%', padding: 16, alignItems: 'center', elevation: 2 },
  gridIcon: { fontSize: 28, marginBottom: 8 },
  gridLabel: { fontSize: 12, color: '#374151', fontWeight: '600', textAlign: 'center' },
});

export default DriverDashboard;
