import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, SafeAreaView, ScrollView } from 'react-native';

const BusAvailabilityScreen = () => {
  const [availableForTrips, setAvailableForTrips] = useState(true);
  const [currentlyOnRoute, setCurrentlyOnRoute] = useState(false);
  const [busInService, setBusInService] = useState(true);

  const busInfo = [
    { label: 'Bus Model', value: 'Tata Starbus EV' },
    { label: 'Registration No', value: 'KA-51-E-9012' },
    { label: 'Seating Capacity', value: '32 Seats' },
    { label: 'Fuel/Charge Level', value: '88% Electric' },
    { label: 'Last Service', value: '2026-06-10' },
    { label: 'Next Inspection', value: '2026-07-10' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Bus Availability & Status</Text>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          {/* Status Switches */}
          <Text style={styles.sectionTitle}>Operational Toggles</Text>
          <View style={styles.switchesCard}>
            <View style={styles.switchRow}>
              <View style={styles.switchLabelCol}>
                <Text style={styles.switchLabel}>Available for Trips</Text>
                <Text style={styles.switchDesc}>Allow dispatchers to assign routes</Text>
              </View>
              <Switch
                value={availableForTrips}
                onValueChange={setAvailableForTrips}
                trackColor={{ false: '#D1D5DB', true: '#A7F3D0' }}
                thumbColor={availableForTrips ? '#059669' : '#F3F4F6'}
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.switchRow}>
              <View style={styles.switchLabelCol}>
                <Text style={styles.switchLabel}>Currently On Route</Text>
                <Text style={styles.switchDesc}>Indicate you are driving now</Text>
              </View>
              <Switch
                value={currentlyOnRoute}
                onValueChange={setCurrentlyOnRoute}
                trackColor={{ false: '#D1D5DB', true: '#A7F3D0' }}
                thumbColor={currentlyOnRoute ? '#059669' : '#F3F4F6'}
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.switchRow}>
              <View style={styles.switchLabelCol}>
                <Text style={styles.switchLabel}>Bus In Service</Text>
                <Text style={styles.switchDesc}>Is bus fit for operating?</Text>
              </View>
              <Switch
                value={busInService}
                onValueChange={setBusInService}
                trackColor={{ false: '#D1D5DB', true: '#A7F3D0' }}
                thumbColor={busInService ? '#059669' : '#F3F4F6'}
              />
            </View>
          </View>

          {/* Bus Info Table */}
          <Text style={styles.sectionTitle}>Bus Specifications</Text>
          <View style={styles.tableCard}>
            {busInfo.map((info, idx) => (
              <View key={idx} style={[styles.tableRow, idx === busInfo.length - 1 && styles.noBorderRow]}>
                <Text style={styles.tableLabel}>{info.label}</Text>
                <Text style={styles.tableValue}>{info.value}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#065F46' },
  container: { flex: 1, backgroundColor: '#F0FDF4' },
  header: { backgroundColor: '#065F46', paddingVertical: 18, alignItems: 'center' },
  headerTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  content: { padding: 20 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#065F46', marginBottom: 12, marginTop: 10 },
  switchesCard: { backgroundColor: '#FFFFFF', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 8, marginBottom: 24, shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 5, elevation: 1 },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14 },
  switchLabelCol: { flex: 0.8 },
  switchLabel: { fontSize: 15, fontWeight: 'bold', color: '#1F2937' },
  switchDesc: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  divider: { height: 1, backgroundColor: '#F3F4F6' },
  tableCard: { backgroundColor: '#FFFFFF', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 8, shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 5, elevation: 1 },
  tableRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  noBorderRow: { borderBottomWidth: 0 },
  tableLabel: { fontSize: 14, color: '#6B7280', fontWeight: '500' },
  tableValue: { fontSize: 14, color: '#1F2937', fontWeight: 'bold' },
});

export default BusAvailabilityScreen;
