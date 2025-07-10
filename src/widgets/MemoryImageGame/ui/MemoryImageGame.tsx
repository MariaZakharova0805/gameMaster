"use client";
import { Col, Row } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./MemoryImageGame.module.scss";
import { CadType } from "../lib/types";
import { changeCurrentCard, generateNewSet } from "../lib/utils";
import { Settings } from "./components/Settings";
import { defaultPicturesAmount } from "../lib/constants";

export const MemoryImageGame = () => {
  const [picturesAmount, setPicturesAmount] = useState(defaultPicturesAmount);
  const [cardsState, setCardsState] = useState<CadType[]>([]);

  const [isGameInProgress, setIsGameInProgress] = useState(false);

  const onClickCard = (currentCard: CadType) => {
    changeCurrentCard({
      currentCard,
      cardsState,
      setCardsState,
    });
    setIsGameInProgress(true);
  };

  useEffect(() => {
    setCardsState(generateNewSet(picturesAmount));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const isOpendCardLimited = cardsState.filter((card) => card.isActive);
      if (isOpendCardLimited.length === 2) {
        const updatedCards = cardsState.map((card) => {
          if (!card.disabled) {
            return { ...card, isActive: false, disabled: false };
          } else {
            return card;
          }
        });
        setCardsState(updatedCards);
      }
    }, 500);
  }, [cardsState]);

  return (
    <Row gutter={[20, 20]} align="top" justify="start">
      <Col span={24}>
        <Settings
          setCardsState={setCardsState}
          isGameInProgress={isGameInProgress}
          setIsGameInProgress={setIsGameInProgress}
          picturesAmount={picturesAmount}
          setPicturesAmount={setPicturesAmount}
        />
      </Col>
      <Col span={24}>
        <Row gutter={[10, 10]}>
          {cardsState.map((currentCard) => (
            <Col
              className={
                currentCard.disabled || currentCard.isActive
                  ? styles.card
                  : styles.cardActive
              }
              key={currentCard.id}
              onClick={() => onClickCard(currentCard)}
            >
              <div className={styles.card__front} style={{ height: "100px" }}>
                {currentCard.image}
              </div>
              <div className={styles.card__back}>
                <Image
                  src="/touch.svg"
                  width={50}
                  height={50}
                  alt="card back"
                  className={styles.cardBackImage}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
