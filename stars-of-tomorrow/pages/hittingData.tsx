import next from 'next';
import { useState } from 'react';
import { useToggle, upperFirst } from '@mantine/hooks';
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
    Grid,
    Textarea,
} from '@mantine/core';
import { ActionToggle } from './components/Colormode';

export default function HittingData() {
    // const [formState, setFormState] = useState({ hitting: 0, swingOperation: 0, power: 0, swingPath: 0, barrelContact: 0 })
    // const { hitting, swingOperation, power, swingPath, barrelContact } = formState;
    // // const handleSubmit = (e) => {};

    // const addPoint = () => {
    //     setFormState(count => count + 1);
    // };

    const [hitting, setHitting] = useState(0);
    const [swingOperation, setSwingOperation] = useState(0);
    const [power, setPower] = useState(0);
    const [swingPath, setSwingPath] = useState(0);
    const [barrelContact, setBarrelContact] = useState(0);
    const [notes, setNotes] = useState('');

    const addHitting = () => {

        if (hitting === 4) {
            return
        } else {
            setHitting(count => count + 1);
        }

    };

    const subtractHitting = () => {

        if (hitting === 0) {
            return
        } else {
            setHitting(count => count - 1);
        }

    };

    const addSwingOperation = () => {

        if (swingOperation === 4) {
            return
        } else {
            setSwingOperation(count => count + 1);
        }

    };

    const subtractSwingOperation = () => {

        if (swingOperation === 0) {
            return
        } else {
            setSwingOperation(count => count - 1);
        }

    };

    const addPower = () => {

        if (power === 4) {
            return
        } else {
            setPower(count => count + 1);
        }

    };

    const subtractPower = () => {

        if (power === 0) {
            return
        } else {
            setPower(count => count - 1);
        }

    };

    const addSwingPath = () => {

        if (swingPath === 4) {
            return
        } else {
            setSwingPath(count => count + 1);
        }

    };

    const subtractSwingPath = () => {

        if (swingPath === 0) {
            return
        } else {
            setSwingPath(count => count - 1);
        }

    };

    const addBarrelContact = () => {

        if (barrelContact === 4) {
            return
        } else {
            setBarrelContact(count => count + 1);
        }

    };

    const subtractBarrelContact = () => {

        if (barrelContact === 0) {
            return
        } else {
            setBarrelContact(count => count - 1);
        }

    };

    const exAthlete = {
        name: 'Allee Hitter',
        class: 2023,
        number: 22,
        position: 'CF',
        bats: 'Right'
    };


    return (
        <Container>
            <ActionToggle />
            <Title
                align="center"
                sx={{ fontFamily: 'proxima-nova, Verdana, Arial, sans-serif', fontWeight: 900, color: 'yellow' }}
            >
                Hitting
            </Title>

            <Grid>
                <Grid.Col span={2}>
                    {exAthlete.name}
                </Grid.Col>
                <Grid.Col span={2} offset={2}>
                    # {exAthlete.number}
                </Grid.Col>
            </Grid>

            <Grid>
                <Grid.Col span={2}>
                    Position: {exAthlete.position}
                </Grid.Col>
                <Grid.Col span={2} offset={2}>
                    Class: {exAthlete.class}
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col span={2}>
                    Bats: {exAthlete.bats}
                </Grid.Col>
            </Grid>

            <Space h='xl' />

            <Grid>
                <Grid.Col span={3} sx={{ fontFamily: 'proxima-nova, Verdana, Arial, sans-serif', fontWeight: 900 }}>
                    Scouting Evaluation
                </Grid.Col>
                <Grid.Col span={3} offset={6} sx={{ fontFamily: 'proxima-nova, Verdana, Arial, sans-serif', fontWeight: 900 }}>
                    Grade
                </Grid.Col>
            </Grid>

            <Grid>
                <Grid.Col span={3} sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, paddingTop: '1rem' }}>
                    Hitting
                </Grid.Col>
                <Grid.Col span={1} offset={4}>
                    <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractHitting}>-</Button>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Text fw={700} ta='center'>{hitting}</Text>
                </Grid.Col>
                <Grid.Col span={1}>
                    <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addHitting}>+</Button>
                </Grid.Col>
            </Grid>

            <Grid>
                <Grid.Col span={3} sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, paddingTop: '1rem' }}>
                    Swing Operation
                </Grid.Col>
                <Grid.Col span={1} offset={4}>
                    <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractSwingOperation}>-</Button>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Text fw={700} sx={{ margin: 'auto' }} ta='center'>{swingOperation}</Text>
                </Grid.Col>
                <Grid.Col span={1}>
                    <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addSwingOperation}>+</Button>
                </Grid.Col>
            </Grid>

            <Grid>
                <Grid.Col span={3} sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, paddingTop: '1rem' }}>
                    Power
                </Grid.Col>
                <Grid.Col span={1} offset={4}>
                    <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractPower}>-</Button>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Text fw={700} ta='center'>{power}</Text>
                </Grid.Col>
                <Grid.Col span={1}>
                    <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addPower}>+</Button>
                </Grid.Col>
            </Grid>

            <Grid>
                <Grid.Col span={3} sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, paddingTop: '1rem' }}>
                    Swing Path
                </Grid.Col>
                <Grid.Col span={1} offset={4}>
                    <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractSwingPath}>-</Button>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Text fw={700} ta='center'>{swingPath}</Text>
                </Grid.Col>
                <Grid.Col span={1}>
                    <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addSwingPath}>+</Button>
                </Grid.Col>
            </Grid>

            <Grid>
                <Grid.Col span={3} sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, paddingTop: '1rem' }}>
                    Barrel Contact
                </Grid.Col>
                <Grid.Col span={1} offset={4}>
                    <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractBarrelContact}>-</Button>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Text fw={700} ta='center'>{barrelContact}</Text>
                </Grid.Col>
                <Grid.Col span={1}>
                    <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addBarrelContact}>+</Button>
                </Grid.Col>
            </Grid>

            <Grid>
                <Grid.Col span={3} sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, paddingTop: '1rem' }}>
                    Notes
                </Grid.Col>

                <Grid.Col span={6} offset={2}>
                    <Textarea autosize minRows={4} placeholder='Player Notes' value={notes} onChange={(event) => setNotes(event.currentTarget.value)} />
                </Grid.Col>

            </Grid>


        </Container>

    )
}