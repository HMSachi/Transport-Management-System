import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import CardComponent from '../../components/CardComponent';

const CustomerDashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((s) => s.auth);
  const { bookings } = useSelector((s) => s.booking);
  const { unreadCount } = useSelector((s) => s.notification);
  const { activeTrip } = useSelector((s) => s.trip);

  const quickLinks = [
    { icon: '🗺️', label: 'Find Routes',       screen: 'Routes'         },
    { icon: '📡', label: 'Live Tracking',      screen: 'LiveTracking'   },
    { icon: '📱', label: 'Attendance (QR)',    screen: 'Attendance'     },
    { icon: '💳', label: 'Payment',            screen: 'Payment'        },
    { icon: '🧾', label: 'Payment History',    screen: 'PaymentHistory' },
    { icon: '🔔', label: 'Notifications',      screen: 'Notifications'  },
    { icon: '💬', label: 'Feedback',           screen: 'Feedback'       },
    { icon: '🆘', label: 'SOS Emergency',      screen: 'SOS'            },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, {user?.name || 'Customer'} 👋</Text>
          <Text style={styles.headerSub}>Customer Dashboard</Text>
        </View>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => dispatch(logout())}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <CardComponent icon="🎫" title="My Bookings"   value={bookings.length}  color="#2563EB" />
        <CardComponent icon="🔔" title="Notifications" value={unreadCount}      color="#F59E0B" />
      </View>

      {/* Active Trip */}
      {activeTrip && (
        <View style={styles.activeTrip}>
          <Text style={styles.sectionTitle}>🚌 Active Trip</Text>
          <Text style={styles.tripText}>{activeTrip.route}</Text>
          <Text style={styles.tripSub}>Driver: {activeTrip.driver} • Status: {activeTrip.status}</Text>
        </View>
      )}

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
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1E3A8A', padding: 20, paddingTop: 50 },
  greeting: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' },
  headerSub: { fontSize: 12, color: '#93C5FD', marginTop: 2 },
  logoutBtn: { backgroundColor: '#EF4444', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  logoutText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
  statsRow: { flexDirection: 'row', gap: 10, padding: 16 },
  activeTrip: { backgroundColor: '#DBEAFE', margin: 16, marginTop: 0, borderRadius: 12, padding: 14 },
  tripText: { fontSize: 15, fontWeight: 'bold', color: '#1E40AF' },
  tripSub: { fontSize: 12, color: '#3B82F6', marginTop: 4 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#374151', paddingHorizontal: 16, marginBottom: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16, gap: 10, paddingBottom: 30 },
  gridItem: { backgroundColor: '#FFFFFF', borderRadius: 12, width: '46%', padding: 16, alignItems: 'center', elevation: 2 },
  gridIcon: { fontSize: 28, marginBottom: 8 },
  gridLabel: { fontSize: 12, color: '#374151', fontWeight: '600', textAlign: 'center' },
});

export default CustomerDashboard;
