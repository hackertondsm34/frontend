import { keyframes, styled } from "styled-components";

export default function Question() {
  return (
    <>
      <_Layout>
        <div>
          <div>
            <_Stick>
              <_Bar width={400} />
              <_Bell>
                {Array(5)
                  .fill("")
                  .map(() => (
                    <>
                      <div />
                    </>
                  ))}
              </_Bell>
            </_Stick>
          </div>
          <_TimeOut></_TimeOut>
        </div>
      </_Layout>
    </>
  );
}
const Fill = keyframes`
 0% {
    width: 0%;
 }
 
 100% {
    width:100%;
 }
`;
const _Layout = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 1000px;
    height: 760px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 1px 1px 10px 5px ${(props) => props.theme.color.gray4};
    padding: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    > div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;
const _TimeOut = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray2};
  > div {
  }
`;
const _Stick = styled.div`
  width: 100%;
  position: relative;
  height: 50px;
  background-color: ${({ theme }) => theme.color.gray2};
  border-radius: 50px;
`;
const _Bar = styled.div`
  position: absolute;
  width: ${({ width }) => width}px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 50px;
`;
const _Bell = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > div {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 50%;
  }
`;
