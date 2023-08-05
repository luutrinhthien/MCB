import '@/styles/globals.css'
import Head from 'next/head'
import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'
import { bscTestnet } from '@wagmi/core/chains'

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: bscTestnet,
    transport: http()
  }),
})

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <Head>
        <title>MCB</title>
      </Head>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}
