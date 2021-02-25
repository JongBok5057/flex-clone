import styled from 'styled-components';

const Intro1 = styled.div `
    section {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 120px 40px 400px;
    }
`;

const Intro2 = styled.div `
    div {
        width: 100%;
        box-sizing: border-box;
        max-width: 560px;
        margin-bottom: 60px;
        display: flex;
        align-items: center;
        padding: 16px 30px;
        box-shadow: rgb(20 20 20 / 4%) 2px 7px 16px 0px, rgb(20 20 20 / 0%) 0px 1px 5px 0px;
        border-radius: 20px;
        background-color: rgb(255, 255, 255);
    }
`;

const Word = styled.div `
    div {
        margin: 0px auto 0px 10px;
        color: rgb(29, 56, 83);
        font-size: 16px;
        font-weight: 700;
        line-height: 1.55;
    }
`;


 const H1 = styled.div `
    h1 {
        color: rgb(12, 36, 59);
        font-size: 52px;
        font-weight: 800;
    }
 `;

 const H3 = styled.div `
    h3 {
        color: rgb(62, 82, 101);
        margin-top: 32px;
        font-size: 16px;
        line-height: 1.6;
        font-weight: 400;
        text-align: center;
        display: block;
    }
 `;

const ButtonArea = styled.div `
    div {
        
        display: flex;
        align-items: center;
        font-size: 14px;
        ont-family: -apple-system,BlinkMacSystemFont,Apple SD Gothic Neo,Noto Sans Korean,sans-serif;
        word-break: keep-all;
        overflow-wrap: break-word;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }
`;

const Button1Area = styled.div `
    button {
        

    }
`;

 const Word2 = styled.div `
    div {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: rgb (0, 112, 209);
        font-size: 14px;
        font-weight: 700;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        text-align: center;
        font: 400 13.3333px Arial;
    }
 `;


 const Word3 = styled.div `
    div {
        display: flex;
        align-items: center;
        cursor:pointer;
        color: rgb (255, 255, 255);
        font-size: 14px;
        fint-weight: 700;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        text-align: center;
        font: 400 13.3333px Arial;

    }
 `;


const Intro = () => {
    return (
        <div>
            <Intro1>
            <section>
                <Intro2>
                <div>
                    <Word>
                    <div>비대면바우처로 flex를 구매하세요!</div>
                    
                    <button>
                        <div>
                            <span>지금 보러가기</span>
                        </div>
                    </button>
                    </Word>
                </div>
                </Intro2>
                <H1>
                    <h1>인사관리를 잊다, flex</h1>
                </H1>
                <H3>
                <h3>
                    "근태관리, 급여관리, 계약관리...귀찮고 반복되는 인사관리에 지치셨나요?"
                    <br/>
                    "지금 flex를 시작하고 인사관리가 아닌 사람과 회사의 성장에 집중하세요."
                </h3>
                </H3>
                <ButtonArea>
                <div>
                    
                    <button>
                        <div>
                            <Word2>
                            <div>90% 할인 받으려면?</div>
                            </Word2>
                        </div>
                    </button>
                    
                    <button>
                        <div>
                            <Word3>
                            <div>무료체험 신청하기</div>
                            </Word3>
                        </div>
                    </button>
                </div>
                </ButtonArea>
            </section>
            </Intro1>
        </div>
    )
}

export default Intro;