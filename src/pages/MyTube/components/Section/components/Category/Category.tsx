import * as S from './style';

function Category() {
  return (
    <S.CategoryWrapper>
      <li>
        <S.Title>
          <span>ALL</span>
        </S.Title>
      </li>
      <li>
        <S.Title>
          <span>Study</span>
          <span>▼</span>
        </S.Title>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Vue</li>
          <li>Angular</li>
        </ul>
      </li>
      <li>
        <S.Title>
          <span>Study</span>
          <span>▼</span>
        </S.Title>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Vue</li>
        </ul>
      </li>
      <li>
        <S.Title>
          <span>Study</span>
          <span>▼</span>
        </S.Title>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </li>
    </S.CategoryWrapper>
  );
}

export default Category;
