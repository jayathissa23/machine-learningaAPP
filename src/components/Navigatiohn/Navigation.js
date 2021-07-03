import React from 'react';


const navigation=function({onRouteChange,isSignIn}){
    if(isSignIn){
        
      return (
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p  className='f3 link dim black underline pa3 pointer' 
            onClick={()=>onRouteChange('sign in')}>Sign Out</p>
        </nav>
    )
    }else{
        return (
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
                <p  className='f3 link dim black underline pa3 pointer' onClick={()=>onRouteChange('sign in')}>Sign IN</p>
                <p  className='f3 link dim black underline pa3 pointer' onClick={()=>onRouteChange('register')}>Registar</p>
            </nav>
        )
    }
}

export default navigation;





