import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";

import styles from "./utils/styles";

class App extends Component {
  state = {
    fontLoaded: false
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <ActivityIndicator style={styles.loading} />;
    }

    return (
      <View style={styles.container}>
        <Text>Happy Hacking!</Text>
      </View>
    );
  }
}

export default App;
