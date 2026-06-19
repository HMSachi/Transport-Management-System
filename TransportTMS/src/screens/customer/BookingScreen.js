import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectSeat, confirmBooking, resetBookingStatus } from '../../redux/slices/bookingSlice';
import ButtonComponent from '../../components/ButtonComponent';

const PRE_BOOKED_SEATS = ['1B', '3A', '5B'];
const SEATS = [
  ['1A', '1B'],
  ['2A', '2B'],
  ['3A', '3B'],
  ['4A', '4B'],
  ['5A', '5B'],
  ['6A', '6B'],
];

const BookingScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { selectedRoute, selectedSeat, bookingStatus } = useSelector((state) => state.booking);

  useEffect(() => {
    if (bookingStatus === 'booked') {
      Alert.alert('Success', 'Your booking has been confirmed!', [
        {
          text: 'OK',
          onPress: () => {
            dispatch(resetBookingStatus());
            navigation.navigate('Trips');
          },
        },
      ]);
    }
  }, [bookingStatus, dispatch, navigation]);

  const handleSeatPress = (seat) => {
    if (PRE_BOOKED_SEATS.includes(seat)) return;
    dispatch(selectSeat(seat));
  };

  const handleConfirm = () => {
    if (!selectedRoute) {
      Alert.alert('Error', 'Please select a route first.');
      return;
    }
    if (!selectedSeat) {
      Alert.alert('Error', 'Please select a seat.');
      return;
    }
    const today = new Date().toISOString().split('T')[0];
    dispatch(confirmBooking({ date: today, amount: 250 }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Seat Selection</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Active Route display */}
          <View style={styles.routeContainer}>
            <Text style={styles.routeLabel}>Selected Route:</Text>
            {selectedRoute ? (
              <Text style={styles.routeVal}>{selectedRoute}</Text>
            ) : (
              <View style={styles.noRouteBox}>
                <Text style={styles.noRouteText}>No route selected.</Text>
                <TouchableOpacity
                  style={styles.selectRouteBtn}
                  onPress={() => navigation.navigate('Home', { screen: 'Routes' })}
                >
                  <Text style={styles.selectRouteBtnText}>View Routes</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {selectedRoute && (
            <>
              {/* Bus Layout Container */}
              <View style={styles.busContainer}>
                <View style={styles.driverCabin}>
                  <Text style={styles.cabinText}>Driver Cabin 🚌</Text>
                </View>

                {/* Seat Grid */}
                <View style={styles.grid}>
                  {SEATS.map((row, rowIdx) => (
                    <View key={rowIdx} style={styles.row}>
                      {row.map((seat) => {
                        const isBooked = PRE_BOOKED_SEATS.includes(seat);
                        const isSelected = selectedSeat === seat;

                        let seatStyle = styles.seatAvailable;
                        let textStyle = styles.seatTextAvailable;

                        if (isBooked) {
                          seatStyle = styles.seatBooked;
                          textStyle = styles.seatTextBooked;
                        } else if (isSelected) {
                          seatStyle = styles.seatSelected;
                          textStyle = styles.seatTextSelected;
                        }

                        return (
                          <TouchableOpacity
                            key={seat}
                            style={[styles.seat, seatStyle]}
                            onPress={() => handleSeatPress(seat)}
                            disabled={isBooked}
                          >
                            <Text style={textStyle}>{seat}</Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  ))}
                </View>
              </View>

              {/* Legend */}
              <View style={styles.legend}>
                <View style={styles.legendItem}>
                  <View style={[styles.legendBox, styles.seatAvailable]} />
                  <Text style={styles.legendText}>Available</Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendBox, styles.seatBooked]} />
                  <Text style={styles.legendText}>Booked</Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendBox, styles.seatSelected]} />
                  <Text style={styles.legendText}>Selected</Text>
                </View>
              </View>

              {/* Booking Action */}
              <View style={styles.actionContainer}>
                {selectedSeat && (
                  <View style={styles.infoRow}>
                    <Text style={styles.infoText}>Seat: <Text style={styles.infoBold}>{selectedSeat}</Text></Text>
                    <Text style={styles.infoText}>Fare: <Text style={styles.infoBold}>₹250</Text></Text>
                  </View>
                )}
                <ButtonComponent
                  title="Confirm Booking"
                  onPress={handleConfirm}
                  disabled={!selectedSeat}
                />
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1E3A8A' },
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', paddingVertical: 18, alignItems: 'center' },
  headerTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  scrollContent: { padding: 20 },
  routeContainer: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 12, marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 1 },
  routeLabel: { fontSize: 13, color: '#6B7280', fontWeight: '500', marginBottom: 4 },
  routeVal: { fontSize: 16, fontWeight: 'bold', color: '#1E3A8A' },
  noRouteBox: { alignItems: 'center', paddingVertical: 10 },
  noRouteText: { fontSize: 14, color: '#9CA3AF', marginBottom: 12 },
  selectRouteBtn: { backgroundColor: '#1E3A8A', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 },
  selectRouteBtnText: { color: '#FFFFFF', fontSize: 13, fontWeight: '600' },
  busContainer: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 20, borderWidth: 1, borderColor: '#D1D5DB', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5, elevation: 2, alignItems: 'center' },
  driverCabin: { width: '80%', padding: 8, backgroundColor: '#E5E7EB', borderRadius: 8, alignItems: 'center', marginBottom: 24, borderBottomWidth: 3, borderBottomColor: '#9CA3AF' },
  cabinText: { fontSize: 12, fontWeight: 'bold', color: '#4B5563' },
  grid: { width: '80%', alignItems: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 16 },
  seat: { width: 50, height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center', borderWidth: 2 },
  seatAvailable: { backgroundColor: '#FFFFFF', borderColor: '#3B82F6' },
  seatTextAvailable: { color: '#3B82F6', fontWeight: 'bold' },
  seatBooked: { backgroundColor: '#D1D5DB', borderColor: '#9CA3AF' },
  seatTextBooked: { color: '#6B7280', fontWeight: 'bold' },
  seatSelected: { backgroundColor: '#3B82F6', borderColor: '#1D4ED8' },
  seatTextSelected: { color: '#FFFFFF', fontWeight: 'bold' },
  legend: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#FFFFFF', borderRadius: 10, padding: 12, marginTop: 20, borderContainer: 1, borderColor: '#E5E7EB' },
  legendItem: { flexDirection: 'row', alignItems: 'center' },
  legendBox: { width: 18, height: 18, borderRadius: 4, marginRight: 8, borderWidth: 1, borderColor: '#9CA3AF' },
  legendText: { fontSize: 12, color: '#4B5563', fontWeight: '500' },
  actionContainer: { marginTop: 24 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12, paddingHorizontal: 4 },
  infoText: { fontSize: 15, color: '#374151' },
  infoBold: { fontWeight: 'bold', color: '#1E3A8A' },
});

export default BookingScreen;
