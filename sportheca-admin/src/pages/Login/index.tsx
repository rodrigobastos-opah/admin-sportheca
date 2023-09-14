import * as St from './styles';
import Logo from '../../assets/images/logo-sportheca.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)({
  '& label': {
    color: '#A0AAB4',
  },
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    width: 500,
    marginBottom: 24,
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
});

const CustomButton = styled(Button) ({
  backgroundColor: 'transparent',
  border: '2px solid #ff004f',
  fontFamily: 'Lato',
  fontWeight: 'bold',
  borderRadius: 0,
  width: '100%',
  height: 42,
  '&:hover': {
    backgroundColor: 'green',
  }
});

export const Login = () => {
  return (
    <St.Container>
      <St.Content>
        <St.Logo src={Logo} alt="Sportheca" />
        <St.PageTitle>Entrar</St.PageTitle>
        <CustomTextField
          required
          id="outlined-required"
          label="Login"
        />
        <CustomTextField
          id="outlined-password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
        />
        <CustomButton variant="contained">Entrar</CustomButton>
      </St.Content>
    </St.Container>
  );
}