import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

const contacts = [
  { label: 'Police',     number: '100', icon: '👮' },
  { label: 'Ambulance',  number: '108', icon: '🚑' },
  { label: 'Fire',       number: '101', icon: '🚒' },
  { label: 'TMS Support',number: '1800-TMS', icon: '📞' },
];

const SOSScreen = ({ navigation }) => {
  const [sent, setSent] = useState(false);

  const handleSOS = () => {
    Alert.alert('🆘 SOS Alert', 'Emergency alert sent to authorities and emergency contacts!', [
      { text: 'OK', onPress: () => setSent(true) },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>← Back</Text></TouchableOpacity>
        <Text style={styles.title}>🆘  SOS Emergency</Text>
      </View>
      <View style={styles.sosSection}>
        <TouchableOpacity style={[styles.sosBtn, sent && styles.sosBtnSent]} onPress={handleSOS}>
          <Text style={styles.sosBtnIcon}>🆘</Text>
          <Text style={styles.sosBtnText}>{sent ? 'SOS SENT!' : 'TAP FOR SOS'}</Text>
        </TouchableOpacity>
        {sent && <Text style={styles.sentMsg}>Emergency services have been notified</Text>}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emergency Contacts</Text>
        {contacts.map((c, i) => (
          <View key={i} style={[styles.row, i < contacts.length - 1 && styles.rowBorder]}>
            <Text style={styles.rowIcon}>{c.icon}</Text>
            <Text style={styles.rowLabel}>{c.label}</Text>
            <Text style={styles.rowNumber}>{c.number}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#DC2626', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { color: '#FCA5A5', fontSize: 14 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  sosSection: { alignItems: 'center', paddingVertical: 40 },
  sosBtn: { width: 160, height: 160, borderRadius: 80, backgroundColor: '#EF4444', alignItems: 'center', justifyContent: 'center', elevation: 8, shadowColor: '#EF4444', shadowOpacity: 0.5, shadowRadius: 16 },
  sosBtnSent: { backgroundColor: '#059669' },
  sosBtnIcon: { fontSize: 40, marginBottom: 8 },
  sosBtnText: { fontSize: 16, fontWeight: 'bold', color: '#FFF' },
  sentMsg: { marginTop: 16, fontSize: 14, color: '#059669', fontWeight: '600' },
  section: { backgroundColor: '#FFF', margin: 16, borderRadius: 12, padding: 16, elevation: 2 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#374151', marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  rowIcon: { fontSize: 22, marginRight: 12 },
  rowLabel: { flex: 1, fontSize: 14, fontWeight: '600', color: '#111827' },
  rowNumber: { fontSize: 14, fontWeight: 'bold', color: '#EF4444' },
});

export default SOSScreen;
