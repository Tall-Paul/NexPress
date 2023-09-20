import Title from './title.js'
import RightLinks from './rightLinks.js'
import RecentPosts from './recentPosts.js'

import Head from 'next/head'

export default function Layout({children}){
    return (
        <>
            <Head>
                <link rel="icon" href="https://tall-paul.co.uk/wp-content/uploads/2021/01/download-150x150.png" sizes="32x32" />
                <link rel="icon" href="https://tall-paul.co.uk/wp-content/uploads/2021/01/download.png" sizes="192x192" />
                <link rel="apple-touch-icon" href="https://tall-paul.co.uk/wp-content/uploads/2021/01/download.png" />
                <meta name="msapplication-TileImage" content="https://tall-paul.co.uk/wp-content/uploads/2021/01/download.png" />
            </Head>
            <Title />
            <div class="main_container">
                <div class="main_item left"></div>
                <div class="main_item main">
                    <div class="main-content">{children}</div>
                    <div class="main-right">                        
                        <RightLinks/>
                        <RecentPosts/>
                    </div>
                </div>
                <div class="main_item right"></div>
            </div>
        </>
    )
}