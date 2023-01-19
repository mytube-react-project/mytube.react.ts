import FirstCategoryBox from './FirstCategoryBox/FirstCategoryBox';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SecondCategoryBox from './SecondCategoryBox/SecondCategory';

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
