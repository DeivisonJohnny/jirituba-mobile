import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface UsersProps {}

const Users = (props: UsersProps) => {
  return (
    <View style={styles.container}>
      <Text>Users</Text>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {}
});
