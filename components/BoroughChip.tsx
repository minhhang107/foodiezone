import { setHttpAgentOptions } from 'next/dist/server/config';
import styles from '../styles/Chips.module.sass';

type Props = {
  borough: string;
  selectedBorough: string;
  handleChipSelect: (borough: string) => void;
};

const BoroughChip = ({ borough, selectedBorough, handleChipSelect }: Props) => {
  return (
    <div>
      <button
        className={
          borough === selectedBorough ? styles.selectedChip : styles.chip
        }
        onClick={() => handleChipSelect(borough)}
      >
        <div>{borough}</div>
      </button>
    </div>
  );
};

export default BoroughChip;
