import Login from './Components/Login'
import './App.css'
import UserContextProvider from './Context/Contextprovider'
import Profile from './Components/Profile'

function App() {
  

  return (
   
    <UserContextProvider>
      <h1 className='text-[4rem] font-bold font-mono text-center'>Context API</h1>
      <Login/>
      <Profile/>
      </UserContextProvider>
      
    
  )
}

export default App
