import React from 'react';
import {
  AppRegistry,
  asset,
  Environment,
  NativeModules,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import InfoButton from './components/InfoButton';
import Landscapes from './components/Landscapes';
import Cars from './components/Cars';

const SCENES = ['Landscapes', 'Cars'];

class Scene extends React.Component {
  state = {
    scene: ''
  }

  componentDidMount() {
    Environment.setBackgroundImage(asset('360_world.png'), { rotateTransform: [{rotateY: '180deg'}] });
  }

  clearMedia() {
    Environment.clearBackground();
  }

  clickHandler(selection) {
    this.setState({
      scene: selection
    })

    this.clearMedia();
  }

  render() {
    const scene = this.state.scene;
    let selection;
    const sceneButtons = [];

    if (scene === 'Landscapes') {
      selection = <Landscapes />;
    } else if (scene === 'Cars') {
      selection = <Cars />;
    }

    for (let i in SCENES) {
      sceneButtons.push(
        <InfoButton
          key={i}
          style={styles.button}
          text={SCENES[i]}
          onClick={() => { this.clickHandler(SCENES[i])}}
        />
      )
    }

    return(
      <View style={styles.panel}>
        <View>
          {selection}
        </View>
        <View style={styles.section}>
          {sceneButtons}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 800,
    height: 450,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  section: {
    padding: 10,
    backgroundColor: '#FFE500',
    borderColor: '#ED8B00',
    borderWidth: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
  }
});

AppRegistry.registerComponent('Scene', () => Scene);