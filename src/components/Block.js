import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const Block = (props) => {
    return (
        <div className={props.className}>
            <h2 className="text-uppercase fw-bold m-3">{props.title}</h2>
            {
             props.mesCoordonee.map((item)=>{
                 return(
                    <div key={item.id} className={item.className}>
                        <i className={item.img}  ></i>
                        <CopyToClipboard text="0669794273">
                        <p  onClick={() =>{alert('Téléphone copié')}}>{item.value}</p> 
                        </CopyToClipboard>
                    </div>
                 )
             })
            }  
        </div>
    );
};

export default Block;