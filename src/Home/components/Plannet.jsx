import React from 'react';

// This component is used for searching movies.
export const Planet = props => {
    console.log(props);
  return (
    <div className="card text-center">
        <div className="card-header">
            Planet
        </div>
        <div className="card-body">
            <h5 className="card-title">{props.selected.name}</h5>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Population
                    <span className="badge badge-primary badge-pill">{props.selected.population}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Climate
                    <span className="badge badge-primary badge-pill">{props.selected.climate}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Diameter
                    <span className="badge badge-primary badge-pill">{props.selected.diameter}</span>
                </li>
            </ul>
        </div>
        <div className="card-footer text-muted">
            Rotation Period : {props.selected.rotation_period}
        </div>
    </div>
  );
};
