import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { cancelBooking } from '../../redux/slices/bookingSlice';

const statusColors = { Confirmed: '#059669', Pending: '#F59E0B', Completed: '#6B7280', Cancelled: '#EF4444' };

const MyTripsScreen = () => {
  const dispatch = useDispatch();
  const { bookings } = useSelector((s) => s.booking);

  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style={styles.title}>🗺️  My Trips</Text></View>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.route}>{item.route}</Text>
              <View style={[styles.badge, { backgroundColor: statusColors[item.status] + '22' }]}>
                <Text style={[styles.badgeText, { color: statusColors[item.status] }]}>{item.status}</Text>
              </View>
            </View>
            <Text style={styles.detail}>📅 {item.date}   💺 Seat {item.seat}   💰 ₹{item.amount}</Text>
            <Text style={styles.id}>Booking ID: {item.id}</Text>
            {item.status === 'Confirmed' && (
              <TouchableOpacity style={styles.cancelBtn} onPress={() => dispatch(cancelBooking(item.id))}>
                <Text style={styles.cancelText}>Cancel Booking</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', padding: 20, paddingTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  card: { backgroundColor: '#FFF', borderRadius: 12, padding: 16, marginBottom: 12, elevation: 2 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  route: { fontSize: 15, fontWeight: 'bold', color: '#111827', flex: 1 },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  badgeText: { fontSize: 12, fontWeight: '600' },
  detail: { fontSize: 13, color: '#6B7280', marginBottom: 6 },
  id: { fontSize: 11, color: '#9CA3AF' },
  cancelBtn: { marginTop: 10, backgroundColor: '#FEE2E2', borderRadius: 8, paddingVertical: 8, alignItems: 'center' },
  cancelText: { color: '#EF4444', fontWeight: '600', fontSize: 13 },
});

export default MyTripsScreen;
