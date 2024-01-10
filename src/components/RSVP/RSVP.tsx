import { useRef, useState } from 'react';
import './RSVP.scss';
import { RSVPFormData, sendRSVPForm } from '@/app/[locale]/sendRSVPForm';

const RSVP = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const emptyFormData = {
    name: '',
    email: '',
    needAccomodation: false,
    specialRequest: '',
  };
  const [formData, setFormData] = useState<RSVPFormData>(emptyFormData);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleFoodRequestChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, specialRequest: e.target.value });
  };

  const handleRadioButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFormData({ ...formData, needAccomodation: true });
    } else {
      setFormData({ ...formData, needAccomodation: false });
    }
  };
  const submitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const res = await sendRSVPForm({
      name: formData.name,
      email: formData.email,
      specialRequest: formData.specialRequest,
      needAccomodation: formData.needAccomodation,
    });

    console.log(res);

    if (formRef.current) {
      formRef.current.reset();
      setFormData(emptyFormData);
    }
  };
  return (
    <div className='rsvp'>
      <div className='formContainer'>
        <div className='title'>
          <h1>When we say I do, will we be seeing you?</h1>
          <p>(Please, reply before April 30.)</p>
        </div>
        <form ref={formRef} onSubmit={submitContact}>
          <div id='nameInput' className='inputSection'>
            <p className='inputLabel'>Name</p>
            <input
              autoComplete='off'
              id='name'
              type='text'
              value={formData.name}
              onChange={handleNameChange}
            ></input>
          </div>
          <div id='foodRequestInput' className='inputSection'>
            <p className='inputLabel'>
              Do you have any food allergies or any special meal requests?
            </p>
            <textarea
              id='foodRequest'
              value={formData.specialRequest}
              onChange={handleFoodRequestChange}
            ></textarea>
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
                  onChange={handleRadioButtonChange}
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
            <input
              autoComplete='off'
              type='email'
              value={formData.email}
              onChange={handleEmailChange}
            ></input>
          </div>
          <button type='submit'>RSVP</button>
        </form>
      </div>
    </div>
  );
};

export default RSVP;
