import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

const FeedbackScreen = ({ navigation }) => {
  const [rating, setRating]     = useState(0);
  const [comment, setComment]   = useState('');
  const [loading, setLoading]   = useState(false);

  const handleSubmit = () => {
    if (rating === 0) { Alert.alert('Rating Required', 'Please give a star rating'); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('✅ Thank You!', 'Your feedback has been submitted.');
      setRating(0); setComment('');
    }, 800);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>← Back</Text></TouchableOpacity>
        <Text style={styles.title}>💬  Feedback</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Rate Your Experience</Text>
        <View style={styles.stars}>
          {[1,2,3,4,5].map((s) => (
            <TouchableOpacity key={s} onPress={() => setRating(s)}>
              <Text style={[styles.star, { color: s <= rating ? '#F59E0B' : '#D1D5DB' }]}>★</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.ratingText}>{['','Poor','Fair','Good','Very Good','Excellent'][rating] || ''}</Text>
        <InputComponent label="Comments" placeholder="Tell us about your experience..." value={comment} onChangeText={setComment} />
        <ButtonComponent title="Submit Feedback" onPress={handleSubmit} loading={loading} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', padding: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', gap: 12 },
  back: { color: '#93C5FD', fontSize: 14 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FFF' },
  card: { backgroundColor: '#FFF', margin: 16, borderRadius: 12, padding: 20, elevation: 2 },
  label: { fontSize: 15, fontWeight: '700', color: '#374151', marginBottom: 16, textAlign: 'center' },
  stars: { flexDirection: 'row', justifyContent: 'center', marginBottom: 8, gap: 8 },
  star: { fontSize: 40 },
  ratingText: { textAlign: 'center', fontSize: 14, color: '#6B7280', marginBottom: 20, height: 20 },
});

export default FeedbackScreen;
