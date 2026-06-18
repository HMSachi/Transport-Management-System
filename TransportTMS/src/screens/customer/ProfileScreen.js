import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { user, role } = useSelector((s) => s.auth);

  const info = [
    { label: 'Full Name', value: user?.name  || 'John Doe',             icon: '👤' },
    { label: 'Email',     value: user?.email || 'johndoe@example.com',  icon: '📧' },
    { label: 'Phone',     value: user?.phone || '+91 9876543210',       icon: '📞' },
    { label: 'Role',      value: role?.toUpperCase() || 'CUSTOMER',     icon: '🎭' },
    { label: 'Member Since', value: 'January 2024',                     icon: '📅' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}><Text style={styles.avatarText}>{(user?.name || 'U').charAt(0)}</Text></View>
        <Text style={styles.name}>{user?.name || 'John Doe'}</Text>
        <Text style={styles.role}>{role?.toUpperCase() || 'CUSTOMER'}</Text>
      </View>
      <View style={styles.card}>
        {info.map((item, i) => (
          <View key={i} style={[styles.row, i < info.length - 1 && styles.rowBorder]}>
            <Text style={styles.rowIcon}>{item.icon}</Text>
            <View><Text style={styles.rowLabel}>{item.label}</Text><Text style={styles.rowValue}>{item.value}</Text></View>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.logoutBtn} onPress={() => dispatch(logout())}>
        <Text style={styles.logoutText}>🚪  Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', alignItems: 'center', padding: 30, paddingTop: 50 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  avatarText: { fontSize: 36, color: '#FFF', fontWeight: 'bold' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#FFF' },
  role: { fontSize: 12, color: '#93C5FD', marginTop: 4 },
  card: { backgroundColor: '#FFF', margin: 16, borderRadius: 12, padding: 16, elevation: 2 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14 },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  rowIcon: { fontSize: 20, marginRight: 14 },
  rowLabel: { fontSize: 12, color: '#9CA3AF' },
  rowValue: { fontSize: 14, fontWeight: '600', color: '#111827', marginTop: 2 },
  logoutBtn: { backgroundColor: '#FEE2E2', margin: 16, borderRadius: 12, padding: 16, alignItems: 'center' },
  logoutText: { color: '#DC2626', fontWeight: 'bold', fontSize: 15 },
});

export default ProfileScreen;
