import { addDoc, collection, Timestamp } from 'firebase/firestore/lite';
import { firestore } from '../utils/firebaseConfig';

export type RSVPFormData = {
  name: string | undefined;
  specialRequest: string | undefined;
  needAccomodation: boolean | undefined;
  email: string | undefined;
};

export const sendRSVPForm = async ({
  name,
  specialRequest,
  needAccomodation,
  email,
}: RSVPFormData) => {
  try {
    const ref = collection(firestore, 'rsvp');
    await addDoc(ref, {
      name,
      email,
      specialRequest,
      needAccomodation,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
