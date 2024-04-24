import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Export from '../components/buttons/Export'
import Delete from '../components/buttons/Delete'

function CreatedPoll() {
  return (
    <div className='layout-container55'>
      <Navbar></Navbar>
      <div className='container777'>
        <div className='Cont44'>
          <p className='text33'>Which is better, Ice cream or juice ? </p>
        </div>
        <br></br>
        <br></br>
        <div className='contBox44'>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className='Box44' >
              <div style={{ opacity: "50%" }}>Ice Cream</div>
            </div>
            <div className='value44' style={{ fontWeight: "500", fontSize: "21px", fontFamily: "'Roboto', sans-serif" }}>
              36%
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className='Box44'>
              <div style={{ opacity: "50%" }}>Juice</div>
            </div>
            <div className='value44' style={{ fontWeight: "500", fontSize: "21px", fontFamily: "'Roboto', sans-serif" }}>
              64%
            </div>
          </div>
          <div class="buttons777">

            <Delete></Delete>

          </div>

        </div>
      </div>

    </div>
  )
}

export default CreatedPoll