import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const LiveTrackingScreen = ({ navigation }) => {
  const { activeTrip } = useSelector((state) => state.trip);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Live Tracking</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* Map Placeholder */}
        <View style={styles.mapContainer}>
          <Text style={styles.mapIcon}>🗺️</Text>
          <Text style={styles.mapText}>GPS Tracking Active</Text>
          <Text style={styles.mapSubText}>Fetching real-time coordinates...</Text>
        </View>

        {/* Info Card */}
        {activeTrip ? (
          <View style={styles.infoCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.liveIndicator}>● LIVE</Text>
              <Text style={styles.busNo}>{activeTrip.bus}</Text>
            </View>

            <Text style={styles.routeTitle}>{activeTrip.route}</Text>

            <View style={styles.divider} />

            <View style={styles.detailsGrid}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Driver</Text>
                <Text style={styles.detailVal}>{activeTrip.driver}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Status</Text>
                <Text style={[styles.detailVal, { color: '#10B981' }]}>{activeTrip.status}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Departure</Text>
                <Text style={styles.detailVal}>{activeTrip.departure}</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.noTripCard}>
            <Text style={styles.noTripText}>No active trip to track at the moment.</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1E3A8A' },
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', paddingVertical: 16, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  backBtn: { width: 32, height: 32, justifyContent: 'center', alignItems: 'center' },
  backBtnText: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  headerTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  mapContainer: { flex: 1, backgroundColor: '#DBEAFE', margin: 16, borderRadius: 16, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#3B82F6', borderStyle: 'dashed' },
  mapIcon: { fontSize: 72, marginBottom: 12 },
  mapText: { fontSize: 18, fontWeight: 'bold', color: '#1E3A8A' },
  mapSubText: { fontSize: 12, color: '#6B7280', marginTop: 4 },
  infoCard: { backgroundColor: '#FFFFFF', marginHorizontal: 16, marginBottom: 24, padding: 20, borderRadius: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 6, elevation: 4 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  liveIndicator: { color: '#EF4444', fontWeight: 'bold', fontSize: 12, letterSpacing: 0.5 },
  busNo: { fontSize: 13, fontWeight: '600', color: '#6B7280', backgroundColor: '#F3F4F6', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  routeTitle: { fontSize: 18, fontWeight: 'bold', color: '#111827', marginBottom: 12 },
  divider: { height: 1, backgroundColor: '#E5E7EB', marginVertical: 12 },
  detailsGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  detailItem: { alignItems: 'flex-start' },
  detailLabel: { fontSize: 11, color: '#9CA3AF', marginBottom: 2 },
  detailVal: { fontSize: 14, fontWeight: 'bold', color: '#374151' },
  noTripCard: { backgroundColor: '#FFFFFF', margin: 16, padding: 20, borderRadius: 16, alignItems: 'center' },
  noTripText: { color: '#9CA3AF', fontSize: 14 },
});

export default LiveTrackingScreen;
