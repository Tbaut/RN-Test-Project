import '@polkadot/wasm-crypto/initOnlyAsm'
import { waitReady, bip39Generate } from '@polkadot/wasm-crypto';

import { View, Text } from 'react-native'


export default function App() {
  waitReady().then(() => console.log(bip39Generate(12))).catch(console.error);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
