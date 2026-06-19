import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const RoleScreenTemplate = ({ title, subtitle, cards = [], listTitle, listItems = [], actionLabel, onAction }) => {
  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

        <View style={styles.cardGrid}>
          {cards.map((card) => (
            <View key={card.label} style={styles.card}>
              <Text style={styles.cardIcon}>{card.icon}</Text>
              <Text style={styles.cardValue}>{card.value}</Text>
              <Text style={styles.cardLabel}>{card.label}</Text>
            </View>
          ))}
        </View>

        {listTitle ? <Text style={styles.sectionTitle}>{listTitle}</Text> : null}
        {listItems.map((item) => (
          <View key={item.title} style={styles.listCard}>
            <View style={styles.listLeft}>
              <Text style={styles.listIcon}>{item.icon}</Text>
              <View style={styles.listTextWrap}>
                <Text style={styles.listTitle}>{item.title}</Text>
                <Text style={styles.listSubtitle}>{item.subtitle}</Text>
              </View>
            </View>
            <Text style={styles.chevron}>></Text>
          </View>
        ))}

        {actionLabel ? (
          <TouchableOpacity style={styles.actionBtn} onPress={onAction}>
            <Text style={styles.actionBtnText}>{actionLabel}</Text>
          </TouchableOpacity>
        ) : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16, paddingBottom: 24 },
  title: { fontSize: 28, fontWeight: '800', color: '#1f2937' },
  subtitle: { fontSize: 14, color: '#6b7280', marginTop: 6, marginBottom: 18 },
  cardGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    width: '48%',
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  cardIcon: { fontSize: 20, color: '#ff7a00', fontWeight: '700' },
  cardValue: { fontSize: 24, fontWeight: '800', color: '#111827', marginTop: 10 },
  cardLabel: { fontSize: 13, color: '#6b7280', marginTop: 4 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#111827', marginTop: 8, marginBottom: 12 },
  listCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ececec',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  listLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  listIcon: { fontSize: 20, marginRight: 12, color: '#ff7a00', fontWeight: '700' },
  listTextWrap: { flex: 1 },
  listTitle: { fontSize: 15, fontWeight: '700', color: '#111827' },
  listSubtitle: { fontSize: 12, color: '#6b7280', marginTop: 3 },
  chevron: { fontSize: 20, color: '#c4c4c4', fontWeight: '700', marginLeft: 10 },
  actionBtn: {
    marginTop: 18,
    backgroundColor: '#ff7a00',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  actionBtnText: { color: '#fff', fontSize: 15, fontWeight: '700' },
});

export default RoleScreenTemplate;
