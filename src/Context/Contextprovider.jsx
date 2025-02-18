import React from "react";
import UserContext from './context';
const UserContextProvider = ({children})=>{
    const [user , Setuser] = React.useState(null);
    return(
        //usercontextprovider is a wraper of usercontext isme value ko as a prop pass karte hain.
        
        <UserContext.Provider value = {{user , Setuser}}>
            {children} 
        </UserContext.Provider>
    )
}
export default UserContextProvider;