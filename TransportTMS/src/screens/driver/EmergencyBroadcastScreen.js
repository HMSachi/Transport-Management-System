import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';

const EmergencyBroadcastScreen = ({ navigation }) => {
  const [msgType, setMsgType] = useState('Emergency');
  const [message, setMessage] = useState('');

  const handleSendBroadcast = () => {
    if (!message.trim()) {
      Alert.alert('Error', 'Please enter a message to broadcast.');
      return;
    }
    Alert.alert(
      'Broadcast Sent',
      `Type: ${msgType}\nMessage: ${message}\n\nBroadcast has been successfully dispatched to all passengers and admins.`,
      [{ text: 'OK', onPress: () => { setMessage(''); navigation.goBack(); } }]
    );
  };

  const messageTypes = [
    { id: 'Emergency', label: 'Emergency', color: '#EF4444', icon: '🚨' },
    { id: 'Alert', label: 'Delay Alert', color: '#F59E0B', icon: '⚠️' },
    { id: 'Info', label: 'General Info', color: '#3B82F6', icon: 'ℹ️' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Emergency Broadcast</Text>
          <View style={{ width: 32 }} />
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.label}>Broadcast Category</Text>

          {/* Type Selector */}
          <View style={styles.typeSelectorRow}>
            {messageTypes.map((type) => {
              const isSelected = msgType === type.id;
              return (
                <TouchableOpacity
                  key={type.id}
                  style={[
                    styles.typeBtn,
                    isSelected ? { backgroundColor: type.color, borderColor: type.color } : styles.typeBtnInactive,
                  ]}
                  onPress={() => setMsgType(type.id)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.typeIcon}>{type.icon}</Text>
                  <Text style={[styles.typeBtnText, isSelected ? styles.typeBtnTextActive : styles.typeBtnTextInactive]}>
                    {type.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Message Input */}
          <View style={styles.inputCard}>
            <Text style={styles.label}>Broadcast Message</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Type your alert message here... E.g., Bus KA-51-E-9012 is delayed by 15 mins due to heavy traffic on Sector 5."
              placeholderTextColor="#9CA3AF"
              multiline
              numberOfLines={6}
              value={message}
              onChangeText={setMessage}
              textAlignVertical="top"
            />
          </View>

          {/* Note */}
          <View style={styles.noteBox}>
            <Text style={styles.noteText}>
              ⚠️ Note: Broadcasts sent from here will push high-priority notifications to all passenger devices currently booked on this route.
            </Text>
          </View>

          {/* Action Button */}
          <View style={styles.actionContainer}>
            <ButtonComponent
              title="Dispatch Broadcast"
              onPress={handleSendBroadcast}
              color={msgType === 'Emergency' ? '#EF4444' : msgType === 'Alert' ? '#F59E0B' : '#059669'}
              disabled={!message.trim()}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#065F46' },
  container: { flex: 1, backgroundColor: '#F0FDF4' },
  header: { backgroundColor: '#065F46', paddingVertical: 16, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  backBtn: { width: 32, height: 32, justifyContent: 'center', alignItems: 'center' },
  backBtnText: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  headerTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  content: { padding: 20 },
  label: { fontSize: 13, fontWeight: '600', color: '#065F46', marginBottom: 10 },
  typeSelectorRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  typeBtn: { flex: 0.3, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, borderRadius: 10, borderWidth: 1.5, shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 3, elevation: 1 },
  typeBtnInactive: { backgroundColor: '#FFFFFF', borderColor: '#D1D5DB' },
  typeIcon: { fontSize: 20, marginBottom: 4 },
  typeBtnText: { fontSize: 11, fontWeight: 'bold' },
  typeBtnTextActive: { color: '#FFFFFF' },
  typeBtnTextInactive: { color: '#4B5563' },
  inputCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 20, marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 5, elevation: 1 },
  textArea: { borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 10, padding: 12, fontSize: 14, color: '#111827', height: 120 },
  noteBox: { backgroundColor: '#FEF3C7', borderLeftWidth: 4, borderLeftColor: '#F59E0B', padding: 12, borderRadius: 8, marginBottom: 28 },
  noteText: { fontSize: 12, color: '#92400E', lineHeight: 18, fontWeight: '500' },
  actionContainer: { marginBottom: 20 },
});

export default EmergencyBroadcastScreen;
