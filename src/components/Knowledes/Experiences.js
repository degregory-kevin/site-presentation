import React from 'react';

const Experiences = ({
    data
}) => {
    return (
        <div className="experience">
            <h3>Experiences professionelles</h3>
            {
                data.map(item => (
                    
                    <div className="grid__row" key={item.id}>
                        <div className="grid__item">
                            <p className='grid__date'>{item.date}  </p>
                        </div>
                        <div className="grid__item">
                            <h4 className="grid__title">{item.title}</h4>
                            <p className='grid__location'>{item.poste} </p>
                        </div>
                    </div>
                        )
                    
                )

            }    
            
        </div>
    );
};

export default Experiences;