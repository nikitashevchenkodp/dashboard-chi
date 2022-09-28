export const tableStyles = {
  tHead: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
  },
  headCell: {
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '18px',
    color: '#9FA2B4',
  },
  mainCell: {
    display: 'flex',
    paddintTop: '24px',
    paddingBottm: '24px',
    alignItems: 'center',
    minWidth: '300px',
    gap: '24px',
    img: {
      height: '100%',
      borderRadius: '50%',
    },
  },
  tableRowBody: {
    '&:last-child td, &:last-child th': { border: 0 },
    cursor: 'pointer',
    '&:hover': { background: 'rgba(55, 81, 255, 0.04)' },
  },
  mainCellImg: { width: '44px', borderRadius: '50%', overflow: 'hidden' },
  cellTitle: { fontSize: '14px', fontWeight: '600', lineHeight: '20px', marginBottom: '4px' },
  cellText: { fontSize: '12px', fontWeight: '400', lineHeight: '16px', color: '#C5C7CD' },
};
