import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { gravatarPath } from '../gravatar'

const useStyles = makeStyles((theme) => ({
    
    inline: {
      display: 'inline',
    },
  }));

const MessageItem = ({ name, text }) => {
    const classes = useStyles();
    const avatarpath = gravatarPath(name);

    return (
        <ListItem divider={true}>
        <ListItemAvatar>
          <Avatar src={avatarpath} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
             {text}
              </Typography>

          }
        />
      </ListItem>
    
    
    );
};

export default MessageItem;