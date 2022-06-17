import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToLocalStore = async (locationName, data) => {
  try {
    await AsyncStorage.setItem(locationName, JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
};

export const getFromLocalStore = async locationName => {
  try {
    const data = await AsyncStorage.getItem(locationName);
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
  }
};
