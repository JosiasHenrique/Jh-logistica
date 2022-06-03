import { Container, Transport, Search, Stage } from './style';
import { Button, Snackbar, TextField, Alert } from '@mui/material';
import logo from '../../assets/img/logo-jh-white.svg';
import { useState } from 'react';
import { BASE_URL } from "../../services/api";
import axios from 'axios';
import TuneIcon from '@mui/icons-material/Tune';
import { useForm } from 'react-hook-form';
import CardTransport from '../../components/CardTransport';
import CardResume from '../../components/CardResume';

export default function Dashboard() {
    const [transport, setTransport] = useState(null);
    const { register, handleSubmit } = useForm();
    const [amount, setAmount] = useState(0);
    const [totalKm, setTotalkm] = useState(0);
    const [media, setMedia] = useState(0);
    const [open, setOpen] = useState(false);

    async function handleSearch(data) {

        //Resquest de transportes
        axios.get(`${BASE_URL}/transports?initDate=${data.initdata}&finalDate=${data.finaldata}`)
            .then(function (response) {
                let value = 0;
                // manipula o sucesso da requisição
                setTransport(response.data)
                response.data?.map(x => (
                    value += x.amount
                ))
                setAmount(value)
            })
            .catch(function (error) {
                // manipula erros da requisição
                setAmount(0)
                setTransport(null)
                setOpen(true);
            })

        //Resquest de combustiveis
        axios.get(`${BASE_URL}/fuels?initDate=${data.initdata}&finalDate=${data.finaldata}`)
            .then(function (response) {
                // manipula o sucesso da requisição
                let totalLiters = 0;

                response.data?.map(x => (
                    totalLiters += x.liter
                ))

                // Verificar se contém 2 objetos p/ fazer calculo.
                if (response.data.length > 1) {
                    setTotalkm(response.data[0].odometer - response.data[response.data.length - 1].odometer)
                    setMedia((response.data[0].odometer - response.data[response.data.length - 1].odometer) / totalLiters)
                } else {
                    setTotalkm(0)
                    setMedia(0)
                }
            })
            .catch(function (error) {
                // manipula erros da requisição
                setTotalkm(0)
                setMedia(0)
            })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Container>
            <nav>
                <img src={logo} width={60} alt="logo" />
            </nav>
            <Stage>
                <h1>Introdução</h1>
                <p><strong>1</strong>Escolha uma data inicial e uma data final válida.</p>
                <p><strong>2</strong>Clique em filtrar para buscar registros.</p>
            </Stage>
            <Search onSubmit={handleSubmit(handleSearch)}>
                <TextField label="Data inicial" type="date" name='initdata' color="secondary" InputLabelProps={{
                    shrink: true,
                }} sx={{ margin: '3px' }}  {...register("initdata")} />
                <TextField label="Data final" type="date" name='finaldata' color="secondary" InputLabelProps={{
                    shrink: true,
                }} sx={{ margin: '3px' }} {...register("finaldata")} />
                <Button type="submit" variant="contained" endIcon={<TuneIcon />}>Filtrar</Button>
            </Search>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Sem registro.
                </Alert>
            </Snackbar>

            <CardResume amount={amount} totalKm={totalKm} media={media} />

            {transport?.map(x => (
                <Transport key={x.id}>
                    <CardTransport data={x} />
                </Transport>
            ))}
        </Container>
    );
}