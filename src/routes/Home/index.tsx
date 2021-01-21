import React from "react";
import ExpressionEditor from "../components/ExpressionEditor";
import "./style.scss";
interface HomeProps {}
function Home(props: HomeProps) {
  return (
    <div className="wrapper-home-screen">
      <div className="md:container md:mx-auto">
        <ExpressionEditor />
      </div>
    </div>
  );
}

export default Home;
