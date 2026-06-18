import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { selectRole } from '../../redux/slices/authSlice';

const roles = [
  { key: 'customer', label: 'Customer',  icon: '👤', desc: 'Book rides & track buses',   color: '#2563EB' },
  { key: 'driver',   label: 'Driver',    icon: '🚗', desc: 'Manage trips & passengers',  color: '#059669' },
  { key: 'admin',    label: 'Bus Owner', icon: '🏢', desc: 'Manage fleet & operations',  color: '#7C3AED' },
];

const RoleSelectionScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSelectRole = (role) => {
    dispatch(selectRole(role));
    // AppNavigator will switch automatically based on Redux role state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <Text style={styles.subtitle}>Choose how you'll use TransportTMS</Text>
      {roles.map((r) => (
        <TouchableOpacity
          key={r.key}
          style={[styles.card, { borderLeftColor: r.color }]}
          onPress={() => handleSelectRole(r.key)}
          activeOpacity={0.75}
        >
          <Text style={styles.cardIcon}>{r.icon}</Text>
          <View style={styles.cardText}>
            <Text style={[styles.cardLabel, { color: r.color }]}>{r.label}</Text>
            <Text style={styles.cardDesc}>{r.desc}</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4FF', paddingHorizontal: 24, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1E3A8A', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#6B7280', textAlign: 'center', marginBottom: 36 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 14, padding: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 16, borderLeftWidth: 5, elevation: 2, shadowColor: '#000', shadowOpacity: 0.07, shadowRadius: 6 },
  cardIcon: { fontSize: 36, marginRight: 16 },
  cardText: { flex: 1 },
  cardLabel: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  cardDesc: { fontSize: 13, color: '#6B7280' },
  arrow: { fontSize: 24, color: '#9CA3AF' },
});

export default RoleSelectionScreen;
