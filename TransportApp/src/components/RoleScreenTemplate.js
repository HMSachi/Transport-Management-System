import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const COLORS = {
  primary: '#ff7a00',
  primaryLight: '#fff0e6',
  white: '#ffffff',
  text: '#1f2937',
  muted: '#6b7280',
  border: '#f3f4f6',
  success: '#10b981',
  successLight: '#d1fae5',
  danger: '#ef4444',
  dangerLight: '#fee2e2',
};

const RoleScreenTemplate = ({ 
  navigation, 
  user = { name: 'User', date: 'Oct 24, 2023', avatar: 'https://i.pravatar.cc/150?img=11' },
  dashboardTitle,
  heroData,
  quickActions = [],
  upcomingList = [],
  notifications = [],
  activeTab = 'Home'
}) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar style="light" backgroundColor={COLORS.primary} />
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          
          {/* HEADER */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image source={{ uri: user.avatar }} style={styles.avatar} />
              <View style={styles.headerTextWrap}>
                <Text style={styles.greeting}>Hello, {user.name}</Text>
                <Text style={styles.dateText}>{dashboardTitle || user.date}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.iconBtn}>
              <Feather name="calendar" size={20} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          {/* HERO CARD */}
          {heroData && (
            <View style={styles.heroCard}>
              <View style={styles.heroTop}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{heroData.badge}</Text>
                </View>
                <MaterialCommunityIcons name={heroData.icon || 'truck-fast'} size={24} color={COLORS.white} />
              </View>

              <View style={styles.heroMiddle}>
                <Text style={styles.heroLabel}>{heroData.label1}</Text>
                <Text style={styles.heroTitle}>{heroData.title}</Text>
              </View>

              <View style={styles.heroDivider} />

              <View style={styles.heroBottom}>
                <View style={styles.heroCol}>
                  <Text style={styles.heroLabel}>{heroData.label2}</Text>
                  <View style={styles.heroRow}>
                    {heroData.value1Icon && <Feather name={heroData.value1Icon} size={14} color={COLORS.white} style={{ marginRight: 6 }} />}
                    <Text style={styles.heroValue}>{heroData.value1}</Text>
                  </View>
                </View>
                <View style={styles.heroCol}>
                  <Text style={styles.heroLabel}>{heroData.label3}</Text>
                  <Text style={styles.heroValue}>{heroData.value2}</Text>
                  <Text style={styles.heroSubValue}>{heroData.subValue2}</Text>
                </View>
              </View>

              {heroData.btnText && (
                <TouchableOpacity style={styles.heroBtn}>
                  <Text style={styles.heroBtnText}>{heroData.btnText}</Text>
                </TouchableOpacity>
              )}
            </View>
          )}

          {/* QUICK ACTIONS */}
          {quickActions.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quick Actions</Text>
              <View style={styles.actionsGrid}>
                {quickActions.map((action, idx) => (
                  <TouchableOpacity 
                    key={idx} 
                    style={styles.actionSquare}
                    onPress={() => {
                      if (action.onPress) {
                        action.onPress();
                      } else if (action.route) {
                        navigation.navigate(action.route);
                      }
                    }}
                  >
                    <View style={styles.actionIconWrap}>
                      <MaterialCommunityIcons name={action.icon} size={24} color={COLORS.primary} />
                    </View>
                    <Text style={styles.actionLabel}>{action.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* UPCOMING LIST */}
          {upcomingList.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Upcoming</Text>
                <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
              </View>
              
              {upcomingList.map((item, idx) => (
                <TouchableOpacity key={idx} style={styles.listCard}>
                  <View style={styles.dateBox}>
                    <Text style={styles.dateMonth}>{item.dateMonth}</Text>
                    <Text style={styles.dateDay}>{item.dateDay}</Text>
                  </View>
                  <View style={styles.listBody}>
                    <Text style={styles.listTitle}>{item.title}</Text>
                    <Text style={styles.listSubtitle}>{item.subtitle}</Text>
                  </View>
                  <Feather name="chevron-right" size={20} color={COLORS.muted} />
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* NOTIFICATIONS */}
          {notifications.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Notifications</Text>
              
              {notifications.map((notif, idx) => (
                <TouchableOpacity key={idx} style={styles.listCard}>
                  <View style={[styles.iconCircle, { backgroundColor: notif.type === 'success' ? COLORS.successLight : COLORS.dangerLight }]}>
                    <Feather name={notif.icon} size={20} color={notif.type === 'success' ? COLORS.success : COLORS.danger} />
                  </View>
                  <View style={styles.listBody}>
                    <Text style={styles.listTitle}>{notif.title}</Text>
                    <Text style={styles.listSubtitle}>{notif.subtitle}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}

        </ScrollView>

        {/* BOTTOM TAB BAR */}
        <View style={styles.bottomBar}>
          {[
            { icon: 'home', label: 'Home' },
            { icon: 'map', label: 'Trips' },
            { icon: 'bell', label: 'Alerts' },
            { icon: 'user', label: 'Profile' },
          ].map((tab, idx) => {
            const isActive = activeTab === tab.label;
            return (
              <TouchableOpacity 
                key={idx} 
                style={styles.tabItem} 
                onPress={() => {
                  if (tab.label === 'Home') navigation.navigate('CustomerDashboard');
                  if (tab.label === 'Trips') navigation.navigate('MyTrips');
                  if (tab.label === 'Alerts') navigation.navigate('Notifications');
                  if (tab.label === 'Profile') navigation.navigate('Profile');
                }}
              >
                <Feather 
                  name={tab.icon} 
                  size={24} 
                  color={isActive ? COLORS.primary : COLORS.muted} 
                  style={{ marginBottom: 4 }}
                />
                <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                  {tab.label}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.primary },
  mainContainer: { flex: 1, backgroundColor: '#fcfcfc' },
  content: { padding: 20, paddingBottom: 100 },
  
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 44, height: 44, borderRadius: 22, marginRight: 12 },
  greeting: { fontSize: 18, fontFamily: 'System', fontWeight: '600', color: COLORS.primary },
  dateText: { fontSize: 12, fontFamily: 'System', fontWeight: '400', color: COLORS.muted, marginTop: 2 },
  iconBtn: { width: 40, height: 40, borderRadius: 12, backgroundColor: COLORS.primaryLight, justifyContent: 'center', alignItems: 'center' },

  heroCard: { backgroundColor: COLORS.primary, borderRadius: 24, padding: 20, shadowColor: COLORS.primary, shadowOpacity: 0.3, shadowRadius: 15, shadowOffset: { width: 0, height: 8 }, elevation: 8, marginBottom: 28 },
  heroTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  badge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeText: { color: COLORS.white, fontSize: 12, fontWeight: '700', letterSpacing: 0.5 },
  heroMiddle: { marginBottom: 16 },
  heroLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: '700', marginBottom: 4, letterSpacing: 0.5 },
  heroTitle: { color: COLORS.white, fontSize: 24, fontWeight: '700' },
  heroDivider: { height: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: 16 },
  heroBottom: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  heroCol: { flex: 1 },
  heroRow: { flexDirection: 'row', alignItems: 'center' },
  heroValue: { color: COLORS.white, fontSize: 14, fontWeight: '600' },
  heroSubValue: { color: 'rgba(255,255,255,0.8)', fontSize: 12, marginTop: 2 },
  heroBtn: { backgroundColor: COLORS.white, borderRadius: 100, paddingVertical: 14, alignItems: 'center' },
  heroBtnText: { color: COLORS.primary, fontSize: 14, fontWeight: '700' },

  section: { marginBottom: 28 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: COLORS.text, marginBottom: 16 },
  seeAll: { fontSize: 14, fontWeight: '600', color: COLORS.primary, marginBottom: 16 },

  actionsGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  actionSquare: { width: '22%', backgroundColor: COLORS.primaryLight, borderRadius: 16, paddingVertical: 14, alignItems: 'center' },
  actionIconWrap: { marginBottom: 8 },
  actionLabel: { fontSize: 12, fontWeight: '600', color: COLORS.primary },

  listCard: { backgroundColor: COLORS.white, borderRadius: 16, padding: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: COLORS.border, shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 8, elevation: 1 },
  dateBox: { width: 52, height: 52, borderRadius: 12, backgroundColor: COLORS.primaryLight, justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  dateMonth: { fontSize: 12, fontWeight: '700', color: COLORS.primary, marginBottom: 2 },
  dateDay: { fontSize: 18, fontWeight: '700', color: COLORS.primary },
  iconCircle: { width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  listBody: { flex: 1 },
  listTitle: { fontSize: 14, fontWeight: '600', color: COLORS.text, marginBottom: 4 },
  listSubtitle: { fontSize: 12, color: COLORS.muted },

  bottomBar: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, backgroundColor: COLORS.white, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 20, borderTopWidth: 1, borderTopColor: COLORS.border, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 10 },
  tabItem: { alignItems: 'center', justifyContent: 'center', flex: 1, height: '100%' },
  tabLabel: { fontSize: 12, fontWeight: '500', color: COLORS.muted },
  tabLabelActive: { color: COLORS.primary, fontWeight: '600' },
});

export default RoleScreenTemplate;
