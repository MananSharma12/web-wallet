import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const sendAirdrop = async () => {
    const amount = document.getElementById('amount')?.value;
    const txnSignature = await connection.requestAirdrop(wallet.publicKey,  amount * LAMPORTS_PER_SOL);
    console.log("Txn Signature", txnSignature);
  }

  return (
    <>
      {/*Hi {wallet}*/}
      <input id="amount" type="text" placeholder="Amount" />
      <button onClick={sendAirdrop}>Airdrop</button>
    </>
  )
}
