import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const AdminDashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((s) => s.auth);
  const { trips } = useSelector((s) => s.trip);
  const { unreadCount } = useSelector((s) => s.notification);

  const stats = [
    { icon: '🚌', label: 'Total Buses',    value: '12', color: '#7C3AED' },
    { icon: '🧑‍✈️', label: 'Drivers',        value: '18', color: '#2563EB' },
    { icon: '👥', label: 'Passengers',     value: '350', color: '#059669' },
    { icon: '🗺️', label: 'Active Trips',   value: trips.filter(t => t.status === 'Ongoing').length, color: '#F59E0B' },
  ];

  const quickLinks = [
    { icon: '👥', label: 'Passenger Mgmt',  screen: 'PassengerManagement' },
    { icon: '📢', label: 'Broadcast',       screen: 'Broadcast'           },
    { icon: '📋', label: 'Activity Log',    screen: 'ActivityLog'         },
    { icon: '📝', label: 'Complaints',      screen: 'Complaints'          },
    { icon: '🚗', label: 'Driver Mode',     screen: 'DriverMode'          },
    { icon: '🔔', label: `Alerts (${unreadCount})`, screen: 'ActivityLog'  },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, {user?.name || 'Admin'} 🏢</Text>
          <Text style={styles.headerSub}>Bus Owner Dashboard</Text>
        </View>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => dispatch(logout())}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsGrid}>
        {stats.map((s, i) => (
          <View key={i} style={styles.statCard}>
            <Text style={styles.statIcon}>{s.icon}</Text>
            <Text style={[styles.statValue, { color: s.color }]}>{s.value}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>

      {/* Quick Links */}
      <Text style={styles.sectionTitle}>Management</Text>
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
  container: { flex: 1, backgroundColor: '#F5F3FF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#5B21B6', padding: 20, paddingTop: 50 },
  greeting: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  headerSub: { fontSize: 12, color: '#C4B5FD', marginTop: 2 },
  logoutBtn: { backgroundColor: '#EF4444', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  logoutText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', padding: 12, gap: 10 },
  statCard: { width: '47%', backgroundColor: '#FFF', borderRadius: 12, padding: 16, alignItems: 'center', elevation: 2 },
  statIcon: { fontSize: 26, marginBottom: 6 },
  statValue: { fontSize: 24, fontWeight: 'bold', marginBottom: 2 },
  statLabel: { fontSize: 12, color: '#6B7280' },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#374151', paddingHorizontal: 16, marginBottom: 10, marginTop: 6 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16, gap: 10, paddingBottom: 30 },
  gridItem: { backgroundColor: '#FFF', borderRadius: 12, width: '30%', padding: 14, alignItems: 'center', elevation: 2 },
  gridIcon: { fontSize: 26, marginBottom: 6 },
  gridLabel: { fontSize: 11, color: '#374151', fontWeight: '600', textAlign: 'center' },
});

export default AdminDashboard;
