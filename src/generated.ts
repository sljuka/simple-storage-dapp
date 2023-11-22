import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SimpleStorage
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const simpleStorageABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_favoriteNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addPerson',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'string', type: 'string' }],
    name: 'nameToFavoriteNumber',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'people',
    outputs: [
      { name: 'favoriteNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'name', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'retrieve',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_favoriteNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'store',
    outputs: [],
  },
] as const

export const simpleStorageAddress =
  '0x5FbDB2315678afecb367f032d93F642f64180aa3' as const

export const simpleStorageConfig = {
  address: simpleStorageAddress,
  abi: simpleStorageABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link simpleStorageABI}__.
 */
export function useSimpleStorageRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof simpleStorageABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof simpleStorageABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > = {} as any,
) {
  return useContractRead({
    abi: simpleStorageABI,
    address: simpleStorageAddress,
    ...config,
  } as UseContractReadConfig<
    typeof simpleStorageABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link simpleStorageABI}__ and `functionName` set to `"nameToFavoriteNumber"`.
 */
export function useSimpleStorageNameToFavoriteNumber<
  TFunctionName extends 'nameToFavoriteNumber',
  TSelectData = ReadContractResult<typeof simpleStorageABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof simpleStorageABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: simpleStorageABI,
    address: simpleStorageAddress,
    functionName: 'nameToFavoriteNumber',
    ...config,
  } as UseContractReadConfig<
    typeof simpleStorageABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link simpleStorageABI}__ and `functionName` set to `"people"`.
 */
export function useSimpleStoragePeople<
  TFunctionName extends 'people',
  TSelectData = ReadContractResult<typeof simpleStorageABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof simpleStorageABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: simpleStorageABI,
    address: simpleStorageAddress,
    functionName: 'people',
    ...config,
  } as UseContractReadConfig<
    typeof simpleStorageABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link simpleStorageABI}__ and `functionName` set to `"retrieve"`.
 */
export function useSimpleStorageRetrieve<
  TFunctionName extends 'retrieve',
  TSelectData = ReadContractResult<typeof simpleStorageABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof simpleStorageABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: simpleStorageABI,
    address: simpleStorageAddress,
    functionName: 'retrieve',
    ...config,
  } as UseContractReadConfig<
    typeof simpleStorageABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link simpleStorageABI}__.
 */
export function useSimpleStorageWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof simpleStorageABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof simpleStorageABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof simpleStorageABI, TFunctionName, TMode>({
    abi: simpleStorageABI,
    address: simpleStorageAddress,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link simpleStorageABI}__ and `functionName` set to `"addPerson"`.
 */
export function useSimpleStorageAddPerson<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof simpleStorageABI,
          'addPerson'
        >['request']['abi'],
        'addPerson',
        TMode
      > & { functionName?: 'addPerson' }
    : UseContractWriteConfig<typeof simpleStorageABI, 'addPerson', TMode> & {
        abi?: never
        functionName?: 'addPerson'
      } = {} as any,
) {
  return useContractWrite<typeof simpleStorageABI, 'addPerson', TMode>({
    abi: simpleStorageABI,
    address: simpleStorageAddress,
    functionName: 'addPerson',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link simpleStorageABI}__ and `functionName` set to `"store"`.
 */
export function useSimpleStorageStore<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof simpleStorageABI,
          'store'
        >['request']['abi'],
        'store',
        TMode
      > & { functionName?: 'store' }
    : UseContractWriteConfig<typeof simpleStorageABI, 'store', TMode> & {
        abi?: never
        functionName?: 'store'
      } = {} as any,
) {
  return useContractWrite<typeof simpleStorageABI, 'store', TMode>({
    abi: simpleStorageABI,
    address: simpleStorageAddress,
    functionName: 'store',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link simpleStorageABI}__.
 */
export function usePrepareSimpleStorageWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof simpleStorageABI, TFunctionName>,
    'abi' | 'address'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: simpleStorageABI,
    address: simpleStorageAddress,
    ...config,
  } as UsePrepareContractWriteConfig<typeof simpleStorageABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link simpleStorageABI}__ and `functionName` set to `"addPerson"`.
 */
export function usePrepareSimpleStorageAddPerson(
  config: Omit<
    UsePrepareContractWriteConfig<typeof simpleStorageABI, 'addPerson'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: simpleStorageABI,
    address: simpleStorageAddress,
    functionName: 'addPerson',
    ...config,
  } as UsePrepareContractWriteConfig<typeof simpleStorageABI, 'addPerson'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link simpleStorageABI}__ and `functionName` set to `"store"`.
 */
export function usePrepareSimpleStorageStore(
  config: Omit<
    UsePrepareContractWriteConfig<typeof simpleStorageABI, 'store'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: simpleStorageABI,
    address: simpleStorageAddress,
    functionName: 'store',
    ...config,
  } as UsePrepareContractWriteConfig<typeof simpleStorageABI, 'store'>)
}
