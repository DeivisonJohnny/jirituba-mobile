import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SettingsUserProps {}

const SettingsUser = (props: SettingsUserProps) => {
  return (
    <View style={styles.container}>
      <Text>SettingsUser</Text>
    </View>
  );
};

export default SettingsUser;

const styles = StyleSheet.create({
  container: {}
});
