import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const AttendanceScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>← Back</Text></TouchableOpacity>
      <Text style={styles.title}>📱  Attendance (QR)</Text>
    </View>
    <View style={styles.qrPlaceholder}>
      <Text style={styles.qrIcon}>📷</Text>
      <Text style={styles.qrText}>QR Scanner Placeholder</Text>
      <Text style={styles.qrSub}>Camera access required for QR scanning</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Attendance History</Text>
      {[
        { date: '2024-06-18', route: 'City A → City B', status: 'Present', time: '08:05 AM' },
        { date: '2024-06-17', route: 'City A → City B', status: 'Present', time: '08:02 AM' },
        { date: '2024-06-16', route: 'City A → City B', status: 'Absent',  time: '--'       },
        { date: '2024-06-15', route: 'City A → City B', status: 'Present', time: '08:10 AM' },
      ].map((a, i) => (
        <View key={i} style={[styles.row, i < 3 && styles.rowBorder]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowDate}>{a.date}</Text>
            <Text style={styles.rowRoute}>{a.route}</Text>
          </View>
          <View>
            <Text style={[styles.status, { color: a.status === 'Present' ? '#059669' : '#EF4444' }]}>{a.status}</Text>
            <Text style={styles.time}>{a.time}</Text>
          </View>
        </View>
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { color: '#93C5FD', fontSize: 14 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  qrPlaceholder: { backgroundColor: '#D1FAE5', height: 220, margin: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  qrIcon: { fontSize: 60, marginBottom: 12 },
  qrText: { fontSize: 16, fontWeight: 'bold', color: '#065F46' },
  qrSub: { fontSize: 12, color: '#059669', marginTop: 4 },
  card: { backgroundColor: '#FFF', margin: 16, marginTop: 0, borderRadius: 12, padding: 16, elevation: 2 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#374151', marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  rowDate: { fontSize: 13, fontWeight: '600', color: '#111827' },
  rowRoute: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  status: { fontSize: 13, fontWeight: '700', textAlign: 'right' },
  time: { fontSize: 11, color: '#9CA3AF', textAlign: 'right', marginTop: 2 },
});

export default AttendanceScreen;
