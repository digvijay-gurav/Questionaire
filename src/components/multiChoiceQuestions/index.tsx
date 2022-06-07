import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Choices } from '../../interface';

export default function MultiChoiceQuestions({ item, currentQuestion, handleChoiceChange }:
    { item: any, currentQuestion: number, handleChoiceChange: Function }) {
    return (

        <FormGroup className='justify-center'>

            <h3>{item.headline}</h3>
            {item.choices?.map((choice: Choices, index: number) => {
                return <FormControlLabel
                    key={index}
                    control={<Checkbox checked={choice.selected} onChange={(e)=>{handleChoiceChange(e, currentQuestion)}} />}
                    value={choice.value}
                    label={choice.label}
                />
            })
            }
        </FormGroup>

    )
}
