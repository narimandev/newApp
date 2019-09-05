import React from 'react';
import {
  asset,
  Environment,
  Image,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

const {AudioModule} = NativeModules;

PHOTOS = [
  {uri: '3.jpg', title: 'Cliffs'},
  {uri: '2.jpg', title: 'Resort'},
  {uri: '1.jpg', title: 'Pier'},
  {uri: '4.jpg', title: 'By the river'},
  {uri: '5.jpg', title: 'Bridge'},
  {uri: '6.jpg', title: 'Pier'},
  {uri: '7.jpg', title: 'City'},
  {uri: '8.jpg', title: 'Megapolis'},
];

export default class Landscapes extends React.Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    Environment.setBackgroundImage(asset(`${PHOTOS[this.state.index].uri}`));
  }

  componentDidUpdate() {
    Environment.setBackgroundImage(asset(`${PHOTOS[this.state.index].uri}`));
  }


  _prevPhoto = () => {
    let next = this.state.index - 1;
    if (next < 0) {
      next += PHOTOS.length;
    }
    this.setState({
      index: next,
    });

    const current = PHOTOS[
      this.state.index % PHOTOS.length
    ];
  };

  _nextPhoto = () => {
    let next = this.state.index + 1;
    if (next > PHOTOS.length - 1) {
      next = 0;
    }

    this.setState({
      index: next
    });

    const current = PHOTOS[
      this.state.index % PHOTOS.length
    ];
  };

  render() {
    const current = PHOTOS[
      this.state.index % PHOTOS.length
    ];

    return (
      <View>
        <View style={styles.controls}>
          <VrButton onClick={this._prevPhoto} style={styles.button}>
            <Text style={styles.buttonText}>{'<'}</Text>
          </VrButton>
          <View>
            <Text style={styles.title}>{current.title}</Text>
          </View>
          <VrButton onClick={this._nextPhoto} style={styles.button}>
            <Text style={styles.buttonText}>{'>'}</Text>
          </VrButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  controls: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 800,
    padding: 10,
  },
  title: {
    color: '#ffffff',
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#c0c0d0',
    borderRadius: 5,
    width: 40,
    height: 44,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});