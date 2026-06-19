import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAction } from '../../actions/AuthActions';

const quickActions = [
  { label: 'Track', icon: 'O' },
  { label: 'Book', icon: 'B' },
  { label: 'Trips', icon: 'T' },
  { label: 'Alerts', icon: '!' },
];

const trips = [
  { id: '1', month: 'OCT', day: '25', title: 'Airport to Corporate Park', meta: '08:30 AM - 12 Pass.' },
  { id: '2', month: 'OCT', day: '26', title: 'City Center Shuttle', meta: '10:00 AM - 8 Pass.' },
];

const notifications = [
  { id: '1', title: 'Trip #402 confirmed', subtitle: 'Vehicle assignment was approved.', tone: 'success' },
  { id: '2', title: 'Maintenance alert', subtitle: 'Toyota Coaster (ABC-123) oil change due.', tone: 'warning' },
];

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(LogoutAction());
    navigation.replace('Login');
  };

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topRow}>
          <View style={styles.userRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{(user?.name || 'A').charAt(0)}</Text>
            </View>
            <View>
              <Text style={styles.hello}>Hello, {user?.name || 'Alex'}</Text>
              <Text style={styles.dateText}>Oct 24, 2023</Text>
            </View>
          </View>
          <View style={styles.iconCircle}>
            <Text style={styles.iconCircleText}>[]</Text>
          </View>
        </View>

        <View style={styles.activeCard}>
          <View style={styles.activeChipRow}>
            <View style={styles.activeChip}>
              <Text style={styles.activeChipText}>ACTIVE TRIP</Text>
            </View>
            <Text style={styles.truckIcon}>V</Text>
          </View>

          <Text style={styles.smallLabel}>ROUTE</Text>
          <Text style={styles.tripTitle}>Downtown to Airport</Text>

          <View style={styles.tripMetaRow}>
            <View style={styles.metaBlock}>
              <Text style={styles.smallLabel}>TIME</Text>
              <Text style={styles.metaValue}>09:00 AM</Text>
            </View>
            <View style={styles.metaBlock}>
              <Text style={styles.smallLabel}>VEHICLE</Text>
              <Text style={styles.metaValue}>Toyota Coaster</Text>
              <Text style={styles.metaSub}>ABC-123</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.manifestBtn}>
            <Text style={styles.manifestBtnText}>View Manifest</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickRow}>
          {quickActions.map((item) => (
            <TouchableOpacity key={item.label} style={styles.quickCard}>
              <View style={styles.quickIcon}>
                <Text style={styles.quickIconText}>{item.icon}</Text>
              </View>
              <Text style={styles.quickLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Upcoming Trips</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <View style={styles.tripList}>
          {trips.map((trip) => (
            <View key={trip.id} style={styles.tripCard}>
              <View style={styles.tripDateBox}>
                <Text style={styles.tripMonth}>{trip.month}</Text>
                <Text style={styles.tripDay}>{trip.day}</Text>
              </View>
              <View style={styles.tripInfo}>
                <Text style={styles.tripCardTitle}>{trip.title}</Text>
                <Text style={styles.tripCardMeta}>{trip.meta}</Text>
              </View>
              <Text style={styles.chevron}>></Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.noticeCard}>
          {notifications.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.noticeRow,
                index < notifications.length - 1 && styles.noticeDivider,
              ]}
            >
              <View
                style={[
                  styles.noticeIcon,
                  item.tone === 'success' ? styles.noticeSuccess : styles.noticeWarning,
                ]}
              >
                <Text style={styles.noticeIconText}>
                  {item.tone === 'success' ? 'C' : 'A'}
                </Text>
              </View>
              <View style={styles.noticeTextWrap}>
                <Text style={styles.noticeTitle}>{item.title}</Text>
                <Text style={styles.noticeSubtitle}>{item.subtitle}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomNav}>
        <View style={styles.bottomItemActive}>
          <Text style={styles.bottomIconActive}>H</Text>
          <Text style={styles.bottomLabelActive}>Home</Text>
        </View>
        <View style={styles.bottomItem}>
          <Text style={styles.bottomIcon}>T</Text>
          <Text style={styles.bottomLabel}>Trips</Text>
        </View>
        <View style={styles.bottomItem}>
          <Text style={styles.bottomIcon}>A</Text>
          <Text style={styles.bottomLabel}>Alerts</Text>
        </View>
        <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.bottomIcon}>P</Text>
          <Text style={styles.bottomLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16, paddingBottom: 110 },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  userRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { fontSize: 18, fontWeight: '700', color: '#333' },
  hello: { fontSize: 20, fontWeight: '700', color: '#ff8a00' },
  dateText: { fontSize: 12, color: '#666', marginTop: 2 },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleText: { color: '#ff8a00', fontSize: 16, fontWeight: '700' },
  activeCard: {
    backgroundColor: '#ff7a00',
    borderRadius: 18,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 5,
  },
  activeChipRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18 },
  activeChip: {
    backgroundColor: 'rgba(255,255,255,0.16)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  activeChipText: { color: '#fff', fontSize: 11, fontWeight: '700' },
  truckIcon: { color: '#fff', fontSize: 18, fontWeight: '700' },
  smallLabel: { color: 'rgba(255,255,255,0.8)', fontSize: 11, fontWeight: '700', marginBottom: 4 },
  tripTitle: { color: '#fff', fontSize: 22, fontWeight: '800', marginBottom: 18 },
  tripMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.24)',
    marginBottom: 16,
  },
  metaBlock: { flex: 1 },
  metaValue: { color: '#fff', fontSize: 16, fontWeight: '700', marginTop: 3 },
  metaSub: { color: '#fff', opacity: 0.85, fontSize: 12, marginTop: 2 },
  manifestBtn: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  manifestBtnText: { color: '#ff7a00', fontSize: 16, fontWeight: '700' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#1f2937', marginTop: 18, marginBottom: 12 },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 18, marginBottom: 12 },
  seeAll: { color: '#ff7a00', fontWeight: '600' },
  quickRow: { flexDirection: 'row', justifyContent: 'space-between' },
  quickCard: {
    width: '23%',
    backgroundColor: '#fde6cf',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
  },
  quickIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  quickIconText: { color: '#ff7a00', fontSize: 16, fontWeight: '800' },
  quickLabel: { fontSize: 12, color: '#444', fontWeight: '600' },
  tripList: { gap: 10 },
  tripCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ececec',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tripDateBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#fff4e8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  tripMonth: { color: '#ff7a00', fontSize: 11, fontWeight: '800' },
  tripDay: { color: '#ff7a00', fontSize: 18, fontWeight: '800' },
  tripInfo: { flex: 1 },
  tripCardTitle: { fontSize: 15, fontWeight: '700', color: '#1f2937' },
  tripCardMeta: { fontSize: 12, color: '#6b7280', marginTop: 4 },
  chevron: { color: '#b5b5b5', fontSize: 22, fontWeight: '700' },
  noticeCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ececec',
    overflow: 'hidden',
  },
  noticeRow: { flexDirection: 'row', alignItems: 'center', padding: 14 },
  noticeDivider: { borderBottomWidth: 1, borderBottomColor: '#f1f1f1' },
  noticeIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  noticeSuccess: { backgroundColor: '#e8fff0' },
  noticeWarning: { backgroundColor: '#fff0f0' },
  noticeIconText: { fontSize: 14, fontWeight: '800' },
  noticeTextWrap: { flex: 1 },
  noticeTitle: { fontSize: 14, fontWeight: '700', color: '#1f2937' },
  noticeSubtitle: { fontSize: 12, color: '#6b7280', marginTop: 2 },
  logoutBtn: {
    marginTop: 18,
    backgroundColor: '#1f2937',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  logoutText: { color: '#fff', fontSize: 15, fontWeight: '700' },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ececec',
    paddingVertical: 10,
  },
  bottomItem: { alignItems: 'center', width: 70 },
  bottomItemActive: { alignItems: 'center', width: 70 },
  bottomIcon: { fontSize: 18, color: '#b0b0b0', fontWeight: '700' },
  bottomIconActive: { fontSize: 18, color: '#ff7a00', fontWeight: '700' },
  bottomLabel: { fontSize: 12, color: '#b0b0b0', marginTop: 4 },
  bottomLabelActive: { fontSize: 12, color: '#ff7a00', marginTop: 4, fontWeight: '700' },
});

export default HomeScreen;
