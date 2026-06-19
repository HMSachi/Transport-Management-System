import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';

const FeedbackScreen = ({ navigation }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (rating === 0) {
      Alert.alert('Error', 'Please select a star rating.');
      return;
    }
    Alert.alert(
      'Thank You!',
      `Feedback submitted successfully!\nRating: ${rating} Stars\nComments: ${comment || 'None'}`,
      [{ text: 'Done', onPress: () => navigation.navigate('CustomerDashboard') }]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Trip Feedback</Text>
          <View style={{ width: 32 }} />
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.card}>
            <Text style={styles.questionText}>How was your trip experience?</Text>
            <Text style={styles.subQuestionText}>Rate your driver and bus quality</Text>

            {/* Stars Row */}
            <View style={styles.starsRow}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity
                  key={star}
                  onPress={() => setRating(star)}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.starIcon, { color: star <= rating ? '#F59E0B' : '#D1D5DB' }]}>
                    ★
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {rating > 0 && (
              <Text style={styles.ratingHint}>
                {rating === 5 ? 'Excellent! 😍' : rating === 4 ? 'Good! 😊' : rating === 3 ? 'Average. 🙂' : rating === 2 ? 'Poor. 🙁' : 'Very Bad. 😡'}
              </Text>
            )}
          </View>

          {/* Comment Box */}
          <View style={styles.inputCard}>
            <Text style={styles.label}>Additional Comments</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Tell us about the driving, punctuality, hygiene, etc..."
              placeholderTextColor="#9CA3AF"
              multiline
              numberOfLines={6}
              value={comment}
              onChangeText={setComment}
              textAlignVertical="top"
            />
          </View>

          {/* Submit */}
          <View style={styles.actionContainer}>
            <ButtonComponent
              title="Submit Feedback"
              onPress={handleSubmit}
              disabled={rating === 0}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1E3A8A' },
  container: { flex: 1, backgroundColor: '#F0F4FF' },
  header: { backgroundColor: '#1E3A8A', paddingVertical: 16, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  backBtn: { width: 32, height: 32, justifyContent: 'center', alignItems: 'center' },
  backBtnText: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  headerTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  content: { padding: 20 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 24, alignItems: 'center', marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 6, elevation: 2 },
  questionText: { fontSize: 16, fontWeight: 'bold', color: '#1E3A8A', marginBottom: 4, textAlign: 'center' },
  subQuestionText: { fontSize: 12, color: '#6B7280', marginBottom: 20, textAlign: 'center' },
  starsRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 12 },
  starIcon: { fontSize: 48, marginHorizontal: 6 },
  ratingHint: { fontSize: 14, fontWeight: '600', color: '#4B5563', marginTop: 4 },
  inputCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 20, marginBottom: 24, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 5, elevation: 1 },
  label: { fontSize: 13, fontWeight: '600', color: '#374151', marginBottom: 8 },
  textArea: { borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 10, padding: 12, fontSize: 14, color: '#111827', height: 120 },
  actionContainer: { marginBottom: 20 },
});

export default FeedbackScreen;
