import { IPolls } from "../../Model/Data";

const Poll = (props: IPolls) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.content}</h2>
    </div>
  );
};

export default Poll;
