import { ThemeProvider } from 'next-themes'
import Container from '../components/Container'
import Navbar from '../components/navbar/Navbar'
import './globals.css'
import { Inter, Quicksand } from 'next/font/google'
import ThemeProviderO from './Providers/ThemeProviderO'
import Personals from '../components/Personals'
import { GlobalContextProvider } from './Providers/GlobalProvider'
import OuterContainer from '../components/OuterContainer'

const roboto = Quicksand({subsets: ['latin'] })
const inter = Inter({subsets: ['latin'] })

export const metadata = {
  title: 'Home - Thomas Booth',
  description: 'Professional portfolio designed and written by Thomas Booth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} tracking-wide w-screen overflow-x-hidden`}>
        <GlobalContextProvider>
          <OuterContainer>
            <ThemeProviderO>
              <Navbar />
              <Personals />
              <Container>
                {children}
              </Container>   
            </ThemeProviderO>    
          </OuterContainer>
        </GlobalContextProvider>   
      </body>
    </html>
  )
}
