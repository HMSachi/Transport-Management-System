import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { startTrip, endTrip } from '../../redux/slices/tripSlice';
import ButtonComponent from '../../components/ButtonComponent';

const DriverModeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { activeTrip, tripStatus } = useSelector((s) => s.trip);
  const [driverMode, setDriverMode] = useState(false);

  const toggleDriverMode = (val) => {
    setDriverMode(val);
    if (val) {
      Alert.alert('🚗 Driver Mode ON', 'You are now operating as a driver.');
    } else {
      Alert.alert('🏢 Admin Mode', 'Switched back to admin mode.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.back} onPress={() => navigation.goBack()}>← Back</Text>
        <Text style={styles.title}>🚗  Driver Mode</Text>
      </View>
      {/* Toggle */}
      <View style={styles.card}>
        <View style={styles.toggleRow}>
          <View>
            <Text style={styles.toggleLabel}>Driver Mode</Text>
            <Text style={styles.toggleSub}>{driverMode ? 'Active — You are driving' : 'Inactive — Admin mode'}</Text>
          </View>
          <Switch
            value={driverMode}
            onValueChange={toggleDriverMode}
            trackColor={{ false: '#D1D5DB', true: '#059669' + '88' }}
            thumbColor={driverMode ? '#059669' : '#F3F4F6'}
          />
        </View>
      </View>

      {/* Trip Controls (only in driver mode) */}
      {driverMode && (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Trip Control</Text>
          <Text style={styles.statusText}>Status: <Text style={{ color: tripStatus === 'Ongoing' ? '#059669' : '#F59E0B', fontWeight: 'bold' }}>{tripStatus}</Text></Text>
          {activeTrip && <Text style={styles.routeText}>{activeTrip.route}  •  🚌 {activeTrip.bus}</Text>}
          <View style={styles.btnRow}>
            <ButtonComponent title="▶ Start Trip" onPress={() => dispatch(startTrip())} color="#059669" style={{ flex: 1, marginRight: 8 }} />
            <ButtonComponent title="⏹ End Trip"   onPress={() => dispatch(endTrip())}   color="#EF4444" style={{ flex: 1 }} />
          </View>
        </View>
      )}

      {!driverMode && (
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>ℹ️</Text>
          <Text style={styles.infoText}>Enable Driver Mode above to access trip controls. This allows bus owners to drive when needed.</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F3FF' },
  header: { backgroundColor: '#5B21B6', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { color: '#C4B5FD', fontSize: 14 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  card: { backgroundColor: '#FFF', margin: 16, borderRadius: 12, padding: 16, elevation: 2 },
  toggleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  toggleLabel: { fontSize: 16, fontWeight: 'bold', color: '#111827' },
  toggleSub: { fontSize: 12, color: '#6B7280', marginTop: 4 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#374151', marginBottom: 10 },
  statusText: { fontSize: 14, color: '#374151', marginBottom: 4 },
  routeText: { fontSize: 13, color: '#6B7280', marginBottom: 12 },
  btnRow: { flexDirection: 'row' },
  infoCard: { backgroundColor: '#EDE9FE', margin: 16, borderRadius: 12, padding: 20, flexDirection: 'row', alignItems: 'center', gap: 12 },
  infoIcon: { fontSize: 24 },
  infoText: { flex: 1, fontSize: 13, color: '#5B21B6', lineHeight: 20 },
});

export default DriverModeScreen;
