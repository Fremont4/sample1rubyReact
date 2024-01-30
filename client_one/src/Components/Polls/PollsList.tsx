import { useEffect, useState } from "react";
import { IPolls } from "../../Model/Data";
import Poll from "./Poll";
import axios from "axios";
import PollForm from "./PollForm";

//calls polls component in each iteration
const PollsList = () => {
  const [polls, setPollls] = useState<[]>([]);
  const [isUpdate, setUpdate] = useState<boolean>(false);

  useEffect(() => {
    getPolls();
    setUpdate(false);
  }, [isUpdate]);

  // calling api to get all polls recorded in the database.
  const getPolls = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/polls");
      const data = response.data;
      setPollls(data.reverse());
    } catch (error: any) {
      console.log(error);
    }
  };

  //  calling api to update
  const updatePollList = (poll: IPolls) => {
    let _polls = polls;
    // _polls.unshift(poll);
    setPollls(_polls);

    setUpdate(true);
  };

  return (
    <div>
      <>
        <PollForm updatePollList={updatePollList} />
        <h1>Post List</h1>
        {polls.map((poll: IPolls) => (
          <Poll key={poll.id} title={poll.title} content={poll.content} />
        ))}
      </>
    </div>
  );
};

export default PollsList;
