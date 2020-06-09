import React, { useState } from "react";
import { View, Image,Switch, StyleSheet,Text} from "react-native";
import off from "./icons/off.png";
import on from "./icons/on.png";
export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [power, setPower] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if(isEnabled){
      fetch('http://192.168.31.214:3000/gpio/17/off');
    }else{
      fetch('http://192.168.31.214:3000/gpio/17/on');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.status}>
        {isEnabled?<Image source={on} />:<Image source={off} />}    
      </View>
      <View style={styles.status}>
        <Text></Text> 
      </View>
      <View style={styles.status}>
        <Text></Text> 
      </View>
      <View style={styles.status}>
        <Text></Text> 
      </View>
      <View style={styles.switch_btn}>
      <Switch
        trackColor={{ false: "#767577", true: "green" }}
        thumbColor={isEnabled ? "#fff" : "#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  status:{
    marginBottom:'20px',
    padding:'20px'
  },
  switch_btn:{
    marginTop:'10px'
  }
});