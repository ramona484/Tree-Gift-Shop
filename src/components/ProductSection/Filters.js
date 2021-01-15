import React from "react";
import { SortAlphaDown } from 'react-bootstrap-icons';
import { SortNumericDown } from 'react-bootstrap-icons';
import { SortNumericUp } from 'react-bootstrap-icons';
import './Filter.css'

import { Container, Row, Col } from "react-bootstrap";

function Filters(props) {
  return (
    <div className="filters">

      <button onClick={props.sortByName}>Name <SortAlphaDown /></button>
      <button onClick={props.priceAsc}>Price <SortNumericDown /></button>
      <button onClick={props.priceDesc}>Price <SortNumericUp /></button>

      <button onClick={props.co2Asc}>
        &nbsp; CO<sub>2</sub> Abs. <SortNumericDown />
      </button>

      <button onClick={props.co2Desc}>
        CO<sub>2</sub> Abs. <SortNumericUp />
      </button>

      <div>
        <label htmlFor="countries">Select a country: </label>
        <select name="countries" id="countries" onChange={props.selectCountry}>
          <option value="all">Show all</option>
          <option value="guatemala">Guatemala</option>
          <option value="cameroon">Cameroon</option>
          <option value="kenya">Kenya</option>
          <option value="nepal">Nepal</option>
          <option value="france">France</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;