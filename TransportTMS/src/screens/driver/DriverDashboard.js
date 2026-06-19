import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { startTrip, endTrip } from '../../redux/slices/tripSlice';
import CardComponent from '../../components/CardComponent';
import ButtonComponent from '../../components/ButtonComponent';

const DriverDashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { activeTrip, tripStatus } = useSelector((state) => state.trip);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleStartTrip = () => {
    dispatch(startTrip());
    Alert.alert('Trip Started', 'Active trip status updated to Ongoing.');
  };

  const handleEndTrip = () => {
    dispatch(endTrip());
    Alert.alert('Trip Ended', 'Active trip status updated to Completed.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.welcomeText}>Welcome Driver,</Text>
              <Text style={styles.userName}>{user?.name || 'Driver Partner'}</Text>
            </View>
            <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
              <Text style={styles.logoutBtnText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statVal}>{activeTrip ? activeTrip.passengers : 0}</Text>
            <Text style={styles.statLabel}>Expected Passengers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statVal}>{activeTrip ? activeTrip.bus.split('-').pop() : 'KA-01'}</Text>
            <Text style={styles.statLabel}>Bus Number</Text>
          </View>
        </View>

        {/* Active Trip Control Card */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Trip Controls</Text>
          {activeTrip ? (
            <View style={styles.tripControlCard}>
              <CardComponent
                icon="🚌"
                title={activeTrip.route}
                value={tripStatus}
                subtitle={`Bus: ${activeTrip.bus} | Expected Pax: ${activeTrip.passengers}`}
                color={tripStatus === 'Ongoing' ? '#059669' : '#D1D5DB'}
              />

              <View style={styles.buttonsRow}>
                <ButtonComponent
                  title="Start Trip"
                  onPress={handleStartTrip}
                  color="#059669"
                  disabled={tripStatus === 'Ongoing'}
                  style={styles.controlBtn}
                />
                <ButtonComponent
                  title="End Trip"
                  onPress={handleEndTrip}
                  color="#EF4444"
                  disabled={tripStatus === 'Completed'}
                  style={styles.controlBtn}
                />
              </View>
            </View>
          ) : (
            <View style={styles.noTripCard}>
              <Text style={styles.noTripText}>No active trip assigned.</Text>
            </View>
          )}
        </View>

        {/* Quick Links */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Links</Text>
          <View style={styles.quickLinksContainer}>
            <TouchableOpacity
              style={styles.linkItem}
              onPress={() => navigation.navigate('PassengerLocation')}
              activeOpacity={0.8}
            >
              <View style={[styles.linkIconBox, { backgroundColor: '#D1FAE5' }]}>
                <Text style={styles.linkIcon}>📍</Text>
              </View>
              <View style={styles.linkContent}>
                <Text style={styles.linkTitle}>Passenger Locations</Text>
                <Text style={styles.linkSub}>View stops and onboarding lists</Text>
              </View>
              <Text style={styles.linkArrow}>➔</Text>
            </TouchableOpacity>

            <View style={styles.linkDivider} />

            <TouchableOpacity
              style={styles.linkItem}
              onPress={() => navigation.navigate('EmergencyBroadcast')}
              activeOpacity={0.8}
            >
              <View style={[styles.linkIconBox, { backgroundColor: '#FEE2E2' }]}>
                <Text style={styles.linkIcon}>🚨</Text>
              </View>
              <View style={styles.linkContent}>
                <Text style={styles.linkTitle}>Emergency Broadcast</Text>
                <Text style={styles.linkSub}>Alert passengers and admins</Text>
              </View>
              <Text style={styles.linkArrow}>➔</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#065F46' },
  container: { flexGrow: 1, backgroundColor: '#F0FDF4' },
  header: { backgroundColor: '#065F46', paddingHorizontal: 20, paddingBottom: 24, paddingTop: 16 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  welcomeText: { color: '#A7F3D0', fontSize: 14 },
  userName: { color: '#FFFFFF', fontSize: 22, fontWeight: 'bold', marginTop: 2 },
  logoutBtn: { backgroundColor: 'rgba(255, 255, 255, 0.15)', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8 },
  logoutBtnText: { color: '#FFFFFF', fontSize: 13, fontWeight: '600' },
  statsContainer: { flexDirection: 'row', paddingHorizontal: 20, marginTop: -16, justifyContent: 'space-between' },
  statBox: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, width: '47%', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  statVal: { fontSize: 24, fontWeight: 'bold', color: '#065F46' },
  statLabel: { fontSize: 12, color: '#6B7280', marginTop: 4, textAlign: 'center' },
  section: { paddingHorizontal: 20, marginTop: 24 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#065F46', marginBottom: 12 },
  tripControlCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
  buttonsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  controlBtn: { flex: 0.47 },
  noTripCard: { backgroundColor: '#FFFFFF', borderRadius: 10, padding: 20, alignItems: 'center' },
  noTripText: { color: '#9CA3AF', fontSize: 14 },
  quickLinksContainer: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 4, elevation: 1 },
  linkItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  linkIconBox: { width: 44, height: 44, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  linkIcon: { fontSize: 22 },
  linkContent: { flex: 1 },
  linkTitle: { fontSize: 15, fontWeight: 'bold', color: '#1F2937' },
  linkSub: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  linkArrow: { fontSize: 16, color: '#9CA3AF', fontWeight: 'bold' },
  linkDivider: { height: 1, backgroundColor: '#F3F4F6', marginVertical: 10 },
});

export default DriverDashboard;
