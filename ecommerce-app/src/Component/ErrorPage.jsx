import React from "react";

function ErrorPage() {
  setTimeout(() => {
    window.location.reload();
    window.location.href = "/";
  }, 2000);
  return (
    <div className="container" style={{height: '100vh'}}>
      Your Payment get cancelled or somethind went wrong...
    </div>
  );
}

export default ErrorPage;
