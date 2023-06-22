import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre | null) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, loading } = useGenres();

  if (error) return null;
  if (loading) return <Spinner />;

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px" fontSize="lg">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
              />
              <Button
                variant="link"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
