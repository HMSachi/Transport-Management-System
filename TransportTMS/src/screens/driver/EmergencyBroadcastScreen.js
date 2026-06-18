import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

const EmergencyBroadcastScreen = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [type, setType]       = useState('alert');
  const [loading, setLoading] = useState(false);

  const types = [
    { id: 'alert',     label: '⚠️ Alert',     color: '#F59E0B' },
    { id: 'emergency', label: '🆘 Emergency', color: '#EF4444' },
    { id: 'info',      label: 'ℹ️ Info',      color: '#2563EB' },
  ];

  const handleBroadcast = () => {
    if (!message) { Alert.alert('Error', 'Please enter a message'); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('📢 Broadcast Sent', `Your ${type} message has been sent to all passengers.`);
      setMessage('');
    }, 800);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.back} onPress={() => navigation.goBack()}>← Back</Text>
        <Text style={styles.title}>📢  Emergency Broadcast</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Message Type</Text>
        <View style={styles.typeRow}>
          {types.map((t) => (
            <TouchableOpacity key={t.id} style={[styles.typeBtn, type === t.id && { backgroundColor: t.color, borderColor: t.color }]} onPress={() => setType(t.id)}>
              <Text style={[styles.typeBtnText, type === t.id && { color: '#FFF' }]}>{t.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <InputComponent label="Broadcast Message" placeholder="Enter your message to passengers..." value={message} onChangeText={setMessage} />
        <ButtonComponent title="📢 Send Broadcast" onPress={handleBroadcast} loading={loading} color="#EF4444" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0FDF4' },
  header: { backgroundColor: '#065F46', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { color: '#6EE7B7', fontSize: 14 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#FFF', flex: 1 },
  card: { backgroundColor: '#FFF', margin: 16, borderRadius: 12, padding: 16, elevation: 2 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#374151', marginBottom: 12 },
  typeRow: { flexDirection: 'row', gap: 8, marginBottom: 20 },
  typeBtn: { flex: 1, paddingVertical: 10, borderRadius: 8, borderWidth: 1.5, borderColor: '#D1D5DB', alignItems: 'center' },
  typeBtnText: { fontSize: 12, fontWeight: '600', color: '#374151' },
});

export default EmergencyBroadcastScreen;
