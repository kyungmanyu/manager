// import React from 'react';
// import './ExpCard.css';

// function ExpCard({ experience }: Props) {
//     const Fade = require('react-reveal/Fade');
//     return (
//         <Fade duration={800} bottom>
//         <div className="expcard-main">
//             <div className="inner">
                    
//                 <div className="expcard-role">
//                     {experience.role}
//                 </div>
//                 <div className="expcard-company">
//                     {experience.company}
//                 </div>
//                 <div className="expcard-date">
//                     {experience.date}
//                 </div>

//             </div>
//         </div>
//         </Fade>
//     );
// }
// interface Props {
//     experience : {
//         role: string,
//         company: string,
//         date: string | number
//     }
// }
// export default ExpCard;


import React from 'react';
import './ExpCard.css';

function ExpCard({ experience }: Props) {
    const Fade = require('react-reveal/Fade');

    const handleClick = () => {
        const fileExplorerUrl = `http://192.168.0.46/myfiles/`;
        // const fileExplorerUrl = `${process.env.PUBLIC_URL}`;

        window.open(fileExplorerUrl);
    };

    return (
        <Fade duration={800} bottom>
            <div className="expcard-main" onClick={handleClick}>
                <div className="inner">
                    <div className="expcard-role">
                        {experience.role}
                    </div>
                    <div className="expcard-company">
                        {experience.company}
                    </div>
                    <div className="expcard-date">
                        {experience.date}
                    </div>
                </div>
            </div>
        </Fade>
    );
}

interface Props {
    experience: {
        role: string,
        company: string,
        date: string | number
    }
}

export default ExpCard;
