import { Inbox, Mail } from "@mui/icons-material";
import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

interface Props {
  isOpen: boolean;
  onToggle: (newValue: boolean) => () => void;
}

const AppBar = ({isOpen, onToggle}: Props) => {

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onToggle(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={onToggle(true)}>Open drawer</Button>
      <Drawer open={isOpen} onClose={onToggle(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default AppBar;