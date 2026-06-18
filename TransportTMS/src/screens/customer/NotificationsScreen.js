import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { markAsRead, markAllAsRead } from '../../redux/slices/notificationSlice';

const typeColors = { booking: '#2563EB', trip: '#059669', payment: '#F59E0B', alert: '#EF4444' };

const NotificationsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { notifications, unreadCount } = useSelector((s) => s.notification);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>← Back</Text></TouchableOpacity>
        <Text style={styles.title}>🔔  Notifications ({unreadCount} unread)</Text>
      </View>
      {unreadCount > 0 && (
        <TouchableOpacity style={styles.markAll} onPress={() => dispatch(markAllAsRead())}>
          <Text style={styles.markAllText}>Mark all as read</Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={notifications}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.card, !item.read && styles.cardUnread]} onPress={() => dispatch(markAsRead(item.id))}>
            <View style={[styles.dot, { backgroundColor: typeColors[item.type] }]} />
            <View style={{ flex: 1 }}>
              <Text style={styles.nTitle}>{item.title}</Text>
              <Text style={styles.nMsg}>{item.message}</Text>
              <Text style={styles.nTime}>{item.time}</Text>
            </View>
            {!item.read && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { color: '#93C5FD', fontSize: 14 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#FFF', flex: 1 },
  markAll: { backgroundColor: '#DBEAFE', paddingHorizontal: 16, paddingVertical: 10, alignItems: 'flex-end' },
  markAllText: { color: '#2563EB', fontWeight: '600', fontSize: 13 },
  card: { backgroundColor: '#FFF', borderRadius: 12, padding: 14, marginBottom: 10, flexDirection: 'row', alignItems: 'flex-start', elevation: 1, gap: 10 },
  cardUnread: { borderLeftWidth: 3, borderLeftColor: '#2563EB' },
  dot: { width: 10, height: 10, borderRadius: 5, marginTop: 4 },
  nTitle: { fontSize: 14, fontWeight: '700', color: '#111827', marginBottom: 3 },
  nMsg: { fontSize: 13, color: '#6B7280', marginBottom: 4 },
  nTime: { fontSize: 11, color: '#9CA3AF' },
  unreadDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#2563EB', marginTop: 4 },
});

export default NotificationsScreen;
