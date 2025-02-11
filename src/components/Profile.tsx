import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Profile = () => {
  const { data, error } = useSWR("/api", fetcher);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;

  console.log(data);

  return (
    <div>
      data:
      <div>
        {data.map((d) => {
          return <p key={d.id}>{d.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Profile;
