import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const MenuList = (props) => {
  const { searchResult, isBlur, searchText } = props;
  const [showList, setShowList] = useState(true);
  useEffect(() => {
    setShowList(true);
  }, [searchText]);
  const navigate = useNavigate();
  const navigateToProductDetails = (searchData) => {
    setShowList(false);
    navigate(`product/${searchData.id}`);
  }
  const maxResult = 10;
  return showList && searchText && <List sx={{ width: '100%', bgcolor: 'background.paper', position: 'absolute', top: '57px', minHeight: '0px', maxHeight: '300px', height: 'auto', overflow: 'scroll', maxWidth: '600px', left: window.innerWidth < 500 ? '0px' : '127px' }}>
    {searchResult?.slice(0, maxResult).map((searchData) => {
      return <div key={searchData.id} onClick={(e) => navigateToProductDetails(searchData)}>
        <ListItem alignItems="center" style={{cursor: "pointer"}}>
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
                  <div> {searchData.title} </div>
                </Typography>
                <div> {searchData.category} </div>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </div>
    })
    };
  </List>
}

export default MenuList;