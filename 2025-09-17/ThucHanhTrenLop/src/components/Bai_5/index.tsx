import { useState } from "react";
import BaseTitle from "../common/BaseTitle";
import BaseDescription from "../common/BaseDescription";
import BaseWrapped from "../common/BaseWrapped";
import * as S from './index.styles'
import { QUESTIONS_DATA } from "../../constants/data";

interface IQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
}

const Bai_5 = () => {
    const questions: IQuestion[] = [ ...QUESTIONS_DATA ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);

    const handleAnswerSelect = (answerIndex: number) => {
        setSelectedAnswer(answerIndex);
        
        const newUserAnswers = [...userAnswers, answerIndex];
        setUserAnswers(newUserAnswers);

        if (answerIndex === questions[currentQuestion].correctAnswer) {
            setCorrectAnswers(prev => prev + 1);
        }

        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(prev => prev + 1);
                setSelectedAnswer(null);
            } else {
                setIsQuizCompleted(true);
            }
        }, 1000);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setCorrectAnswers(0);
        setIsQuizCompleted(false);
        setUserAnswers([]);
    };

    if (isQuizCompleted) {
        return (
            <BaseWrapped>
                <BaseTitle title="Bài 5: Quiz App" />
                <S.ResultContainer>
                    <S.ResultTitle>Bạn trả lời đúng {correctAnswers}/{questions.length} câu.</S.ResultTitle>
                    <S.RestartButton color="cyan" variant="outlined" onClick={resetQuiz}>
                        Làm lại
                    </S.RestartButton>
                </S.ResultContainer>
            </BaseWrapped>
        );
    }

    return (
        <BaseWrapped>
            <BaseTitle title="Bài 5: Quiz App" />
            <BaseDescription content="Quiz App đơn giản: Có 3 câu hỏi trắc nghiệm (mỗi câu có 4 đáp án). Khi chọn đáp án, hiển thị ngay đúng/sai. Sau khi trả lời hết, hiển thị tổng số câu đúng." />
            
            <S.QuizContainer>
                <S.QuestionTitle>{questions[currentQuestion].question}</S.QuestionTitle>
                <S.OptionsContainer>
                    {questions[currentQuestion].options.map((option, index) => (
                    <S.OptionButton
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        isSelected={selectedAnswer === index}
                        isCorrect={selectedAnswer !== null && index === questions[currentQuestion].correctAnswer}
                        isWrong={selectedAnswer === index && index !== questions[currentQuestion].correctAnswer}
                        disabled={selectedAnswer !== null}
                        variant="outlined"
                        size="large"
                    >
                        {option}
                    </S.OptionButton>
                ))}
                </S.OptionsContainer>
            </S.QuizContainer>
        </BaseWrapped>
    )
}

export default Bai_5