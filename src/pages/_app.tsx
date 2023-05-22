import Layout from '@/components/layout'
import { AuthProvider } from '@/context/auth/provider'
import { CartProvider } from '@/context/cart/provider'
import { GlobalStyles } from '@/styles/config/global'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  GlobalStyles()

  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </AuthProvider>
  )
}
