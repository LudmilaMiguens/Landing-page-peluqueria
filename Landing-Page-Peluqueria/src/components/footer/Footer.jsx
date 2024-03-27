

import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { AiOutlineScissor } from 'react-icons/ai';

export default function App() {
  return (
    
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          
            <MDBIcon  />
          
         <h1>Cortes</h1>
         <AiOutlineScissor />
          <h2>Urbanos</h2>
          
 
 

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />Google
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />Instagram
          </MDBBtn>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />github
          </MDBBtn>
        </section>
      </MDBContainer>
      <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
        <MDBIcon fab icon='linkedin-in' />Linkedin
      </MDBBtn>



    <MDBBtn style={{ backgroundColor: '#55acee' }} href='#'>
      <MDBIcon className='me-2' fab icon='twitter' /> Twitter
    </MDBBtn>
    <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />Facebook
      </MDBBtn>
      
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}