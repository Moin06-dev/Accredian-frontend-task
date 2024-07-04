// src/ReferEarn.js
import React, { useState } from 'react';
import { Button, Modal, TextField, Box } from '@mui/material';

const ReferEarn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1>Refer & Earn</h1>
      <Button variant="contained" color="primary" onClick={handleOpen}>Refer Now</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ padding: 2, backgroundColor: 'white', margin: 'auto', top: '20%', left: '30%' }}>
          <h2>Referral Form</h2>
          <form>
            <TextField label="Your Name" fullWidth required style={{ marginBottom: '1rem' }} />
            <TextField label="Your Email" type="email" fullWidth required style={{ marginBottom: '1rem' }} />
            <TextField label="Friend's Name" fullWidth required style={{ marginBottom: '1rem' }} />
            <TextField label="Friend's Email" type="email" fullWidth required style={{ marginBottom: '1rem' }} />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ReferEarn;
