import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  
  h2 {
    text-align: center;
    color: #ced4da;
    letter-spacing: 2px;
  }

  nav {
    background: rgb(86,11,173);
    background: linear-gradient(118deg, rgba(86,11,173,1) 0%, rgba(67,97,238,1) 100%);
    margin-bottom: 30px;
    text-align: center;
  }

`;

export const Stage = styled.div`
  
  margin-left: 50px;

  strong {
    color: #7209b7;
    font-size: 25px;
    margin-top: 5px;
    padding-right: 5px;
  }
  
  p {
    font-size: 18px;
    word-spacing: 2px;
    margin-top: 5px;
  }

  @media screen and (max-width: 600px) {
    margin-left: 10px;
    margin-bottom: 30px;
  }
`

export const Resume = styled.div`
 display: flex;
 text-align: center;
 justify-content: center;
 flex-direction: row;
 margin: 30px 0px 30px 0px;
 
 div {
   margin: 10px;
 }

 h4 {
   color: #7209b7;
   font-weight: 400;
   font-size: 20px;
   margin-top: 10px;
 }

 @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`

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

export const Search = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center ;
    margin: 0px 0px 50px 0px;
    flex-wrap: wrap;

   button {
    color: #fff;
      background: rgb(86,11,173);
      background: linear-gradient(118deg, rgba(86,11,173,1) 0%, rgba(67,97,238,1) 100%);
      padding: 8px;
      font-weight: bold;
   }

   @media screen and (max-width: 600px) {
   flex-direction: column;
  
  }
`;


