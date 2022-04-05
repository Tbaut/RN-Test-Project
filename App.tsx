import { View, Text } from 'react-native'
import { useEffect } from 'react';
import { cryptoWaitReady, blake2AsHex } from '@polkadot/util-crypto';
import Identicon from '@polkadot/reactnative-identicon';

export default function App() {
  useEffect((): void => {
    cryptoWaitReady()
      .then(() => console.log(blake2AsHex('0x1234')))
      .catch(console.error);
  }, []);

  return (
    <View>
      <Text>Hello</Text>
      <Identicon
        value="5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
        size={48}
      />
      <Text>Hello 2</Text>
    </View>
  );
}

