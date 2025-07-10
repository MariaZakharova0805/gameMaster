import { Col, Row, Select, Space, Tooltip, Typography } from "antd";

import { RestartButton } from "@/features";
import * as strings from "@/shared/strings";

import { picturesAmountOptions } from "../../lib/constants";
import { CadType } from "../../lib/types";
import { generateNewSet } from "../../lib/utils";

type SettingsPros = {
  setCardsState: React.Dispatch<React.SetStateAction<CadType[]>>;
  isGameInProgress: boolean;
  setIsGameInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  picturesAmount: number;
  setPicturesAmount: (picturesAmount: number) => void;
};

export const Settings = ({
  setCardsState,
  isGameInProgress,
  setIsGameInProgress,
  picturesAmount,
  setPicturesAmount,
}: SettingsPros) => {
  const restartGame = (amount: number) => {
    const newSet = generateNewSet(amount);
    const shownSet = newSet.map((card) => ({
      ...card,
      isActive: true,
      disabled: false,
    }));
    setCardsState(shownSet);

    setTimeout(() => {
      const hiddenSet = shownSet.map((card) => ({
        ...card,
        isActive: false,
      }));
      setCardsState(hiddenSet);
      setIsGameInProgress(false);
    }, 1000);
  };

  const changePicturesAmount = (value: number) => {
    setPicturesAmount(value);
    restartGame(value);
  };

  return (
    <Row gutter={[25, 10]}>
      <Col>
        <RestartButton
          isGameInProgress={isGameInProgress}
          restartGame={() => restartGame(picturesAmount)}
        />
      </Col>
      <Col>
        <Tooltip
          title={isGameInProgress ? strings.settingsChangeWarn : undefined}
        >
          <Space>
            <Typography.Text>{strings.picturesAmount}</Typography.Text>
            <Select
              defaultValue={picturesAmount}
              onChange={changePicturesAmount}
              options={picturesAmountOptions}
            />
          </Space>
        </Tooltip>
      </Col>
    </Row>
  );
};
