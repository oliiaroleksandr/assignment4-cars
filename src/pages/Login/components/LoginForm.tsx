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

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const { setIsAuthenticated } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
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
              <Typography variant="body2">Forgot password?</Typography>
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
