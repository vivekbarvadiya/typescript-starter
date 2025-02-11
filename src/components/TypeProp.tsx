import { FC } from "react";

interface Props {
  name: string;
  age: number;
}

const TypeProp: FC<Props> = ({ name, age }) => {
  // Utility Types

  interface User {
    id: number;
    name: string;
    admin: boolean;
  }

  //   Partial
  const update = (user: Partial<User>) => {
    console.log(user);
  };

  console.log(update({ name: "vivek" })); // no need to provide all the fields

  //   Required
  const u1: Required<User> = {
    name: "ishi",
    id: 1,
    admin: false,
  };

  console.log(u1);

  const u2: Readonly<User> = {
    name: "ishi",
    id: 1,
    admin: false,
  };

  //   u2.name = "barvadiya"; not possible

  //   to select specific properties of type
  type UserPreview = Pick<User, "name" | "id">;

  //to exclude property
  type UserPreview2 = Omit<User, "admin">;

  return (
    <>
      <p> {name} </p>
      <p>{age}</p>
    </>
  );
};

export default TypeProp;
