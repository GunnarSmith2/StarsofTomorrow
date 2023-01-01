import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'
import HeaderMegaMenu from './components/header'
import { ActionToggle } from './components/Colormode'

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
        <><div className='header'>
            <HeaderMegaMenu />
        </div><div className="container">
                <Head>
                    <title>Events</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <h1>Events</h1>
                    <ul>
                        <li>Spot for future events</li>
                    </ul>
                </main>
            </div></>
    )
}  