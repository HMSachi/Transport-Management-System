import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetProfileAction } from '../../actions/ProfileActions';
import RoleScreenTemplate from '../../components/RoleScreenTemplate';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => { dispatch(GetProfileAction(user?.id)); }, [dispatch, user]);

  const profileData = profile || { name: user?.name || 'John Doe', email: user?.email || 'johndoe@example.com', phone: '+91 9876543210', role: 'Transport Manager', joined: 'January 2024' };

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

export default ProfileScreen;
