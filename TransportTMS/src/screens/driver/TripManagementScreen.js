import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTrip, startTrip, endTrip } from '../../redux/slices/tripSlice';
import ButtonComponent from '../../components/ButtonComponent';

const TripManagementScreen = () => {
  const dispatch = useDispatch();
  const { trips, activeTrip, tripStatus } = useSelector((state) => state.trip);

  const handleSetAsActive = (trip) => {
    dispatch(setActiveTrip(trip));
    Alert.alert('Trip Updated', `"${trip.route}" is now set as the active trip.`);
  };

  const handleStartTrip = () => {
    dispatch(startTrip());
    Alert.alert('Trip Started', 'Active trip status updated to Ongoing.');
  };

  const handleEndTrip = () => {
    dispatch(endTrip());
    Alert.alert('Trip Ended', 'Active trip status updated to Completed.');
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Ongoing':
        return { bg: '#D1FAE5', text: '#065F46' };
      case 'Scheduled':
        return { bg: '#FEF3C7', text: '#92400E' };
      case 'Completed':
        return { bg: '#E5E7EB', text: '#374151' };
      default:
        return { bg: '#F3F4F6', text: '#4B5563' };
    }
  };

  const renderTripItem = ({ item }) => {
    const isActive = activeTrip && activeTrip.id === item.id;
    const statusColor = getStatusStyle(item.status);
    return (
      <View style={[styles.tripCard, isActive && styles.activeTripBorder]}>
        <View style={styles.cardHeader}>
          <Text style={styles.tripId}>Trip ID: {item.id}</Text>
          <View style={[styles.statusBadge, { backgroundColor: statusColor.bg }]}>
            <Text style={[styles.statusText, { color: statusColor.text }]}>{isActive ? tripStatus : item.status}</Text>
          </View>
        </View>

        <Text style={styles.route}>{item.route}</Text>

        <View style={styles.detailsRow}>
          <Text style={styles.detailText}>Driver: {item.driver}</Text>
          <Text style={styles.detailText}>Bus: {item.bus}</Text>
        </View>

        {!isActive && (
          <TouchableOpacity
            style={styles.setAsActiveBtn}
            onPress={() => handleSetAsActive(item)}
            activeOpacity={0.8}
          >
            <Text style={styles.setAsActiveBtnText}>Set as Active</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Trip Management</Text>
        </View>

        {/* Active Trip Details Control */}
        <View style={styles.controlSection}>
          <Text style={styles.sectionTitle}>Currently Active Trip</Text>
          {activeTrip ? (
            <View style={styles.activeCard}>
              <Text style={styles.activeRoute}>{activeTrip.route}</Text>
              <Text style={styles.activeDetails}>
                Bus: {activeTrip.bus} | Status:{' '}
                <Text style={styles.statusHighlight}>{tripStatus}</Text>
              </Text>
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
            <View style={styles.noActiveCard}>
              <Text style={styles.noActiveText}>No active trip selected. Set one below.</Text>
            </View>
          )}
        </View>

        {/* All Trips List */}
        <View style={styles.listSection}>
          <Text style={styles.sectionTitle}>All Assigned Trips</Text>
          <FlatList
            data={trips}
            keyExtractor={(item) => item.id}
            renderItem={renderTripItem}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#065F46' },
  container: { flex: 1, backgroundColor: '#F0FDF4' },
  header: { backgroundColor: '#065F46', paddingVertical: 18, alignItems: 'center' },
  headerTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  controlSection: { padding: 16, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#E5E7EB', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#065F46', marginBottom: 12 },
  activeCard: { backgroundColor: '#F0FDF4', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: '#A7F3D0' },
  activeRoute: { fontSize: 16, fontWeight: 'bold', color: '#065F46', marginBottom: 4 },
  activeDetails: { fontSize: 12, color: '#374151', marginBottom: 12 },
  statusHighlight: { fontWeight: 'bold', color: '#059669' },
  buttonsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  controlBtn: { flex: 0.47, marginVertical: 0 },
  noActiveCard: { backgroundColor: '#F9FAFB', borderRadius: 10, padding: 20, alignItems: 'center', borderWidth: 1, borderStyle: 'dashed', borderColor: '#D1D5DB' },
  noActiveText: { color: '#9CA3AF', fontSize: 13 },
  listSection: { flex: 1, padding: 16 },
  listContainer: { paddingBottom: 20 },
  tripCard: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, marginBottom: 14, borderWidth: 1.5, borderColor: 'transparent', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.03, shadowRadius: 3, elevation: 1 },
  activeTripBorder: { borderColor: '#059669' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  tripId: { fontSize: 12, fontWeight: '600', color: '#6B7280' },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  statusText: { fontSize: 11, fontWeight: '700' },
  route: { fontSize: 15, fontWeight: 'bold', color: '#1F2937', marginBottom: 8 },
  detailsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  detailText: { fontSize: 12, color: '#6B7280' },
  setAsActiveBtn: { backgroundColor: '#065F46', borderRadius: 8, paddingVertical: 8, alignItems: 'center' },
  setAsActiveBtnText: { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' },
});

export default TripManagementScreen;
