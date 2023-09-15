import * as React from 'react';
import * as St from './styles';
import Logo from '../../assets/images/logo-sportheca.png';
import Formas from '../../assets/images/formas.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
  '.MuiInputBase-input': {
    color: '#A0AAB4',
  },
  '& .MuiOutlinedInput-root': {
    width: 450,
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

const CustomPassword = styled(OutlinedInput)({
  '& .MuiInputLabel-root': {
    color: '#A0AAB4!important',
  },
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& fieldset': {
    borderColor: '#E0E3E7',
  },
  '&:hover fieldset': {
    borderColor: '#B2BAC2!important',
  },
  '&.Mui-focused fieldset': {
    borderColor: '#6F7E8C !important',
  },
});

const CustomButton = styled(Button)({
  backgroundColor: 'transparent',
  border: '2px solid #ff004f',
  fontFamily: 'Lato',
  fontWeight: 'bold',
  width: '100%',
  height: 60,
  fontSize: '1.2rem',
  textTransform: 'inherit',
  marginTop: 24,
  '&:hover': {
    backgroundColor: '#ff004f',
  }
});

export const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <St.Container>
      <St.Forms src={Formas} alt="Formas" />
      <St.Content>
        <St.Logo src={Logo} alt="Sportheca" />
        <St.SectionForm>
          <CustomTextField
            required
            id="outlined-required"
            label="Login"
          />
          <FormControl variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: '#A0AAB4' }}
            >Senha *
            </InputLabel>
            <CustomPassword
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              style={{ color: '#A0AAB4'}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Mostar senha"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    style={{ color: '#A0AAB4'}}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {/* <CustomTextField
            id="outlined-password-input"
            label="Senha"
            type="password"
            autoComplete="current-password"
            required
          />
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          /> */}
          <St.ForgotPass>Esqueceu sua senha?</St.ForgotPass>
          <CustomButton variant="contained">Entrar</CustomButton>
        </St.SectionForm>
        <St.HelperSection>
          <St.HelperColumn>
            <p>Novo por aqui?</p>
            <a href="">Conheça nossa plataforma</a>
          </St.HelperColumn>
          <St.Divisor />
          <St.HelperColumn>
            <p>Algum problema?</p>
            <a href="">Fale Conosco</a>
          </St.HelperColumn>
        </St.HelperSection>
        <St.Register>
          Cadastre-se
        </St.Register>
      </St.Content>
    </St.Container>
  );
}