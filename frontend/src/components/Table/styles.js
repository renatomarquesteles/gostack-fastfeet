import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  display: block;

  thead {
    display: block;

    tr {
      display: grid;
      grid-template-columns: ${(props) => props.gridTemplateColumns};

      th {
        min-height: 60px;
        font-size: 16px;
        margin-right: 5px;
        color: #444;

        display: flex;
        align-items: center;

        &:last-child {
          justify-content: flex-end;
        }
      }
    }
  }

  tbody {
    display: block;

    tr {
      display: grid;
      grid-template-columns: ${(props) => props.gridTemplateColumns};

      background: #fff;
      padding: 0 10px;

      td {
        min-height: 60px;
        font-size: 16px;
        margin-right: 5px;
        color: #666;

        display: flex;
        align-items: center;

        &:last-child {
          justify-content: flex-end;
        }
      }

      &:not(:first-child) {
        margin: 15px 0;
      }
    }
  }
`;
