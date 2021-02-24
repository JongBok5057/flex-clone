import styled from 'styled-components';

const HeaderDiv = styled.div `
    div {
        padding-left: 48px;
        padding-right: 48px;
        max-width: 1290px;
        margin-left: auto;
        margin-right: auto;
        padding: 0px;
        box-sizing: border-box;
        display: flex;
    }
`;

const NavDiv = styled.div`
    & div {
        font-size: 14px;
        width: 100%
        height: 60px;
        align-items: center;
        justify-content: space-between;
        margin: 0px 36px 0px 0px;
        padding: 0px 11px;
        
    }
`;


const Header = () => {
    return (
        <div>
            <HeaderDiv>
                <div className="headerspace">        
                    
                        <div classname="navspace">
                <NavDiv>
                        <div>기능소개</div>
                        <div>가격정책</div>
                        <div>비대면 바우처</div>
                        <div>블로그</div>
                        <div>로그인</div>
                </NavDiv>    
                </div>
            </div>
            </HeaderDiv> 
        </div>
    )
}

export default Header;