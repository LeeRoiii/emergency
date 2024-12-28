import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
  Link,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'; 
import { AiFillAlert } from 'react-icons/ai'; 
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const navigate = useNavigate();

  // Toggle password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      // If username and password are correct, redirect to Admin Dashboard
      navigate('/Admin-dashboard');
    } else {
      setSnackbarMessage('Invalid username or password.');
      setSnackbarOpen(true);
    }
  };

  // Handle Snackbar close
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="xs" sx={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={12} sx={{ padding: 4, borderRadius: '16px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
        
        <Box display="flex" justifyContent="center" mb={2}>
          <Box sx={{
            fontSize: { xs: 60, sm: 50, md: 60 }, 
            color: '#f44336',
            animation: 'flashSiren 1s step-start infinite',
          }}>
            <AiFillAlert />
          </Box>
        </Box>

        <Typography variant="h4" component="h1" align="center" sx={{ fontWeight: 700, color: '#000000', mb: 4 }}>
          Sign In
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
            {/* Username Field */}
            <TextField
              label="Username"
              type="text"
              variant="outlined"
              fullWidth
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                sx: {
                  borderRadius: '12px',
                  backgroundColor: '#fafafa',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#e0e0e0',
                    },
                    '&:hover fieldset': {
                      borderColor: '#000000',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#000000',
                    },
                  },
                },
              }}
            />
            {/* Password Field with View Toggle */}
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                sx: {
                  borderRadius: '12px',
                  backgroundColor: '#fafafa',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#e0e0e0',
                    },
                    '&:hover fieldset': {
                      borderColor: '#000000',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#000000',
                    },
                  },
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff sx={{ color: '#000' }} /> : <Visibility sx={{ color: '#000' }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 2,
                padding: '14px 28px',
                fontSize: '16px',
                borderRadius: '12px',
                backgroundColor: '#000',
                '&:hover': {
                  backgroundColor: '#333',
                },
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              Sign In
            </Button>

            {/* Forgot Password Link */}
            <Box display="flex" justifyContent="flex-end">
              <Link href="#" variant="body2" sx={{ color: '#000', fontSize: '14px', '&:hover': { color: '#333' } }}>
                Forgot Password?
              </Link>
            </Box>
          </Box>
        </form>
      </Paper>

      {/* Snackbar for Validation */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          '& .MuiSnackbarContent-root': {
            fontSize: '1.2rem', 
            padding: '16px 32px', 
            borderRadius: '8px', 
          },
        }}
      >
        <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LoginPage;
