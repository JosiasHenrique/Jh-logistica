import { Card, CardContent, Divider } from "@mui/material";
import { HeaderTransport } from '../../pages/Dashboard/style';

export default function CardTransport({data}) {
    return (
        <Card>
            <CardContent>
                <HeaderTransport>
                    <h3>{data.title}</h3>
                    <p>{data.status}</p>
                    <span>{data.date}</span>
                </HeaderTransport>
                <Divider />
                <ul>
                    <li>Transporte por <strong>{data.truck.driver.nome}</strong> no veículo <strong>{data.truck.model}</strong> placa <strong>{data.truck.plate}</strong></li>
                    <li>Saída: <strong>{data.start}</strong></li>
                    <li>Destino: <strong>{data.destination}</strong></li>
                    <li>Valor: <strong>{data.amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong></li>
                </ul>
            </CardContent>
        </Card>
    );
}