import { Card, CardContent } from '@mui/material';
import { Resume } from '../../pages/Dashboard/style';

export default function CardResume({ amount, totalKm, media }) {
    return (
        <Resume>
            <Card>
                <CardContent>
                    <span>Total bruto</span>
                    <h4>{amount === 0 ? "sem registro" : amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <span>Km percorrido</span>
                    <h4> {totalKm === 0 ? "sem registro"  : `${totalKm}km`}</h4>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <span>Média (L/Km)</span>
                    <h4> {media === 0 ? "sem registro"  : Math.round(media)}</h4>
                </CardContent>
            </Card>
           
        </Resume>
    )
}