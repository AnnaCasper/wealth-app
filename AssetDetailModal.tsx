import { Modal } from "antd";
import type { Asset } from "../graphql/types/assets";

export const AssetDetailModal = ({
  isModalOpen,
  handleCancel,
  asset,
}: {
  isModalOpen: boolean;
  handleCancel: () => void;
  asset: Asset;
}) => {
  return (
    <Modal
      title={`${asset.primaryAssetCategory} Account`}
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalOpen}
      onCancel={handleCancel}
    ></Modal>
  );
};
