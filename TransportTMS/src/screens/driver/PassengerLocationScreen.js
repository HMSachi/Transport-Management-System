import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

const INITIAL_STOPS = [
  { id: 'S01', name: 'Alice Smith', stop: 'Main Street Crossing', lat: '12.9716', lng: '77.5946', boarded: false },
  { id: 'S02', name: 'Bob Johnson', stop: 'Metro Station Gate 3', lat: '12.9820', lng: '77.6010', boarded: false },
  { id: 'S03', name: 'Charlie Brown', stop: 'Central Library', lat: '12.9650', lng: '77.5890', boarded: true },
  { id: 'S04', name: 'Diana Prince', stop: 'Sector 5 Business Park', lat: '12.9912', lng: '77.6120', boarded: false },
];

const PassengerLocationScreen = ({ navigation }) => {
  const [stops, setStops] = useState(INITIAL_STOPS);

  const toggleBoarding = (id) => {
    setStops((prev) =>
      prev.map((stop) => {
        if (stop.id === id) {
          const updatedBoarded = !stop.boarded;
          Alert.alert('Status Updated', `${stop.name} is now marked as ${updatedBoarded ? 'Boarded' : 'Waiting'}.`);
          return { ...stop, boarded: updatedBoarded };
        }
        return stop;
      })
    );
  };

  const renderStopItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.stopHeader}>
        <View>
          <Text style={styles.passengerName}>{item.name}</Text>
          <Text style={styles.stopName}>📍 {item.stop}</Text>
          <Text style={styles.coords}>Coords: {item.lat}, {item.lng}</Text>
        </View>
        <TouchableOpacity
          style={[styles.statusBadge, item.boarded ? styles.badgeBoarded : styles.badgeWaiting]}
          onPress={() => toggleBoarding(item.id)}
          activeOpacity={0.8}
        >
          <Text style={[styles.statusText, item.boarded ? styles.textBoarded : styles.textWaiting]}>
            {item.boarded ? 'Boarded' : 'Mark Boarded'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Passenger Stops / Locations</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* Map Placeholder */}
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapIcon}>🗺️</Text>
          <Text style={styles.mapText}>Stops Map View</Text>
          <Text style={styles.mapSubText}>Displaying active passenger coordinates</Text>
        </View>

        {/* Stops List */}
        <View style={styles.listWrapper}>
          <Text style={styles.sectionTitle}>Stop Schedule</Text>
          <FlatList
            data={stops}
            keyExtractor={(item) => item.id}
            renderItem={renderStopItem}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
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
  mapPlaceholder: { height: 180, backgroundColor: '#D1FAE5', margin: 16, borderRadius: 16, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#10B981', borderStyle: 'dashed' },
  mapIcon: { fontSize: 48, marginBottom: 8 },
  mapText: { fontSize: 16, fontWeight: 'bold', color: '#065F46' },
  mapSubText: { fontSize: 11, color: '#047857', marginTop: 2 },
  listWrapper: { flex: 1, backgroundColor: '#FFFFFF', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 5 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#065F46', marginBottom: 12 },
  listContainer: { paddingBottom: 16 },
  card: { backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, padding: 14, marginBottom: 12 },
  stopHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  passengerName: { fontSize: 15, fontWeight: 'bold', color: '#1F2937' },
  stopName: { fontSize: 13, color: '#4B5563', marginTop: 4, fontWeight: '500' },
  coords: { fontSize: 11, color: '#9CA3AF', marginTop: 2 },
  statusBadge: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, minWidth: 100, alignItems: 'center', justifyContent: 'center' },
  badgeWaiting: { borderWidth: 1.5, borderColor: '#059669' },
  badgeBoarded: { backgroundColor: '#D1FAE5' },
  statusText: { fontSize: 12, fontWeight: 'bold' },
  textWaiting: { color: '#059669' },
  textBoarded: { color: '#065F46' },
});

export default PassengerLocationScreen;
