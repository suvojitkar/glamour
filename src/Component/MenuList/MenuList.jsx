import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const MenuList = (props) => {
  const { searchResult, isBlur, searchText } = props;
  const maxResult = 10;
  return isBlur && searchText && <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', position: 'absolute', top: '57px', minHeight: '0px', maxHeight: '300px', height: 'auto', overflow: 'scroll', maxWidth: '600px', left: window.innerWidth < 500 ? '0px' : '127px' }}>
    {searchResult?.slice(0, maxResult).map((searchData) => {
      return <React.Fragment key={searchData.id}>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={searchData.thumbnail}/>
          </ListItemAvatar>
          <ListItemText
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: 'text.primary', display: 'inline' }}
                >
                  {searchData.title}
                </Typography>
                &nbsp;&nbsp; - {searchData.category}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </React.Fragment>
    })
    };
  </List>
}

export default MenuList;