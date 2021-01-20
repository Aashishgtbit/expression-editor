import React from "react";
import ExpressionEditor from "../components/ExpressionEditor";
import "./style.scss";
interface HomeProps {}
function Home(props: HomeProps) {
  return (
    <div className="wrapper-home-screen">
      <div className="wrapper-exp-editor">
        <ExpressionEditor />
      </div>
    </div>
  );
}

export default Home;
