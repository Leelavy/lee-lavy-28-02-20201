import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMeasureUnit } from '../redux/actions/measureUnitActions';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'block',
  },
  sectionDesktop: {
    display: 'flex',
  },
}));

const Appbar = ({ onModeClick, darkMode }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const measureUnit = useSelector(state => state.measureUnit.measureUnit);
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const handleModeClick = () => {
    onModeClick();
  }

  const handleUnitClick = () => {
    dispatch(toggleMeasureUnit(measureUnit));
  }

  useEffect(() => {
    setToggleDarkMode(!darkMode);
  }, [darkMode])

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            STORMIO
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {measureUnit === 'celsius' ?
              (<IconButton color="inherit" onClick={handleUnitClick} >
                °F
              </IconButton>) :
              (<IconButton color="inherit" onClick={handleUnitClick} >
                °C
              </IconButton>)
            }
            {toggleDarkMode ?
              (<IconButton color="inherit" onClick={handleModeClick} >
                <Brightness2Icon />
              </IconButton>) :
              (<IconButton color="inherit" onClick={handleModeClick} >
                <Brightness7Icon />
              </IconButton>)
            }
            <Link to="/" style={{ color: "inherit" }}>
              <IconButton color="inherit" >
                <HomeIcon />
              </IconButton>
            </Link>
            <Link to="/favorites" style={{ color: "inherit" }}>
              <IconButton color="inherit">
                <FavoriteIcon />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar;