import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SearchBar from './SearchBar/SearchBar';
import { useState } from 'react';
import ModalSheet from '../ModalSheet/ModalSheet';
import * as S from './style';

function Nav() {
  const [show, setShow] = useState(false);

  return (
    <S.NavWrapper>
      {show && <ModalSheet open={setShow} />}
      <div onClick={() => setShow(true)}>
        <p>Create Your Category</p>
        <PlaylistAddIcon />
      </div>
      <SearchBar />
    </S.NavWrapper>
  );
}

export default Nav;
