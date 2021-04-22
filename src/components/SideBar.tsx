import { Button } from './Button';

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: GenreResponse[];
  selectedGenreId: {
    value: GenreResponse;
    set: (id: number) => void;
  };
}

interface GenreResponse {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({ genres, selectedGenreId }:SideBarProps) {

  function handleClickButton(id: number) {
    selectedGenreId.set(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId.value.id === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}