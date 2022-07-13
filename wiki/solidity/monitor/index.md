---
title: 测试测试
sidebar_label: 测试测试
sidebar_position: 50
image: sss
description: aaa
---

```python
from web3 import Web3, EthereumTesterProvider
w3 = Web3(EthereumTesterProvider())
w3.isConnected()
```

    D:\Users\runtao1\Anaconda3\lib\site-packages\eth_tester\backends\__init__.py:30: UserWarning: Ethereum Tester: No backend was explicitly set, and no *full* backends were available.  Falling back to the `MockBackend` which does not support all EVM functionality.  Please refer to the `eth-tester` documentation for information on what backends are available and how to set them.  Your py-evm package may need to be updated.
      warnings.warn(UserWarning(
    True
    
```
python
from web3 import Web3
w3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/d89ca57cc58a47c1b68af8c4a71cb3f8'))
```


```python
w3.isConnected()
```

    True




```python
w3.eth.get_block('latest')
```




    AttributeDict({'baseFeePerGas': 10253866856,
     'difficulty': 11729878209743544,
     'extraData': HexBytes('0xe4b883e5bda9e7a59ee4bb99e9b1bc4a2421'),
     'gasLimit': 30000000,
     'gasUsed': 29997971,
     'hash': HexBytes('0xea727b7cb6538b6aaf213d99e5c992d28c43a681f67e67213df5951f0bd09c60'),
     'logsBloom': HexBytes('0x5f23a3b1459be90755490afbb55af7f5d2d08fe7e881aad99699d45bbdf8fc4d5774ffff24b96de6e7caf894f8cff59923a9ced56fdfbffef3742ffe633b34e7ff36967977f27dedf87beaebd3b6eabc97baf0ebbf51525d7bdf7fe7eb7315fa1aad7b5a73ab6f66afdd7bee2dfbf9ff7366df4bd5457eebd7fe7fbfaaef0ae21f27b3ed761efdffa0ceaf5a2ffe6b1cc59ef7e9df27ec9aa56c31f17a90c6ed9f7a99ff35cbfff6eb9d6bf93fefdfb317eefb5cee87b0ab28f3bf64d15febbfd55df7bfe91115fbaf9ad56f8fd9733f2d7e6ff12ffeef5ff7767f9a5236285df2f83f1d5ffd5fd7dc973df25dedbdf5b26be81be75b9ef7f6c96bd6743b7dc3'),
     'miner': '0x829BD824B016326A401d083B33D092293333A830',
     'mixHash': HexBytes('0xde72a234212015466556af96e587ae9f538400f8d25d2c776c27806fae05bcfe'),
     'nonce': HexBytes('0x0e954881d075cf7b'),
     'number': 15131857,
     'parentHash': HexBytes('0x075194dc1c9b2174a88028d73426730b526d571943e9e430f7a21b0745f2a1e6'),
     'receiptsRoot': HexBytes('0xa4a741390e256787c5dd6eee6fd70f62dcbe9af9c73bdfe3637c2a3dd162810a'),
     'sha3Uncles': HexBytes('0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347'),
     'size': 331820,
     'stateRoot': HexBytes('0xb6bfa9a775a1ddae47480f2cf168697be082d7f560d33fb6d30c5813a73c2c88'),
     'timestamp': 1657682428,
     'totalDifficulty': 53880813119708524233662,
     'transactions': [HexBytes('0xa8c633d3c9c29a9cdf9460eebff77c81e1cbb4eae7b641aca293b5350399eddc'),
      HexBytes('0xa109d99098ed0c8716228b02698d5ddb08db95390c5329567f0c69970fc321ca'),
      HexBytes('0x91fda6885d65532892924e428ebf293925ef0b9d8ddf7a7efca8a3574d0c34dd'),
      HexBytes('0x22f5f80fa2a8a02538e72fdc6f89d71ced22f63d1843190339c46bbd12146461'),
      HexBytes('0xa66d820a7785f3ef7cd29fbf58236a58453ff7725de7374a66bb8aedcf3098aa'),
      HexBytes('0x213fc6e3eabd70faa74c9c5ad6e23cd9a889707fdda1aabe04a84c807e538647'),
      HexBytes('0x6323a4aeba68d4dc869a95760b8dbb2fd6500d58bdb684d5033741e1878d5d73'),
      HexBytes('0xfdf27157ca1056000ef5c47acc5c76f582bc635352ed1dba5e2ecd25deff14c1'),
      HexBytes('0xb4af78b0f0bbba8d6bea9f81d0f6c1bb4499e2c556420394d4d593dfa23430f8'),
      HexBytes('0xdf828cf3a282bd1784d97b8cd6029b36820a0b38e537ed70d227d974ac3b4c27'),
      HexBytes('0x8a272700e91ebf64a2ee7231ca45d29a6eacf56b054d29a3a6a481b3d3a74949'),
      HexBytes('0xe94be191d83ed7b1b62d7fee89fb960b7c7ed9f594ebd9a204eaea94df589fe7'),
      HexBytes('0x612369994d92ad48eb8ae57480b61f295b97fd54e9e703842da3d8f8b344ef2f'),
      HexBytes('0xa7fbf93028363cd76eb6fb9494f6fb241cc68618374d15e9bb2f561d70d89d3e'),
      HexBytes('0x0de2b89cbfe879bf2c211ca5a2ccd1859ca1379c3f10d5831acf4f4d12f72db5'),
      HexBytes('0xbc9f0f55cb1aae1a5250b3e8b75f4b28ac49e1e73f49f5fa881f43e00666da6b'),
      HexBytes('0xb6cd95dcd53fbffa2478750bc9353189449d8b6060ba7eeec1a06a6455e214bd'),
      HexBytes('0x7be24344a8f424549975027a729efe7342dc715735369662889cf268dba68c77'),
      HexBytes('0xc34ee8dd996169e1e331d21174eb5f14458e2e064f26d46816514b64860ed163'),
      HexBytes('0x5d2e3172187b90c760ef01628adaa4fc499acf6dfdfa52132d51f61515e14a64'),
      HexBytes('0x272daaca67b43dca8cb49f5b140fee6268dcb4c8f4cf12b15953e4921e38f171'),
      HexBytes('0x81a22fecdb98825e55f7302c6f897747d3efc478a5a789e65e6c339bd754c395'),
      HexBytes('0x29c9cc114e64bb9fd8549b0680a13a7955c880b6ec47bb973ec40aa1d06d7ece'),
      HexBytes('0xa62e83a98ba45da08848dc732fbb1a940f5cd8a376d2782be7336a13da14d4fa'),
      HexBytes('0x915aad8ea4122d2c61d333a53f4a4f45cc070ac4056f3c42608f481694281197'),
      HexBytes('0x08f3a41fa1cefe91e6f0632914ac1bd1d673953b530aebb49fcb4a5ef31cb20e'),
      HexBytes('0xa716fa3f83f8bafac5d9c250df35cf6aeb6b87e92ef3f11a3c31e44ded2b05b3'),
      HexBytes('0x3cd126afdb9d060f0dacdd42a56eed4776eb0d357a4ec5b21e139d8395d209ca'),
      HexBytes('0x88b484345805ec3a8afa18c43dd9dee0048fde05c1fa078b4c2675a56f53c94d'),
      HexBytes('0xc87493df9027e7e6c8270907ec2fef9474daa87ee6d040f6f344cae5aa07e102'),
      HexBytes('0x1240b09efd282b8218266272a28639e264a69700a63c878dd1bb5e97295c50c3'),
      HexBytes('0x92d12e754c5a019819ffdb0c1dd16b994e0475415d83efb64c78fd569e9635f0'),
      HexBytes('0x16ff0ac522a4f83512145212a0b0f8e6ffeaf9a9ae59fac1344950d52ae36f6e'),
      HexBytes('0xcde5fa26bf141e548a1bb3b61586989dbbe4bb8053ca7823f14978571745f61b'),
      HexBytes('0x0020427239e8c66112852611a77dd0165428687e12e38637854afcb38f875763'),
      HexBytes('0x812112f574386dba57d9ced5a1ba2fe2c5daeb1a99014c2d5782d09bfd361bdf'),
      HexBytes('0x882e6ab17168952419009aea8161d29f85b0f6e3ccd4ce974d1882c37b386c59'),
      HexBytes('0x1754a7bd7611bbcb8ad83655e0b8ff0f012aab2cbf7cb9f51e5253fadaae0ff9'),
      HexBytes('0x1e671e145c7a1cd8bc0a9dfce598a6389a6fd1816dfe474a36d6c6d59b06e65c'),
      HexBytes('0x06bd6822d8b094f45d0c009f0f6fbf6957a1db6fbdca8b617e09b6e4852a6a49'),
      HexBytes('0xeb4b715a89c9a59da70df024c62049155c0ac04c43f258173fad71d9fcf7541d'),
      HexBytes('0x9b679d8faa1aa3a61b40dda5cbdf53fd00e2a260fe9a72660e6c9fa00ce05ce4'),
      HexBytes('0x41012e532c61533b6d3ea8082068e10550489cdb141c33724242d05e7e311c9d'),
      HexBytes('0xfe82c91e15ec5317c7f75209bb6787cc267092d1e5bee43d92a149916c33bca9'),
      HexBytes('0xd272df2d1d61acef042e2b0e11cd059c22009264e31975d966ad55e882bad37f'),
      HexBytes('0x46f5dabe595ba51e35fbc7222820b6535d34d5e1a57afe38ccabafe2acb0ca19'),
      HexBytes('0xeffe984a623644cf68cbb2390c7ca771f7eceb1547069a4df2d1a0e7afcfe172'),
      HexBytes('0x9a21bd4b3be5fc0a2812ac8f8ea295eb895cc84ece760f96865ae145dfea0c0f'),
      HexBytes('0x5e583ca1d7a326b10432b82e160f13802bda79d2ebf9248eb12e994a609172d3'),
      HexBytes('0x426dae93897f323c21ca78fe699caa97bc5194786c6d7e3e7313f5bfb00461d8'),
      HexBytes('0x1467c6131397403a8c454a5b1677f52d3038d137d1759255eb3035f0c3a2d669'),
      HexBytes('0xeeb42842e79f6e654c726ecc3c20a13b0cc4d37b773569e83df94d8b7160776b'),
      HexBytes('0x19976070768110e0bd80370dfa82857e1c88038930e149c9dd26cf01eebc7dee'),
      HexBytes('0xa808757037f234760ee20c79f6297a336566b7d6bcb809518d4649f99f82fa30'),
      HexBytes('0xddee21013c8f9b7c4164924c438141cb96de5a7995e01cbdeef2a0dc26fa2d21'),
      HexBytes('0xacb054ae2d6a53e14b799c5472cf2aaca345e5ca3b071e96412777305947630d'),
      HexBytes('0x7e3d29504512e21317ee121b66c911ac55776ea1fa9c074f0ded8cb661160166'),
      HexBytes('0xcf1d814321cccae59bc7e5f29772e9baff071ee2401bcd521585b07ae4673b18'),
      HexBytes('0xcc8f4230c093a1b0b3392bfb9724b13a20818c53a2c2379e8175b622022d4fa7'),
      HexBytes('0x7a43881a63772856dd9cc9f2ac4710f4c552b049dd0ca823aed4eec533599a31'),
      HexBytes('0xce06e73cbb9ffe5021c3d079a47401b36e41e90c5180312078eba67887b69eee'),
      HexBytes('0x2d74a8f0f4309eb12ede5c062e8712c5c816c68aee41c065b075b2a171836736'),
      HexBytes('0x04a039927293a76afd2a7e44208aae53fa04b707818f67d8c22af455625e8ec5'),
      HexBytes('0xbbb9b789c372e93ae2cf5b9d0d135ce84b873e8caf90465ca9cd147b3fc5698e'),
      HexBytes('0x6fad01b220dc3f925fe5b3b13e167d86c177ebcff190501bf843ba5ad943c6a8'),
      HexBytes('0x59d5a8c56e75de9aa1ceaf072a20e711e997691d6bdf2b8adf05300ed480c54a'),
      HexBytes('0x1547b4790590c465e4e5d719505eb622009201993d1f257ee699808c1f935caf'),
      HexBytes('0x2dadb2bf78af46ebc95c15d9c691bcf8d587794c5de8f187bb5fecfe06dca31e'),
      HexBytes('0x98acfc902cffa772f314b479909852e270e9694a8b32f7b3875a47eee0c97984'),
      HexBytes('0xd9222ec43bd9cfd80c27f01ea49958c8172a68f5cf3d1994edf6b3f5a3317d13'),
      HexBytes('0x8c415847b0027d935457ee11a1c4b699a9cd1230c2b5e330fd0f3458e48269de'),
      HexBytes('0xcad1bd7484610a4e52c517183e517d4f607c0f5881e902dd6d069c27b0e57dfa'),
      HexBytes('0x585d735455098bae7f714509e60d77d4bbeb3872fbc6197804b58fe1fc52d2cb'),
      HexBytes('0xc4977e101b1ab7f3cf107f269894f7de230094a330d3c758a39333a74c682c22'),
      HexBytes('0xcbff46147d54e132bec50857eb4e546316ac6b18d34de2cfffbfea7f4d33d869'),
      HexBytes('0xdbeba5bb288de9ba337f4e0bf31130ed9cf37c9cca77fe8f52a79a30fffcd0a2'),
      HexBytes('0x10af90e5ad6403f6d2c2c4616d026f87951bbd8fc993f9cbce25117697a33b6b'),
      HexBytes('0x57c1dc2be6048acd0c691d02490d103e65cd2607b3acf5ac3c2d29f652644598'),
      HexBytes('0x797e5dda788ea1b3d913c17ac0f0e51bea598cb329e4d5359c988301345a7c28'),
      HexBytes('0xf823a092b4ddf33d010406459c12057f7c7be3626f30bed103f0a71f8064cf8d'),
      HexBytes('0xca2f4d6266973c7b32dce79a7a2074d06abfb6dd918ad14af67725c0ccbecb5b'),
      HexBytes('0xac47db37f9aee02f89b6f21d24533429c57e01f954b4cfffb48d656f40f7134a'),
      HexBytes('0x73a2239f65028f170b99098604752d4da64e91ad755a35656cd2a07353b7b38b'),
      HexBytes('0x49ec8fa4dd671276acc670be3bb6db0fa23e959352224176719283e7d2be5726'),
      HexBytes('0x373b14743f6970cb17933dc934a1e86f4d1b150a1a94826206d2a776fee83924'),
      HexBytes('0x03554caebd4afe14f2c128a9cfb08d8a30244542953cf8c7264ec8ca7511dbe5'),
      HexBytes('0x8915619c6fd479332f16354184c5d0fb302d53d6944c0bfe657ee66c8b077be9'),
      HexBytes('0x757cf301901ad3bf5e76817972a2148af147009b39ad7c32d61b07c6ecf61cc9'),
      HexBytes('0x0d4cc850ed5a5154ea98adc47d8d3643cbfbea6b41a35af8e40234e0c9e25dca'),
      HexBytes('0x88b3a6fe9b1e0d8754896157aa79db2f858e9ca3344784efbb53274c55b6ac44'),
      HexBytes('0xec8524e34ab8b447921bf0174efbe9e722b8f25346f0ccd04c938f443b93f7f9'),
      HexBytes('0x13560aadfd6750d91724b9ed8a308725aeb115eca106e56cd94e3da56a11a257'),
      HexBytes('0x7aef95c728145943cb81b58ead1a2bf67e8836de82df799fe9eb1c8fb96c1b0b'),
      HexBytes('0xbf6acfd1e69ce5385f47e1c19f6341676deb1644c5a632230e4c42c11a49e9bb'),
      HexBytes('0x58374338ce32458b3b79f7616c5b78d7d5eddf0f490d86dc1380a7502c92ce18'),
      HexBytes('0x868e6d97eeabda8aedb526479b8bb37968e28c0476601eacb38bece598c3a80f'),
      HexBytes('0xbe5a50aac33c31c4d62905e5ce0e0b5c6bccf1219002359a70b81b476cd3fbbe'),
      HexBytes('0xb33374b8ee79835bce6e9cbe9a3e41a852f9b3a665f94e7c95bd6bd152c581c9'),
      HexBytes('0x872c2756a3b9e2e83d10f22bb51860a71d9ca7f1caa7d0a64b6822561ba0d069'),
      HexBytes('0x46d1bc04978ec04537389b45d7fc307792b0dc7110826861fccdcbb5b063ee89'),
      HexBytes('0x62a069c61ea398dfde402f1f256271480ae9d3d118a85a8676c4400eb48574e6'),
      HexBytes('0xa9c3d8131e0a160eea65e86cd730c34715521eb07ff35de8ed74a78accc32af9'),
      HexBytes('0xf75403241fb34f777cf0196e73f7929b9517a31e8b5c94e41125111e12513fab'),
      HexBytes('0x4adde23694e60a11bf37d23825aa7432463876e06dabee41813c7d6fa5f57004'),
      HexBytes('0x93c32fc6b70df1cb67b78ab7876df6a3baa93ded0cab973b5f89875157fc02b8'),
      HexBytes('0x173270a5cd1185105c185165ca4e7eaf829a523661e2dad0c17a604aa34568ea'),
      HexBytes('0xeeea88a8a4c2e888e00febe30f34d86c4c694580815ebcf9923368521c4b30b8'),
      HexBytes('0x70a638e9ba22327e18a33e1b160b1cab99a77a84096b5ef00f2e80b26e409d4b'),
      HexBytes('0xb613d5cb56cd67e378f754a6babacda8d6b6a5fa9f9a2c0448661d77602aa610'),
      HexBytes('0x565e8c9c6767da2c5cecf5c9da2eb81b87dc4bce93f5db660bf9e5c4df64f3e7'),
      HexBytes('0x25616fe8c599f0563e4450011dfcd9b3f2403275e6a2044682854fb5eca551db'),
      HexBytes('0x845c4505a374ed699850be93b0a371967b93b17ed138310e445e7e4023e1c1f9'),
      HexBytes('0x701daa7fb843508881f9557a3d08509feb749f1ac8445544c9dfe07a4522d2e4'),
      HexBytes('0x3971b779bbdd0acdd14b3392bd1fb4615df832fb0b70b488a9f23e7a3059cd83'),
      HexBytes('0x1a84d4efc3a7ab24c345026bf309559ade251769ab25872ab7c8ce47f9c55e46'),
      HexBytes('0x6029f7622557c47dd3c975f0624f547a025d1a88d164155c53e90d69435f3cd8'),
      HexBytes('0x641dc2aae8e5a45bf822b4547b6ab65beabf1680f56a63513dcbe49928f23870'),
      HexBytes('0x0f5dd7ec4bdbea205112c1b74116b0d67df4f9e3caa68f188ce654b4daef8c3b'),
      HexBytes('0x636becf6bf82b10967ff65fb696f0bff76e13079777942bb6caf8ff2e91a5243'),
      HexBytes('0xa9a8936ee5b1388c7be015ce019da4ca28122c201b1acbf760d88ce0eb959c31'),
      HexBytes('0x44453280c1047f6174fb953b7fbbf748eaee7681cca6f03b4425bbd2cd74fc14'),
      HexBytes('0xb9743e642ccc9c717f7a9cfb4e575b4eb0135c221b1f2d5ab67f96653a819748'),
      HexBytes('0xefae800c77b1759b854c86456c8e8862c6a9c7f6fe7e9fa8e0aa4948d8f8e223'),
      HexBytes('0x5d9ee565817958ba382dd5431dee995f6f1b18852e7414763b7107beaae75f4a'),
      HexBytes('0xdcb1833fbb1dc737a96a3c2f267d2635f3ae9b64aea231b4b83435e1f54ab31f'),
      HexBytes('0x8ee0584fe819b0fe2e55def9038c0b4a2e2ff41807b3dfdd36dd334820581eb8'),
      HexBytes('0x16f6e3e494a0ce63a2172da96a5e2cea73085a553f2e959c9f26457bf319d024'),
      HexBytes('0xbafdd2d3fabdf855d4885d7eeced8ffbba64a5170a2dedd46abf3e7b9718c1a5'),
      HexBytes('0xba5e8f702dcef709efa463edd537d7a19f96ad668f5880ec085951c4d71b70a8'),
      HexBytes('0x34e6c0a2598f370939aab6bb482eb80dccb0631b40e97ed5f107b935c79b3d04'),
      HexBytes('0x09c68c1f7f30f728f34322d4517593bcdb5867fb61e0dc129a668cc974e2d243'),
      HexBytes('0xe82225264b317b17886b01a0002e9b08efb7315e8262be7c616fa93d8ab1a8df'),
      HexBytes('0xf3ea15ec92aadb7e66da13dc107ea78ee20165ca16ebe3b0d617d1e54ef87ebe'),
      HexBytes('0xc9470f75826c7a4a9c914f082b08501112068b62c70921623a86fd34393cd643'),
      HexBytes('0xc2120f9d63a9051a360a11a784175a0036706372cd7b7bea36b66146402b551a'),
      HexBytes('0x9370ac1bcb51900cc1c49d482dfe8f4477373a67fc22c1b7133151b3cef9b6de'),
      HexBytes('0xa1b2593906bca778329f66d49af15186890bdf0119ed5d9833e1a39941abbfd5'),
      HexBytes('0xec96586fd465b8e284096917f2c95a64ec30601fc3e543086dfc08a28389b28b'),
      HexBytes('0xbb5bd72fad66b3a45de74405bb57016815673868401931d3b24f6bade431cb57'),
      HexBytes('0x488b51547c07c90d43a2704054f73e936a71ec49d316f9c8c9ea60d73a54c8e2'),
      HexBytes('0x6c8112597ed2b3689d3dd11ba5c4db2c9233228607d2da67fc9b7840b7521466'),
      HexBytes('0xf1e5f4f1b83190d364f104daf9220a8b86ede05ffd101bd4c2c7f86bc99b8829'),
      HexBytes('0x44196b66d484f093e1071a2ba74f02a381611798799b4e8563c4dc1d531d54d7'),
      HexBytes('0xae5aa794c369305f8f934056d39d12da3cf8dbfe7fc1f5671453b88b2830313a'),
      HexBytes('0x2e0dfcf7a5e8c5f096f6320f236505e98bb5e8eaac81d7acde598b2db0776d4b'),
      HexBytes('0x8f7a8ddc9b79c4efbefd2623c437bb964a5521a957c5b65dac4c110aaaaf65b9'),
      HexBytes('0x54413d127541d860d02c7997380ccbd2a95b7879abde55500004b524b9ef6bdf'),
      HexBytes('0x6651992f51803a4765cc72730738a340016d3cac8293505e70f387731251b693'),
      HexBytes('0x70d82fbdec8ecdc0954971c474a18759b62120144e48b0756b496c847dc924a4'),
      HexBytes('0x45edb8684fb07d2e707594f1bb2b57c807d2b225f0f7c66ffcb64b389b06f80e'),
      HexBytes('0x7ae195693ece70510d7f536b7f78debf3baa746ec2b6f99d9d08f36bf4d526f9'),
      HexBytes('0x1205a73c1b31f94abe82bb29b01f721bb145ebda49ca9156b0d81dddb2cf67a0'),
      HexBytes('0x8d4ebf68718f775e4df2337e4508d2fb3a1e1eee5414cef2ba7a247589f8f06f'),
      HexBytes('0x4856549a2231060810e7b09b9607514a18fa1edf911f5e1a671c856ad47bd829'),
      HexBytes('0x72d0b3634ce16c46e2e5969af6dabfc6d3e39cb2f4c378566a1f08ad88d913c6'),
      HexBytes('0x6fa0c4f7c797a73ff2cad8f349362045404949baa6a976a11c8c31c183bdde9e'),
      HexBytes('0x33673f6221ad9b283e3a259c4efe4d60a286b3bd6b285dd220c63f3d36dba0ba'),
      HexBytes('0x77786c8cbe8a76ac60a2b573c438c7da434640045b0ecb97d4a9e601ae1791e8'),
      HexBytes('0x37930eb41660d1539026dca1a58acefda5447c5ecb9d90ef93eb2769979bac3b'),
      HexBytes('0xecfd451f930904c29bf707fff6238f53c2a8432cd457fba2da733ae10fa6600b'),
      HexBytes('0x927dc4c8bbe876f15cd5d3bee63e625df2314a52fa2e74b3e6bdc05e05160200'),
      HexBytes('0x0f65e3ad64bad15a40833a1392900fad208a350cf4327cf68ef4c68db5f23c7d'),
      HexBytes('0xbb049ef70ffe83713755f1ee4f88491178040572ff90056cca293ca570514e4f'),
      HexBytes('0xd813827e0c1e51b60ff5e9496a193ff411013c421b16b4fe35bee10ae35ac735'),
      HexBytes('0x92777b9cb1f712a53a883271744dc99d16f2aaf1c88199efdedeb335a01f67eb'),
      HexBytes('0xf8832d57080dd2d566caf73e2a5395c47fcb46bfae55ae2c1cd21673193755bf'),
      HexBytes('0xc23b4153258de4d3eb2d31fc2c78b829932f3aab2cf702367e49646adfeff6b0'),
      HexBytes('0x8327fd2b73cb5ef0cc0c49227167d45439f13f6712a5d156ced1d588c80feb6c'),
      HexBytes('0x317bd47353b71925623fbe4fcd405c83a7e2d0c9d161ee54e08857e121072197'),
      HexBytes('0x807d90555df584544edbb57ba6a7395e322ec377ac20107f05c3c580e28b56ba'),
      HexBytes('0x0ad6f647ba13ef574f7eeb873f38d3a601bb43f18a92f911b0e6263ecae13175'),
      HexBytes('0xf409a3ae013bae83593087dcaec5e507806b548b89b5e889db14dff888cd3efc'),
      HexBytes('0xd11a7b9f089817cd06c29cb5f7350269f7b2dc4f4130752cf0c155153bfce5e0'),
      HexBytes('0xa8f5e90b4f1e7b67dcc1e0f348224a17fd233270af63d650143ca6f475f42e95'),
      HexBytes('0x71e3b2b1ff415459895c1e89b9a977df4bbdd66e619d091c952170ce1ca461de'),
      HexBytes('0xbddd0eccb04a0546ffb33084f988d0cc899953909a7842d29907e9e35011dbe8'),
      HexBytes('0xf3edbfc52d2fa9be4280fad01f8a49b6a90fd1b3f61b3adca563c7a3c460e112'),
      HexBytes('0x62a6ded11a5f4b421b415b839827934e6e42c2a815ca25b0c49a3dcfb632eb17'),
      HexBytes('0x08443663b5ca03b9e84f44703c15faaff5079c95a4092f0f1e14a3ea569f2082'),
      HexBytes('0x0d65a0a6ab8ea6e5e2632bc2648eb6ebe9374fcaa02eb83eadd73c32995be594'),
      HexBytes('0x3cc1216db0ec317669adb75d651e3285a31f6b38cd3c0a6f5809ab26a50d59f5'),
      HexBytes('0xd6808eff5014af692771a6c8cef85ee7801978440b2da9e941630e86d92522b4'),
      HexBytes('0x3f34db2cc94eb417baf44abae7096f94b0490eabcf3f7b074aa796cc9279cdc5'),
      HexBytes('0xad25740fc81b9325c11bd7770dacdc8ae0cf0969652a49dd04933fef753f8461'),
      HexBytes('0xa3eec1f68dbf587f9ea893f3c8d18602d9ebd809f864fae7f521c3ead67e4141'),
      HexBytes('0x2f78b2d011faa6f4a7dc8067ce66646fbee230edd6437324fe0651206bd9de91'),
      HexBytes('0xa6b2e48a6338f930ebc5e2ad3a59a27865b72c26cbd8ff728159eed33a8da86a'),
      HexBytes('0xf8ce6ab9ac76080e0c016ffebef9ea01f883dc00840767dba6c2d7bd06d657ef'),
      HexBytes('0x62a40d7b624024bb278c4c256f69e08aee44a6d04dca28667f1366a8c5df9799'),
      HexBytes('0x87c95497edc549e139fa1143ef7bf03bfe341a7d1b652be95b4bdb359149f0fd'),
      HexBytes('0xa06639101a50f15fce19adad2a2f6fc607ff99693e3b8d790732dced97bb0b0c'),
      HexBytes('0x20db5737337497b1d5ae70b99808301938f8596c658c7061e40e01a6bc319ea1'),
      HexBytes('0xe39ec0652b183d80cb31cb4f78ecda1f1fa5cfe895fc069851f6fcbaf82d3556'),
      HexBytes('0xec8961e496a705384080bc59c3b133d32ef720f721ee6a5b910941ca704bc25e'),
      HexBytes('0x160fbcde575cdc0a45c8b15721e9ae77ae6be7ea21860cdc2d255cac420e0fb2'),
      HexBytes('0x09006fd0f18623c972bdb2b5ecca2114bd722dbd16df94828e552b206ffbfde6'),
      HexBytes('0x0d32d37593cb2d661edd56eb26e9ed3c31cd154cf070cc3a6873be517ef75f2a'),
      HexBytes('0xddeffa6e626bb4fd13a17f6ab792f18147fce255c58fa8dcf0fd7238b05ffd4f'),
      HexBytes('0xd233f8918ee2226c4bf8df6f2e34cc1ca292b25f315c447c29b5f908f057f43c'),
      HexBytes('0x55250279d79f7ac458bbf8c4bde1443d2f4825ddb36c3a5d13c933b5c2881918'),
      HexBytes('0x733da465f63482b073a79bd5bd84e4f4dca78ec5a503b3d8aec6b3b8eeb12e31'),
      HexBytes('0xea53b5bfdc10f26bc4ba26583cbefc4312e0e176b6d2fdafacc060b877eae566'),
      HexBytes('0x7584dfd3b863f8eebee0a0a79c0f3665e297c3c1037c215319e6118a0e47e89a'),
      HexBytes('0x8d2430f1872b391cc6908b0f1d09699a5b4ed41a4a856027d54c0ea27a2a821c'),
      HexBytes('0xc442a0f357e38d4fdb09f7bc9d987ab32f24a962c69aedfbdb6f83590f732ff0'),
      HexBytes('0xa39b4e19b184deaae606aa26a792cb9bbbeed85e2d2949cb95bcaba023bd3deb'),
      HexBytes('0x3b5a2f751ca91f26cbc381ea45e05447c745914e7932c51ab138ec48fede3575'),
      HexBytes('0x9cf34c9cb36d01d45f0b8bdaa94adb7e75872988aff81df91bde82eb557367c8'),
      HexBytes('0x516a56567a1977182f6a2d773ab1f9b9b2d57029489757db3e9bc32f293747a6'),
      HexBytes('0xebebb6bf1b9670ae9a55f6eabc5e4296faf6c76382637516d7bb695039b2e87b'),
      HexBytes('0xa5cdca10e35c9a520fc41840c37d5a23e2ffa66aa2e2278e84a7d60efa6c9c16'),
      HexBytes('0xeaad0fbcd764ab570c96910f7d18939e0640ffc54a3fc33c101dc47d65a11385'),
      HexBytes('0xcb4fab003b7ec1920e878d9a826177cf3fde46ff1f9a98ecc5464b0e0ae06db1'),
      HexBytes('0xab99d8dc68e2f11108b308893c8fa64d3882488b94c90d3ecb452c79e5b8b6ab'),
      HexBytes('0x3025647acb6ffff4d287381c7c99a164e1f0b4b76bf7b6aeb8799c684137f257'),
      HexBytes('0x80a34aa71cf9d0ef52ac776af320fdcea92eb3ab07d138eaa6ad9ae20e00e9ab'),
      HexBytes('0xe752d5fc1272e6094725de9644092d3d3272f4947d4fc029b595d73a04fc2afe'),
      HexBytes('0xebe037b681d2efdd0a51f2dc10147f3be987727a382d1b39dd9a8551fd38d573'),
      HexBytes('0x905796160f10c4d4ea26f8eeff300da680f5153a674c97e587589db242faf5bb'),
      HexBytes('0x197e9a2501d640204a2a4832237a3252b456887ff9965d7ca6e4d7ff293d9e6d'),
      HexBytes('0x240d533b9f36cb8770502e6b379faf61ab40527025c31f13d5e5ad92cd26f8ed'),
      HexBytes('0x6fbe37fe02a5e3b5ea83e8250d08fe2bdedffee255e4e9f01d5e9f5be6d1d229'),
      HexBytes('0x5319ceef097b08b75a6985d08859d2373601d3b7dce5ce07116db6e59e5c354b'),
      HexBytes('0x73f0836e5146ff4ddd9dd7b314775a494b5d5580c97004486c2b8cd11dc73a44'),
      HexBytes('0x873d21893356ed606003cf0a2358a1d976a0dfdd4877d85832b9c8613faded6e'),
      HexBytes('0x9765c96a13211e93396ce01057fab8deb4b622bd42d8a80017145ac67e6145d4'),
      HexBytes('0xef97345a6d2c10643d262e366373f2e7514a86037ea781868feac6b279e7b58a'),
      HexBytes('0x1e84c2d01e62efb97472c5948592d6c03bc8e1f231edec5ddd50a5e60a285456'),
      HexBytes('0x681aa879c00daaa0d6defe57fdc09b8a908febea971a4431b77f1c48221b7460'),
      HexBytes('0x6466bb9e28b201b07f7f8a75ec4eab4f923a850980f96063b8ccc9ba6d90ab04'),
      HexBytes('0x9aa74dc5c12a811f497d9aa64581869d48a96533914bd665f7de43b03a23f7ce'),
      HexBytes('0x23de563b73c700cfd745a06a8c218ae422392fb3e7177760039c989a1fee238d'),
      HexBytes('0xe052e6596ef743082bc54800ff09568283cb1377a15c306e1e5f1dccf4200aa1'),
      HexBytes('0x87a4d187ff1b7c75642f40088aa23c6ccc7cbd08947223de9b4d0229089c1868'),
      HexBytes('0x88e9f166684283621aa2c8c9f17e7f3cf75a0e50049b16755a880700048697f5'),
      HexBytes('0x84cadf2bd0462a347568504932ba3cab7e296fe1ce8fbd6bce2a81a459fce5dd'),
      HexBytes('0xa3c2a94c2972a82107d39278c47fffb07c5ffeb868ccb3cac2b694105375bb04'),
      HexBytes('0xccf60af91e2389d6e11be497f3f532153fc7ebbdeeb9999b09edf5c5a8702a4c'),
      HexBytes('0x07b49f29d04ea99d32d9d4c57020e85d620705446102cf0ab7686528574b5756'),
      HexBytes('0xd60678eae3bcb20ada0ba5f5bb4ae81e56adfc910c213230c8c8a0d989aeb3d8'),
      HexBytes('0x5c6c2b2b20b325a473511515892e79c87b2f2069436c5e24071cb549469123a9'),
      HexBytes('0xff97fcd17c4503090eae1dbd2ebbffaf125bb248963a80b943dcbab9a279e0cb'),
      HexBytes('0x16fd0b9ec479adb259415db9f2dc6981822626572d925bc9ab436fd24eb8d7b1'),
      HexBytes('0x7757b1449bba21ff5234e36b22f9c5fd64efcd702aa939a205376b847bc8df85'),
      HexBytes('0xe7e366cf47c02ee62f83a6c67097de63a93aea5dc040456e6ad8d99c87550d4b'),
      HexBytes('0x3b215ee54f72cd630656c85ab90969e9d1b93ad67b8f2e194659276354aac02f'),
      HexBytes('0x91d977e0f83f07abfb0184c0e81a6e687aa2bb948232ab66bba2f4a5bedf7946'),
      HexBytes('0xd65a72160740a32443b44ead0f2999eb73b222c2d2c3fa9e85b423db31ad92c2'),
      HexBytes('0x0b0b071186cca4c46044bd5d9333100a527376f17c0d98090e37d8745de5139b'),
      HexBytes('0x088480f187041fe60abbf0299da36dc72cdaad93023d7aecadafe6a7bd6c004a'),
      HexBytes('0xf474c03cf42957bb78fc1224fd9247b18efb7415b76666e3085999d5b7e91ef6'),
      HexBytes('0x11aff485f29870a1c2c7d8d9075ed8effedc68d08bf251268f3439dd30b7232e'),
      HexBytes('0xcade3b5540f1c82486c90dba20f3879a9e085663f63b9a46b95133aef7e266fc'),
      HexBytes('0x218cd2e08a528226aaf92892f3352a9c302f850a8b812c1f050454eaadb5fa08'),
      HexBytes('0x4cf9f0f9caeb7eecdfe325027dcd337e2fcaafd8b1702f4aa3108460179a2d5f'),
      HexBytes('0xb8753045e3627b266bd28deeaeaf9a07f5f65c516ad360ce4628b272d8fd64f4'),
      HexBytes('0x59614c1dc9116677f7262080a6ea4c04d4b91649418faa6c3bfd8655dbee44c4'),
      HexBytes('0x69417d54dfc254a9172415bd9d9c24bb62e58186f56f1a73577f126d5f438c95'),
      HexBytes('0x16bbb2dd6720f1ca7039a24bbe3710577d9faa6e77c7740f1a5775dab7c807c2'),
      HexBytes('0x901c5167aee076ffc6e4b7cf27ae1c8631a522b7ca1d71d76e80fb63218ca700'),
      HexBytes('0xa02a030f50d418385d92485efcc3f307b4ffe821294520e9518ced77079907ed'),
      HexBytes('0x346f11eb37022eb9e10fc0b6f19d8558fb6262cee2ecc9f318ba4a10e7b1511f'),
      HexBytes('0x9f587c784411d8371c66f3648c541f7542bfa19c4b4744f2d4d1fb7b111c06f9'),
      HexBytes('0x9fad8f474b86b07cc3411eb66a450ff663bb980bee8b06e2aeebaefed5bcd88e'),
      HexBytes('0x90a1121787fce74e8291bcef5d7cf863da9c0087fcb1dd24a73b38c01eeb1a94'),
      HexBytes('0x56cea9dceb714574c6f1abe0fb0518b6620fb2fa7614f11d98789d767fc1ab01'),
      HexBytes('0x4850000bfea527f916be5df1f73097e9e7ac24d72bfb885a2423028ed9b3118e'),
      HexBytes('0x6651d1f0415c091e136ff4214fe8a57b15b0fda37129e6daa5a001ea3b1bc7aa'),
      HexBytes('0xa6c4e68ab345b10b9bcf6754519a2005b318562da9d9ea98b23995a1e8a11d5b'),
      HexBytes('0xc9382f9e4d52514283cca0186b0cfff2e13600cbeea30c76d7fd133e7bf41c16'),
      HexBytes('0xd2f70bcd5a5f2507e0caedf5277dc090f447ab167d718034316434f9a25aa291'),
      HexBytes('0xe4d2ac6a8afa7c775c82e1374d9e597c99a0ed0007908bf10b2c04c363ca37d8'),
      HexBytes('0xcc2e44281077402514d54991a161c251374f5ebe63c6f65b52de415728af4723'),
      HexBytes('0x34e63946c1290ce68b5bc96f0add953e57da4cb383075d722673fde2bf3bfc49'),
      HexBytes('0x8f0e23d772372f282058e33422ea28366ed7cfb7729f7f75ddfdbb4cc4acdf3b'),
      HexBytes('0xa62c663d91d0f52a9c16f17de026d35046a442dfd2743270fefecc88fbafea2c'),
      HexBytes('0x9275de01ff0cf7f43c7b91caf6a44847266332f7e023af923db9c4df20bcc7ab'),
      HexBytes('0x978db6f7a9d629172a898aafde45353c48257ec8bb826bfc2c235fd0f4f31a19'),
      HexBytes('0x935f55c412b8e8ebe4aa9b8a5f289a13a9b6034621c7dd025261e0bfdade3890'),
      HexBytes('0x09819d4436e0cb0ed6fe0702dd72ee9ffd7ab7cf06a6d94ece840b8e33b5452f'),
      HexBytes('0xb940fa0040fb2ccc8b37348ec767227759bd619b320955cb2d77e56dcdad2bf6'),
      HexBytes('0xd1c6344857c9b5ecc132112e5803843be6aebb414fe33f8c9943439748405fb3'),
      HexBytes('0xe59643eb929b17c35184476da6a14e3f01d9623eb2b05317d67c990ea74011a7'),
      HexBytes('0xa4f1911576e760035aab610553f4953048b447385910402eb095daeacc174cbc'),
      HexBytes('0x2215499238518a893118b7cffa5211ecf1ade409cbdbb1faaf1716007522465a'),
      HexBytes('0xf1c8f4fb208b76f8f2da59e71d46f6311144b13794647ebae1a6dd480a517a22'),
      HexBytes('0xfb2debf590b254f9c7021736db71af3bb884b03deb33bd6cdec922c28d507977'),
      HexBytes('0x611b1f936d99a0a9c0ad438cda003e353952e7b1e3017d50d95682e4613afe08'),
      HexBytes('0xa4dbd5ff0729210f6f3fa227e4c659a0b7ad3b4e59df4ee04eaf8239af68901d'),
      HexBytes('0xd0bb05fb8d86246cf2624fddfb6017d917926c511cce57ffea8b51d639bb9b78'),
      HexBytes('0xc34519411ea69c37474321e8b6627395346cf397b0b3b7b5b7e03644097322da'),
      HexBytes('0xebe579d55c98f7ce28ef5b64d24eeb46488aa08de786f6e118ef9f8a18495230'),
      HexBytes('0xc7a6cf3ae58a8d32c322af70d31f989587728315e1caec23759010a1879b4105'),
      HexBytes('0x055cfbfe1a425779d645926bc28d2b65e8dddb984745437d4fbcddebcb082675'),
      HexBytes('0x7137211bd0ce7b755ed48188459c3efcf10e1d82c7c674bd019cff756ca759c7'),
      HexBytes('0xf3ff57c17bc1aa01cd1082ec3bf2bd544ba20399542102e0d6daafe8ec047e73'),
      HexBytes('0x48e2af073bcb6c61ca7c18c22fa2933358286abb78c6beb3ec12aff7d62e2624'),
      HexBytes('0xee76d6e38cad08be5d396d044e73e389740e98e6de371f2286574c2cdffe6f0c'),
      HexBytes('0x88975f6067e2e5400cc2aebdace7a4bce10ba64da84340ed7f4f0c50ce4bd54c'),
      HexBytes('0xe2ce0f463bb54d6aeed35eb2fffee269de1b05a453017747ef07551365ab1b14'),
      HexBytes('0xb51b150a1beb4304785548fd8a0eb6cfa3166219e500901d102daac387e2b45f'),
      HexBytes('0x69e4b4d4073bf9af5b4002c50ad2b1b91396ad9d784c64bed91cedb2d4247a23'),
      HexBytes('0x0a2c11f07a8150d2b1f3c260156f04fe56083791e9aa7e15cf49ed4df2dd7e32'),
      HexBytes('0x6b626c1e549a7fd6b2cdc48342791e1c51e06286b77e2d78b8c6e698180ce04b'),
      HexBytes('0x076fe1a2ab72e1fa3c3df71f96e1635b5aeeaa1af45cda96675e9030047376a1'),
      HexBytes('0xfd10343aeb4c56cea5e9c85ab7f375e275379f2511d503789c60ad8c83bb1721'),
      HexBytes('0xc244bf578d56efa3cc3d0401634fa44e318d8a43564ca8cfc6e53c67b08ffdd1'),
      HexBytes('0x54ff17187ed7375c042062877da76a4db978a35e9a6bd2f723cc3fd117ab4346'),
      HexBytes('0x22848fd2ae579bdd75344b3dfba62f52c29729ac1de7fd4b9dfb169e0d49ec92'),
      HexBytes('0x65d0f015b00c45fb050c2ec3d24667ebc20aff9663faeed4a06a46ded5282fd8'),
      HexBytes('0x2df0f361149947a0c2c7bf390c3abaa554a0ebfa15db253bc9005893575bdde2'),
      HexBytes('0xc95d1725a2f4c8df211b7cdfd7e944a194798ec17228bf1202dfe588c6a08a16'),
      HexBytes('0x3ff2ababf2205db57ffe1d038a40820d63e424024ee0dfc257b5d602a0cf2d6b'),
      HexBytes('0x3d278e134b599d53544e8067d59ee3ae839cb0e9aa4b1f025ffc5293a465d8cd'),
      HexBytes('0xa36c1c1b15c7d76a993ee68ff43fb31fbbdb5e86b21ab99735476b54a718dbf3'),
      HexBytes('0xf2d265ba20d432cdc12f3911fbaf6c54a16e1daa1cb7c1daf493ebca62f8900b'),
      HexBytes('0x21f2641ac95255fa486d66342628cd25dd695af30b13658ae12ad5bdd7ef68d9'),
      HexBytes('0x82f84807f59665e023519aa10cda0b262d2ac5112298e950b5eab76b616b95f0'),
      HexBytes('0x3d31e9a977f8b465c6df1eac1fad0bb520414a080f8ea34fb54d51a61799b6fd'),
      HexBytes('0x0ba54070568cfef3e2fedaf354697c162c00a315ebe8d673fddb6acb51b156f2'),
      HexBytes('0x56a9a8689d979ca816acb19174b20906956ed08f8f5f5acf31ea63e4406aa896'),
      HexBytes('0xf56996f2e53a56ed96add3adfb18e5857f344c9e01ddbe755b267c439d5647f2'),
      HexBytes('0xf142f19e1c2a4b425406c3f2c8c10e879fb6a3f42fbf1be8f5226faa2296cf1b'),
      HexBytes('0x8d9c4a8bab196227f2d83ffcf2e2f44f0f495eaffb2dbe79fb45d2ba5cad992a'),
      HexBytes('0xc98bf7750115fff9542643bcd7a048d51033ed75c46c7468506c0c4fdc325fa0'),
      HexBytes('0x73e5ffe44b5f4449fa6e7ef8270d4e0dfcb457cf4ae91acd9d7ffb6060c03b7f'),
      HexBytes('0x398a1a3096d0fede5edec27a76cd25cce8745925f97029bb2c955a1f0ab0b2f4'),
      HexBytes('0x96b85a7995ae56f8912a9597eb163606fa0dd5402f0b0d89fafde61e4f706e8e'),
      HexBytes('0x7a0bafb4d4c87d45e48833ab80d08f1a2f36152093c79e73294ace53f5947a82'),
      HexBytes('0xc3ce42c06bc32b6b2d28a6c8f57bafbc186066ee0a13b8713787950ba8c340f4'),
      HexBytes('0x26beb042ac784d822a3452e06506933993e22805e094cda8ea8d55ee0b1ea309'),
      HexBytes('0x9f35a2d6b4ae970fb630202c8a0fb1dfed2c8deea4f0099bf7a1422633139c54'),
      HexBytes('0x0c37d615b4b927fd94bb878e266e285ce5fbd5acb83d6f609267b98ebf1539e5'),
      HexBytes('0xf4cda2fc442a0d70f22aad34ef214be86cc19c589b41d10b05aeec240e07acba'),
      HexBytes('0xc0ea41a4712bba078ed223447dfada515bedba31c231c2f127a8d30b43915679'),
      HexBytes('0xdf614b278c17d94614697727bb3f861579cda0697592ea316fa30b9972cd0205'),
      HexBytes('0x91839b8c5c9820e74a11b212d42e828d4346913de5f668740d3a298224edc929'),
      HexBytes('0x7505dcc6585710536857e29e8f5468c5a2e020fc996cbf325ff8312325cd9685'),
      HexBytes('0x8052861fccc4c2179be199cf614c59a11822efc93132ed256e26e0377ecd53bb'),
      HexBytes('0x3cbfcd6ec57a2a6efa42fbd92292097d34d72e9a73d00885921b1aac0f566ed0'),
      HexBytes('0xa02c44c31de6a35c0c9e70e418c5806416e66040e720dce51e429e9cf6b7a150')],
     'transactionsRoot': HexBytes('0x863655c56bef4019a05f8ba9b6548f67f524b10086d151447b89c930d124dfc3'),
     'uncles': []})




```python
w3.eth.get_balance('0xe770726257d197Ee621617B865a2f1807C356a48')
```




    137257652612656656




```python
w3.eth.get_block('0x767c2bfb3bdee3f78676c1285cd757bcd5d8c272cef2eb30d9733800a78c0b6d')
```




    AttributeDict({'difficulty': 735512610763,
     'extraData': HexBytes('0x476574682f76312e302e302f6c696e75782f676f312e342e32'),
     'gasLimit': 5000,
     'gasUsed': 0,
     'hash': HexBytes('0x767c2bfb3bdee3f78676c1285cd757bcd5d8c272cef2eb30d9733800a78c0b6d'),
     'logsBloom': HexBytes('0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'),
     'miner': '0xad5C1768e5974C231b2148169da064e61910f31a',
     'mixHash': HexBytes('0x31d9ec7e3855aeba37fd92aa1639845e70b360a60f77f12eff530429ef8cfcba'),
     'nonce': HexBytes('0x549f882c5f356f85'),
     'number': 12345,
     'parentHash': HexBytes('0x4b3c1d7e65a507b62734feca1ee9f27a5379e318bd52ae62de7ba67dbeac66a3'),
     'receiptsRoot': HexBytes('0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'),
     'sha3Uncles': HexBytes('0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347'),
     'size': 539,
     'stateRoot': HexBytes('0xca495e22ed6b88c61714d129dbc8c94f5bf966ac581c09a57c0a72d0e55e7286'),
     'timestamp': 1438367030,
     'totalDifficulty': 3862140487204603,
     'transactions': [],
     'transactionsRoot': HexBytes('0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'),
     'uncles': []})




```python
w3.fromWei(w3.eth.get_balance('0xe770726257d197Ee621617B865a2f1807C356a48'), 'ether')
```




    Decimal('0.137257652612656656')




```python
w3.eth.get_transaction('0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060')
```




    AttributeDict({'blockHash': HexBytes('0x4e3a3754410177e6937ef1f84bba68ea139e8d1a2258c5f85db9f1cd715a1bdd'),
     'blockNumber': 46147,
     'from': '0xA1E4380A3B1f749673E270229993eE55F35663b4',
     'gas': 21000,
     'gasPrice': 50000000000000,
     'hash': HexBytes('0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060'),
     'input': '0x',
     'nonce': 0,
     'r': HexBytes('0x88ff6cf0fefd94db46111149ae4bfc179e9b94721fffd821d38d16464b3f71d0'),
     's': HexBytes('0x45e0aff800961cfce805daef7016b9b675c137a6a41a548f7b60a3484c06a33a'),
     'to': '0x5DF9B87991262F6BA471F09758CDE1c0FC1De734',
     'transactionIndex': 0,
     'type': '0x0',
     'v': 28,
     'value': 31337})




```python
w3.eth.get_transaction_receipt('0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060')
```




    AttributeDict({'blockHash': HexBytes('0x4e3a3754410177e6937ef1f84bba68ea139e8d1a2258c5f85db9f1cd715a1bdd'),
     'blockNumber': 46147,
     'contractAddress': None,
     'cumulativeGasUsed': 21000,
     'effectiveGasPrice': 50000000000000,
     'from': '0xA1E4380A3B1f749673E270229993eE55F35663b4',
     'gasUsed': 21000,
     'logs': [],
     'logsBloom': HexBytes('0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'),
     'root': '0x96a8e009d2b88b1483e6941e6812e32263b05683fac202abc622a3e31aed1957',
     'to': '0x5DF9B87991262F6BA471F09758CDE1c0FC1De734',
     'transactionHash': HexBytes('0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060'),
     'transactionIndex': 0,
     'type': '0x0'})




```python

```


```python
address = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'
abi = '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"maxNftSupply","type":"uint256"},{"internalType":"uint256","name":"saleStart","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BAYC_PROVENANCE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_APES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REVEAL_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"apePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencySetStartingIndexBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxApePurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"mintApe","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveApes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"revealTimeStamp","type":"uint256"}],"name":"setRevealTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setStartingIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startingIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startingIndexBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
bayc_instance = w3.eth.contract(address=address, abi=abi)
```


```python
bayc_instance.functions.balanceOf('0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D').call()
```




    0




```python
bayc_instance.functions.baseURI().call()
```




    'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/'




```python
bayc_instance.functions.ownerOf(1).call()
```




    '0x46EFbAedc92067E6d60E84ED6395099723252496'




```python
tx_hash = bayc_instance.functions.setBaseURI('43').transact()
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    <ipython-input-37-49853ab7d7e4> in <module>
    ----> 1 tx_hash = bayc_instance.functions.setBaseURI('43').transact()
    

    D:\Users\runtao1\Anaconda3\lib\site-packages\web3\contract.py in transact(self, transaction)
       1008                 )
       1009 
    -> 1010         return transact_with_contract_function(
       1011             self.address,
       1012             self.web3,
    

    D:\Users\runtao1\Anaconda3\lib\site-packages\web3\contract.py in transact_with_contract_function(address, web3, function_name, transaction, contract_abi, fn_abi, *args, **kwargs)
       1612     )
       1613 
    -> 1614     txn_hash = web3.eth.send_transaction(transact_transaction)
       1615     return txn_hash
       1616 
    

    D:\Users\runtao1\Anaconda3\lib\site-packages\web3\eth.py in send_transaction(self, transaction)
        826 
        827     def send_transaction(self, transaction: TxParams) -> HexBytes:
    --> 828         return self._send_transaction(transaction)
        829 
        830     def send_raw_transaction(self, transaction: Union[HexStr, bytes]) -> HexBytes:
    

    D:\Users\runtao1\Anaconda3\lib\site-packages\web3\module.py in caller(*args, **kwargs)
         55             return LogFilter(eth_module=module, filter_id=err.filter_id)
         56         result_formatters, error_formatters, null_result_formatters = response_formatters
    ---> 57         result = w3.manager.request_blocking(method_str,
         58                                              params,
         59                                              error_formatters,
    

    D:\Users\runtao1\Anaconda3\lib\site-packages\web3\manager.py in request_blocking(self, method, params, error_formatters, null_result_formatters)
        196         """
        197         response = self._make_request(method, params)
    --> 198         return self.formatted_response(response,
        199                                        params,
        200                                        error_formatters,
    

    D:\Users\runtao1\Anaconda3\lib\site-packages\web3\manager.py in formatted_response(response, params, error_formatters, null_result_formatters)
        169         if "error" in response:
        170             apply_error_formatters(error_formatters, response)
    --> 171             raise ValueError(response["error"])
        172         # NULL_RESPONSES includes None, so return False here as the default
        173         # so we don't apply the null_result_formatters if there is no 'result' key
    

    ValueError: {'code': -32601, 'message': 'The method eth_sendTransaction does not exist/is not available'}



```python

```
