import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { selectRoute } from '../../redux/slices/bookingSlice';

const STATIC_ROUTES = [
  { id: 'R001', from: 'City A', to: 'City B', duration: '2h 30m', fare: 250, seats: 12, departure: '08:00 AM', type: 'AC Express' },
  { id: 'R002', from: 'City B', to: 'City C', duration: '3h 15m', fare: 180, seats: 8, departure: '10:15 AM', type: 'Standard' },
  { id: 'R003', from: 'City C', to: 'City A', duration: '4h 00m', fare: 310, seats: 15, departure: '02:30 PM', type: 'AC Luxury Sleeper' },
  { id: 'R004', from: 'City A', to: 'City C', duration: '5h 45m', fare: 450, seats: 5, departure: '06:00 AM', type: 'Executive' },
  { id: 'R005', from: 'City B', to: 'City A', duration: '2h 45m', fare: 260, seats: 20, departure: '04:15 PM', type: 'AC Express' },
];

const RoutesScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSelectRoute = (route) => {
    const routeStr = `${route.from} → ${route.to}`;
    dispatch(selectRoute(routeStr));
    navigation.navigate('Booking');
  };

  const renderRouteItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleSelectRoute(item)} activeOpacity={0.8}>
      <View style={styles.cardHeader}>
        <View style={styles.routeRow}>
          <Text style={styles.cityName}>{item.from}</Text>
          <Text style={styles.arrow}>➔</Text>
          <Text style={styles.cityName}>{item.to}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: item.type.includes('AC') ? '#DBEAFE' : '#F3F4F6' }]}>
          <Text style={[styles.badgeText, { color: item.type.includes('AC') ? '#1E40AF' : '#4B5563' }]}>{item.type}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.cardDetails}>
        <View style={styles.detailCol}>
          <Text style={styles.detailLabel}>Departure</Text>
          <Text style={styles.detailVal}>{item.departure}</Text>
        </View>
        <View style={styles.detailCol}>
          <Text style={styles.detailLabel}>Duration</Text>
          <Text style={styles.detailVal}>{item.duration}</Text>
        </View>
        <View style={styles.detailCol}>
          <Text style={styles.detailLabel}>Fare</Text>
          <Text style={styles.detailVal}>₹{item.fare}</Text>
        </View>
        <View style={styles.detailCol}>
          <Text style={styles.detailLabel}>Seats Left</Text>
          <Text style={[styles.detailVal, { color: item.seats <= 5 ? '#EF4444' : '#10B981' }]}>{item.seats}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Available Routes</Text>
          <View style={{ width: 32 }} />
        </View>

        <FlatList
          data={STATIC_ROUTES}
          keyExtractor={(item) => item.id}
          renderItem={renderRouteItem}
          contentContainerStyle={styles.listContainer}
        />
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
  listContainer: { padding: 16 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 14, padding: 16, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  routeRow: { flexDirection: 'row', alignItems: 'center' },
  cityName: { fontSize: 16, fontWeight: 'bold', color: '#1F2937' },
  arrow: { fontSize: 14, color: '#9CA3AF', marginHorizontal: 8 },
  badge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  badgeText: { fontSize: 11, fontWeight: '600' },
  divider: { height: 1, backgroundColor: '#F3F4F6', marginVertical: 12 },
  cardDetails: { flexDirection: 'row', justifyContent: 'space-between' },
  detailCol: { alignItems: 'flex-start' },
  detailLabel: { fontSize: 11, color: '#9CA3AF', marginBottom: 2 },
  detailVal: { fontSize: 13, fontWeight: '600', color: '#374151' },
});

export default RoutesScreen;
