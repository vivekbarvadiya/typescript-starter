import { submit } from "@/pages/actions";

export default function ServerActions() {
  const submitHandler = async (formData: FormData) => {
    const message = await submit(formData);
    alert(message[0]);
    alert(message[1]);
  };
  return (
    <>
      <form action={submitHandler}>
        <input name="name" placeholder="Enter Name" />
        <input type="number" required placeholder="Enter age" name="age" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
