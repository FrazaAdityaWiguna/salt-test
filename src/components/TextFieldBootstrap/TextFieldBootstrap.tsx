"use client";

import { FormControl, InputLabel } from "@mui/material";
import React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

interface TextFieldBootstrapType {
  label: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: "8px",
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#FFF" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const TextFieldBootstrap = (props: TextFieldBootstrapType) => {
  const { label, value, type = "text", onChange, required } = props;

  return (
    <FormControl variant="standard">
      <InputLabel
        htmlFor={`bootstrap-${label}`}
        shrink
        sx={{ color: "#3E334E", fontWeight: "600" }}
      >
        {label}
      </InputLabel>
      <BootstrapInput
        id={`bootstrap-${label}`}
        value={value}
        type={type}
        onChange={onChange}
        required={required}
      />
    </FormControl>
  );
};

export default TextFieldBootstrap;
