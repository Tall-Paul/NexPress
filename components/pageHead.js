import Head from 'next/head'

export default function PageHead({content}){
    console.log(content.fullHead);
    return (
        <Head>
            <title>Testing</title>
            {content}
        </Head>
    )
}