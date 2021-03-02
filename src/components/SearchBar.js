import React, { useState, useEffect } from 'react';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { loadAutoComplete, loadCurrentWeather, loadFiveDaysWeather } from '../redux/actions/weatherActions';
//MUI
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
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

  const handleLocationSelect = (value) => {
    const city = autocompleteData.filter(el => el.LocalizedName === value)[0];
    dispatch(loadCurrentWeather(city));
    dispatch(loadFiveDaysWeather())
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
        onChange={(event, value) => handleLocationSelect(value)}
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