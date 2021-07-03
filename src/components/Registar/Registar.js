import React from 'react';


const SignIn=function({onRouteChange}){
    

return (
    // <div style={{transform:"scale(1.2, 1.2)"}}>
    <div>
<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-1 center">    
    <main className="pa4 black-80">
<form className="measure ">
        <h1 className="f4 fw6 ph0 mh0">Registar</h1>
        <label className="db fw6 lh-copy f6">Name:</label>
        <input type="text" id="email-id"  name="fname" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70"/><br />
        <label className="db fw6 lh-copy f6">Email:</label>
        <input type="text" id="email-id"  name="fname" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70"/><br />
        <label className="db fw6 lh-copy f6">Password:</label>
        <input type="password" id="password-id"  name="fname" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70"/><br /><br />
        <input type="submit" value="Register 1" 
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
             style={{zIndex:2}}
             onClick={()=>{
                onRouteChange('home')}}
             /><br />
         <br/>
      
</form>
    </main>
    </article>
</div>
)

}

export default SignIn;




