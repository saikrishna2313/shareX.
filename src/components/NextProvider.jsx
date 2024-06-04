import {SessionProvider} from 'next-auth/react'
const NextProvider = ({children}) => {
  return (
   
    <SessionProvider>{children}</SessionProvider>
  )
}

export default NextProvider