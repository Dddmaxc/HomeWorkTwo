import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <div style={{ width: "147px" }}>
      {" "}
      <Slider
        sx={{
          // стили для слайдера // пишет студент
          width: "147px",
          height: "4px",
          color: "#00CC22",
          "& .MuiSlider-track": {
            border: "none",
          },
          "& .MuiSlider-thumb": {
            height: 24,
            width: 24,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
              boxShadow: "inherit",
             
            },
          },
        }}
        {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
      />
    </div>
  );
};

export default SuperRange;
