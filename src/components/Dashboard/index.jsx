import { Container, Transport, HeaderTransport, Search } from './style';
import { Button, Card, CardContent, Divider, TextField } from '@mui/material';
import logo from '../../assets/img/logo-jh-white.svg';
import { useEffect, useState } from 'react';
import { BASE_URL } from "../../services/api";
import axios from 'axios';
import TuneIcon from '@mui/icons-material/Tune';
import { useForm } from 'react-hook-form';

export default function Dashboard() {
    const [initDate, setInitDate] = useState('');
    const [finalDate, setFinalDate] = useState('');
    const [transport, setTransport] = useState();
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        axios.get(`${BASE_URL}/transports?initDate=${initDate}&finalDate=${finalDate}`).then(response => {
            setTransport(response.data);
        });
    }, [initDate, finalDate]);

    async function handleSearch(data) {
        setInitDate(data.initdata);
        setFinalDate(data.finaldata);
    }

    return (
        <Container>
            <nav>
                <img src={logo} width={60} alt="logo" />
            </nav>
            <Search onSubmit={handleSubmit(handleSearch)}>
                <TextField label="Data inicial" type="date" name='initdata' color="secondary" InputLabelProps={{
                    shrink: true,
                }} sx={{ margin: '3px' }}  {...register("initdata")} />
                <TextField label="Data final" type="date" name='finaldata' color="secondary" InputLabelProps={{
                    shrink: true,
                }} sx={{ margin: '3px' }} {...register("finaldata")} />
                <Button type="submit" variant="contained" endIcon={<TuneIcon />}>Filtrar</Button>
            </Search>
            {transport? 
            transport?.map(x => (
                <Transport key={x.id}>
                    <Card>
                        <CardContent>
                            <HeaderTransport>
                                <h3>{x.title}</h3>
                                <p>{x.status}</p>
                                <span>{x.date}</span>
                            </HeaderTransport>
                            <Divider />
                            <ul>
                                <li>Transporte por <strong>{x.truck.driver.nome}</strong> no veículo <strong>{x.truck.model}</strong> placa <strong>{x.truck.plate}</strong></li>
                                <li>Saída: <strong>{x.start}</strong></li>
                                <li>Destino: <strong>{x.destination}</strong></li>
                                <li>Valor: <strong>{x.amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong></li>
                            </ul>
                        </CardContent>
                    </Card>
                </Transport>
            )) : <h1>Nenhum registro para mostrar</h1>
        }
        </Container>
    );
}