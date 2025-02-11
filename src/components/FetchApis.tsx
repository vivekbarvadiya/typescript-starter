"use client";
import { GetServerSideProps } from "next";
import { FC } from "react";

type User = {
  name: string;
  age: number;
};

interface Props {
  user: User;
}

const UserInfoComp: React.FC<Props> = ({ user }) => {
  return <p>{user.name}</p>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = fetch("https://jsonplaceholder.typicode.com/users/1");
  //   const user: User = await res.json();

  //   return { props: { user } };

  return (await res).json();
};

export default UserInfoComp;
