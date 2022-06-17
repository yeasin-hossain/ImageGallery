import {Icon} from '@rneui/themed';
import React from 'react';
import {Modal, Pressable, StyleSheet, View} from 'react-native';

const CustomModal = ({children, openModal, closeModal}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={openModal}>
      <Pressable style={styles.closeButton} onPress={() => closeModal(false)}>
        <Icon reverse name="close-outline" type="ionicon" color="#E84949" />
      </Pressable>
      <View style={styles.rootContainer}>{children}</View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  contentContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 25,
    margin: 15,
    position: 'relative',
  },
  closeButton: {
    width: 60,
    position: 'absolute',
    right: 5,
    zIndex: 999,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
