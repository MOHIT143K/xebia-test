import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

// This component is used for searching planet.
export const SearchBar = props => {
  let menuStyle = {
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255)',
    padding: '2px 0',
    fontSize: '90%',
    position: 'fixed',
    overflow: 'auto',
    maxHeight: '60%',
    zIndex: '1'
  };
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="form-group p-3">
          <ReactAutocomplete
            items={props.items}
            shouldItemRender={(item, value) =>
              item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
            }
            getItemValue={item => item.name}
            menuStyle={menuStyle}
            renderItem={(item, highlighted) => (
              <div
                key={Math.random()}
                style={{
                  backgroundColor: highlighted ? '#eee' : 'transparent',
                  padding: '10px',
                  fontWeight: item.population >= 1000000000 ? '800' : '400'
                }}
              >
                {item.name} <span style={{
                  float: 'right'
                }}>Population: {item.population}</span>
              </div>
            )}
            inputProps={{
              className: 'form-control',
              type: 'text',
              placeholder: 'Search Planet',
            }}
            value={props.searchTerm}
            onChange={e => props.searchPlanet(e.target.value)}
            onSelect={(value, item) => props.searchSelect(value, item)}
            wrapperStyle={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};
