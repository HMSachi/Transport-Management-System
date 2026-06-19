import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native';

const EMERGENCY_CONTACTS = [
  { name: 'Police', phone: '100', icon: '👮' },
  { name: 'Ambulance', phone: '108', icon: '🚑' },
  { name: 'Fire Force', phone: '101', icon: '🚒' },
  { name: 'TMS Support', phone: '+91 99999 88888', icon: '📞' },
];

const SOSScreen = ({ navigation }) => {
  const [sosActive, setSosActive] = useState(false);

  const handleSosPress = () => {
    if (sosActive) {
      setSosActive(false);
      Alert.alert('SOS Cancelled', 'Emergency alert has been cancelled.');
    } else {
      setSosActive(true);
      Alert.alert(
        'SOS Activated',
        'Emergency alert sent! Your current coordinates and driver details have been broadcasted to our support team.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleCallContact = (contact) => {
    Alert.alert('Emergency Call', `Calling ${contact.name} (${contact.phone})...`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Emergency SOS</Text>
          <View style={{ width: 32 }} />
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          {/* Info Area */}
          <Text style={styles.infoText}>
            Press and hold the button below for immediate emergency assistance.
          </Text>

          {/* SOS Circle Button */}
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[
                styles.sosButton,
                sosActive ? styles.sosButtonActive : styles.sosButtonInactive,
              ]}
              onPress={handleSosPress}
              activeOpacity={0.8}
            >
              <Text style={styles.sosText}>{sosActive ? 'SENT' : 'SOS'}</Text>
              <Text style={styles.sosSubtext}>
                {sosActive ? 'Tap to Cancel' : 'Tap to Trigger'}
              </Text>
            </TouchableOpacity>
          </View>

          {sosActive && (
            <View style={styles.alertBanner}>
              <Text style={styles.alertBannerText}>🚨 Help is on the way. GPS broadcast live.</Text>
            </View>
          )}

          {/* Emergency Contacts */}
          <Text style={styles.sectionTitle}>Quick Emergency Contacts</Text>
          <View style={styles.contactsContainer}>
            {EMERGENCY_CONTACTS.map((contact, index) => (
              <TouchableOpacity
                key={index}
                style={styles.contactItem}
                onPress={() => handleCallContact(contact)}
                activeOpacity={0.7}
              >
                <View style={styles.contactLeft}>
                  <Text style={styles.contactIcon}>{contact.icon}</Text>
                  <View>
                    <Text style={styles.contactName}>{contact.name}</Text>
                    <Text style={styles.contactPhone}>{contact.phone}</Text>
                  </View>
                </View>
                <View style={styles.callBadge}>
                  <Text style={styles.callBadgeText}>CALL</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#DC2626' },
  container: { flex: 1, backgroundColor: '#FEF2F2' },
  header: { backgroundColor: '#DC2626', paddingVertical: 16, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  backBtn: { width: 32, height: 32, justifyContent: 'center', alignItems: 'center' },
  backBtnText: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  headerTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  content: { padding: 20, alignItems: 'center' },
  infoText: { fontSize: 14, color: '#991B1B', textAlign: 'center', lineHeight: 20, marginBottom: 30, fontWeight: '500', paddingHorizontal: 12 },
  buttonWrapper: { justifyContent: 'center', alignItems: 'center', marginVertical: 20, position: 'relative' },
  sosButton: { width: 160, height: 160, borderRadius: 80, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 6 },
  sosButtonInactive: { backgroundColor: '#DC2626' },
  sosButtonActive: { backgroundColor: '#10B981' },
  sosText: { color: '#FFFFFF', fontSize: 36, fontWeight: 'bold', letterSpacing: 1 },
  sosSubtext: { color: 'rgba(255, 255, 255, 0.8)', fontSize: 12, marginTop: 4, fontWeight: '600' },
  alertBanner: { backgroundColor: '#10B981', padding: 12, borderRadius: 8, marginVertical: 16, width: '100%', alignItems: 'center' },
  alertBannerText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 13 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#991B1B', alignSelf: 'flex-start', marginTop: 24, marginBottom: 12 },
  contactsContainer: { width: '100%', backgroundColor: '#FFFFFF', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 8, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 5, elevation: 1 },
  contactItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#FEE2E2' },
  contactLeft: { flexDirection: 'row', alignItems: 'center' },
  contactIcon: { fontSize: 24, marginRight: 14 },
  contactName: { fontSize: 15, fontWeight: 'bold', color: '#1F2937' },
  contactPhone: { fontSize: 13, color: '#DC2626', fontWeight: '600', marginTop: 2 },
  callBadge: { backgroundColor: '#FEE2E2', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8 },
  callBadgeText: { color: '#DC2626', fontSize: 11, fontWeight: 'bold' },
});

export default SOSScreen;
