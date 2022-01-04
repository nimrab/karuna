export type InitialStateType = {
    surveyQuestions: Array<SurveyQuestionsItemType>
    surveyAnswers: Array<SurveyAnswerItemType>
    answerIsSet: boolean
    currentSurveyItem: number
    correctAnswerCount: number

}

type SurveyQuestionsItemType = {
    id: number
    question_sub_1: string
    question_color: string
    question_sub_2: string
}
type SurveyAnswerItemType = {
    id: number
    answers: Array<AnswerItemType>
}

type ActionType =
    changeSurveyItemType
    | switchSetAnswerType
    | changeCorrectAnswerCountType
    | changeIsChosenAnswerType


export type AnswerItemType = {
    id: number
    answer: string
    isCorrect: boolean
    isChosen: boolean
}

const initialState = {

    surveyQuestions: [
        {
            id: 1,
            question_sub_1: 'What is the',
            question_color: 'recommended amount of one trade',
            question_sub_2: ', according to the basic rule of money management?'
        },
        {
            id: 2,
            question_sub_1: 'What is the ',
            question_color: 'recommended amount of trades',
            question_sub_2: ', according to the money management rule?'
        },
        {
            id: 3,
            question_sub_1: 'What is ',
            question_color: 'asset profitability?',
            question_sub_2: ''
        },
        {
            id: 4,
            question_sub_1: 'You’ve concluded a $100 trade. The asset profitability is 80%. How many funds will you receive in the case of the correct price forecast?',
            question_color: '',
            question_sub_2: ''
        },
        /*   {id: 5, question: 'Your deposit amount is $800. How many funds can you safely invest at the same time?'},
           {id: 6, question: 'What is the difference between the asset and the index?'},
           {id: 7, question: 'What does the EUR/USD value mean?'},
           {id: 8, question: 'What does the index value tell you?'},*/
    ],
    surveyAnswers: [
        {
            id: 1,
            answers: [
                {id: 1, answer: '3%', isCorrect: false, isChosen: false},
                {id: 2, answer: '5%', isCorrect: true, isChosen: false},
                {id: 3, answer: '10%', isCorrect: false, isChosen: false},
            ]
        },
        {
            id: 2,
            answers: [
                {id: 1, answer: '3% of the deposit', isCorrect: false, isChosen: false},
                {id: 2, answer: '5% of the deposit', isCorrect: true, isChosen: false},
                {id: 3, answer: '10% of the deposit', isCorrect: false, isChosen: false},
            ]
        },
        {
            id: 3,
            answers: [
                {
                    id: 1,
                    answer: 'The spread of its highest and lowest prices during a specific period.',
                    isCorrect: true,
                    isChosen: false
                },
                {
                    id: 2,
                    answer: 'The spread of its open and close prices during a specific period.',
                    isCorrect: false,
                    isChosen: false
                },
                {
                    id: 3,
                    answer: 'The share of a trade amount you receive additionally in the case of the correct forecast.',
                    isCorrect: false,
                    isChosen: false
                },
            ]
        },
        {
            id: 4,
            answers: [
                {id: 1, answer: '$80', isCorrect: false, isChosen: false},
                {id: 2, answer: '$180', isCorrect: true, isChosen: false},
                {id: 3, answer: '$200', isCorrect: false, isChosen: false},
            ]
        },
        {
            id: 5,
            answers: [
                {id: 1, answer: '$1000', isCorrect: false, isChosen: false},
                {id: 2, answer: '$500', isCorrect: false, isChosen: false},
                {id: 3, answer: '$80', isCorrect: true, isChosen: false},
            ]
        },
        {
            id: 6,
            answers: [
                {id: 1, answer: 'The asset is more volatile than the index.', isCorrect: true, isChosen: false},
                {id: 2, answer: 'The index is more liquid than the asset.', isCorrect: false, isChosen: false},
                {id: 3, answer: 'Index is a type of asset.', isCorrect: false, isChosen: false},
            ]
        },
        {
            id: 7,
            answers: [
                {id: 1, answer: 'It shows the euro quotes in terms of US Dollars.', isCorrect: true, isChosen: false},
                {id: 2, answer: 'It shows the US Dollar quotes in terms of Euros.', isCorrect: false, isChosen: false},
                {
                    id: 3,
                    answer: 'It means that the euro has higher quotes than the dollar.',
                    isCorrect: false,
                    isChosen: false
                },
            ]
        },
        {
            id: 8,
            answers: [
                {
                    id: 1,
                    answer: 'That the group of assets goes up or down in price.',
                    isCorrect: false,
                    isChosen: false
                },
                {id: 2, answer: 'That the specific industry is doing well or not.', isCorrect: true, isChosen: false},
                {id: 3, answer: 'Both variants may be correct.', isCorrect: false, isChosen: false},
            ]
        },
    ],
    currentSurveyItem: 0,
    answerIsSet: false,
    correctAnswerCount: 0,
}

export const surveyReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {

        case 'CHANGE-SURVEY-ITEM':
            return {
                ...state,
                currentSurveyItem: action.value
            }
        case 'SET-ANSWER':
            return {
                ...state,
                answerIsSet: action.value
            }
        case 'CHANGE-CORRECT-ANSWER-COUNT':
            return {
                ...state,
                correctAnswerCount: action.value
            }
        case 'CHANGE-IS-CHOSEN-ANSWER':
            return  {
                ...state,
                surveyAnswers: state.surveyAnswers.map(el => {
                    if (el.id === action.idSurvey) {
                        return (
                            {...el,
                            answers: el.answers.map(elem => elem.id === action.idAnswer ? {...elem, isChosen: action.value} : elem)}
                        )
                    } else {
                        return el
                    }
                })

            }

        default:
            return state
    }
}

type changeSurveyItemType = ReturnType<typeof changeSurveyItem>
type switchSetAnswerType = ReturnType<typeof switchSetAnswer>
type changeCorrectAnswerCountType = ReturnType<typeof changeCorrectAnswerCount>
type changeIsChosenAnswerType = ReturnType<typeof changeIsChosenAnswer>

export const changeSurveyItem = (value: number) => {
    return {
        type: 'CHANGE-SURVEY-ITEM',
        value
    } as const
}
export const switchSetAnswer = (value: boolean) => {
    return {
        type: 'SET-ANSWER',
        value
    } as const
}
export const changeCorrectAnswerCount = (value: number) => {
    return {
        type: 'CHANGE-CORRECT-ANSWER-COUNT',
        value
    } as const
}
export const changeIsChosenAnswer = (idSurvey: number, idAnswer: number, value: boolean) => {
    return {
        type: 'CHANGE-IS-CHOSEN-ANSWER',
        idSurvey,
        idAnswer,
        value
    } as const
}

