import { Router } from 'express';

const router = Router();

// Tweet user
router.post('/', (req, res) => {
  res.status(501).json({ err: 'Not implemented' });
});

// List Tweet
router.get('/', (req, res) => {
  res.status(501).json({ err: 'Not implemented' });
});

// get one Tweet
router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.status(501).json({ err: `Not implemented ${id}` });
});

// update Tweet
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.status(501).json({ err: `Not implemented ${id}` });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(501).json({ err: `Not implemented ${id}` });
});
export default router;
