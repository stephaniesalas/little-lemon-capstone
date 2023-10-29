import React from 'react';
import Nav from '../Nav';
import './BookingPage.css'
import Footer from '../Footer';
import { useState } from 'react';
//need to figure out how to make things required, checking for errors//

function BookingForm() {
    // constructor(props) {
    //   super(props);
    //   this.state = {value: ''};
  
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }
  

    
   

    const [guests, setGuests] = useState("4"); 
    const [requests, setRequests] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [time, setTime] = useState("7:00 pm");
    const [resDate, setResDate] = useState('')
    const availableTimes=["7:00 pm", "7:30 pm", "8:00 pm", "8:30 pm", "9:00 pm", "9:30 pm"];
    const [selectedOption, setSelectedOption] = useState("option1")


    function handleSubmit(e) {
        e.preventDefault();
        alert(
      `Thank you, ${firstName}!
      Your reservation for ${guests} guests
      at ${time} on ${resDate}
      has been scheduled.
        
      Please check your email for confirmation.` );
    }
      return (
        <div>
        <form onSubmit={handleSubmit}>
          <label for="firstname">First Name:</label>
          <input type="text"
          required
          placeholder='First Name'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          />
          <br></br>
          <label for="lastname">Last Name:</label>
          <input type="text"
          required
          placeholder='Last Name'
          value={lastname}
          onChange={e => setLastname(e.target.value)}
          />
          <br></br>
          <label for="email">Email:</label>
          <input type="email"
           required
           placeholder='person@example.com'
           value={email}
           onChange={e => setEmail(e.target.value)}
           />
          <br></br>
          <label for="resDate">Date of Reservation:</label>
            <input type="date" id="resDate"
            required
            value={resDate}
            onChange={e => setResDate(e.target.value)}
            placeholder='Select Date' />
            <br></br>
            <label for="res-time">Time of Reservation:</label>
            <select id="res-time"
            required
            placeholder={'Select Time'}
            value={time}
            onChange = {e => setTime(e.target.value)}
            >{
            availableTimes.map(opt => <option>{opt}</option>)
            }
            </select>
            <br></br>
            <label for="guests">Number of Guests:</label>
            <input type="number"
             placeholder="4"
             min="1"
             max="10"
             id="guests"
             value={guests}
            onChange={e => setGuests(e.target.value)}
            />
             <br></br>
            <label for="occaision">Occasion:</label>
            <select id="occaision"
            value={selectedOption}
            placeholder={'Select Occasion'}
            onChange={e => setSelectedOption(e.target.value)}>
                <option value="option1">Select Occasion</option>
                <option value="option2">Birthday</option>
                <option value="option3">Anniversary</option>
            </select>
            <br></br>
            <div className="field">
            <label for="requests">
            Any special requests?<br></br>
            </label>
            <textarea value={requests}
            placeholder='We need 2 highchairs and a wheel-chair accessible table.'
            onChange={e => setRequests(e.target.value)} id="textarea"/>
            </div>
            <br></br>
          <input class="submitButton" type="submit" value="Schedule your reservation" />
        </form>
        </div>
      );
    }

function BookingPage () {
    return <div>
        <Nav />
        <div class="box">
        <h1>Reserve a Table</h1>
        <h3 id="formtitle">Fill out the form below to reserve your table!</h3>
        </div>
       <div class="form">
       <BookingForm />
        </div>
       
        <Footer />
    </div>
}
export default BookingPage;