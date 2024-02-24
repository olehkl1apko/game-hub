import { useTrailers } from "@/hooks";

interface Props {
  gameId: number;
}

export const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <div className="mb-2">
      <video src={first.data[480]} poster={first.preview} controls />
    </div>
  ) : null;
};
