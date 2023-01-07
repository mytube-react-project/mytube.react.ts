import FirstCategoryBox from './FirstCategoryBox/FirstCategoryBox';
import SecondCategoryBox from './SecondCategory.tsx/SecondCategory';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function CategoryBox() {
  return (
    <>
      <FirstCategoryBox />
      <ArrowCircleRightIcon fontSize="large" />
      <SecondCategoryBox />
    </>
  );
}

export default CategoryBox;
