import './Admin.scss';
import React, { useEffect, useState } from 'react';
import { Select, MenuItem, SelectChangeEvent} from '@mui/material';
import { RSVPFormData } from '../sendRSVPForm';
import { collection, getDoc, getDocs } from 'firebase/firestore/lite';
import { firestore } from '@/app/utils/firebaseConfig';

type FilterType = 'willAttend' | 'needAccomodation' | 'needTransportation';
type FormValues = 'Yes' | 'No' | 'Other' | 'DontKnowYet';
type FilterValues = 'all' | FormValues;
type Filter = {
  filter: FilterType;
  isActive: boolean;
  value: FilterValues;
}


const DataTable = () => {
  const [records, setRecords] = useState<{id: string, data: RSVPFormData}[]>([]);
  const [willAttendFilter, setWillAttendFilter] = useState<FilterValues>('all');
  const [needAccomodationFilter, setNeedAccomodationFilter] = useState<FilterValues>('all');
  const [needTransportationFilter, setNeedTransportationFilter] = useState<FilterValues>('all');
  const [filteredRecords, setFilteredRecords] = useState<{id: string, data: RSVPFormData}[]>([]);
  const [filters, setFilters] = useState<Filter[]>([{filter: 'willAttend', isActive: false, value: 'all'}, {filter: 'needAccomodation', isActive: false, value: 'all'}, {filter: 'needTransportation', isActive: false, value: 'all'}])
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
      setRecords(docs);
      setFilteredRecords(docs);
      
    }

    getAllRecords()


  }, [])

  useEffect(() => {
    updateFilteredList();
  }, [filters])

  const updateFilteredList = () => {
    let filteredList = records.map(record => record);
    filters.forEach((f: Filter) => {
      if (f.isActive) {
        filteredList = filteredList.filter((item) => {
          return item.data[f.filter] as FormValues  === f.value
        })
      }
    })
    setFilteredRecords(filteredList);
  }
  const filterWillAttendChange = (e: SelectChangeEvent<string>) => {
    setWillAttendFilter(e.target.value as FilterValues)
    const newFilterlist = filters.filter(f => f.filter !== 'willAttend')
    newFilterlist.push({
      filter: 'willAttend',
      isActive: e.target.value !== 'all',
      value: e.target.value as FilterValues,
    });
    setFilters(newFilterlist);
  }

  const filterNeedAccomodationChange = (e: SelectChangeEvent<string>) => {
    setNeedAccomodationFilter(e.target.value as FilterValues)
    const newFilterlist = filters.filter(f => f.filter !== 'needAccomodation')
    newFilterlist.push({
      filter: 'needAccomodation',
      isActive: e.target.value !== 'all',
      value: e.target.value as FilterValues,
    });
    setFilters(newFilterlist);
  }

  const filterNeedTransportationChange = (e: SelectChangeEvent<string>) => {
    setNeedTransportationFilter(e.target.value as FilterValues)
    const newFilterlist = filters.filter(f => f.filter !== 'needTransportation')
    newFilterlist.push({
      filter: 'needTransportation',
      isActive: e.target.value !== 'all',
      value: e.target.value as FilterValues,
    });
    setFilters(newFilterlist);
  }
  
  return (
    <div className='data-container'>
      <div className='filters'>
        <div className='filter'>
          <p>Will attend?</p>
          <Select defaultValue={"all"} value={willAttendFilter} onChange={filterWillAttendChange} sx={{width: '150px', height: '30px'}}>
            <MenuItem value="all">all</MenuItem>
            <MenuItem value="Yes">yes</MenuItem>
            <MenuItem value="No">no</MenuItem>
            <MenuItem value="Other">other</MenuItem>
          </Select>
        </div>
        <div className='filter'>
          <p>Need accomodation</p>
          <Select defaultValue={"all"} value={needAccomodationFilter} sx={{width: '150px', height: '30px'}} onChange={filterNeedAccomodationChange}>
            <MenuItem value="all">all</MenuItem>
            <MenuItem value="Yes">yes</MenuItem>
            <MenuItem value="No">no</MenuItem>
            <MenuItem value="DontKnowYet">Don&apos;t know</MenuItem>
          </Select>
        </div>
        <div className='filter'>
          <p>Need transportation</p>
          <Select defaultValue={"all"} value={needTransportationFilter} sx={{width: '150px', height: '30px'}} onChange={filterNeedTransportationChange}>
            <MenuItem value="all">all</MenuItem>
            <MenuItem value="Yes">yes</MenuItem>
            <MenuItem value="No">no</MenuItem>
          </Select>
        </div>
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
        {filteredRecords.map((record) => {
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