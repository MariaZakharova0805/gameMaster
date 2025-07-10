import { initialCardsState } from "./constants";
import { CadType } from "./types";

export const changeCurrentCard = ({
  currentCard,
  cardsState,
  setCardsState,
}: {
  currentCard: CadType;
  cardsState: CadType[];
  setCardsState: React.Dispatch<React.SetStateAction<CadType[]>>;
}) => {
  if (currentCard.disabled || currentCard.isActive) return;
  if (currentCard.disabled) return;

  const updatedCard = { ...currentCard, isActive: !currentCard.isActive };

  const activeCards = cardsState.filter(
    (card) => card.isActive && !card.disabled
  );

  const potentialMatch = activeCards.find(
    (card) =>
      card.name === currentCard.name && card.isActive && updatedCard.isActive
  );

  if (potentialMatch) {
    const updatedCards = cardsState.map((card) => {
      if (card.id === currentCard.id || card.id === potentialMatch.id) {
        return { ...card, isActive: false, disabled: true };
      }
      return card;
    });
    setCardsState(updatedCards);
  } else {
    setCardsState((prev) =>
      prev.map((card) => (card.id === currentCard.id ? updatedCard : card))
    );
  }
};

export const shuffle = (array: CadType[]) => {
  let m = array.length,
    t,
    i;

  // Пока есть элементы для перемешивания
  while (m) {
    // Взять оставшийся элемент
    i = Math.floor(Math.random() * m--);

    // И поменять его местами с текущим элементом
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

export const generateNewSet = (picturesAmount: number) => {
  const result = initialCardsState.slice(0, picturesAmount);
  return shuffle(result);
};
