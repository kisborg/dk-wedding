import { addDoc, collection, Timestamp } from 'firebase/firestore/lite';
import { firestore } from '../utils/firebaseConfig';

export type RSVPFormData = {
  name: string | undefined;
  willAttend: 'Yes' | 'No' | 'Other' | undefined;
  willAttendDetails: string | undefined;
  mealRequest: string | undefined;
  needAccomodation: 'Yes' | 'No' | 'DontKnowYet' | undefined;
  accomodationGuestNumber: number;
  needTransportation: 'Yes' | 'No' | undefined;
};

export const sendRSVPForm = async ({
  name,
  willAttend,
  willAttendDetails,
  mealRequest,
  needAccomodation,
  accomodationGuestNumber,
  needTransportation,
}: RSVPFormData) => {
  try {
    const ref = collection(firestore, 'rsvp');
    await addDoc(ref, {
      name,
      willAttend,
      willAttendDetails,
      mealRequest,
      needAccomodation,
      accomodationGuestNumber,
      needTransportation,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
