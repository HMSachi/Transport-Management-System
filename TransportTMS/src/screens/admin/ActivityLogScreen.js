import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const logs = [
  { id: 'L01', action: 'Bus KA-01-1234 started trip',     user: 'Ravi Kumar',  type: 'trip',   time: '10 min ago'  },
  { id: 'L02', action: 'New booking B004 created',         user: 'Alice Kumar', type: 'booking', time: '25 min ago' },
  { id: 'L03', action: 'Driver Suresh Babu checked in',    user: 'Suresh Babu', type: 'driver',  time: '1 hr ago'   },
  { id: 'L04', action: 'Bus KA-03-9012 marked maintenance', user: 'Admin',      type: 'bus',     time: '2 hrs ago'  },
  { id: 'L05', action: 'Complaint #C03 resolved',          user: 'Admin',       type: 'complaint', time: '3 hrs ago' },
  { id: 'L06', action: 'Broadcast sent: Route Update',     user: 'Admin',       type: 'broadcast', time: '5 hrs ago' },
  { id: 'L07', action: 'New passenger Eve Reddy registered', user: 'Eve Reddy', type: 'user',    time: '1 day ago'  },
];

const typeColors = { trip: '#059669', booking: '#2563EB', driver: '#F59E0B', bus: '#7C3AED', complaint: '#EF4444', broadcast: '#EC4899', user: '#6B7280' };

const ActivityLogScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>← Back</Text></TouchableOpacity>
      <Text style={styles.title}>📋  Activity Log</Text>
    </View>
    <FlatList
      data={logs}
      keyExtractor={(i) => i.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.cardRow}>
            <View style={[styles.dot, { backgroundColor: typeColors[item.type] }]} />
            <View style={{ flex: 1 }}>
              <Text style={styles.action}>{item.action}</Text>
              <Text style={styles.meta}>{item.user}  •  {item.time}</Text>
            </View>
          </View>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F3FF' },
  header: { backgroundColor: '#5B21B6', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { color: '#C4B5FD', fontSize: 14 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  card: { backgroundColor: '#FFF', borderRadius: 10, padding: 14, marginBottom: 8, elevation: 1 },
  cardRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  dot: { width: 10, height: 10, borderRadius: 5, marginTop: 5 },
  action: { fontSize: 14, fontWeight: '600', color: '#111827' },
  meta: { fontSize: 12, color: '#9CA3AF', marginTop: 4 },
});

export default ActivityLogScreen;
