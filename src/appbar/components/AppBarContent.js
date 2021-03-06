import AppConfig from 'AppConfig';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import AppBarUser from './../containers/AppBarUser';
import MenuDrawer from './MenuDrawer';

const styleSheet = theme => ({
  title: {
    textTransform: 'none',
    color: theme.palette.getContrastText(theme.palette.primary[500]),
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menu: {
    marginLeft: 'auto',
  },
});

const AppBarContent = ({ classes }) => {
  return (
    <Grid container justify='space-between' align='center'>
      <Grid item>
        <Toolbar>
          <MenuDrawer />

          <Link to='/' className={classes.title}>
            <Typography type='title' color='inherit'>{AppConfig.appName}</Typography>
          </Link>
        </Toolbar>
      </Grid>

      <Grid item>
        <Toolbar className={classes.menu}>
          <AppBarUser />
        </Toolbar>
      </Grid>
    </Grid>
  );
};

AppBarContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AppBarContent);