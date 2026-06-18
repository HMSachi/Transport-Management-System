import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';

const methods = [
  { id: 'upi',  label: 'UPI',          icon: '📲' },
  { id: 'card', label: 'Debit/Credit',  icon: '💳' },
  { id: 'cash', label: 'Cash',          icon: '💵' },
];

const PaymentScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('upi');
  const [loading, setLoading]   = useState(false);

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('✅ Payment Successful', 'Your payment of ₹250 has been received.');
    }, 1000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>← Back</Text></TouchableOpacity>
        <Text style={styles.title}>💳  Payment</Text>
      </View>
      <View style={styles.amountCard}>
        <Text style={styles.amountLabel}>Amount Due</Text>
        <Text style={styles.amount}>₹ 250</Text>
        <Text style={styles.amountSub}>City A → City B • Seat 12A</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        {methods.map((m) => (
          <TouchableOpacity key={m.id} style={[styles.methodRow, selected === m.id && styles.methodSelected]} onPress={() => setSelected(m.id)}>
            <Text style={styles.methodIcon}>{m.icon}</Text>
            <Text style={styles.methodLabel}>{m.label}</Text>
            <View style={[styles.radio, selected === m.id && styles.radioSelected]} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ paddingHorizontal: 16, paddingBottom: 30 }}>
        <ButtonComponent title="Pay ₹250" onPress={handlePay} loading={loading} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { color: '#93C5FD', fontSize: 14 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  amountCard: { backgroundColor: '#1E3A8A', margin: 16, borderRadius: 14, padding: 24, alignItems: 'center' },
  amountLabel: { fontSize: 13, color: '#93C5FD', marginBottom: 6 },
  amount: { fontSize: 42, fontWeight: 'bold', color: '#FFF', marginBottom: 4 },
  amountSub: { fontSize: 13, color: '#93C5FD' },
  section: { backgroundColor: '#FFF', margin: 16, marginTop: 0, borderRadius: 12, padding: 16, elevation: 2 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#374151', marginBottom: 12 },
  methodRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, borderRadius: 10, paddingHorizontal: 10, marginBottom: 8, backgroundColor: '#F9FAFB' },
  methodSelected: { backgroundColor: '#DBEAFE', borderWidth: 1, borderColor: '#2563EB' },
  methodIcon: { fontSize: 22, marginRight: 12 },
  methodLabel: { flex: 1, fontSize: 15, fontWeight: '600', color: '#111827' },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#D1D5DB' },
  radioSelected: { borderColor: '#2563EB', backgroundColor: '#2563EB' },
});

export default PaymentScreen;
