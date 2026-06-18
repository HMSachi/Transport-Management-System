import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAction } from '../../actions/AuthActions';
import HeaderComponent from '../../components/HeaderComponent';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(LogoutAction());
    navigation.replace('Login');
  };

  const dashboardCards = [
    { icon: '🚛', label: 'Total Vehicles',  value: '24' },
    { icon: '📦', label: 'Active Shipments', value: '12' },
    { icon: '✅', label: 'Delivered Today',  value: '8'  },
    { icon: '⚠️', label: 'Pending Issues',   value: '3'  },
  ];

  return (
    <View style={styles.container}>
      <HeaderComponent title="Dashboard" />

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <Text style={styles.greeting}>
          Hello, {user?.name || 'User'} 👋
        </Text>
        <Text style={styles.subText}>
          Here's your transport overview
        </Text>

        {/* Dashboard Cards */}
        <View style={styles.cardsGrid}>
          {dashboardCards.map((card, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardIcon}>{card.icon}</Text>
              <Text style={styles.cardValue}>{card.value}</Text>
              <Text style={styles.cardLabel}>{card.label}</Text>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.actionBtnIcon}>👤</Text>
          <Text style={styles.actionBtnText}>View Profile</Text>
          <Text style={styles.actionArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionBtn, styles.logoutBtn]}
          onPress={handleLogout}
        >
          <Text style={styles.actionBtnIcon}>🚪</Text>
          <Text style={[styles.actionBtnText, styles.logoutText]}>Logout</Text>
          <Text style={styles.actionArrow}>›</Text>
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
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: '47%',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 12,
  },
  actionBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  logoutBtn: {
    borderColor: '#FCA5A5',
    backgroundColor: '#FFF5F5',
  },
  actionBtnIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  actionBtnText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  logoutText: {
    color: '#DC2626',
  },
  actionArrow: {
    fontSize: 20,
    color: '#9CA3AF',
  },
});

export default HomeScreen;
