import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const ButtonComponent = ({ title, onPress, color = '#2563EB', textColor = '#FFFFFF', loading = false, outline = false, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, outline ? { backgroundColor: 'transparent', borderWidth: 2, borderColor: color } : { backgroundColor: color }, style]}
      onPress={onPress} disabled={loading} activeOpacity={0.8}
    >
      {loading ? <ActivityIndicator color={outline ? color : '#fff'} /> : <Text style={[styles.text, { color: outline ? color : textColor }]}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { borderRadius: 10, paddingVertical: 14, alignItems: 'center', justifyContent: 'center', marginVertical: 6 },
  text: { fontSize: 15, fontWeight: 'bold', letterSpacing: 0.3 },
});

export default ButtonComponent;
