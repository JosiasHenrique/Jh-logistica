import styled from 'styled-components';

export const Container = styled.div`
  background: #f8f9fa;

  nav {
    background: rgb(86,11,173);
    background: linear-gradient(118deg, rgba(86,11,173,1) 0%, rgba(67,97,238,1) 100%);
    padding-left: 40px;
    margin-bottom: 50px;
  }

`;

export const Transport = styled.div`
    margin: 10px 50px 10px 50px;

    h3 {
      color: #7209b7;
      font-size: 20px;
    }

    ul {
      margin-top: 30px;
    }

    li {
      margin: 10px;
    }

    @media screen and (max-width: 600px) {
      margin: 10px 10px 10px 10px;

      h3 {
      font-size: 20px;
      margin-bottom: 5px;
    }
}
`;

export const HeaderTransport = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: center;
    flex-wrap: wrap;

    p {
      color: #fff;
      background: rgb(86,11,173);
      background: linear-gradient(118deg, rgba(86,11,173,1) 0%, rgba(67,97,238,1) 100%);
      padding: 8px;
      border-radius: 20px;
      font-weight: bold;
    }

    span {
      color: #6c757d;
    }
`;



export const Fuel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #7209b7;
    flex-wrap: wrap;
`;
