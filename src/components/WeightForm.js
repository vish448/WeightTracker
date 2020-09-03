import React, { useState } from 'react';
//import PickDate from "./MaterialUIPickers";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

//import Tags from './Tags';

export default function WeightForm({ weightAdded }) {
    const [weight, setWeight] = useState('');
    //const [link, setLink] = useState('');
    //const [tags, setTags] = useState([]);
    const [count, setCount] = useState(0);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    let [selectedDate, setSelectedDate] = useState(today.toLocaleDateString(undefined,options));

    const resetForm = () => {
        setWeight('');
        //setLink('');
        setCount(count + 1);
    };

    const handleDateChange = (date) => {
        options = { year: 'numeric', month: 'long', day: 'numeric' };
        let formattedDate = date.toLocaleDateString(undefined,options);
        setSelectedDate(formattedDate);
      };

    const submitCourse = async (e) => {
        e.preventDefault();
        const weightInNumber = new RegExp('^[0-9]*.[0-9]$');
        if(weightInNumber.test(weight)){
        try {
            await fetch('/api/weights', {
                method: 'POST',
                body: JSON.stringify({
                    weight,
                    selectedDate
                }),
            });
            resetForm();
            weightAdded();
            
        } catch (err) {
            console.error(err);
        }
    }else {
        alert('Form Processing error please make sure your weight is in number upto two decimal point')
    }
        console.log(weight, selectedDate);
    };

    return (
        <div className="card">
            <div className="card-header">Add your weight</div>
            <div className="card-body">
                <form className="" onSubmit={submitCourse}>
                    <div className="form-group">
                        <label htmlFor="weight">Weight (Kg)</label>
                        <input
                            type="text"
                            name="weight"
                            value={weight}
                            className="form-control"
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="1.00"
                        />
                    </div>
                    <div className="form-group">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}
