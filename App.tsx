import { View, Text } from 'react-native'
import { useEffect } from 'react';
import { cryptoWaitReady, blake2AsHex } from '@polkadot/util-crypto';
import Identicon from '@polkadot/reactnative-identicon';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { isHex } from "@polkadot/util"
export default function App() {

  console.log("isHex:", isHex("0xdeadbeef"))

  useEffect((): void => {
    cryptoWaitReady()
      .then(() => console.log(blake2AsHex('0x1234')))
      .catch(console.error);
  }, []);

  useEffect(() => {
    ApiPromise
      .create({ provider: new WsProvider('wss://rpc.polkadot.io') })
      .then((api) =>
        api.rpc.chain.subscribeNewHeads((h) => console.log(h.number.unwrap().toHuman()))
      );
  }, [])

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

