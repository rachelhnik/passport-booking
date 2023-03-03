import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { ListItem, Typography } from "@mui/material";

export default function SlotList({ slots = [] }) {
    return (
        <Box>
            <List component="nav">
                {slots.map((slot: any) => (
                    <ListItem sx={{ display: "flex", flexDirection: "column" }}>
                        <ListItemText primary={`Hour: ${slot.hour}`} />
                        <ListItemText
                            primary={`Available Slots: ${slot.availableSlot}`}
                            secondary={
                                <Typography
                                    sx={{ display: "block" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Total Available: {slot.totalAvailable}{" "}
                                    <br />
                                    Reserved: {slot.reserved}
                                </Typography>
                            }
                        ></ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
