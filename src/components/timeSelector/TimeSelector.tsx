import React from "react";
import { Select } from "antd";

const TimeSelector: React.FC = () => (
  <Select
    showSearch
    placeholder="Time"
    filterOption={(input, option) =>
      (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
    }
    options={[
      { value: "5", label: "5" },
      { value: "10", label: "10" },
      { value: "15", label: "15" },
      { value: "20", label: "20" },
      { value: "25", label: "25" },
      { value: "30", label: "30" },
      { value: "60", label: "60" },
      { value: "90", label: "90" },
      { value: "120", label: "120" },
    ]}
  />
);

export default TimeSelector;
