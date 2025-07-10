import { Popconfirm, PopconfirmProps, message } from "antd";
import Image from "next/image";

import * as strings from "@/shared/strings";
import { ShakyButton } from "@/shared/UI";

type RestartButtonProps = {
  restartGame: () => void;
  isGameInProgress: boolean;
};

export const RestartButton = ({
  isGameInProgress,
  restartGame,
}: RestartButtonProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const confirm: PopconfirmProps["onConfirm"] = () => {
    restartGame();
  };

  const cancel: PopconfirmProps["onCancel"] = () => {
    messageApi.open({
      type: "success",
      content: strings.goodJob,
      duration: 2.5,
      style: { fontSize: "20px" },
      icon: (
        <Image
          src="/war.svg"
          alt="warning icon"
          width={20}
          height={20}
          style={{ marginRight: "5px" }}
        />
      ),
    });
  };

  return (
    <>
      {contextHolder}
      {isGameInProgress ? (
        <Popconfirm
          title={strings.sureToRestart}
          onConfirm={confirm}
          okText={strings.yes}
          cancelText={strings.no}
          onCancel={cancel}
          icon={
            <Image
              src="/war.svg"
              alt="warning icon"
              width={20}
              height={20}
              style={{ marginRight: "5px" }}
            />
          }
        >
          <ShakyButton>{strings.restart}</ShakyButton>
        </Popconfirm>
      ) : (
        <ShakyButton onClick={restartGame}>{strings.restart}</ShakyButton>
      )}
    </>
  );
};
