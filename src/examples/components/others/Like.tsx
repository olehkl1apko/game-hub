import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  liked: boolean;
  onClick: () => void;
}

export const Like = ({ liked, onClick }: Props) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {liked ? (
        <AiFillHeart color="#ff6b81" size={40} onClick={onClick} />
      ) : (
        <AiOutlineHeart size={40} onClick={onClick} />
      )}
    </div>
  );
};
