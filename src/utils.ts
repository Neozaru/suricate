
// Yocta to Near
function c2h(value): number {
  return value.toString() / Math.pow(10,24)
}

function computeEpochId(blockHeight: number, epochLength: number, genesisHeight: number) {
  return (blockHeight - genesisHeight) / epochLength;
}

// TODO type info
function computeEpochIdFromInfoAndBlockHeight(info: any, blockHeight: number) {
  const epochLength = info.genesisConfig.epoch_length;
  const genesisHeight = info.genesisConfig.genesis_height;
  return computeEpochId(blockHeight, epochLength, genesisHeight)
}

function extractFeatureConfig(config: any, featureName: string) {
  const {delegatorAccountId, validatorAccountId} = config;
  return {
    delegatorAccountId,
    validatorAccountId,
    ...config[featureName]
  }
}


function isFeatureEnabled(config: any, featureName: string) {
  const featureEnabledValue = config[featureName].enabled;
  return featureEnabledValue === true || featureEnabledValue === 'true';
}

export {
  c2h,
  computeEpochIdFromInfoAndBlockHeight,
  extractFeatureConfig,
  isFeatureEnabled,
}