import '@styles/globals.css';
import { Children } from 'react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    icon :'https://www.freeiconspng.com/thumbs/idea-icon/idea-icon-4.png',
    title:"IDEA",
    description: "Discover and Idea"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en' >
        <body>
            <Provider>
        <div className='main'>
          <div className='gradient' />
            </div>
            <main className='app'>
                <Nav />
                {children}
            </main> 
            </Provider>
           
        </body>
    </html>
    )
}

export default RootLayout