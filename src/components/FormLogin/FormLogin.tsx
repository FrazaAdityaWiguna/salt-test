"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PasswordBootstrap from "../TextFieldBootstrap/PasswordBootstrap";
import TextFieldBootstrap from "../TextFieldBootstrap/TextFieldBootstrap";

const FormLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleInput =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setState(event.target.value);
    };

  return (
    <Stack direction="row">
      <Stack
        sx={{
          display: { xs: "none", md: "flex" },
          background: "#7879F1",
          width: { md: "60%" },
          height: "100vh",
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.40)",
            backdropFilter: "blur(24px)",
            maxWidth: "347px",
          }}
          px="88px"
          py="138px"
        >
          <Typography
            sx={{ color: "#fff", fontSize: "48px", fontWeight: "600" }}
          >
            Lorem ipsum dolor si amet
          </Typography>
          <Typography
            sx={{ color: "#3E334E", fontSize: "48px", fontWeight: "600" }}
          >
            consectetur
          </Typography>

          <Typography sx={{ color: "#3E334E", fontSize: "18px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>
      </Stack>

      <Stack
        sx={{ width: { xs: "100%", md: "40%" }, height: "100vh" }}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          sx={{
            width: { lg: "416px" },
            p: { xs: "24px", md: "32px" },
          }}
        >
          <Box mb="80px">
            <Typography
              sx={{ color: "#3E334E", fontSize: "32px", fontWeight: "700" }}
            >
              Hello
            </Typography>
            <Typography
              sx={{ color: "#3E334E", fontSize: "18px", fontWeight: "400" }}
            >
              Enter your email and password to login.
            </Typography>
          </Box>

          <Box>
            <Stack gap="24px">
              <Stack gap="24px" component="form">
                <TextFieldBootstrap
                  label="Email"
                  value={email}
                  type="email"
                  onChange={handleInput(setEmail)}
                  required={true}
                />

                <PasswordBootstrap
                  label="Password"
                  value={password}
                  onChange={handleInput(setPassword)}
                  required={true}
                />

                <Stack direction="row" justifyContent="space-between">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={
                      <Typography
                        sx={{
                          color: "#3E334E",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        Remember Me
                      </Typography>
                    }
                  />

                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#3E334E",
                      textDecoration: "underline",
                    }}
                  >
                    Forgot password?
                  </Button>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  gap="40px"
                >
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#7879F1",
                      borderRadius: "8px",
                      width: "100%",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Login
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      borderColor: "#3E334E",
                      color: "#3E334E",
                      borderRadius: "8px",
                      width: "100%",
                      fontWeight: "600",
                    }}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </Stack>

              <Stack gap="24px">
                <Typography
                  align="center"
                  sx={{ color: "#3E334E", fontSize: "14px", fontWeight: "400" }}
                >
                  Or, login with
                </Typography>

                <Stack
                  direction="row"
                  gap="16px"
                  justifyContent="space-between"
                >
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#AFA2C3",
                      borderColor: "#AFA2C3",
                      textTransform: "none",
                      width: "100%",
                      fontWeight: "500",
                    }}
                  >
                    Facebook
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#AFA2C3",
                      borderColor: "#AFA2C3",
                      textTransform: "none",
                      width: "100%",
                      fontWeight: "500",
                    }}
                  >
                    Linked In
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#AFA2C3",
                      borderColor: "#AFA2C3",
                      textTransform: "none",
                      width: "100%",
                      fontWeight: "500",
                    }}
                  >
                    Google
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FormLogin;
