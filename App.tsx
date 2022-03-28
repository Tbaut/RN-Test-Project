import { bip39Generate, waitReady } from '@polkadot/wasm-crypto';

import { View, Text } from 'react-native'
import { useEffect } from 'react';


export default function App() {
  useEffect((): void => {
    waitReady()
      .then(() => console.log(bip39Generate(12)))
      .catch(console.error);
  }, []);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

