import { addDoc, collection, Timestamp } from 'firebase/firestore/lite';
import { firestore } from '../utils/firebaseConfig';

export type RSVPFormData = {
  name: string | undefined;
  willAttend: string | undefined;
  mealRequest: string | undefined;
  needAccomodation: string | undefined;
  accomodationGuestNumber: number | undefined;
  needTransportation: string | undefined;
};

export const sendRSVPForm = async ({
  name,
  willAttend,
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
