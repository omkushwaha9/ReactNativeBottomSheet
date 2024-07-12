import React, {useRef} from 'react';
import {View, Button} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

export default function Example() {
  const refRBSheet = useRef();

  return (
    <View style={{flex: 1}}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.Open()}
      />
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
      </RBSheet>
    </View>
  );
}