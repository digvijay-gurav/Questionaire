import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Questionaire from '../index';

describe('Questionnaire', () => {
    it('should render component', () => {
        const { getByTestId } = render(<Questionaire />)
        expect(getByTestId('questionnaire-outer')).toBeInTheDocument()
    })

    it('should open next question ', () => {
        const { getByTestId, container } = render(<Questionaire />)
        expect(getByTestId('question-block-1')).not.toHaveClass('next')
        fireEvent.click(getByTestId('nextButton'))
        expect(getByTestId('question-block-1')).toHaveClass('next')
    })

})
