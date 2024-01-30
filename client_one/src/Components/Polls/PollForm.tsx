import { Form, Button } from "react-bootstrap";
import { IPolls } from "../../Model/Data";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const PollForm = (props: { updatePollList: (poll: IPolls) => void }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //  calling api to post data

  const onSubmit = async () => {
    const postData: IPolls = { title, content };

    try {
      const response = await axios.post("http://localhost:3000/api/v1/polls", {
        post: postData,
      });

      props.updatePollList(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div>
      <>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              {...register("title", { required: true })}
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors?.title?.type === "required" && (
              <p>This field is required</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Content</Form.Label>
            <Form.Control
              {...register("content", { required: true })}
              type="text"
              name="content"
              onChange={(e) => setContent(e.target.value)}
            />
            {errors?.content?.type === "required" && (
              <p>This field is required</p>
            )}
          </Form.Group>
          <br />

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <hr />
        </Form>
      </>
    </div>
  );
};

export default PollForm;
