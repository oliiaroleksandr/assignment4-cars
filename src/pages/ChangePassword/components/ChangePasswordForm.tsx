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
import { Link, useNavigate } from "react-router-dom";
import { authSchema } from "@/shared/validations";

const changePasswordSchema = authSchema.pick({ password: true });

type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;

const ChangePasswordForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const form = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const handleSubmit = () => {
    enqueueSnackbar("Password changed successfully", { variant: "success" });
    navigate("/login");
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
              <Link to="/login">
                <Typography variant="body2">Back to login</Typography>
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

export default ChangePasswordForm;
