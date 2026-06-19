import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';

const PaymentScreen = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState('UPI');

  const handlePayment = () => {
    Alert.alert('Payment Status', `Payment of ₹250 via ${selectedMethod} was successful!`, [
      { text: 'OK', onPress: () => navigation.navigate('CustomerDashboard') },
    ]);
  };

  const paymentMethods = [
    { id: 'UPI', label: 'UPI / Google Pay / PhonePe', icon: '📱' },
    { id: 'Card', label: 'Credit or Debit Card', icon: '💳' },
    { id: 'Cash', label: 'Cash on Boarding', icon: '💵' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Make Payment</Text>
          <View style={{ width: 32 }} />
        </View>

        <View style={styles.content}>
          {/* Amount Due Card */}
          <View style={styles.amountCard}>
            <Text style={styles.amountLabel}>Total Amount Due</Text>
            <Text style={styles.amountValue}>₹250</Text>
            <Text style={styles.amountDueFor}>Active Route: City A ➔ City B</Text>
          </View>

          {/* Selector Title */}
          <Text style={styles.sectionTitle}>Select Payment Method</Text>

          {/* Methods List */}
          <View style={styles.methodsContainer}>
            {paymentMethods.map((method) => {
              const isSelected = selectedMethod === method.id;
              return (
                <TouchableOpacity
                  key={method.id}
                  style={[styles.methodItem, isSelected && styles.methodItemSelected]}
                  onPress={() => setSelectedMethod(method.id)}
                  activeOpacity={0.8}
                >
                  <View style={styles.methodLeft}>
                    <Text style={styles.methodIcon}>{method.icon}</Text>
                    <Text style={[styles.methodLabel, isSelected && styles.methodLabelSelected]}>
                      {method.label}
                    </Text>
                  </View>
                  <View style={[styles.radioOuter, isSelected && styles.radioOuterSelected]}>
                    {isSelected && <View style={styles.radioInner} />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Pay Button */}
          <View style={styles.actionContainer}>
            <ButtonComponent
              title={`Pay ₹250 Now`}
              onPress={handlePayment}
            />
          </View>
        </View>
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
  content: { padding: 20, flex: 1 },
  amountCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 24, alignItems: 'center', marginBottom: 24, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 6, elevation: 2 },
  amountLabel: { fontSize: 13, color: '#6B7280', fontWeight: '500', marginBottom: 6 },
  amountValue: { fontSize: 36, fontWeight: 'bold', color: '#1E3A8A', marginBottom: 8 },
  amountDueFor: { fontSize: 12, color: '#9CA3AF' },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#1E3A8A', marginBottom: 12 },
  methodsContainer: { backgroundColor: '#FFFFFF', borderRadius: 16, paddingVertical: 8, paddingHorizontal: 16, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 5, elevation: 1 },
  methodItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  methodItemSelected: { borderBottomColor: '#DBEAFE' },
  methodLeft: { flexDirection: 'row', alignItems: 'center' },
  methodIcon: { fontSize: 20, marginRight: 12 },
  methodLabel: { fontSize: 14, color: '#374151', fontWeight: '500' },
  methodLabelSelected: { color: '#1E3A8A', fontWeight: 'bold' },
  radioOuter: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#D1D5DB', justifyContent: 'center', alignItems: 'center' },
  radioOuterSelected: { borderColor: '#3B82F6' },
  radioInner: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#3B82F6' },
  actionContainer: { marginTop: 'auto', paddingBottom: 12 },
});

export default PaymentScreen;
