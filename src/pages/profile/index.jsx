import { useParams } from "react-router-dom";

export default function Profile() {
  const { slug } = useParams();

  return (
    <div>
      <h1>Profile {slug}</h1>
      fsdgds
    </div>
  );
}
