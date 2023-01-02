import next from 'next';
import {
    Box,
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Space,
} from '@mantine/core';
import { ActionToggle } from './components/Colormode';

export default function EventAthletes() {
    const exAthletes = [
        {
            name: 'Allee Athlete',
            class: 2023,
            number: 22
        },
        {
            name: 'Hannah Hitter',
            class: 2024,
            number: 32
        },
        {
            name: 'Bri Bomber',
            class: 2024,
            number: 18
        },
        {
            name: 'Susan Superstar',
            class: 2023,
            number: 16
        },
    ];
    // var ageGroups = function (exAthletes, 'class') {
    //     return exAthletes.reduce(function (rv, x) {
    //         (rv[x['class']] = rv[x['class']] || []).push(x);
    //         return rv;
    //     }, {});
    // };

    // console.log(ageGroups(['2023', '2024'], 'length'));
    return (
        // title will be changed to get info from api
        <Container>
            <Title align="center" sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, paddingTop: '1rem' }} >
                Chicago
            </Title>
            {exAthletes.map((athlete) => (
                <Text align='left' size='sm' sx={{ fontFamily: 'proxima-nova, Verdana, Arial, sans-serif' }} key={athlete.name}>
                    {athlete.number} - {athlete.name} - {athlete.class}
                </Text>
            ))}
        </Container>
    )
}