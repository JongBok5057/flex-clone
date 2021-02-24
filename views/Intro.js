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

 const Button2_3Space = styled.div`
    div {
        flex-direction: column;
        margin-top: 30px;
        display: flex;
        align-items: center;
        font-size: 14px;
    }
 `;

 const Button2Space = styled.div `
    button {
        cursor: pointer;
        overflow: hidden;
        color: rgb(0, 112, 209);
        height: 45px;
        border-radius: 24px;
        margin-bottom: 16px;
        padding-left: 16px;
        padding-right: 16px;
        background-color: rgba(0, 112, 209, 0.07);
        display: inline-flex;
        position: relative;
        font-size: 14px;
        box-sizing: border-box;
        font-weight: 700;
        -webkit-box-align: center;
        align-items: center;
        flex-shrink: 0;
        -webkit-box-pack: center;
        justify-content: center;
        vertical-align: middle;
        border: none;
        outline: none;
        margin: 0;
        padding: 0;
    }
 `;

 const Button3Space = styled.div `
    button {
        cursor: pointer;
        overflow: hidden;
        color: rgb(255, 255, 255);
        height: 45px;
        border-radius: 24px;
        padding-left: 16px;
        padding-right: 16px;
        background-color: rgb(0, 0, 0);
        display: inline-flex;
        position: relative;
        font-size: 14px;
        box-sizing: border-box;
        font-weight: 700;
        -webkit-box-align: center;
        align-items: center;
        flex-shrink: 0;
        -webkit-box-pack: center;
        justify-content: center;
        box-shadow: rgb(0 0 0 / 4%) 0px 1px 3px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px inset;
        vertical-align: middle;
        border: none;
        outline: none;
        margin: 0;
        padding: 0;
    }
 `;

 const Button2 = styled.div `
    button {
        display: flex;
        align-items: center;
        color: rgb(0, 112, 209);
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

 const Button3 = styled.div `
    button {
        display: flex;
        align-items: center;
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
                <Button2_3Space>
                <div>
                    <Button2Space>
                    <button>
                        <Button2>
                        <div>
                            <Word2>
                            <div>90% 할인 받으려면?</div>
                            </Word2>
                        </div>
                        </Button2>
                    </button>
                    </Button2Space>
                    <Button3Space>
                    <button>
                        <Button3>
                        <div>
                            <Word3>
                            <div>무료체험 신청하기</div>
                            </Word3>
                        </div>
                        </Button3>
                    </button>
                    </Button3Space>
                </div>
                </Button2_3Space>
            </section>
            </Intro1>
        </div>
    )
}

export default Intro;