import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const requests = [
  { id: 'R001', name: 'Alice Kumar',  pickup: 'Stop A', drop: 'City B', time: '08:00 AM', status: 'Pending'  },
  { id: 'R002', name: 'Bob Sharma',   pickup: 'Stop B', drop: 'City C', time: '08:15 AM', status: 'Pending'  },
  { id: 'R003', name: 'Carol Patel',  pickup: 'Stop A', drop: 'City B', time: '08:00 AM', status: 'Accepted' },
  { id: 'R004', name: 'David Singh',  pickup: 'Stop C', drop: 'City A', time: '09:00 AM', status: 'Rejected' },
];

const PassengerRequestsScreen = () => {
  const [data, setData] = useState(requests);

  const updateStatus = (id, status) => {
    setData((prev) => prev.map((r) => r.id === id ? { ...r, status } : r));
  };

  const statusColor = { Pending: '#F59E0B', Accepted: '#059669', Rejected: '#EF4444' };

  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style={styles.title}>📋  Passenger Requests</Text></View>
      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={[styles.badge, { backgroundColor: statusColor[item.status] + '22' }]}>
                <Text style={[styles.badgeText, { color: statusColor[item.status] }]}>{item.status}</Text>
              </View>
            </View>
            <Text style={styles.detail}>📍 {item.pickup} → {item.drop}  •  🕐 {item.time}</Text>
            {item.status === 'Pending' && (
              <View style={styles.actions}>
                <TouchableOpacity style={styles.acceptBtn} onPress={() => updateStatus(item.id, 'Accepted')}>
                  <Text style={styles.acceptText}>✓ Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rejectBtn} onPress={() => updateStatus(item.id, 'Rejected')}>
                  <Text style={styles.rejectText}>✕ Reject</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0FDF4' },
  header: { backgroundColor: '#065F46', padding: 20, paddingTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  card: { backgroundColor: '#FFF', borderRadius: 12, padding: 16, marginBottom: 12, elevation: 2 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  name: { fontSize: 15, fontWeight: 'bold', color: '#111827' },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  badgeText: { fontSize: 12, fontWeight: '600' },
  detail: { fontSize: 13, color: '#6B7280', marginBottom: 10 },
  actions: { flexDirection: 'row', gap: 10 },
  acceptBtn: { flex: 1, backgroundColor: '#D1FAE5', borderRadius: 8, paddingVertical: 8, alignItems: 'center' },
  acceptText: { color: '#059669', fontWeight: '700', fontSize: 13 },
  rejectBtn: { flex: 1, backgroundColor: '#FEE2E2', borderRadius: 8, paddingVertical: 8, alignItems: 'center' },
  rejectText: { color: '#EF4444', fontWeight: '700', fontSize: 13 },
});

export default PassengerRequestsScreen;
