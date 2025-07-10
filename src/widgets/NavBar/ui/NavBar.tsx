"use client";
import { Col, Row } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

import * as strings from "@/shared/strings";
import { ShakyButton } from "@/shared/UI";

import { PageKeys } from "../lib/constants";

export const NavBar = () => {
  const currentPathName = usePathname();

  return (
    <Row gutter={[20, 5]} style={{ marginBottom: "2em" }}>
      <Col>
        <Link href={PageKeys.Home}>
          <ShakyButton isActive={currentPathName === PageKeys.Home}>
            {strings.home}
          </ShakyButton>
        </Link>
      </Col>
      <Col>
        <Link href={PageKeys.Memory}>
          <ShakyButton isActive={currentPathName === PageKeys.Memory}>
            {strings.memoryGame}
          </ShakyButton>
        </Link>
      </Col>
      <Col>
        <Link href={PageKeys.Speed}>
          <ShakyButton isActive={currentPathName === PageKeys.Speed}>
            {strings.speedGame}
          </ShakyButton>
        </Link>
      </Col>
    </Row>
  );
};
