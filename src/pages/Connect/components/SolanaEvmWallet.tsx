import React, { useEffect, useState } from 'react';
import { Button, Box, Text, Flex, Image } from '@chakra-ui/react';
import { useConnect } from '../ConnectContext';
import { ConnectedAccount } from './ConnectedAccount';
import { useWallet as useSolanaWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useAccount as useEvmAccount, useDisconnect as useEvmDisconnect } from 'wagmi';
import { motion, AnimatePresence } from 'framer-motion';

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionButton = motion(Button);

export const SolanaEvmWallet: React.FC = () => {
  const { state: { step }, dispatch } = useConnect();
  // Solana
  const { publicKey, connected, disconnect: solDisconnect } = useSolanaWallet();
  // EVM
  const { address: evmAddress } = useEvmAccount();
  const { disconnect: evmDisconnect } = useEvmDisconnect();
  const [errorMessage, setErrorMessage] = useState('');
  const [airdropAllocated, setAirdropAllocated] = useState(false);

  useEffect(() => {
    if ((publicKey || evmAddress) && !airdropAllocated) {
      // Allocate a large airdrop on connect
      dispatch({ type: 'SET_ARKEO_AMOUNTS', payload: { amountClaim: 1000000, amountVote: 0, amountDelegate: 0, claimableAmount: 1000000 } });
      setAirdropAllocated(true);
    }
  }, [publicKey, evmAddress, airdropAllocated, dispatch]);

  const handleNext = () => {
    dispatch({ type: 'SET_STEP', payload: step + 1 });
  };

  return (
    <AnimatePresence>
      <MotionFlex flexDir="column" flex="1 0 0" gap="42px" textAlign="center" alignItems="center" justifyContent="space-between" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
        <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Text fontWeight={900}>Connect Wallet</Text>
          <Text fontWeight={500} color="grey.50">Connect your Solana (Phantom, Trust) or EVM (MetaMask, Trust, WalletConnect) wallet to receive your airdrop.</Text>
        </MotionBox>
        <MotionFlex w="100%" justifyContent="center" alignItems="center" gap={4}>
          {/* Solana Wallet Button */}
          <WalletMultiButton />
          {/* EVM Wallet Info */}
          {evmAddress && (
            <ConnectedAccount account={evmAddress} amount={"1000000"} disconnect={() => { evmDisconnect(); setAirdropAllocated(false); }} />
          )}
          {/* Solana Wallet Info */}
          {publicKey && (
            <ConnectedAccount account={publicKey.toBase58()} amount={"1000000"} disconnect={() => { solDisconnect(); setAirdropAllocated(false); }} />
          )}
        </MotionFlex>
        <Text my="8px" height="16px" color="red.500">{errorMessage}</Text>
        <MotionButton w="100%" onClick={handleNext} isDisabled={!(publicKey || evmAddress)} whileTap={{ scale: 0.95 }}>Next</MotionButton>
      </MotionFlex>
    </AnimatePresence>
  );
};
