import React from "react";
import UploaderModal from "../../../components/uploader-modal";
import TransactionToggle from "./transaction-toggle";

const FilterPanel = () => (
  <div className="filter-panel">
    <UploaderModal className="u-margin-bottom" />
    <TransactionToggle className="u-margin-bottom" />
  </div>
);

export default FilterPanel;
