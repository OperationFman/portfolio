import { Dialog } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import {
	cloudMetaData,
	convictionMetaData,
	toolsMetaData,
} from "../datasources/FolioMetaData";
import { FolioModal } from "./modal/FolioModal";
import { Convictions } from "./convictions/Convictions";
import { Languages } from "./languages/Languages";
import { FolioColumn } from "./folio-column/FolioColumn";
import { MetaData } from "./types";
import { slideTransition } from "../guides/components/filter/filterAnimations";
import { Footer } from "../../utils/footer/Footer";

import styles from "../../src/folio/index.module.scss";

const Transition: any = slideTransition("right");

export const Folio: NextPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [modalPayload, setModalPayload] = useState<MetaData>();

	const handleOpenModal = (payload: MetaData) => {
		setModalPayload(payload);
		setShowModal(true);
	};

	return (
		<div>
			<div className={styles.modalContainer}>
				<Dialog
					open={showModal}
					TransitionComponent={Transition}
					onClose={() => setShowModal(false)}>
					{FolioModal(setShowModal, modalPayload)}
				</Dialog>
			</div>

			<Languages handleOpenModal={handleOpenModal} />
			<div className={styles.columnsContainer}>
				<FolioColumn
					title='Tools'
					metaData={toolsMetaData}
					handleOpenModal={handleOpenModal}
				/>
				<FolioColumn
					title='Cloud'
					metaData={cloudMetaData}
					handleOpenModal={handleOpenModal}
				/>
			</div>
			<Convictions title='Convictions' metaData={convictionMetaData} />
		</div>
	);
};

export default Folio;
