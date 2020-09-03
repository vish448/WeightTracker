import React, { useEffect, useState } from 'react';
import './app.css';
import WeightList from './components/WeightList';
import WeightForm from './components/WeightForm';

function App() {
    const [weights, setWeights] = useState([]);
    const loadWeights = async () => {
        try {
            const res = await fetch('/api/weights');
            const weights = await res.json();
            //console.log('wtest',weights)
            setWeights(weights);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        loadWeights();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-5 text-center">Daily Weight Tracker</h1>
            <WeightForm weightAdded={loadWeights} />
            <WeightList weights={weights} refreshWeights={loadWeights} />
            
        </div>
    );
}

export default App;
