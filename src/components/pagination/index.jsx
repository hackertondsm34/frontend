import React, { useCallback } from "react";
import styled from "styled-components";
export const Pagination = ({ nowIndex, lastIndex, changeIndex }) => {
  const ChangeIndex = useCallback(
    (index) => {
      changeIndex(index);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nowIndex, changeIndex]
  );
  return (
    <>
      {lastIndex < 8 ? (
        <_Container width={(lastIndex - 1) * 3.5 + 6.5}>
          <_NavBar
            onClick={() => {
              if (nowIndex > 1) {
                ChangeIndex(nowIndex - 1);
              }
            }}
          >
            &lt;
          </_NavBar>
          {new Array(lastIndex).fill("").map((item, index) => (
            <>
              <_Button
                selected={nowIndex === index + 1}
                onClick={() => ChangeIndex(index + 1)}
                key={index + 1}
              >
                {index + 1}
              </_Button>
            </>
          ))}
          <_NavBar
            onClick={() => {
              if (nowIndex < lastIndex) {
                ChangeIndex(nowIndex + 1);
              }
            }}
          >
            &gt;
          </_NavBar>
        </_Container>
      ) : (
        <_Container width={27.5}>
          <_NavBar
            onClick={() => {
              if (nowIndex > 1) {
                ChangeIndex(nowIndex - 1);
              }
            }}
          >
            &lt;
          </_NavBar>
          <_Button
            selected={nowIndex === 1}
            onClick={() => ChangeIndex(1)}
            key={1}
          >
            1
          </_Button>
          {nowIndex < 5 ? (
            <_Button
              selected={nowIndex === 2}
              onClick={() => ChangeIndex(2)}
              key={2}
            >
              2
            </_Button>
          ) : (
            <_Elipsis>•••</_Elipsis>
          )}
          {(nowIndex < 5
            ? [3, 4, 5]
            : nowIndex > lastIndex - 4
            ? [lastIndex - 4, lastIndex - 3, lastIndex - 2]
            : [nowIndex - 1, nowIndex, nowIndex + 1]
          ).map((item) => (
            <_Button
              selected={nowIndex === item}
              onClick={() => ChangeIndex(item)}
              key={item}
            >
              {item}
            </_Button>
          ))}
          {nowIndex > lastIndex - 4 ? (
            <_Button
              selected={nowIndex === lastIndex - 1}
              onClick={() => ChangeIndex(lastIndex - 1)}
              key={lastIndex - 1}
            >
              {lastIndex - 1}
            </_Button>
          ) : (
            <_Elipsis>•••</_Elipsis>
          )}
          <_Button
            selected={nowIndex === lastIndex}
            onClick={() => ChangeIndex(lastIndex)}
            key={lastIndex}
          >
            {lastIndex}
          </_Button>
          <_NavBar
            onClick={() => {
              if (nowIndex < lastIndex) {
                ChangeIndex(nowIndex + 1);
              }
            }}
          >
            &gt;
          </_NavBar>
        </_Container>
      )}
    </>
  );
};
const _Button = styled.div`
  font: 700 normal 20px "Inter", sans-serif;
  height: 3rem;
  width: 3rem;
  text-align: center;
  line-height: 3rem;
  background-color: ${(props) =>
    props.selected ? props.theme.color.primary : "transparent"};
  color: ${(props) =>
    props.selected ? props.theme.color.white : props.theme.color.black};
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.white};
  }
`;
const _Elipsis = styled.div`
  font: 700 normal 20px "Inter", sans-serif;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 50px;
  color: ${(props) => props.theme.color.black};
`;
const _NavBar = styled.div`
  font: 400 normal 24px "Inter", sans-serif;
  width: 24px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  color: ${(props) => props.theme.color.black};
  :hover {
    color: ${(props) => props.theme.color.primary};
  }
`;
const _Container = styled.div`
  margin: 20px auto;
  display: flex;
  height: 60px;
  width: ${(props) => props.width}rem;
  justify-content: space-between;
`;
