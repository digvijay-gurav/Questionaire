import React, { useState, useEffect } from 'react';
import "./styles.scss";
import { data } from '../model/questionnaire';
import Button from '@mui/material/Button';
import MultiChoiceQuestions from './multiChoiceQuestions';
import InputTypeQuestion from './inputChoiceQuestions';
import { Choices, Questions, QuestionaireType} from '../interface/index'

export default function Questionaire() {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [classApplied, setClassApplied] = useState('');
    const [questionsCopy, setQuestionsCopy] = useState<any>(data?.questionnaire?.questions);

    const nextQuestionHandler = () => {
        if (currentQuestion < data?.questionnaire?.questions.length) {
            setCurrentQuestion(currentQuestion + 1)
            setClassApplied('next')
        } else {
            alert("This was last question");
        }
    }

    const previousQuestionHandler = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
            setClassApplied('prev')
        } else {
            alert("This was first question");
        }
    }
    const handleChoiceChange = (e: any, selectedQuestion: number) => {
        const shallowCopy:any = [...questionsCopy]
        const choiceValue= questionsCopy[selectedQuestion].choices?.map((item: Choices)=>{
            if(item.value === e.target.value) {
                item.selected = !item.selected;
            } else {
                item.selected = false;
            }
            return item;
        })
        shallowCopy[selectedQuestion] = {
            ...shallowCopy[selectedQuestion],
            choices: choiceValue
        }
        setQuestionsCopy([...shallowCopy])
    }

    const displayQuestionaire = () => {
        return (
            <div className='outter' data-testid="questionnaire-outer">
                <div className={`questionBoxWrapper`}>
                    {currentQuestion < questionsCopy.length ?
                        questionsCopy.map((item: Questions, outerIndex: number) => {
                            return (
                                <div data-testid={`question-block-${outerIndex}`} key={outerIndex} className={`questionHidden ${currentQuestion === outerIndex ? `formVisible ${classApplied}` : ''}`}>
                                    {questionsCopy[currentQuestion].question_type == 'multiple-choice' ? (
                                        <MultiChoiceQuestions item={item} currentQuestion={currentQuestion} handleChoiceChange={handleChoiceChange} />
                                    ) : (
                                        <InputTypeQuestion item={item} currentQuestion={currentQuestion} />
                                    )}

                                </div>
                            )
                        })
                        :
                        <div>
                            That's all!!! Thank you
                        </div>
                    }
                    <div className='actionItem'>

                        {currentQuestion < questionsCopy.length ?
                            <>
                                {currentQuestion > 0 && <Button data-testid="prevButton" className='prevButton' variant="outlined" size="medium" disabled={currentQuestion === 0} onClick={() => previousQuestionHandler()}>Previous</Button>}
                                {currentQuestion < questionsCopy.length - 1 && <Button data-testid="nextButton" className='nextButton' variant="outlined" size="medium" onClick={() => nextQuestionHandler()}>Next</Button>}
                            </> :
                            <Button onClick={() => setCurrentQuestion(0)}>Start Over</Button>
                        }
                        {currentQuestion === questionsCopy.length - 1 &&
                            <Button variant="contained" size="medium" color="success" onClick={() => nextQuestionHandler()}>Submit</Button>}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='mainWrapper'>
            <h2 className='questionTitle'>{data?.questionnaire?.name}</h2>
            <div>
                {displayQuestionaire()}
            </div>
        </div>
    )
}
