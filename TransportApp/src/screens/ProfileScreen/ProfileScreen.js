import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GetProfileAction } from '../../actions/ProfileActions';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';
import { COLORS, TYPOGRAPHY } from '../common/theme';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { profile, isLoading } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);
  const roleRoute = user?.role === 'admin' ? 'AdminDashboard' : user?.role === 'driver' ? 'DriverDashboard' : 'CustomerDashboard';

  useEffect(() => { dispatch(GetProfileAction(user?.id)); }, [dispatch, user]);

  const profileData = profile || { name: user?.name || 'John Doe', email: user?.email || 'johndoe@example.com', phone: '+91 9876543210', role: 'Transport Manager', joined: 'January 2024' };
  const infoRows = [
    { label: 'Full Name', value: profileData.name, icon: 'U' },
    { label: 'Email', value: profileData.email, icon: '@' },
    { label: 'Phone', value: profileData.phone, icon: 'P' },
    { label: 'Role', value: profileData.role, icon: 'R' },
    { label: 'Joined', value: profileData.joined, icon: 'J' },
  ];

  return (
    <RoleScreenTemplate 
      navigation={navigation}
      user={{ name: profileData.name || 'John', date: profileData.role || 'User', avatar: 'https://i.pravatar.cc/150?img=11' }}
      heroData={{
        badge: 'PROFILE',
        icon: 'account',
        label1: 'NAME',
        title: profileData.name || 'John Doe',
        label2: 'EMAIL',
        value1Icon: 'mail',
        value1: profileData.email || 'johndoe@example.com',
        label3: 'PHONE',
        value2: profileData.phone || '+91 9876543210',
        subValue2: 'Primary',
        btnText: 'Edit Profile'
      }}
      quickActions={[
        { icon: 'shield-account', label: 'Security', route: 'Security' },
        { icon: 'credit-card', label: 'Payment', route: 'Payments' },
        { icon: 'cog-outline', label: 'Settings', route: 'Settings' },
        { icon: 'logout', label: 'Logout', onPress: () => navigation.navigate('Login') },
      ]}
      activeTab="Profile"
    />
  );
};

const styles = StyleSheet.create({
  content: { padding: 20, paddingTop: 28 },
  heading: { fontSize: TYPOGRAPHY.heading, fontWeight: '800', color: COLORS.text },
  subheading: { fontSize: TYPOGRAPHY.body, color: COLORS.muted, marginTop: 6, marginBottom: 18 },
  avatarCard: { width: 84, height: 84, borderRadius: 26, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: 18, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 12, elevation: 3 },
  avatarText: { color: COLORS.white, fontSize: 30, fontWeight: '800' },
  card: { backgroundColor: COLORS.white, borderRadius: 20, padding: 18, borderWidth: 1, borderColor: COLORS.border },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F6EFE7' },
  rowIcon: { width: 34, height: 34, borderRadius: 17, backgroundColor: COLORS.light, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  rowIconText: { color: COLORS.primary, fontWeight: '800' },
  rowLabel: { fontSize: TYPOGRAPHY.small, color: COLORS.muted },
  rowValue: { fontSize: TYPOGRAPHY.body, color: COLORS.text, fontWeight: '600', marginTop: 2 },
  primaryBtn: { backgroundColor: COLORS.primary, borderRadius: 14, paddingVertical: 14, alignItems: 'center', marginTop: 16 },
  primaryBtnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});

export default ProfileScreen;
