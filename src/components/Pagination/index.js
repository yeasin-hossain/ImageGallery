import {Chip, Icon} from '@rneui/base';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {saveToLocalStore} from '@utility//LocalStore';

const Pagination = ({setPaginate, paginate, dataLength}) => {
  const setNext = async () => {
    if (paginate + 4 >= dataLength) {
      return;
    }

    try {
      const pageNumber = paginate + 4;
      setPaginate(pageNumber);

      await saveToLocalStore('paginate', JSON.stringify(pageNumber));
    } catch (e) {
      console.log(e);
    }
  };

  const setPrev = async () => {
    if (paginate === 0) {
      return;
    }

    try {
      const pageNumber = paginate - 4;
      setPaginate(pageNumber);

      await saveToLocalStore('paginate', JSON.stringify(pageNumber));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.nextPrev}>
      <TouchableOpacity onPress={setPrev}>
        <Icon
          reverse
          name="caret-back-outline"
          type="ionicon"
          color="#C4C4C4"
        />
      </TouchableOpacity>
      <Chip
        title={<Text style={styles.paginationLabel}>{paginate / 4 + 1}</Text>}
        color="success"
      />
      <TouchableOpacity onPress={setNext}>
        <Icon
          reverse
          name="caret-forward-outline"
          type="ionicon"
          color="#C4C4C4"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  nextPrev: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  paginationLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
