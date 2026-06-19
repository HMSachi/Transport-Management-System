import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const passengers = [
  { id: 'P01', name: 'Alice Kumar',  email: 'alice@test.com',  phone: '+91 91111 22222', trips: 12, status: 'Active'   },
  { id: 'P02', name: 'Bob Sharma',   email: 'bob@test.com',    phone: '+91 92222 33333', trips: 8,  status: 'Active'   },
  { id: 'P03', name: 'Carol Patel',  email: 'carol@test.com',  phone: '+91 93333 44444', trips: 20, status: 'Active'   },
  { id: 'P04', name: 'David Singh',  email: 'david@test.com',  phone: '+91 94444 55555', trips: 3,  status: 'Blocked'  },
  { id: 'P05', name: 'Eve Reddy',    email: 'eve@test.com',    phone: '+91 95555 66666', trips: 15, status: 'Active'   },
];

const PassengerManagementScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.back} onPress={() => navigation.goBack()}>← Back</Text>
      <Text style={styles.title}>👥  Passenger Management</Text>
    </View>
    <View style={styles.summary}>
      <View style={styles.summaryItem}><Text style={styles.summaryValue}>{passengers.length}</Text><Text style={styles.summaryLabel}>Total</Text></View>
      <View style={styles.summaryItem}><Text style={[styles.summaryValue, { color: '#059669' }]}>{passengers.filter(p => p.status === 'Active').length}</Text><Text style={styles.summaryLabel}>Active</Text></View>
      <View style={styles.summaryItem}><Text style={[styles.summaryValue, { color: '#EF4444' }]}>{passengers.filter(p => p.status === 'Blocked').length}</Text><Text style={styles.summaryLabel}>Blocked</Text></View>
    </View>
    <FlatList
      data={passengers}
      keyExtractor={(i) => i.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={[styles.status, { color: item.status === 'Active' ? '#059669' : '#EF4444' }]}>{item.status}</Text>
          </View>
          <Text style={styles.detail}>📧 {item.email}</Text>
          <Text style={styles.detail}>📞 {item.phone}   •   🗺️ {item.trips} trips</Text>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F3FF' },
  header: { backgroundColor: '#5B21B6', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { color: '#C4B5FD', fontSize: 14 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#FFF', flex: 1 },
  summary: { flexDirection: 'row', backgroundColor: '#EDE9FE', padding: 16, justifyContent: 'space-around' },
  summaryItem: { alignItems: 'center' },
  summaryValue: { fontSize: 22, fontWeight: 'bold', color: '#7C3AED' },
  summaryLabel: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  card: { backgroundColor: '#FFF', borderRadius: 12, padding: 14, marginBottom: 10, elevation: 2 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  name: { fontSize: 15, fontWeight: 'bold', color: '#111827' },
  status: { fontSize: 12, fontWeight: '700' },
  detail: { fontSize: 12, color: '#6B7280', marginTop: 3 },
});

export default PassengerManagementScreen;
