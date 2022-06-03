import { Container } from './style';
import logo from '../../assets/img/logo-jh.svg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Principal() {
    return (
        <Container>
            <img src={logo} width={80} alt="logo" />
            <h1>Bem-Vindo!</h1>
            <p>Este site é apenas uma demonstração dos conhecimentos <br />
                adquiridos com programação backend e frontend.</p>
            <Link to="/dashboard">
                <Button variant="contained">
                    Entrar
                </Button>
            </Link>
        </Container>
    );
}