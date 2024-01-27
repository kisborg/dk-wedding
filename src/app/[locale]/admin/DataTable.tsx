import './Admin.scss';
import React, { useEffect, useState } from 'react';

import { RSVPFormData } from '../sendRSVPForm';
import { collection, getDoc, getDocs } from 'firebase/firestore/lite';
import { firestore } from '@/app/utils/firebaseConfig';


const DataTable = () => {
  const [records, setRecords] = useState<{id: string, data: RSVPFormData}[]>([]);
  useEffect(() => {

    const getAllRecords = async () => {
      const docs: {id: string, data: RSVPFormData}[] = [];
      const rsvpCollectionRef = collection(firestore, 'rsvp');
      const querySnapshot = await getDocs(rsvpCollectionRef);
      querySnapshot.forEach((doc) => {
        const record = {
          id: doc.id,
          data: doc.data() as RSVPFormData
        }
        docs.push(record);
      })
      console.log(docs);
      setRecords(docs);
      
    }

    getAllRecords()


  }, [])
  
  return (
    <div>
      <div className='filters'>
        <button>Will</button>
      </div>
      <table className='table'>
        <tr className='tableHeader'>
          <th className='name header' id='name-header'>Name</th>
          <th className='willAttend header' id='willAttend-header'>Will attend?</th>
          <th className='mealRequest header' id='mealRequests-header'>Special meal requests</th>
          <th className='needAccomodation header' id='needAccomodation-header'>Needs accomodation?</th>
          <th className='accomodationNumber header' id='accomodationNumber-header'>Accomodation number of guests</th>
          <th className='transportation header' id='transportation-header'>Needs transportation</th>
        </tr>
        {records.map((record) => {
          return (
            <tr className='record' key={record.id}>
              <td className='name data'>{record.data.name}</td>
              <td className='willAttend data'>{record.data.willAttend === 'Other' ? record.data.willAttendDetails : record.data.willAttend}</td>
              <td className='mealRequest data'>{record.data.mealRequest}</td>
              <td className='needAccomodation data'>{record.data.needAccomodation}</td>
              <td className='accomodationNumber data'>{record.data.accomodationGuestNumber}</td>
              <td className='transportation data'>{record.data.needTransportation}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )

}

export default DataTable;