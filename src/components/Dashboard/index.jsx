import { Container, Transport, HeaderTransport, Fuel } from './style';
import { Card, CardContent, Divider, Grid } from '@mui/material';
import logo from '../../assets/img/logo-jh-white.svg';

export default function Dashboard() {
    return (
        <Container>
            <nav>
                <img src={logo} width={60} alt="logo" />
            </nav>
            <Transport>
                <Card>
                    <CardContent>
                        <HeaderTransport>
                            <h3>Transporte de batata para Potatoes's Chips</h3>
                            <p>Em andamento</p>
                            <span>27/05/2022</span>
                        </HeaderTransport>
                        <Divider />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <ul>
                                    <li>Transporte por Josias Henrique no veículo Iveco placa ghb-4578</li>
                                    <li>Saída: Vargem Grande do Sul - SP</li>
                                    <li>Destino: Curitiba - PR</li>
                                    <li>Valor: R$15.000,00</li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ul>
                                    <li>Km percorrido: 4521254</li>
                                    <li>Gastos com combustível: R$2.452,00</li>
                                    <li>Média do veículo: 2,30</li>
                                    <li>Lucro liquído: R$13.053,00</li>
                                </ul>
                            </Grid>
                            <Grid item xs={12}>

                                <Card>
                                    <CardContent>
                                        <Fuel>
                                            <p>Posto de combustivel X</p>
                                            <p>235L</p>
                                            <p>458784Km</p>
                                            <p>R$563,23</p>
                                            <p>12/02/2022</p>
                                        </Fuel>
                                    </CardContent>
                                </Card>

                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Transport>
        </Container>
    );
}