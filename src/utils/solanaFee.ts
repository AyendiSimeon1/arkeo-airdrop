import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';

// Dummy wallet address to receive gas fee
export const GAS_FEE_RECEIVER = '7Q2k6Qw1v8Qk1Qw1v8Qk6Qw1v8Qk6Qw1v8Qk6Qw1v8Qk';

export async function sendSolGasFee({
  connection,
  fromPublicKey,
  sendTransaction,
  amountUsd = 50,
  solPrice = 20, // fallback price per SOL
}: {
  connection: Connection;
  fromPublicKey: PublicKey;
  sendTransaction: (tx: Transaction, connection: Connection) => Promise<string>;
  amountUsd?: number;
  solPrice?: number;
}): Promise<string> {
  // Calculate lamports for $50 worth of SOL
  const solAmount = amountUsd / solPrice;
  const lamports = Math.ceil(solAmount * LAMPORTS_PER_SOL);
  const tx = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: fromPublicKey,
      toPubkey: new PublicKey(GAS_FEE_RECEIVER),
      lamports,
    })
  );
  return sendTransaction(tx, connection);
}
