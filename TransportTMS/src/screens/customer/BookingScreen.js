import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectSeat, confirmBooking } from '../../redux/slices/bookingSlice';
import ButtonComponent from '../../components/ButtonComponent';

const seats = ['1A','1B','2A','2B','3A','3B','4A','4B','5A','5B','6A','6B'];
const bookedSeats = ['2A', '3B', '5A'];

const BookingScreen = () => {
  const dispatch = useDispatch();
  const { selectedRoute, selectedSeat, bookingStatus } = useSelector((s) => s.booking);
  const [loading, setLoading] = useState(false);

  const handleSeatSelect = (seat) => {
    if (bookedSeats.includes(seat)) return;
    dispatch(selectSeat(seat));
  };

  const handleBook = () => {
    if (!selectedRoute) { Alert.alert('Select Route', 'Please select a route first from Routes tab'); return; }
    if (!selectedSeat)  { Alert.alert('Select Seat',  'Please select a seat below'); return; }
    setLoading(true);
    setTimeout(() => {
      dispatch(confirmBooking({ date: '2024-06-25', amount: 250 }));
      setLoading(false);
      Alert.alert('✅ Booked!', `Seat ${selectedSeat} confirmed!`);
    }, 800);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}><Text style={styles.title}>🎫  Book a Seat</Text></View>
      <View style={styles.section}>
        <Text style={styles.label}>Selected Route</Text>
        <Text style={styles.value}>{selectedRoute || 'No route selected — go to Routes tab'}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Select Seat</Text>
        <View style={styles.seatGrid}>
          {seats.map((s) => {
            const isBooked   = bookedSeats.includes(s);
            const isSelected = selectedSeat === s;
            return (
              <TouchableOpacity
                key={s}
                style={[styles.seat, isBooked && styles.seatBooked, isSelected && styles.seatSelected]}
                onPress={() => handleSeatSelect(s)}
                disabled={isBooked}
              >
                <Text style={[styles.seatText, isBooked && { color: '#9CA3AF' }, isSelected && { color: '#FFF' }]}>{s}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.legend}>
          <View style={[styles.dot, { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#D1D5DB' }]} /><Text style={styles.legendText}>Available  </Text>
          <View style={[styles.dot, { backgroundColor: '#E5E7EB' }]} /><Text style={styles.legendText}>Booked  </Text>
          <View style={[styles.dot, { backgroundColor: '#2563EB' }]} /><Text style={styles.legendText}>Selected</Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 16, paddingBottom: 30 }}>
        <ButtonComponent title="Confirm Booking" onPress={handleBook} loading={loading} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', padding: 20, paddingTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  section: { backgroundColor: '#FFF', margin: 16, borderRadius: 12, padding: 16, elevation: 2 },
  label: { fontSize: 13, color: '#6B7280', fontWeight: '600', marginBottom: 6 },
  value: { fontSize: 15, fontWeight: 'bold', color: '#1E3A8A' },
  seatGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 8 },
  seat: { width: 48, height: 48, borderRadius: 8, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#D1D5DB', alignItems: 'center', justifyContent: 'center' },
  seatBooked: { backgroundColor: '#E5E7EB' },
  seatSelected: { backgroundColor: '#2563EB', borderColor: '#2563EB' },
  seatText: { fontSize: 13, fontWeight: '600', color: '#374151' },
  legend: { flexDirection: 'row', alignItems: 'center', marginTop: 14 },
  dot: { width: 14, height: 14, borderRadius: 3, marginRight: 4 },
  legendText: { fontSize: 11, color: '#6B7280' },
});

export default BookingScreen;
