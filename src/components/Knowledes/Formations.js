  
import React from 'react';

const Formations = ({
    data
}) => {
    return (
        <div className="formation ">
            <h3>Formations</h3>
            {
                data.map(item => (
                    
                    <div className="grid__row" key={item.id}>
                        <div className="grid__item">
                            
                            <h3 className="grid__title">{item.title}</h3>
                            <p className='grid__location'>{item.location} </p>
                            <p className='grid__date'>{item.date}  </p>
                        </div>
                    </div>
                        )
                    
                )

            }    
            
        </div>
    );
};

export default Formations;