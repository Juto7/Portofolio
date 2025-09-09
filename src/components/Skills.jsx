import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));


function Skills() {
  return (
    <div 
        className="h-200 bg-gray-800 " 
    >  
        <div className="pl-50 pt-50"> 
            <h1 className="text-white font-bold text-8xl">Skills</h1>
            <Stack className="mt-10" spacing={4} sx={{ flexGrow: 1 }}>
                <h1 className="text-white text-4xl"> Python</h1>
                <BorderLinearProgress className='w-200' variant="determinate" value={80} />

                <h1 className="text-white text-4xl"> Python</h1>
                <BorderLinearProgress className='w-200' variant="determinate" value={50} />

                <h1 className="text-white text-4xl"> Python</h1>
                <BorderLinearProgress className='w-200' variant="determinate" value={60} />

                <h1 className="text-white text-4xl"> Python</h1>
                <BorderLinearProgress className='w-200' variant="determinate" value={70} />
            </Stack>
 
        </div>
    </div>
  );
}

export default Skills;