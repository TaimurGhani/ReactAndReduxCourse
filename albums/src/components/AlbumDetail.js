/* @flow weak */

import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => (
    <Card>
      <CardSection>
        <View>
          <Text>Hello</Text>
        </View>
        
        <View style={styles.textContainer}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  );

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'space-around'
  }
});
export default AlbumDetail;
