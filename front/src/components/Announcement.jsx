import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ fontSize: "8px", textAlign: "center" })}
`;

const Announcement = () => {
    return (
        <Container>Les Membres profitent de la livraison gratuite et des retours gratuits pendant 60 jours.</Container>
    )
}

export default Announcement;