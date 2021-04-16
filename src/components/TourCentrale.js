import React, { Component } from 'react';
import Block from './Block';
import Skills from './Skills';


class TourCentrale extends Component {

    state = {
    mesCoordonee :[
        {id:1, img:"fas fa-phone ", value: "0669794273"},
        {id:2, img:"far fa-envelope-open ", value: "manuscrit974@gmail.com"},
        {id:3, img:"fas fa-thumbtack ", value: "Valence"},
       
    ],

    competence:[
        {id:4, value: "graphic design"},
        {id:5, value: "web design"},
        {id:6, value: "animation"},
        {id:7, value: "ui design"},


    ]
}

    render() {
        
        let {mesCoordonee, competence} = this.state
        let colonneUn  = " colUn col-lg-3  vh-100 text-light"
        let border = " mesCompetences border border-5 border-warning   ";
        let boderUn = " border border-5 border-warning d-flex flex-column text-center align-items-center mt-5"
        return (
            <div className={colonneUn}>
    
             
                
             <Block
             
             mesCoordonee = {mesCoordonee}
             title="Contact"
             className={boderUn}
            />

            <Skills
            title="Skillz"
            mesCompetences ={competence}
            className= {border}
            />
             
    
            </div>
        );
    }
}

export default TourCentrale;