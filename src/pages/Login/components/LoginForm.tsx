import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: LoginSchema) => {
    console.log(data);
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
