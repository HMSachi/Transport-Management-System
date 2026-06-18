// Reusable Header Component — mirrors sample-React-project/src/components/HeaderComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderComponent = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 16,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});

export default HeaderComponent;
