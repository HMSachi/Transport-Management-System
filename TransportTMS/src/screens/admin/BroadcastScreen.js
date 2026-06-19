import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import { useDispatch } from 'react-redux';
import { addNotification } from '../../redux/slices/notificationSlice';

const BroadcastScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle]     = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!title || !message) { Alert.alert('Error', 'Fill all fields'); return; }
    setLoading(true);
    setTimeout(() => {
      dispatch(addNotification({ id: `N${Date.now()}`, title, message, time: 'Just now', read: false, type: 'alert' }));
      setLoading(false);
      Alert.alert('📢 Sent', 'Broadcast sent to all users!');
      setTitle(''); setMessage('');
    }, 800);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.back} onPress={() => navigation.goBack()}>← Back</Text>
        <Text style={styles.title}>📢  Broadcast</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Send Broadcast to All Users</Text>
        <InputComponent label="Title" placeholder="Broadcast title" value={title} onChangeText={setTitle} />
        <InputComponent label="Message" placeholder="Type your broadcast message..." value={message} onChangeText={setMessage} />
        <ButtonComponent title="📢 Send Broadcast" onPress={handleSend} loading={loading} color="#7C3AED" />
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Recent Broadcasts</Text>
        {[
          { title: 'Route Update',    msg: 'City B→C route delayed by 30 min',   time: '2 hrs ago'  },
          { title: 'Holiday Notice',  msg: 'No service on June 25 (Holiday)',     time: '1 day ago'  },
          { title: 'New Route Added', msg: 'City A→D Express route now available', time: '3 days ago' },
        ].map((b, i) => (
          <View key={i} style={[styles.row, i < 2 && styles.rowBorder]}>
            <Text style={styles.rowIcon}>📢</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>{b.title}</Text>
              <Text style={styles.rowMsg}>{b.msg}</Text>
              <Text style={styles.rowTime}>{b.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F3FF' },
  header: { backgroundColor: '#5B21B6', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { color: '#C4B5FD', fontSize: 14 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  card: { backgroundColor: '#FFF', margin: 16, borderRadius: 12, padding: 16, elevation: 2 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#374151', marginBottom: 14 },
  row: { flexDirection: 'row', paddingVertical: 12 },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  rowIcon: { fontSize: 20, marginRight: 12, marginTop: 2 },
  rowTitle: { fontSize: 14, fontWeight: '700', color: '#111827' },
  rowMsg: { fontSize: 13, color: '#6B7280', marginTop: 2 },
  rowTime: { fontSize: 11, color: '#9CA3AF', marginTop: 4 },
});

export default BroadcastScreen;
