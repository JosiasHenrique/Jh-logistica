import styled from 'styled-components';
import img from '../../assets/img/background.png';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   background: linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.05)), url(${img});
   background-size: cover;
   background-repeat: no-repeat;
   height: 100%;
   color: #ecf1f8;
   padding-left: 80px;
   padding-top: 10px;

   h1 {
       margin-top: 100px;
       font-size: 60px;
   }

   p {
       margin-top: 10px;
       font-size: 20px;
       word-spacing: 3px;
   }

   button {
       margin-top: 20px;
       padding: 10px;
       font-weight: bold;
       letter-spacing: 2px;
       width: 200px;
       background: #fb8500;
       border-radius: 20px;
   }

   button:hover {
    background: #fb8500;
   }

   a {
       text-decoration: none;
   }

   
@media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-top: 10px;
    
    h1 {
       margin-top: 30px;
       font-size: 40px;
   }

   p {
       margin-top: 10px;
       font-size: 17px;
       word-spacing: 3px;
       margin-right: 10px;
   }

   button {
       padding: 5px;
       width: 150px;
   }
}
`;