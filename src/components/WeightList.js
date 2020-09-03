import React from 'react';
import Weight from './Weight';
import MyChart from './MyChart'

export default function WeightList({ weights, refreshWeights }) {
    //console.log(weights)
    return (
        <div className="weight-list">
            
            <div className="list-group">
            <h2 className="mt-5 mb-3">Added Weights</h2>
                {weights
                    //.filter((weight) => !weight.purchased)
                    .map((weight) => (
                        
                        <Weight
                            weight={weight}
                            key={weight.id}
                            refreshWeights={refreshWeights}
                        />
                    ))}
                    
            </div>
            <MyChart weights={weights} />
            
        </div>
    );
}
