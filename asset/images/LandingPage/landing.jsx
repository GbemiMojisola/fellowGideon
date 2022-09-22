import React from "react";

const Landing = () => {
    return(
        <>
           <div
           style={{
               width:"100%",
               height:"calc(100vh - 80px)",
               display:"flex",
               justifyContent:"space-around",
               alignItems:"center"
           }}>

               <div > 
                   <div style={{
                   fontSize:"60px",
                   fontWeight:"600",
               }}>Teach Anything<br/> Learn Anything</div>
                   <div style={{
                   fontSize:"30px",
                   marginTop:"15px",
               }}> 30K+ Students Trust Us</div>
                   <button style={{ padding:"15px 40px",
                   display:"flex",
                   justifyContent:"center",
                   alignItems:"center",
                   border:"1px solid #ff590f",
                   cursor:"pointer",
                   marginTop:"30px",
                   fontWeight:"600",
                   color:"#ff590f",
                   background:"transparent",
                }}>Get Started</button>
               </div>

               <div>
                   <img src="/image/illustration.png" alt="eben" style={{ height:"500px",}} />
               </div>
               
            </div> 
        </>
    )
}

export default Landing;