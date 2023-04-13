import React from 'react'

const Login = () => {
  return (
   <section className="hero has-background-grey-light is-fullheight is-fullwidth">
     <div className="hero-body">
       <div className="container">
        <div className="columns is-centered">
            <div className="column is-4-desktop">
                <form className="bos">
                    <div className="field">
                        <label  className="label">Email or Username</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder='username'/>
                        </div>
                    </div>
                    <div className="field">
                        <label  className="label">Password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder='********'/>
                        </div>
                    </div>
                    <div className="field">
                     <buttton className="button is-success is-fullwidth">Login</buttton>
                    </div>
                </form>
            </div>
        </div> 
       </div>
     </div>
   </section>
  )
}

export default Login