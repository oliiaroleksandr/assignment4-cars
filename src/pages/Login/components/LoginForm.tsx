import { zodResolver } from "@hookform/resolvers/zod";
import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "@/shared/providers";
import { Link } from "react-router-dom";
import { authSchema } from "@/shared/validations";

type LoginSchema = z.infer<typeof authSchema>;

const LoginForm = () => {
  const { setIsAuthenticated } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: LoginSchema) => {
    const { email, password } = data;

    if (email === "admin@admin.com" && password === "admin1234") {
      setIsAuthenticated(true);
      enqueueSnackbar("Logged in successfully", { variant: "success" });
      return;
    }

    enqueueSnackbar("Invalid email or password", { variant: "error" });
  };

  return (
    <Container maxWidth="xs" sx={{ m: 0, p: 0 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack
          width="100%"
          spacing={2}
          component="form"
          onSubmit={form.handleSubmit(handleSubmit)}
          noValidate
        >
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                helperText={error ? error.message : null}
                error={!!error}
                fullWidth
                id="email"
                label="Email"
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                helperText={error ? error.message : null}
                error={!!error}
                fullWidth
                id="password"
                label="Password"
                autoComplete="current-password"
                {...field}
              />
            )}
          />
          <Grid container alignItems="center">
            <Grid item xs>
              <Link to="/changePassword">
                <Typography variant="body2">Forgot password?</Typography>
              </Link>
            </Grid>
            <Grid item>
              <IconButton type="submit">
                <SendIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginForm;
