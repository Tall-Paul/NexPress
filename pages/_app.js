import '../styles/globals.css';

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { getRecentPosts } from '../lib/service';
import React, { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())
  const getLayout = Component.getLayout || ((page) => page)
  
  
  return (
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
  )
  }
  

  