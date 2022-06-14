import React from "react";

function SucessPage() {
  setTimeout(() => {
    window.location.reload();
    window.location.href = "/";
  }, 2000);
  return <div className="container" style={{height: '100vh'}}>You Sucessfully purchased</div>;
}

export default SucessPage;
