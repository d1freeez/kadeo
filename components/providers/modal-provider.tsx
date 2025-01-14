"use client";

import { CoverImageModal } from "@/components/modals/cover-image-modal";
import { SettingsModal } from "@/components/modals/settings-modal";
import { useEffect, useState } from "react";
import {ChooseModal} from "@/components/modals/modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
      <ChooseModal/>
    </>
  );
};
