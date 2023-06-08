
import React from 'react';
import Main from './components/main';
import { useEffect, useState } from 'react';

function Getdata() {

  const [photos, setPhotos] = useState([]);

  useEffect(()=> {
    const requestOptions = {
      method: 'GET'
    };
  
    fetch("http://localhost:3000/test", requestOptions)
    .then(response => response.json())
    .then(result => setPhotos(result))
    .then(response =>console.log(response))
    // .catch(error => console.log('error'.error))  
    // experience = response.json()
   
  }, [])
  
  return (

    <Getdata/>
  );


}

export default Getdata;
// interface Props {
//     experience : {
//         role: string,
//         company: string,
//         date: string | number
//     }
// }



export const experience = {
	title: "robot monitor",
	lists: [
		{
			date: "85%",
			company: "charging",
			role: "gasan15F",
		},
		{
			date: "25%",
			company: "welcome",
			role: "poc_jamwon",
		},
		{
			date: "48%",
			company: "error_1",
			role: "poc_samsong",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		}
	],
	view: true
}