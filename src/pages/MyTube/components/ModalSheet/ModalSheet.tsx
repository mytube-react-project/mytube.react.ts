import * as S from './style';
import { Modal } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CategoryBox from './CategoryBox/CategoryBox';

function ModalSheet(props: any) {
  const { open } = props;

  return (
    <Modal open aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <S.Sheet>
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
