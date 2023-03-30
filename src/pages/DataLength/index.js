import styled from "styled-components";
import { trello } from "../../locales/data";

function DataLength() {
  return (
    <Box>
      <h3>Заявки - </h3>
      <p>{trello.length}</p>
    </Box>
  );
}
export default DataLength;

export const Box = styled.div`
  padding: 20px 32px;
  display: flex;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #6d7471;
    margin: 0 8px;
  }
`;
