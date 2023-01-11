import { rest } from 'msw';

export const getFirstCate = rest.get('/api/cate', (req, res, ctx) => {
  return res(
    ctx.json([
      {
        id: 14363,
        name: 'STUDY',
        children: [
          {
            id: 12443,
            cate: 'JavaScript',
          },
          {
            id: 66969,
            cate: 'Angular',
          },
          {
            id: 73821,
            cate: 'NodeJs',
          },
        ],
      },
      {
        id: 64573,
        name: 'COOKING',
        children: [
          {
            id: 77342,
            cate: 'Cake',
          },
          {
            id: 12999,
            cate: 'Chocolate',
          },
        ],
      },
      {
        id: 26597,
        name: 'MUSIC',
        children: [
          {
            id: 23567,
            cate: 'Hiphop',
          },
          {
            id: 64562,
            cate: 'Jazz',
          },
          {
            id: 43561,
            cate: 'Rofi',
          },
          {
            id: 23452,
            cate: 'R&B',
          },
        ],
      },
    ]),
  );
});

export const addFirstCate = rest.post('/api/cate', async (req, res, ctx) => {
  let name;

  await req.json().then((data) => {
    name = data.name;
  });

  return res(
    ctx.json({
      id: Math.floor(Math.random() * 100000 + 1),
      name,
      children: [],
    }),
  );
});

export const addSecondCate = rest.post('/api/cate/:id', async (req, res, ctx) => {
  const firstId = req.params.id;
  let cate;

  await req.json().then((data) => {
    cate = data.cate;
  });

  return res(
    ctx.json({
      firstId,
      id: Math.floor(Math.random() * 100000 + 1),
      cate,
    }),
  );
});

export const updateFirstCate = rest.put('/api/cate/:id', async (req, res, ctx) => {
  const id = req.params.id;
  let name;

  await req.json().then((data) => {
    name = data.name;
  });

  return res(
    ctx.json({
      id,
      name,
    }),
  );
});

export const updateSecondCate = rest.put('/api/cate/:id/:secondId', async (req, res, ctx) => {
  const id = req.params.id;
  const secondId = req.params.secondId;
  let cate;

  await req.json().then((data) => {
    cate = data.cate;
  });

  return res(
    ctx.json({
      id,
      secondId,
      cate,
    }),
  );
});

export const delFistCate = rest.delete('/api/cate/:id', (req, res, ctx) => {
  const id = req.params.id;
  return res(ctx.json({ id }));
});

export const delSecondCate = rest.delete('/api/cate/:id/:secondId', (req, res, ctx) => {
  const id = req.params.id;
  const secondId = req.params.secondId;
  return res(ctx.json({ id, secondId }));
});
