import * as S from './style';
import { Modal } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CategoryBox from './settingCategory';
import { KeyboardEvent } from 'react';

function ModalSheet(props: any) {
  const { isOpen } = props;

  const closeModal = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      isOpen(false);
    }
  };

  return (
    <Modal open aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <S.Sheet onKeyDown={closeModal}>
        <S.SheetHeader>
          <p>Create Category</p>
          <button onClick={() => isOpen(false)}>
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
