import { useQuery } from "@apollo/client/react";
import type { Asset, GetAssetsData } from "../graphql/types/assets";
import { GET_ASSETS } from "../graphql/queries/assets";
import { Spin, Table } from "antd";
import { useState } from "react";
import { AssetDetailModal } from "../components/AssetDetailModal";

export const AssetOverview = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset>();
  const { data, loading, error } = useQuery<GetAssetsData>(GET_ASSETS, {
    variables: { wid: "ae0df17e-514e-4f52-a0b5-5bfb1adf84c9" },
  });

  if (loading) return <Spin />;
  if (error) return <p> There was an error loading assets.</p>;

  const columns = [
    {
      title: "Category / Subcategory / Asset",
      dataIndex: "primaryAssetCategory",
      key: "primaryAssetCategory",
      onCell: (asset: Asset) => {
        return {
          onClick: () => {
            setShowModal(true);
            setSelectedAsset(asset);
          },
        };
      },
    },
    {
      title: "Balance",
      dataIndex: "balanceCurrent",
      key: "balanceCurrent",
    },
  ];

  const handleCancel = () => {
    setShowModal(false);
  };
  return (
    <>
      Asset Overview
      <Table dataSource={data?.getAssets} columns={columns} />;
      {showModal && selectedAsset && (
        <AssetDetailModal
          isModalOpen={showModal}
          handleCancel={handleCancel}
          asset={selectedAsset}
        />
      )}
    </>
  );
};
