import styled from "styled-components";

const Div = styled.div`
  background-color: red;
`;

export default function Home({val}) {
  return (
    <Div>{val ?? "no value"}</Div>
  )
}

export async function getServerSideProps(){
  return {
    props:{
      val:"aasd"
    }
  }
}