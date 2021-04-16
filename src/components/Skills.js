import React from 'react';



const Skills = (props) => {
    return (
        <div className={props.className}>
            {
                    props.mesCompetences.map((itemUn) =>{
                        return(
                            <div className={itemUn.className}>
                                {
                                    props.mesCompetences.map((itemUn) =>{
                                        return(
                                            <ul>
                                                <li key={itemUn.id}>{itemUn.value}</li>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
            }
            
        </div>
    );
};

export default Skills;