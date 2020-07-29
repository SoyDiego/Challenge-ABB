import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheckCircle,
	faExclamationCircle,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

export const checkControl = (dev, devOut) => {
	const outOfMeasureMore50Percent = (devOut * 100) / dev > 50;
	const outOfMeasureBetween31_49Percent =
		(devOut * 100) / dev >= 30 && (devOut * 100) / dev <= 50;

	if (outOfMeasureMore50Percent) {
		return {
			icon: <FontAwesomeIcon icon={faTimesCircle} />,
			message: "error",
		};
	} else if (outOfMeasureBetween31_49Percent) {
		return {
			icon: <FontAwesomeIcon icon={faExclamationCircle} />,
			message: "warning",
		};
	} else {
		return {
			icon: <FontAwesomeIcon icon={faCheckCircle} />,
			message: "success",
		};
	}
};

export const checkFeature = (message) => {
	if (message === "error") {
		return <FontAwesomeIcon icon={faTimesCircle} />;
	} else if (message === "warning") {
		return <FontAwesomeIcon icon={faExclamationCircle} />;
	} else if (message === "success") {
		return <FontAwesomeIcon icon={faCheckCircle} />;
	}
};
