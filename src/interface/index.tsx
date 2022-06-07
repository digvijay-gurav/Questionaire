export interface Choices {
    label: string;
    value: string;
    selected: boolean
}
export interface Questions {
    question_type: string;
    identifier: string;
    headline: string;
    description: null;
    required: boolean;
    multiple: string;
    choices: Array<Choices> | [];
    jumps: Array<[]> | []
}
export interface QuestionaireType {
    id: number;
    identifier: string;
    name: string;
    description: string;
    category_name_hyphenated: string;
    questions: Array<Questions> | [];
}