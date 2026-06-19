import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

const STATIC_ATTENDANCE = [
  { id: 'A01', date: '2026-06-18', route: 'City A → City B', status: 'Boarded', time: '07:55 AM' },
  { id: 'A02', date: '2026-06-17', route: 'City B → City A', status: 'Boarded', time: '04:10 PM' },
  { id: 'A03', date: '2026-06-16', route: 'City A → City B', status: 'Boarded', time: '07:58 AM' },
  { id: 'A04', date: '2026-06-15', route: 'City B → City A', status: 'Missed', time: '--:--' },
];

const AttendanceScreen = ({ navigation }) => {
  const handleScanQR = () => {
    Alert.alert('Scanner', 'QR code scanned successfully! Boarding marked.');
  };

  const renderAttendanceItem = ({ item }) => (
    <View style={styles.historyRow}>
      <View style={styles.historyLeft}>
        <Text style={styles.historyRoute}>{item.route}</Text>
        <Text style={styles.historyDate}>{item.date} | {item.time}</Text>
      </View>
      <View style={[styles.statusBadge, { backgroundColor: item.status === 'Boarded' ? '#D1FAE5' : '#FEE2E2' }]}>
        <Text style={[styles.statusText, { color: item.status === 'Boarded' ? '#065F46' : '#991B1B' }]}>{item.status}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Attendance / Boarding</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* QR Scanner Placeholder */}
        <View style={styles.scannerWrapper}>
          <Text style={styles.sectionTitle}>Mark Boarding</Text>
          <TouchableOpacity style={styles.scannerBox} onPress={handleScanQR} activeOpacity={0.9}>
            <Text style={styles.cameraIcon}>📷</Text>
            <Text style={styles.scannerText}>Tap to Scan QR Code</Text>
            <Text style={styles.scannerSubtext}>Align QR code inside the frame to check-in</Text>
          </TouchableOpacity>
        </View>

        {/* Attendance History */}
        <View style={styles.historyWrapper}>
          <Text style={styles.sectionTitle}>Attendance History</Text>
          <FlatList
            data={STATIC_ATTENDANCE}
            keyExtractor={(item) => item.id}
            renderItem={renderAttendanceItem}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
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
  scannerWrapper: { padding: 20 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1E3A8A', marginBottom: 12 },
  scannerBox: { backgroundColor: '#D1FAE5', borderWidth: 2, borderColor: '#10B981', borderStyle: 'dashed', borderRadius: 16, height: 200, justifyContent: 'center', alignItems: 'center', shadowColor: '#10B981', shadowOpacity: 0.1, shadowRadius: 6, elevation: 2 },
  cameraIcon: { fontSize: 54, marginBottom: 12 },
  scannerText: { fontSize: 16, fontWeight: 'bold', color: '#065F46' },
  scannerSubtext: { fontSize: 12, color: '#047857', marginTop: 4, textAlign: 'center', paddingHorizontal: 20 },
  historyWrapper: { flex: 1, backgroundColor: '#FFFFFF', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 5 },
  listContainer: { paddingBottom: 16 },
  historyRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  historyLeft: { flex: 1 },
  historyRoute: { fontSize: 14, fontWeight: 'bold', color: '#374151' },
  historyDate: { fontSize: 12, color: '#9CA3AF', marginTop: 4 },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  statusText: { fontSize: 11, fontWeight: '700' },
});

export default AttendanceScreen;
