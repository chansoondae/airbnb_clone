import React, { useState } from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import { People } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';


function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    // eslint-disable-next-line
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    };
    // eslint-disable-next-line
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>Number of guests <People /></h2>
            <input min={0} defaultValue = {2} type="number" />
            <Button onClick={()=> history.push('/search')} >Search Airbnb</Button>
            
        </div>
    )
}

export default Search
