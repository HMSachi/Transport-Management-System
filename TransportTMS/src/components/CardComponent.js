import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CardComponent = ({ icon, title, value, subtitle, onPress, color = '#2563EB' }) => {
  return (
    <TouchableOpacity style={[styles.card, { borderLeftColor: color }]} onPress={onPress} activeOpacity={onPress ? 0.7 : 1}>
      <View style={styles.row}>
        {icon ? <Text style={styles.icon}>{icon}</Text> : null}
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          {value !== undefined && <Text style={[styles.value, { color }]}>{value}</Text>}
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFFFFF', borderRadius: 10, padding: 16, marginBottom: 12, borderLeftWidth: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.08, shadowRadius: 4, elevation: 2 },
  row: { flexDirection: 'row', alignItems: 'center' },
  icon: { fontSize: 28, marginRight: 14 },
  content: { flex: 1 },
  title: { fontSize: 14, color: '#6B7280', marginBottom: 2, fontWeight: '500' },
  value: { fontSize: 24, fontWeight: 'bold', marginBottom: 2 },
  subtitle: { fontSize: 12, color: '#9CA3AF' },
});

export default CardComponent;
