// import Nav from '../Nav/Nav';
import * as S from './style';
import { Modal } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ClearIcon from '@mui/icons-material/Clear';

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
          <S.CategoryBox>
            <S.Title color="first">Frist Category</S.Title>
            <S.CategoryList></S.CategoryList>
          </S.CategoryBox>
          <ArrowCircleRightIcon fontSize="large" />
          <S.CategoryBox>
            <S.Title color="second">Second Category</S.Title>
            <S.CategoryList></S.CategoryList>
          </S.CategoryBox>
        </S.SheetContent>
      </S.Sheet>
    </Modal>
  );
}

export default ModalSheet;
