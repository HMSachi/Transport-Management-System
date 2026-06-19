import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import CardComponent from '../../components/CardComponent';

const CustomerDashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { bookings } = useSelector((state) => state.booking);
  const { unreadCount } = useSelector((state) => state.notification);
  const { activeTrip } = useSelector((state) => state.trip);

  const handleLogout = () => {
    dispatch(logout());
  };

  const quickActions = [
    { title: 'Routes', icon: '🗺️', screen: 'Routes', color: '#3B82F6' },
    { title: 'Live Tracking', icon: '📍', screen: 'LiveTracking', color: '#10B981' },
    { title: 'Attendance', icon: '📅', screen: 'Attendance', color: '#F59E0B' },
    { title: 'Payment', icon: '💳', screen: 'Payment', color: '#8B5CF6' },
    { title: 'Payment History', icon: '📜', screen: 'PaymentHistory', color: '#6366F1' },
    { title: 'Notifications', icon: '🔔', screen: 'Notifications', color: '#EC4899', badge: unreadCount },
    { title: 'Feedback', icon: '💬', screen: 'Feedback', color: '#14B8A6' },
    { title: 'SOS Emergency', icon: '🚨', screen: 'SOS', color: '#EF4444' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.userName}>{user?.name || 'Customer'}</Text>
            </View>
            <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
              <Text style={styles.logoutBtnText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statVal}>{bookings?.length || 0}</Text>
            <Text style={styles.statLabel}>Total Bookings</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statVal}>{unreadCount || 0}</Text>
            <Text style={styles.statLabel}>Unread Alerts</Text>
          </View>
        </View>

        {/* Active Trip Card */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Trip Status</Text>
          {activeTrip ? (
            <CardComponent
              icon="🚌"
              title={activeTrip.route}
              value={activeTrip.status}
              subtitle={`Driver: ${activeTrip.driver} | Bus: ${activeTrip.bus} | Departs: ${activeTrip.departure}`}
              color={activeTrip.status === 'Ongoing' ? '#10B981' : '#F59E0B'}
              onPress={() => navigation.navigate('LiveTracking')}
            />
          ) : (
            <View style={styles.noTripCard}>
              <Text style={styles.noTripText}>No active trip currently</Text>
            </View>
          )}
        </View>

        {/* Quick Actions Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.grid}>
            {quickActions.map((action, idx) => (
              <TouchableOpacity
                key={idx}
                style={[styles.gridItem, { borderTopColor: action.color }]}
                onPress={() => navigation.navigate(action.screen)}
              >
                <View style={styles.iconContainer}>
                  <Text style={styles.actionIcon}>{action.icon}</Text>
                  {action.badge > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{action.badge}</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.actionTitle}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1E3A8A' },
  container: { flexGrow: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', paddingHorizontal: 20, paddingBottom: 24, paddingTop: 16 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  welcomeText: { color: '#93C5FD', fontSize: 14 },
  userName: { color: '#FFFFFF', fontSize: 22, fontWeight: 'bold', marginTop: 2 },
  logoutBtn: { backgroundColor: 'rgba(255, 255, 255, 0.15)', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8 },
  logoutBtnText: { color: '#FFFFFF', fontSize: 13, fontWeight: '600' },
  statsContainer: { flexDirection: 'row', paddingHorizontal: 20, marginTop: -16, justifyContent: 'space-between' },
  statBox: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, width: '47%', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  statVal: { fontSize: 24, fontWeight: 'bold', color: '#1E3A8A' },
  statLabel: { fontSize: 12, color: '#6B7280', marginTop: 4 },
  section: { paddingHorizontal: 20, marginTop: 24 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1E3A8A', marginBottom: 12 },
  noTripCard: { backgroundColor: '#FFFFFF', borderRadius: 10, padding: 20, alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB' },
  noTripText: { color: '#9CA3AF', fontSize: 14 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  gridItem: { backgroundColor: '#FFFFFF', borderRadius: 12, width: '47%', padding: 16, marginBottom: 16, alignItems: 'center', borderTopWidth: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 3, elevation: 1 },
  iconContainer: { position: 'relative', marginBottom: 8 },
  actionIcon: { fontSize: 28 },
  badge: { position: 'absolute', right: -10, top: -4, backgroundColor: '#EF4444', borderRadius: 10, minWidth: 18, height: 18, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 4 },
  badgeText: { color: '#FFFFFF', fontSize: 10, fontWeight: 'bold' },
  actionTitle: { fontSize: 13, fontWeight: '600', color: '#374151', textAlign: 'center' },
});

export default CustomerDashboard;
