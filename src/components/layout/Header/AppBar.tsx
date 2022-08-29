import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import GavelOutlinedIcon from '@material-ui/icons/GavelOutlined';
import { NavLink } from 'react-router-dom';
import { Drawer, DrawerHeader, AppBar } from './AppBarStyles';

const AppBarDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const drawerCategories = {
    adminDrawerCategories: [
      {
        id: 'start',
        name: 'Start',
        icon: <HomeOutlinedIcon />,
        url: '/',
      },
      {
        id: 'community',
        name: 'Wspólnota',
        icon: <PeopleAltOutlinedIcon />,
        url: 'community',
      },
      {
        id: 'accounting',
        name: 'Księgowość',
        icon: <AccountBalanceOutlinedIcon />,
        url: 'accounting',
      },
      {
        id: 'utilities',
        name: 'Media',
        icon: <BuildOutlinedIcon />,
        url: 'utilities',
      },
      {
        id: 'documents',
        name: 'Dokumenty',
        icon: <DescriptionOutlinedIcon />,
        url: 'documents',
      },
      {
        id: 'resolutions',
        name: 'Uchwały',
        icon: <GavelOutlinedIcon />,
        url: 'resolutions',
      },
    ],
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed' open={open}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ flexGrow: 1 }}
            >
              Spółdzielnia Mieszkaniowa - Projekt
            </Typography>
            <Button color='inherit'>Zaloguj</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerCategories.adminDrawerCategories.map((category, index) => (
            <NavLink to={category.url} key={category.id}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {category.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={category.name}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
};

export default AppBarDrawer;
