import React from 'react';
import { experience } from '../../portfolio';
import ExpCard from '../ExpCard/ExpCard';
import lists from './list.json'
import './Experience.css';

import { useEffect, useState } from 'react';
import emoji from 'react-easy-emoji';

export const Experience = () => {
  const [experienceList, setExperienceList] = useState([]);
  // var title = "test";
  // var lists_t = [,,,];

  var experience: {
    role: string,
    company: string,
    date: string | number
  }
  const currentFilePath = import.meta.url;
  const currentFolderPath = currentFilePath.substring(0, currentFilePath.lastIndexOf('/'));
  console.log('현재 폴더 경로:', currentFolderPath);


  useEffect(() => {
    
    // const jsonFilePath = '/home/slam/git/manager/src/components/Experience/list.json';
    // console.log(jsonFilePath)
    // title = lists.title;
    // lists_t = lists.lists;
    console.log('title : ',lists.title)
    console.log('lists_t : ',lists.lists)

    // JSON 파일 가져오기
    // fetch(jsonFilePath)
    //   .then(response => response.json())
    //   .then(data => {
    //     // 가져온 데이터를 experienceList 상태로 설정
    //     console.log(data)
    //     setExperienceList(data);
    //     title = data.title;
    //     lists_t = data.lists;
    //     console.log('title : ',title)
    //     console.log('lists_t : ',lists_t)

    //   })
    //   .catch(error => {

    //     console.error('Error fetching JSON file:', error);
    //   });

    // const fetchJsonData = async () => {
    //   try {
    //     const response = await fetch('./card.json');
    //     const data = await response.json();
    //     setExperienceList(data);
    //     console.log(data);
    //   } catch (error) {
    //     console.error('Error fetching JSON file:', error);
    //   }
    // };

    // fetchJsonData();
  }, []);

  return (
    <section className="section--exp" id="experience">
      <div className="inner">

        <div className="exp-title">
          <p>{lists.title}</p>
        </div>

        <div className="exp-cards">
          {lists.lists.map((list, i) => {
            return <ExpCard experience={list} key={i} />
          })}
        </div>

      </div>
    </section>


  );

};

export default Experience;

