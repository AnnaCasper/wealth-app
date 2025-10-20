import { gql } from "@apollo/client";

export const GET_ASSETS = gql`
  query getAssets($wid: String!) {
    getAssets(wid: $wid) {
      assetId
      primaryAssetCategory
      wealthAssetType
      balanceCurrent
    }
  }
`;
