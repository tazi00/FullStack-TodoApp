import React from "react";
import { BiErrorCircle } from "react-icons/bi";

function ErrorNotifier({ errorMsg }: { errorMsg: string }) {
  return (
    <div className="error-notifier notifier">
      <div className="icon">
        <BiErrorCircle></BiErrorCircle>
      </div>
      <div className="text">
        <h5>{errorMsg}</h5>
      </div>
    </div>
  );
}

export default ErrorNotifier;
