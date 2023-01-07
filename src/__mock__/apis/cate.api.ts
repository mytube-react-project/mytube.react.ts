import { rest } from 'msw';

export const getFirstCate = rest.get('/api/cate', (req, res, ctx) => {
  return res(
    ctx.json([
      {
        id: 14363,
        name: 'STUDY',
      },
      {
        id: 64573,
        name: 'COOKING',
      },
      {
        id: 26597,
        name: 'MUSIC',
      },
    ]),
  );
});

export const getSecondCate = rest.get('/api/cate/:id', (req, res, ctx) => {
  return res(
    ctx.json([
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
