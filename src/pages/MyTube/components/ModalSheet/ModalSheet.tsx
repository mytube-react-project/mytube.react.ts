import * as S from './style';
import { Modal } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CategoryBox from './CategoryBox/CategoryBox';
import { KeyboardEvent } from 'react';

function ModalSheet(props: any) {
  const { open } = props;

  const closeModal = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      open(false);
    }
  };

  return (
    <Modal open aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <S.Sheet onKeyDown={closeModal}>
        <S.SheetHeader>
          <p>Create Category</p>
          <button onClick={() => open(false)}>
            <ClearIcon />
          </button>
        </S.SheetHeader>
        <S.SheetContent>
          <CategoryBox />
        </S.SheetContent>
      </S.Sheet>
    </Modal>
  );
}

export default ModalSheet;
function useGetCateListQuery(): { data: any } {
  throw new Error('Function not implemented.');
}
