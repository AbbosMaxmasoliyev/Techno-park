import ReactDOM from "react-dom/client";
import Markup from "./markup";
import "./style/style.scss"

export default function Index() {
  return (
    <div className="index">
      <Markup/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
