import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { eventEmitter, startRecording, stopRecording } from './audioRecord'; // Import named exports with curly braces

const App: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleButtonPress = async () => {
    if (!isRecording) {
      console.log("record");
      
       // Pass setIsRecording as an argument
      setIsRecording(await startRecording());

    } else if(isRecording){
      console.log("stop record");
      
      setIsRecording(!(await stopRecording())); // Pass setIsRecording as an argument
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transilate</Text>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        {<Text style={styles.title}>Listen</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 50,
  },
});

export default App;
