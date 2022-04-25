import React from "react";
import { Link, graphql } from "gatsby";
// import styled from "styled-components";
import Layout from "../components/layout/Layout";

// const Box = styled.div`
//   background-color: #333;
//   padding: 20px;

//   h1 {
//     color: #fff;
//     margin: 0 0 10px;
//     padding: 0;
//   }

//   p {
//     color: #fff;
//   }
// `;

export default function Index({ data }) {
  const {
    site: {
      siteMetadata: { name, role },
    },
  } = data;

  return (
    <Layout>
      {/* <Box> */}
      <div className="max-w-5x1 mx-auto py-16 lg:py-24">
        <h1 className="text-4x1 md:text-6x1 font-bold text-black pb-4">
          {name} Landing Page
        </h1>
        <p className="mb-4">{role}</p>
        <Link to="/about" className="btn">
          About me
        </Link>
      </div>
      {/* </Box> */}
    </Layout>
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        name
        role
      }
    }
  }
`;
