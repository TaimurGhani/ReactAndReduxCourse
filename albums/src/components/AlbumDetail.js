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

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const { thumbnail, textContainer, thumbnailContainer, albumNameText, albumImage } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image
            style={thumbnail}
            source={{ uri: thumbnail_image }}
          />
        </View>

        <View style={textContainer}>
          <Text style={albumNameText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={albumImage}
          source={{ uri: image }}
        />
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'space-around',
  },
  albumNameText: {
    fontSize: 18
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumImage: {
    height: 300,
    flex: 1,
    width: null
  }
});
export default AlbumDetail;
