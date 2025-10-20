export interface Asset {
  assetId: string;
  primaryAssetCategory: string;
  wealthAssetType: string;
  balanceCurrent: string;
}

export interface GetAssetsData {
  getAssets: Asset[];
}
