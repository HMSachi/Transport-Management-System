import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const history = [
  { id: 'P001', date: '2024-06-18', amount: 250, route: 'City A → City B', method: 'UPI',  status: 'Success' },
  { id: 'P002', date: '2024-06-15', amount: 180, route: 'City B → City C', method: 'Card', status: 'Success' },
  { id: 'P003', date: '2024-06-10', amount: 310, route: 'City C → City A', method: 'Cash', status: 'Success' },
  { id: 'P004', date: '2024-06-05', amount: 250, route: 'City A → City B', method: 'UPI',  status: 'Failed'  },
];

const PaymentHistoryScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>← Back</Text></TouchableOpacity>
      <Text style={styles.title}>🧾  Payment History</Text>
    </View>
    <FlatList
      data={history}
      keyExtractor={(i) => i.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <Text style={styles.route}>{item.route}</Text>
            <Text style={[styles.status, { color: item.status === 'Success' ? '#059669' : '#EF4444' }]}>{item.status}</Text>
          </View>
          <View style={styles.cardBottom}>
            <Text style={styles.detail}>📅 {item.date} • {item.method}</Text>
            <Text style={styles.amount}>₹{item.amount}</Text>
          </View>
          <Text style={styles.id}>{item.id}</Text>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { color: '#93C5FD', fontSize: 14 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  card: { backgroundColor: '#FFF', borderRadius: 12, padding: 16, marginBottom: 12, elevation: 2 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  route: { fontSize: 14, fontWeight: 'bold', color: '#111827', flex: 1 },
  status: { fontSize: 13, fontWeight: '700' },
  cardBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  detail: { fontSize: 12, color: '#6B7280' },
  amount: { fontSize: 18, fontWeight: 'bold', color: '#2563EB' },
  id: { fontSize: 11, color: '#9CA3AF', marginTop: 6 },
});

export default PaymentHistoryScreen;
