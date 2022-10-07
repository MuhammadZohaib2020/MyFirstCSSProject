import React from 'react'
import  heo from "C:/Users/Haroon Elahi/Desktop/Zohaib Projects/myapppage/src/components/signs-and-banners-banner.jpg"
import "./page.css";
const Page = () => {
  return (
    <>
    <div className="table">
      <div className="Shipping">
      <h4 className="h2a">Shipment Details:</h4>
      <p>Agent Refrence Number : NA
      <br/>
      Origin : Islamabad
      <br/>
      Destination : SIALKOT
      <br/>
      Booking Date : 28-SEP-22 00:00
      </p>
      </div>
      <div className="Stable">
        
        <h5>  Shipment Tracking Summary</h5>
        <p> Current Status: <span className="clr"> Scheduled for dilivery</span>
        <br/>Date Time: 29-SEP-22 00:00<br/><br/>

        </p>
        <br/>
        <br/>
      <img className="image"src={heo} alt="hello" width="950" height="auto"/>
      <h4 className="h3a">Track History:</h4>
      <table>
        
        <tr className="h2a">
        <th className='a' >Date Time</th>
        <th className='abc'>Status</th>
        <th>Location</th>
      
        </tr>
        <tr>
        <td>29-SEP-22 00:00</td>
        <td>Scheduled for dilivery</td>
        <td>SIALKOT</td>
        </tr>
        <tr>
        <td>29-SEP-22 00:00</td>
        <td>Scheduled for dilivery</td>
        <td>RAWALPINDI</td>
        </tr>
        <tr>
        <td>29-SEP-22 00:00</td>
        <td>Department From Origin</td>
        <td>ISLAMABAD</td>
        </tr>
      </table>
      <br/>
      <br/>
      
      </div>
    </div>
    <div className="Footer ">
        <h2 className="underline">ABOUT US</h2>
        
        </div>
        <p className='P'>tcsexpress.com</p>
        
    </>
  )
}

export default Page