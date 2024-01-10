import './RSVP.scss';

const RSVP = () => {
  return (
    <div className='rsvp'>
      <div className='formContainer'>
        <div className='title'>
          <h1>When we say "I do", will we be seeing you?</h1>
          <p>(Please, reply before April 30.)</p>
        </div>
        <form>
          <div id='nameInput' className='inputSection'>
            <p className='inputLabel'>Name</p>
            <input autoComplete='off' id='name' type='text'></input>
          </div>
          <div id='numOfGuestsInput' className='inputSection'>
            <p className='inputLabel'>Number attending</p>
            <input autoComplete='off' id='numOfGuests' type='number'></input>
          </div>
          <div id='foodRequestInput' className='inputSection'>
            <p className='inputLabel'>
              Do you have any food allergies or any special meal requests?
            </p>
            <textarea id='foodRequest'></textarea>
          </div>
          <div id='accomodationInput' className='inputSection'>
            <p className='inputLabel'>
              Do you need accomodation for the night?
            </p>
            <div className='radioButtonContainer'>
              <label className='radioGroup'>
                <input
                  autoComplete='off'
                  name='accomodation'
                  type='radio'
                  value='yes'
                ></input>
                <span>Yes</span>
              </label>
              <label className='radioGroup'>
                <input
                  autoComplete='off'
                  name='accomodation'
                  type='radio'
                  value='no'
                ></input>
                <span>No</span>
              </label>
            </div>
          </div>
          <div id='emailInput' className='inputSection'>
            <p className='inputLabel'>
              Let us know your email, so we can send you updates
            </p>
            <input autoComplete='off' type='email'></input>
          </div>
          <button type='submit'>RSVP</button>
        </form>
      </div>
    </div>
  );
};

export default RSVP;
