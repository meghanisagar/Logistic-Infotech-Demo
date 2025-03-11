import styled from "styled-components";

const PlayerList = styled.ul`
  list-style: none;
  padding: 1px;
  margin: 1px;
`;

const PlayerItem = styled.li<{ index: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 5px;
  margin: 5px 5px;
  border-radius: 5px;
  background-color: ${({ index }) => (index % 2 === 0 ? "#f9faff" : "#f1f3f8")};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;
const PlayerName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
`;

export {PlayerList,PlayerItem,PlayerName}