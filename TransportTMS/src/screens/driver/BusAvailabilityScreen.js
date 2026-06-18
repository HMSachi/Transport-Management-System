import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';

const BusAvailabilityScreen = () => {
  const [available, setAvailable] = useState(true);
  const [onRoute,   setOnRoute]   = useState(false);
  const [inService, setInService] = useState(true);

  const busInfo = [
    { label: 'Bus Number',  value: 'KA-01-1234' },
    { label: 'Model',       value: 'Tata Starbus'   },
    { label: 'Capacity',    value: '52 Seats'    },
    { label: 'Route',       value: 'City A → City B' },
    { label: 'Last Service', value: '2024-06-01'  },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}><Text style={styles.title}>🔧  Bus Availability</Text></View>

      {/* Status Toggles */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Availability Status</Text>
        {[
          { label: 'Available for Trips', value: available, set: setAvailable, color: '#059669' },
          { label: 'Currently On Route',  value: onRoute,   set: setOnRoute,   color: '#2563EB' },
          { label: 'Bus In Service',      value: inService, set: setInService, color: '#7C3AED' },
        ].map((item, i) => (
          <View key={i} style={styles.toggleRow}>
            <Text style={styles.toggleLabel}>{item.label}</Text>
            <Switch
              value={item.value}
              onValueChange={item.set}
              trackColor={{ false: '#D1D5DB', true: item.color + '88' }}
              thumbColor={item.value ? item.color : '#F3F4F6'}
            />
          </View>
        ))}
      </View>

      {/* Bus Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bus Information</Text>
        {busInfo.map((b, i) => (
          <View key={i} style={[styles.infoRow, i < busInfo.length - 1 && styles.infoRowBorder]}>
            <Text style={styles.infoLabel}>{b.label}</Text>
            <Text style={styles.infoValue}>{b.value}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0FDF4' },
  header: { backgroundColor: '#065F46', padding: 20, paddingTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  section: { backgroundColor: '#FFF', margin: 16, borderRadius: 12, padding: 16, elevation: 2 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#374151', marginBottom: 12 },
  toggleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
  toggleLabel: { fontSize: 14, color: '#374151', fontWeight: '500' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 },
  infoRowBorder: { borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  infoLabel: { fontSize: 13, color: '#6B7280' },
  infoValue: { fontSize: 13, fontWeight: '600', color: '#111827' },
});

export default BusAvailabilityScreen;
