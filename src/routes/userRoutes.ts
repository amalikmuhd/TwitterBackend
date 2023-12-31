import { Router } from 'express';

const router = Router();

// Create user
router.post('/', (req, res) => {
  res.status(501).json({ err: 'Not implemented' });
});

// List users
router.get('/', (req, res) => {
  res.status(501).json({ err: 'Not implemented' });
});

// get one user
router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.status(501).json({ err: `Not implemented ${id}` });
});

// update user
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.status(501).json({ err: `Not implemented ${id}` });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(501).json({ err: `Not implemented ${id}` });
});
export default router;
