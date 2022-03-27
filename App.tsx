import '@polkadot/wasm-crypto/initOnlyAsm'
import { bip39Generate } from '@polkadot/wasm-crypto';

import { View, Text } from 'react-native'
import { cryptoWaitReady } from '@polkadot/util-crypto';
import { useEffect } from 'react';


export default function App() {
  useEffect((): void => {
    // waitReady()
    //   .then(() => setResult(bip39Generate(12)))
    //   .catch(console.error);
    cryptoWaitReady().then(() => console.log(bip39Generate(12))).catch(console.error);
  }, []);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

