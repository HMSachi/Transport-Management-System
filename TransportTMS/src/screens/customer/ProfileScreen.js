import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import ButtonComponent from '../../components/ButtonComponent';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  const firstLetter = user?.name ? user.name.charAt(0).toUpperCase() : 'U';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{firstLetter}</Text>
          </View>
          <Text style={styles.userName}>{user?.name || 'User Name'}</Text>
          <Text style={styles.userRole}>Passenger</Text>
        </View>

        {/* Info List */}
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{user?.email || 'email@example.com'}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue}>{user?.phone || '+91 98765 43210'}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Role</Text>
            <Text style={[styles.infoValue, { textTransform: 'capitalize' }]}>{user?.role || 'Customer'}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Member Since</Text>
            <Text style={styles.infoValue}>June 2026</Text>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actionSection}>
          <ButtonComponent
            title="Logout"
            onPress={handleLogout}
            color="#EF4444"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1E3A8A' },
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', paddingVertical: 18, alignItems: 'center' },
  headerTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  profileCard: { backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: 24, borderBottomWidth: 1, borderBottomColor: '#E5E7EB', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5, elevation: 1 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#3B82F6', justifyContent: 'center', alignItems: 'center', marginBottom: 12, shadowColor: '#3B82F6', shadowOpacity: 0.3, shadowRadius: 6, elevation: 4 },
  avatarText: { fontSize: 32, color: '#FFFFFF', fontWeight: 'bold' },
  userName: { fontSize: 20, fontWeight: 'bold', color: '#1E3A8A' },
  userRole: { fontSize: 13, color: '#6B7280', marginTop: 4, fontWeight: '500' },
  infoSection: { backgroundColor: '#FFFFFF', marginTop: 16, paddingHorizontal: 20 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  infoLabel: { fontSize: 14, color: '#6B7280', fontWeight: '500' },
  infoValue: { fontSize: 14, color: '#111827', fontWeight: '600' },
  actionSection: { padding: 24, marginTop: 'auto' },
});

export default ProfileScreen;
