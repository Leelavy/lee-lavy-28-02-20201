import React, { useState, useEffect, useCallback } from 'react';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { loadAutoComplete, loadCurrentWeather, loadFiveDaysWeather } from '../redux/actions/weatherActions';
//MUI
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import debounce from 'lodash.debounce';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    background: 'none',
  },
}));

const useDebounce = (callback, delay) => {
  const debouncedCallBack = useCallback(debounce(callback, delay), []);
  return debouncedCallBack;
}

const SearchBar = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const autocompleteData = useSelector(state => state.weather.autocomplete);
  const [searchInput, setSearchInput] = useState('');
  const [inputErrorToggle, setInputErrorToggle] = useState(false);
  const debouncedAutocomplete = useDebounce((val) => dispatch(loadAutoComplete(val)), 1000);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  }

  const handleLocationSelect = (value) => {
    const city = autocompleteData.filter(el => el.LocalizedName === value)[0];
    if (city) {
      dispatch(loadCurrentWeather(city));
      dispatch(loadFiveDaysWeather())
    }
  }

  const errorCheck = () => (/[^a-zA-Z ]/.test(searchInput) ? setInputErrorToggle(true) : setInputErrorToggle(false))

  useEffect(() => {
    debouncedAutocomplete(searchInput);
    errorCheck();
  }, [searchInput])

  return (
    <motion.div className={classes.search}>
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
            error={inputErrorToggle}
            helperText={inputErrorToggle ? "Search input should only contain english letters." : ' '}
            InputProps={{ ...params.InputProps, type: 'search' }}
            onChange={handleSearchInput}
          />
        )}
      />
    </motion.div>
  );
}

export default SearchBar;