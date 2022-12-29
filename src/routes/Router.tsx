import Layout from 'components/Layout';
import MainPage from 'pages/Main/MainPage';
import MyTubePage from 'pages/MyTube/MyTubePage';

const Router = () => [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/my-tube', element: <MyTubePage /> },
    ],
  },
];
export default Router;
