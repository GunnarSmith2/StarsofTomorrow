import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'
import HeaderMegaMenu from './components/header'
import EventModal from './components/CreateEvent'
import { Container, Title, Text, Space, Group } from '@mantine/core'

// context goes in parentheses
export async function getServerSideProps() {
    try {
        await clientPromise
        // `await clientPromise` will use the default database passed in the MONGODB_URI
        // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
        //
        // `const client = await clientPromise`
        // `const db = client.db("myDatabase")`
        //
        // Then you can execute queries against your database like so:
        // db.find({}) or any of the MongoDB Node Driver commands

        return {
            props: { isConnected: true },
        }
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false },
        }
    }
}

export default function Home({
    isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
                <Head>
                    <title>Events</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <header>
                    <div className='header'>
                        <HeaderMegaMenu />
                    </div>
                </header>
                <main>
                    <Container>
                        <Group position='apart'>
                        <Group>   
                        <Title order={1} align='center'>Events</Title>
                        </Group> 
                        <EventModal />
                        </Group>
                    </Container>
                    <Space h='lg' />
                    <Title order={2}>No Events are Avaliable</Title>
                    <Text fz='md'>Check back at another time</Text>
                </main>
        </>
    )
}  