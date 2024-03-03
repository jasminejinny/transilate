import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import AudioRecord from 'react-native-audio-record';
import { NativeEventEmitter, PermissionsAndroid, Platform } from 'react-native';
import { SpeechClient } from '@google-cloud/speech'; // Example import, actual import may vary based on library used
// import * as deepl from 'deepl-node';

const eventEmitter = new NativeEventEmitter(AudioRecord); // Initialize NativeEventEmitter
// const deepl = require('deepl-node');
// const translator = new deepl.Translator('02060e77-73bb-48de-8a13-8a0f6d434886:fx');

export async function startRecording() {
  try {
    await AudioRecord.start();
    // setIsRecording(true);
    return true;
  } catch (error) {
    console.error('Failed to start recording:', error);
  }
  return false;
};

export async function stopRecording() {
  try {
    const audioFile = await AudioRecord.stop();
    // setIsRecording(false);
    return true;
    console.log('Audio file path:', audioFile);
    // // Now you can do something with the recorded audio file
    
    // const audioData = await readAudioFile(audioFile);
    // // Call the Speech-to-Text API
    // const [response] = await speechClient.recognize({
    //     audio: {
    //       content: audioData,
    //     },
    //     config: {
    //       encoding: 'LINEAR16', // Adjust based on your audio format
    //       sampleRateHertz: 16000, // Adjust based on your audio sample rate
    //       languageCode: 'en-US', // Adjust based on the language of the audio
    //     },
    //   });
    //   // Process the transcription result
    //     const transcription = response.results
    //     .map(result => result.alternatives[0].transcript)
    //     .join('\n');

    //     console.log('Transcription:', transcription);


    // (async () => {
    //     const result = await translator.translateText(transcription, null, 'fr');
    //     console.log(result.text); // Bonjour, le monde !
    // })();
  } catch (error) {
    console.error('Failed to stop recording:', error);
  }
  return false;
};

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFilePath, setAudioFilePath] = useState(null);

  const handleStartRecording = async () => {
    const filePath = await startRecording(setIsRecording);
    setAudioFilePath(filePath);
  };

  const handleStopRecording = async () => {
    const filePath = await stopRecording(setIsRecording);
    setAudioFilePath(filePath);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{audioFile ? `Audio file path: ${audioFile}` : 'Not recording'}</Text>
      <Button 
        title={isRecording ? 'Stop Recording' : 'Start Recording'} 
        onPress={isRecording ? handleStopRecording : handleStartRecording} 
      />
    </View>
  );
};

export { eventEmitter };
export default AudioRecorder;
