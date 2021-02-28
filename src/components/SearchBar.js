import React, { useState, useEffect } from 'react';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { loadAutoComplete, loadCurrentWeather } from '../redux/actions/weatherActions';
//MUI
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    background: 'none',
  },
}));

const SearchBar = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const autocompleteData = useSelector(state => state.weather.autocomplete);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  }

  const handleLocationSelect = () => {
    dispatch(loadCurrentWeather());
  }

  useEffect(() => {
    dispatch(loadAutoComplete(searchInput));
  }, [searchInput])

  return (
    <div className={classes.search}>
      <Autocomplete
        freeSolo
        disableClearable
        options={autocompleteData.map((option) => option.LocalizedName)}
        onChange={handleLocationSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Location..."
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
            onChange={handleSearchInput}
          />
        )}
      />
    </div>
  );
}

export default SearchBar;