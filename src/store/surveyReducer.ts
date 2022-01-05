export type InitialStateType = {
    surveyQuestions: Array<SurveyQuestionsItemType>
    surveyAnswers: Array<SurveyAnswerItemType>
    resultData: Array<ResultItemType>
    answerIsSet: boolean
    currentSurveyItem: number
    correctAnswerCount: number
}

type ResultItemType = {
    id:number
    headerText: string
    r_sub_1: string
    r_sub_2: string
    r_sub_3: string
}
export type SurveyQuestionsItemType = {
    id: number
    q_sub_1: string
    q_sub_2: string
    q_sub_3: string
    q_sub_4: string
    q_sub_5: string
}
type SurveyAnswerItemType = {
    id: number
    answers: Array<AnswerItemType>
}
export type AnswerItemType = {
    id: number
    answer: string
    isCorrect: boolean
    isChosen: boolean
}


type ActionType =
    changeSurveyItemType
    | switchSetAnswerType
    | changeCorrectAnswerCountType
    | changeIsChosenAnswerType

const initialState = {

    surveyQuestions: [
        {
            id: 1,
            q_sub_1: 'What is the',
            q_sub_2: 'recommended amount of one trade',
            q_sub_3: ', according to the basic rule of money management?',
            q_sub_4: '',
            q_sub_5: '',
        },
        {
            id: 2,
            q_sub_1: 'What is the ',
            q_sub_2: 'recommended amount of trades',
            q_sub_3: ', according to the money management rule?',
            q_sub_4: '',
            q_sub_5: '',
        },
        {
            id: 3,
            q_sub_1: 'What is ',
            q_sub_2: 'asset profitability?',
            q_sub_3: '',
            q_sub_4: '',
            q_sub_5: '',
        },
        {
            id: 4,
            q_sub_1: 'You’ve concluded a $100 trade. The asset profitability is 80%. ',
            q_sub_2: 'How many funds ',
            q_sub_3: 'will you receive in the case of the ',
            q_sub_4: 'correct price forecast',
            q_sub_5: '?',
        },
        {
            id: 5,
            q_sub_1: 'Your deposit amount is $800. ',
            q_sub_2: 'How many funds ',
            q_sub_3: 'can you safely invest at the same time?',
            q_sub_4: '',
            q_sub_5: '',
        },
        {
            id: 6,
            q_sub_1: 'What is the difference between the ',
            q_sub_2: 'asset ',
            q_sub_3: 'and the ',
            q_sub_4: 'index?',
            q_sub_5: '',
        },
        {
            id: 7,
            q_sub_1: 'What does the ',
            q_sub_2: 'EUR/USD value ',
            q_sub_3: 'mean?',
            q_sub_4: '',
            q_sub_5: '',
        },
        {
            id: 8,
            q_sub_1: 'What does the ',
            q_sub_2: 'index value ',
            q_sub_3: 'tell you?',
            q_sub_4: '',
            q_sub_5: '',
        },
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
    resultData: [
        {
            id: 1,
            headerText: 'Not bad',
            r_sub_1: 'The result is not very high, but you can easily improve it — read our articles and practice',
            r_sub_2: 'We wish you productive trading!',
            r_sub_3: 'We wish you productive trading!',
        },
        {
            id: 2,
            headerText: 'Well done',
            r_sub_1: 'You have room for improvement. We recommend you widen your knowledge by practice.',
            r_sub_2: 'We wish you productive trading!',
            r_sub_3: '',
        },
        {
            id: 3,
            headerText: 'Excellent',
            r_sub_1: 'When calculating, you feel at home. Transform your knowledge into income!',
            r_sub_2: 'We wish you productive trading!',
            r_sub_3: '',
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
            return {
                ...state,
                surveyAnswers: state.surveyAnswers.map(el => {
                    if (el.id === action.idSurvey) {
                        return (
                            {
                                ...el,
                                answers: el.answers.map(elem => elem.id === action.idAnswer ? {
                                    ...elem,
                                    isChosen: action.value
                                } : elem)
                            }
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

