import React, { useState } from "react";
import { Select } from "antd";

interface TimeSelectorProps {
  onChange?: (value: number) => void;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ onChange }) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setSelectedTime(value);
  };
  return (
    <Select
      showSearch
      placeholder="Time"
      onChange={handleChange}
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
        { value: "140", label: "120+" },
      ]}
    />
  );
};

export default TimeSelector;
