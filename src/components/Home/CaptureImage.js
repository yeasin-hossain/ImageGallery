import {Button} from '@rneui/themed';
import React from 'react';
import {captureImage} from '@utility//CatureImageAndSave';

const CaptureImage = () => {
  return (
    <Button onPress={captureImage} radius="md" color="success">
      Capture Image
    </Button>
  );
};

export default CaptureImage;
