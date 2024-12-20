import { HiOutlineHeart, HiHeart } from "react-icons/hi2";

export default function Like({ isLiked }) {
  return (
    <>{isLiked ? <HiHeart color="red" /> : <HiOutlineHeart color="red" />}</>
  );
}
