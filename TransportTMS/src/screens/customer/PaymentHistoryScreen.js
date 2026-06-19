import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const STATIC_PAYMENTS = [
  { id: 'TXN101', date: '2026-06-18', amount: 250, route: 'City A → City B', method: 'UPI', status: 'Success' },
  { id: 'TXN102', date: '2026-06-15', amount: 250, route: 'City B → City A', method: 'Card', status: 'Success' },
  { id: 'TXN103', date: '2026-06-10', amount: 180, route: 'City B → City C', method: 'UPI', status: 'Failed' },
  { id: 'TXN104', date: '2026-06-08', amount: 310, route: 'City C → City A', method: 'Cash', status: 'Success' },
];

const PaymentHistoryScreen = ({ navigation }) => {
  const renderPaymentItem = ({ item }) => {
    const isSuccess = item.status === 'Success';
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.txnId}>Txn ID: {item.id}</Text>
          <View style={[styles.statusBadge, { backgroundColor: isSuccess ? '#D1FAE5' : '#FEE2E2' }]}>
            <Text style={[styles.statusText, { color: isSuccess ? '#065F46' : '#991B1B' }]}>
              {item.status}
            </Text>
          </View>
        </View>

        <Text style={styles.route}>{item.route}</Text>

        <View style={styles.divider} />

        <View style={styles.cardDetails}>
          <View style={styles.detailCol}>
            <Text style={styles.detailLabel}>Date</Text>
            <Text style={styles.detailVal}>{item.date}</Text>
          </View>
          <View style={styles.detailCol}>
            <Text style={styles.detailLabel}>Method</Text>
            <Text style={styles.detailVal}>{item.method}</Text>
          </View>
          <View style={styles.detailCol}>
            <Text style={styles.detailLabel}>Amount</Text>
            <Text style={styles.amountVal}>₹{item.amount}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Payment History</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* FlatList */}
        <FlatList
          data={STATIC_PAYMENTS}
          keyExtractor={(item) => item.id}
          renderItem={renderPaymentItem}
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
  card: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  txnId: { fontSize: 12, fontWeight: '600', color: '#6B7280' },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  statusText: { fontSize: 11, fontWeight: '700' },
  route: { fontSize: 15, fontWeight: 'bold', color: '#1E3A8A', marginBottom: 10 },
  divider: { height: 1, backgroundColor: '#F3F4F6', marginVertical: 8 },
  cardDetails: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  detailCol: { alignItems: 'flex-start' },
  detailLabel: { fontSize: 10, color: '#9CA3AF', marginBottom: 2 },
  detailVal: { fontSize: 13, fontWeight: '500', color: '#374151' },
  amountVal: { fontSize: 14, fontWeight: 'bold', color: '#1E3A8A' },
});

export default PaymentHistoryScreen;
