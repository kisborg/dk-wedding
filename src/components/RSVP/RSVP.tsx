import { useEffect, useRef, useState } from 'react';
import './RSVP.scss';
import { RSVPFormData, sendRSVPForm } from '@/app/[locale]/sendRSVPForm';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Tooltip } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../Logo/Logo';

const tooltipTheme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(255, 99, 71, 0.9)',
        },
        arrow: {
          color: 'rgba(255, 99, 71, 0.9)',
        },
      },
    },
  },
});
const RSVP = () => {
  const t = useTranslations('RSVP');
  const formRef = useRef<HTMLFormElement>(null);
  const emptyFormData = {
    name: '',
    willAttend: undefined,
    mealRequest: '',
    needAccomodation: undefined,
    accomodationGuestNumber: undefined,
    needTransportation: undefined,
  };
  const [formData, setFormData] = useState<RSVPFormData>(emptyFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [hasValidationError, setHasValidationError] = useState<boolean>(false);
  const [formSubmitFailed, setFormSubmitFailed] = useState<boolean>(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value });
  };

  useEffect(() => {
    return () => {
      setFormData(emptyFormData);
      setCurrentStep(1);
      formRef.current?.reset();
    };
  }, []);
  const handleFoodRequestChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, mealRequest: e.target.value });
  };

  const handleAccomodationRadioButtonChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      setFormData({ ...formData, needAccomodation: e.target.value });
    }
  };

  const handleWillAttendRadioButtonChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      setFormData({ ...formData, willAttend: e.target.value });
    }
  };

  const handletransportationRadioButtonChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      setFormData({ ...formData, needTransportation: e.target.value });
    }
  };

  const handleAccomodationGuestNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      accomodationGuestNumber: parseFloat(e.target.value),
    });
  };

  const checkValidity = (): boolean => {
    switch (currentStep) {
      case 1:
        if (!formData.name || !formData.willAttend) {
          setHasValidationError(true);
          return false;
        } else {
          setHasValidationError(false);

          if (formData.willAttend === 'No') {
            setCurrentStep(7);
            submitEarly();
          } else {
            setCurrentStep(2);
          }
          return true;
        }
      case 2:
        setCurrentStep(3);
        return true;
      case 3:
        if (!formData.needAccomodation) {
          setHasValidationError(true);
          return false;
        } else if (formData.needAccomodation === 'Yes') {
          setHasValidationError(false);
          setCurrentStep(4);
        } else {
          setHasValidationError(false);
          setCurrentStep(5);
        }
        return true;
      case 4:
        if (!formData.accomodationGuestNumber) {
          setHasValidationError(true);
          return false;
        } else {
          setHasValidationError(false);
          setCurrentStep(5);
        }
        return true;
      case 5:
        if (!formData.needTransportation) {
          setHasValidationError(true);
          return false;
        } else {
          setHasValidationError(false);
          setCurrentStep(6);
        }
        return true;
      default:
        return true;
    }
  };

  const submitEarly = async () => {
    try {
      await sendRSVPForm({
        name: formData.name,
        willAttend: formData.willAttend,
        mealRequest: formData.mealRequest,
        needAccomodation: formData.needAccomodation,
        accomodationGuestNumber: formData.accomodationGuestNumber,
        needTransportation: formData.needTransportation,
      });
    } catch (e) {
      setFormSubmitFailed(true);
      formRef.current?.reset();
      setFormData(emptyFormData);
    }

    if (formRef.current) {
      formRef.current.reset();
      setFormData(emptyFormData);
    }
  };

  const submitContact = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const isFormValid = checkValidity();
    if (isFormValid) {
      try {
        await sendRSVPForm({
          name: formData.name,
          willAttend: formData.willAttend,
          mealRequest: formData.mealRequest,
          needAccomodation: formData.needAccomodation,
          accomodationGuestNumber: formData.accomodationGuestNumber,
          needTransportation: formData.needTransportation,
        });
      } catch (e) {
        setFormSubmitFailed(true);
        formRef.current?.reset();
        setFormData(emptyFormData);
      }
      if (formRef.current) {
        formRef.current.reset();
        setFormData(emptyFormData);
      }

      setCurrentStep(6);
    }
    console.log(formData);
  };
  return (
    <div className='rsvp'>
      <div className='logo-container'>
        <Logo />
      </div>
      {!formSubmitFailed && (
        <ThemeProvider theme={tooltipTheme}>
          <div className='formContainer'>
            {currentStep <= 5 && (
              <form ref={formRef} noValidate onSubmit={submitContact}>
                {currentStep === 1 && (
                  <motion.div className='step-1 form-section'>
                    <div className='title'>
                      <h1>{t('willAttend')}</h1>
                      <p>{t('replyBefore')}</p>
                    </div>
                    <div id='nameInput' className='inputSection'>
                      <p className='inputLabel'>{t('name')}</p>
                      <Tooltip
                        open={!formData.name && hasValidationError}
                        arrow
                        title={t('rsvpValidation.name')}
                      >
                        <input
                          autoComplete='off'
                          id='name'
                          type='text'
                          value={formData.name}
                          onChange={handleNameChange}
                          onFocus={() => setHasValidationError(false)}
                          required
                        ></input>
                      </Tooltip>
                    </div>

                    <Tooltip
                      open={!formData.willAttend && hasValidationError}
                      arrow
                      title={t('rsvpValidation.selectOption')}
                    >
                      <div
                        className='radioButtonContainer'
                        onFocus={() => setHasValidationError(false)}
                      >
                        <label className='radioGroup'>
                          <input
                            autoComplete='off'
                            name='willAttend'
                            type='radio'
                            value='Yes'
                            onChange={handleWillAttendRadioButtonChange}
                            required
                          ></input>
                          <span>{t('yes')}</span>
                        </label>
                        <label className='radioGroup'>
                          <input
                            autoComplete='off'
                            name='willAttend'
                            type='radio'
                            value='No'
                            onChange={handleWillAttendRadioButtonChange}
                          ></input>
                          <span>{t('no')}</span>
                        </label>
                      </div>
                    </Tooltip>
                  </motion.div>
                )}
                {currentStep === 2 && (
                  <motion.div className='step-2 form-section'>
                    <div id='foodRequestInput' className='inputSection'>
                      <h1 className='section-title'>{t('foodAllergy')}</h1>
                      <textarea
                        id='foodRequest'
                        placeholder={t('foodAllergyPlaceholder')}
                        value={formData.mealRequest}
                        onChange={handleFoodRequestChange}
                      ></textarea>
                    </div>
                  </motion.div>
                )}
                {currentStep === 3 && (
                  <motion.div className='step-3 form-section'>
                    <div id='accomodationInput' className='inputSection'>
                      <div className='accomodation-intro'>
                        <p>{t('accomodation_intro')}</p>
                        <p>{t('accomodation_prices')}</p>
                        <ul className='price-list'>
                          <li>
                            {t.rich('accomodation_prices_adults', {
                              bold: (chunks) => <b>{chunks}</b>,
                            })}
                          </li>
                          <li>
                            {t.rich('accomodation_prices_kids', {
                              bold: (chunks) => <b>{chunks}</b>,
                            })}
                          </li>
                          <li>
                            {t.rich('accomodation_prices_kids_small', {
                              bold: (chunks) => <b>{chunks}</b>,
                            })}
                          </li>
                        </ul>
                      </div>
                      <Tooltip
                        open={!formData.needAccomodation && hasValidationError}
                        arrow
                        title={t('rsvpValidation.selectOption')}
                      >
                        <div
                          className='radioButtonContainer'
                          onFocus={() => setHasValidationError(false)}
                        >
                          <label className='radioGroup'>
                            <input
                              autoComplete='off'
                              name='accomodation'
                              type='radio'
                              value='Yes'
                              onChange={handleAccomodationRadioButtonChange}
                              required
                            ></input>
                            <span>{t('accomodation_yes')}</span>
                          </label>
                          <label className='radioGroup'>
                            <input
                              autoComplete='off'
                              name='accomodation'
                              type='radio'
                              value='No'
                              onChange={handleAccomodationRadioButtonChange}
                            ></input>
                            <span>{t('accomodation_no')}</span>
                          </label>
                        </div>
                      </Tooltip>
                    </div>
                  </motion.div>
                )}
                {currentStep === 4 && (
                  <div className='step-4 form-section'>
                    <h1 className='section-title'>
                      {t('accomodation_num_of_guests')}
                    </h1>
                    <Tooltip
                      open={
                        !formData.accomodationGuestNumber && hasValidationError
                      }
                      arrow
                      title={t('rsvpValidation.numberOfGuests')}
                    >
                      <input
                        onFocus={() => setHasValidationError(false)}
                        type='number'
                        value={formData.accomodationGuestNumber}
                        onChange={handleAccomodationGuestNumberChange}
                        required
                      />
                    </Tooltip>
                  </div>
                )}
                {currentStep === 5 && (
                  <motion.div className='step-5 form-section'>
                    <div className='travel-intro'>
                      <p>{t('transportation_intro')}</p>
                      <p>{t('transportation_intro_p2')}</p>
                      <ul className='transportation-list'>
                        <li>{t('transportation_to_ceremony')}</li>
                        <li>{t('transportation_to_venue')}</li>
                      </ul>
                    </div>
                    <Tooltip
                      arrow
                      open={!formData.needTransportation && hasValidationError}
                      title={t('rsvpValidation.selectOption')}
                    >
                      <div
                        className='radioButtonContainer'
                        onFocus={() => setHasValidationError(false)}
                      >
                        <label className='radioGroup'>
                          <input
                            autoComplete='off'
                            name='transportation'
                            type='radio'
                            value='no'
                            onChange={handletransportationRadioButtonChange}
                          ></input>
                          <span>{t('transportation_no')}</span>
                        </label>
                        <label className='radioGroup'>
                          <input
                            autoComplete='off'
                            name='transportation'
                            type='radio'
                            value='yes'
                            onChange={handletransportationRadioButtonChange}
                            required
                          ></input>
                          <span>{t('transportation_yes')}</span>
                        </label>
                      </div>
                    </Tooltip>
                  </motion.div>
                )}
                {currentStep < 5 && (
                  <button type='button' onClick={checkValidity}>
                    {t('next')}
                  </button>
                )}
                {currentStep === 5 && <button type='submit'>RSVP</button>}
              </form>
            )}
            {currentStep === 6 && (
              <div className='form-section step-6'>
                <h1>{t('thankyou')}</h1>
                <p>{t('signature')}</p>
              </div>
            )}
            {currentStep === 7 && (
              <div className='form-section step-7'>
                <h1>{t('sorry_cannot_attend')}</h1>
                <p>{t('signature')}</p>
              </div>
            )}
            <div className='progress-container'>
              <ProgressBar currentStep={currentStep} totalSteps={6} />
            </div>
          </div>
        </ThemeProvider>
      )}
      {formSubmitFailed && (
        <div className='submit-error-container'>
          <h1>{t('submit_error_title')}</h1>
          <p>{t('submit_error_detail')}</p>
        </div>
      )}
    </div>
  );
};

export default RSVP;
