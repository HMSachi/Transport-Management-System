import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GetProfileAction } from '../../actions/ProfileActions';
import HeaderComponent from '../../components/HeaderComponent';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { profile, isLoading } = useSelector((state) => state.profile);
  const { user }               = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(GetProfileAction(user?.id));
  }, [dispatch, user]);

  const profileData = profile || {
    name:   user?.name  || 'John Doe',
    email:  user?.email || 'johndoe@example.com',
    phone:  '+91 9876543210',
    role:   'Transport Manager',
    joined: 'January 2024',
  };

  const infoRows = [
    { label: 'Full Name', value: profileData.name,   icon: '👤' },
    { label: 'Email',     value: profileData.email,  icon: '📧' },
    { label: 'Phone',     value: profileData.phone,  icon: '📞' },
    { label: 'Role',      value: profileData.role,   icon: '💼' },
    { label: 'Joined',    value: profileData.joined, icon: '📅' },
  ];

  return (
    <View style={styles.container}>
      <HeaderComponent title="Profile" />

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {profileData.name?.charAt(0).toUpperCase() || 'U'}
            </Text>
          </View>
          <Text style={styles.nameText}>{profileData.name}</Text>
          <Text style={styles.roleText}>{profileData.role}</Text>
        </View>

        {/* Profile Info */}
        {isLoading ? (
          <ActivityIndicator size="large" color="#2563EB" style={{ marginTop: 24 }} />
        ) : (
          <View style={styles.infoCard}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            {infoRows.map((row, index) => (
              <View key={index} style={[styles.infoRow, index < infoRows.length - 1 && styles.infoRowBorder]}>
                <Text style={styles.infoIcon}>{row.icon}</Text>
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>{row.label}</Text>
                  <Text style={styles.infoValue}>{row.value}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.backBtnText}>← Back to Dashboard</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 36,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  roleText: {
    fontSize: 14,
    color: '#6B7280',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 14,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  infoRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  infoIcon: {
    fontSize: 20,
    marginRight: 14,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
  },
  backBtn: {
    backgroundColor: '#EFF6FF',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  backBtnText: {
    color: '#2563EB',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default ProfileScreen;
