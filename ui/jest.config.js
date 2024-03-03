import mockRNDeviceInfo from "react-native-device-info/jest/react-native-device-info-mock"
jest.mock("react-native-device-info", () => mockRNDeviceInfo);

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  preset: 'react-native',
};
