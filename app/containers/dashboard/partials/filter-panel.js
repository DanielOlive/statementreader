import React from "react";
import UploaderModal from "../../../components/uploader-modal";
import TransactionToggle from "./transaction-toggle";

const FilterPanel = () => (
  <div className="filter-panel">
    <UploaderModal />
    <TransactionToggle />
  </div>
);

export default FilterPanel;
