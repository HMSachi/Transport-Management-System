import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

const INITIAL_REQUESTS = [
  { id: 'PR01', passengerName: 'Alice Smith', stopName: 'Main Street Crossing', seatNo: '2A', status: 'Pending' },
  { id: 'PR02', passengerName: 'Bob Johnson', stopName: 'Metro Station gate 3', seatNo: '4A', status: 'Pending' },
  { id: 'PR03', passengerName: 'Charlie Brown', stopName: 'Central Library', seatNo: '1B', status: 'Pending' },
  { id: 'PR04', passengerName: 'Diana Prince', stopName: 'Sector 5 Business Park', seatNo: '6A', status: 'Pending' },
];

const PassengerRequestsScreen = () => {
  const [requests, setRequests] = useState(INITIAL_REQUESTS);

  const handleAccept = (id) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: 'Accepted' } : req))
    );
    Alert.alert('Request Accepted', 'Passenger request has been accepted.');
  };

  const handleReject = (id) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: 'Rejected' } : req))
    );
    Alert.alert('Request Rejected', 'Passenger request has been rejected.');
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Accepted':
        return { bg: '#D1FAE5', text: '#065F46' };
      case 'Rejected':
        return { bg: '#FEE2E2', text: '#991B1B' };
      default:
        return { bg: '#FEF3C7', text: '#92400E' };
    }
  };

  const renderRequestItem = ({ item }) => {
    const statusColor = getStatusStyle(item.status);
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.reqId}>Req ID: {item.id}</Text>
          <View style={[styles.statusBadge, { backgroundColor: statusColor.bg }]}>
            <Text style={[styles.statusText, { color: statusColor.text }]}>{item.status}</Text>
          </View>
        </View>

        <Text style={styles.passengerName}>{item.passengerName}</Text>
        <Text style={styles.stopName}>📍 Stop: {item.stopName}</Text>
        <Text style={styles.seatNo}>🎫 Seat: {item.seatNo}</Text>

        {item.status === 'Pending' && (
          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={[styles.actionBtn, styles.acceptBtn]}
              onPress={() => handleAccept(item.id)}
            >
              <Text style={styles.acceptBtnText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionBtn, styles.rejectBtn]}
              onPress={() => handleReject(item.id)}
            >
              <Text style={styles.rejectBtnText}>Reject</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Passenger Requests</Text>
        </View>

        <FlatList
          data={requests}
          keyExtractor={(item) => item.id}
          renderItem={renderRequestItem}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#065F46' },
  container: { flex: 1, backgroundColor: '#F0FDF4' },
  header: { backgroundColor: '#065F46', paddingVertical: 18, alignItems: 'center' },
  headerTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  listContainer: { padding: 16 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  reqId: { fontSize: 12, fontWeight: '600', color: '#6B7280' },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  statusText: { fontSize: 11, fontWeight: '700' },
  passengerName: { fontSize: 16, fontWeight: 'bold', color: '#065F46', marginBottom: 8 },
  stopName: { fontSize: 13, color: '#4B5563', marginBottom: 4 },
  seatNo: { fontSize: 13, color: '#6B7280', marginBottom: 14 },
  actionsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  actionBtn: { flex: 0.47, paddingVertical: 10, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  acceptBtn: { backgroundColor: '#059669' },
  acceptBtnText: { color: '#FFFFFF', fontSize: 13, fontWeight: 'bold' },
  rejectBtn: { borderWidth: 1.5, borderColor: '#EF4444' },
  rejectBtnText: { color: '#EF4444', fontSize: 13, fontWeight: 'bold' },
});

export default PassengerRequestsScreen;
