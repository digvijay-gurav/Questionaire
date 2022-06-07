import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';

export default function InputTypeQuestion({item, currentQuestion}: 
    {item: any, currentQuestion: number}) {
  return (
    <div>
        <h3>{item.headline}</h3>
        <FormGroup className='justify-center'>
            <TextField id="standard-basic" label="Enter answer" variant="standard" />
        </FormGroup>
    </div>
  )
}
