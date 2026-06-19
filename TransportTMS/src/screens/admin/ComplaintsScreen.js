import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const initialComplaints = [
  { id: 'C01', subject: 'Bus Late by 30 min',       from: 'Alice Kumar',  date: '2024-06-18', status: 'Open',     priority: 'High'   },
  { id: 'C02', subject: 'Rude Driver Behavior',     from: 'Bob Sharma',   date: '2024-06-17', status: 'In Review', priority: 'Medium' },
  { id: 'C03', subject: 'AC Not Working',           from: 'Carol Patel',  date: '2024-06-16', status: 'Resolved', priority: 'Low'    },
  { id: 'C04', subject: 'Wrong Route Taken',        from: 'David Singh',  date: '2024-06-15', status: 'Open',     priority: 'High'   },
];

const statusColors  = { Open: '#EF4444', 'In Review': '#F59E0B', Resolved: '#059669' };
const priorityColors = { High: '#EF4444', Medium: '#F59E0B', Low: '#6B7280' };

const ComplaintsScreen = ({ navigation }) => {
  const [complaints, setComplaints] = useState(initialComplaints);

  const resolve = (id) => {
    setComplaints((prev) => prev.map((c) => c.id === id ? { ...c, status: 'Resolved' } : c));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>← Back</Text></TouchableOpacity>
        <Text style={styles.title}>📝  Complaints</Text>
      </View>
      <FlatList
        data={complaints}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.subject}>{item.subject}</Text>
              <View style={[styles.badge, { backgroundColor: statusColors[item.status] + '22' }]}>
                <Text style={[styles.badgeText, { color: statusColors[item.status] }]}>{item.status}</Text>
              </View>
            </View>
            <Text style={styles.meta}>👤 {item.from}  •  📅 {item.date}</Text>
            <Text style={styles.meta}>Priority: <Text style={{ color: priorityColors[item.priority], fontWeight: 'bold' }}>{item.priority}</Text></Text>
            {item.status !== 'Resolved' && (
              <TouchableOpacity style={styles.resolveBtn} onPress={() => resolve(item.id)}>
                <Text style={styles.resolveText}>✓ Mark Resolved</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F3FF' },
  header: { backgroundColor: '#5B21B6', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { color: '#C4B5FD', fontSize: 14 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  card: { backgroundColor: '#FFF', borderRadius: 12, padding: 16, marginBottom: 12, elevation: 2 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  subject: { fontSize: 14, fontWeight: 'bold', color: '#111827', flex: 1 },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  badgeText: { fontSize: 11, fontWeight: '700' },
  meta: { fontSize: 12, color: '#6B7280', marginTop: 3 },
  resolveBtn: { marginTop: 10, backgroundColor: '#D1FAE5', borderRadius: 8, paddingVertical: 8, alignItems: 'center' },
  resolveText: { color: '#059669', fontWeight: '700', fontSize: 13 },
});

export default ComplaintsScreen;
