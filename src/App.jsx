import './App.css'
import '@solana/wallet-adapter-react-ui/styles.css'
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Airdrop } from "./components/Airdrop.jsx";

function App() {
  return (
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/XwzujvPWu7KpuUEHuzunHnzcwF0CYqpo">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
        </WalletModalProvider>
        <Airdrop/>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
