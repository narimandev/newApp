import React from 'react';
import {
  asset,
  Environment,
  View,
  VrButton,
  Text,
  StyleSheet,
} from 'react-360';

import VideoModule from 'VideoModule';

export default class Cars extends React.Component {
  Video360 = VideoModule.createPlayer('Video360');

  componentDidMount() {
    Environment.setBackgroundImage(asset('123.jpg'));
  }

  clearMedia() {
    Environment.clearBackground();
  }

   playBmwVideo = () => {
    this.Video360.play({
      source: { url: asset('./video/BMW.mp4').uri},
      muted: false
    });

    Environment.setBackgroundVideo('Video360', { rotateTransform: [{rotateY: '180deg'}] });
  }

  playAudiVideo = () => {
    this.Video360.play({
      source: { url: asset('./video/AUDI.mp4').uri},
      muted: false
    });

    Environment.setBackgroundVideo('Video360', { rotateTransform: [{rotateY: '180deg'}] });
  }

  componentWillUnmount() {
    this.Video360.destroy();
  }

  render() {
    return(
      <View style={styles.panel}>
        <Text style={styles.greeting}
          >Choose One
        </Text>
          <View style={styles.button}>
            <VrButton
              onClick={this.playBmwVideo}
              style={styles.greetingBox}>
              <Text style={styles.greeting}>
                BMW
              </Text>
            </VrButton>
            <VrButton
              onClick={this.playAudiVideo}
              style={styles.greetingBox}>
              <Text style={styles.greeting}>
                AUDI
              </Text>
            </VrButton>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 800,
    height: 300,
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#3FD834',
    borderColor: '#ED8B00',
    borderWidth: 2,
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  greeting: {
    fontSize: 30,
    color: 'black'
  },
  button: {
    flexDirection: 'row',
  },
});