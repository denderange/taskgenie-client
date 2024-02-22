import React from 'react';
import { Card, Box } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const DashboardCard = () => {
    const menuItems = [
      { id: 1, title: 'Item 1', description: 'Description for Item 1' },
      { id: 2, title: 'Item 2', description: 'Description for Item 2' },
      { id: 3, title: 'Item 3', description: 'Description for Item 3' },
      { id: 4, title: 'Item 4', description: 'Description for Item 4' },
      { id: 5, title: 'Item 5', description: 'Description for Item 5' },
      { id: 6, title: 'Item 6', description: 'Description for Item 6' },
     
    ];
    return(
      <>
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Box  sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'left',
                            justifyContent: 'center',
                            p: 0.001,
                            bgcolor: 'background.paper',
                            boxShadow: 1,
                            borderRadius: 2,
                            minWidth: 20,
                          }}>
                     <Typography variant="h6" gutterBottom>
                        Status Box
                      </Typography>
                </Box>
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
}


export default DashboardCard;