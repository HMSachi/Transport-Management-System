import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { selectRoute } from '../../redux/slices/bookingSlice';

const staticRoutes = [
  { id: 'R001', from: 'City A', to: 'City B', duration: '2h 30m', fare: 250, seats: 14, departure: '08:00 AM', type: 'Express'  },
  { id: 'R002', from: 'City B', to: 'City C', duration: '1h 45m', fare: 180, seats: 22, departure: '09:30 AM', type: 'Regular'  },
  { id: 'R003', from: 'City C', to: 'City A', duration: '3h 00m', fare: 310, seats: 5,  departure: '11:00 AM', type: 'Express'  },
  { id: 'R004', from: 'City A', to: 'City D', duration: '4h 15m', fare: 400, seats: 18, departure: '02:00 PM', type: 'Sleeper'  },
  { id: 'R005', from: 'City D', to: 'City B', duration: '2h 00m', fare: 220, seats: 30, departure: '05:00 PM', type: 'Regular'  },
];

const RoutesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);

  const handleSelect = (route) => {
    setSelected(route.id);
    dispatch(selectRoute(`${route.from} → ${route.to}`));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}><Text style={styles.title}>🗺️  Available Routes</Text></View>
      {staticRoutes.map((r) => (
        <TouchableOpacity
          key={r.id}
          style={[styles.card, selected === r.id && styles.cardSelected]}
          onPress={() => handleSelect(r)}
        >
          <View style={styles.routeRow}>
            <Text style={styles.routeText}>{r.from}</Text>
            <Text style={styles.arrow}>→</Text>
            <Text style={styles.routeText}>{r.to}</Text>
            <View style={[styles.badge, r.type === 'Express' ? styles.express : r.type === 'Sleeper' ? styles.sleeper : styles.regular]}>
              <Text style={styles.badgeText}>{r.type}</Text>
            </View>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detail}>🕐 {r.departure}</Text>
            <Text style={styles.detail}>⏱ {r.duration}</Text>
            <Text style={styles.detail}>💺 {r.seats} seats</Text>
            <Text style={styles.fare}>₹{r.fare}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', padding: 20, paddingTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  card: { backgroundColor: '#FFF', margin: 12, marginBottom: 0, borderRadius: 12, padding: 16, elevation: 2 },
  cardSelected: { borderWidth: 2, borderColor: '#2563EB' },
  routeRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  routeText: { fontSize: 16, fontWeight: 'bold', color: '#111827' },
  arrow: { fontSize: 16, marginHorizontal: 8, color: '#6B7280' },
  badge: { marginLeft: 'auto', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  express: { backgroundColor: '#DBEAFE' }, sleeper: { backgroundColor: '#EDE9FE' }, regular: { backgroundColor: '#D1FAE5' },
  badgeText: { fontSize: 11, fontWeight: '600', color: '#374151' },
  detailRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  detail: { fontSize: 12, color: '#6B7280' },
  fare: { marginLeft: 'auto', fontSize: 18, fontWeight: 'bold', color: '#2563EB' },
});

export default RoutesScreen;
